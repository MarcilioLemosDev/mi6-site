import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

// SEC-13: prova em navegador de que entrada do usuário NÃO vira HTML/script.
// Serve o dist/ (requer `npm run build` antes), injeta payload no formulário e
// dispara o submit real; confirma que nada executou e que o valor é só texto.

const DIST = fileURLToPath(new URL('../../dist/', import.meta.url));
const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
};

let server;
let browser;
let base;
let semBrowser;

before(async () => {
  server = createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      let f = join(DIST, normalize(p));
      try {
        if ((await stat(f)).isDirectory()) f = join(f, 'index.html');
      } catch {}
      const data = await readFile(f);
      res.setHeader('Content-Type', MIME[extname(f)] || 'application/octet-stream');
      res.end(data);
    } catch {
      res.statusCode = 404;
      res.end('nao encontrado');
    }
  });
  await new Promise((r) => server.listen(0, r));
  base = `http://localhost:${server.address().port}`;
  try {
    browser = await chromium.launch();
  } catch (e) {
    semBrowser = e.message; // sem browser (ex.: CI sem install): teste pula
  }
});

after(async () => {
  await browser?.close();
  await new Promise((r) => server && server.close(r));
});

test('SEC-13 payload XSS no formulario nao executa nem vira HTML', async (t) => {
  if (semBrowser) {
    t.skip('chromium indisponivel: ' + semBrowser);
    return;
  }
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  // Neutraliza o popup do WhatsApp e a chamada de API: o foco é o DOM.
  await page.addInitScript(() => {
    window.open = () => null;
    window.__xss = false;
  });
  await page.route('**/api/lead', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' })
  );
  await page.goto(base + '/', { waitUntil: 'domcontentloaded' });

  const PAYLOAD = '"><img src=x onerror="window.__xss=true"><script>window.__xss=true</script>';
  // Exercita o handler real de submit com o payload, sem depender da animação
  // de entrada: preenche os campos e dispara o submit pelo próprio formulário.
  await page.evaluate((payload) => {
    document.querySelector('.veu')?.remove();
    const f = document.querySelector('.sim-card');
    f.querySelector('[name="nome"]').value = payload;
    f.querySelector('[name="telefone"]').value = '(11) 98140-6486';
    f.querySelector('[name="email"]').value = 'maria@exemplo.com.br';
    f.requestSubmit
      ? f.requestSubmit()
      : f.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }, PAYLOAD);
  await page.waitForTimeout(400);

  // 1) Nada executou.
  assert.equal(await page.evaluate(() => window.__xss), false, 'o payload XSS executou');
  // 2) Nenhum nó perigoso foi injetado a partir do payload.
  assert.equal(
    await page.evaluate(() => document.querySelectorAll('img[onerror]').length),
    0,
    'um <img onerror> foi injetado no DOM'
  );
  // 3) O valor seguiu sendo texto no input (não foi interpretado como HTML).
  const valor = await page.inputValue('input[name="nome"]');
  assert.ok(valor.includes('<script>'), 'o input deveria conter o texto literal do payload');

  await ctx.close();
});
