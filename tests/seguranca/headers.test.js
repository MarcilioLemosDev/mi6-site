import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// SEC-05: cabeçalhos de segurança e CSP declarados no vercel.json.
// Teste de configuração: guarda de regressão se alguém remover os headers.
// (A entrega EFETIVA dos headers é confirmada por smoke pós-deploy com curl.)

const cfg = JSON.parse(readFileSync(new URL('../../vercel.json', import.meta.url), 'utf8'));
const regra = (cfg.headers ?? []).find((h) => h.source === '/(.*)');
const mapa = Object.fromEntries((regra?.headers ?? []).map((h) => [h.key.toLowerCase(), h.value]));

test('SEC-05 headers de seguranca presentes', () => {
  assert.ok(regra, 'faltou a regra de headers para todas as rotas');
  for (const k of ['x-content-type-options', 'x-frame-options', 'referrer-policy', 'permissions-policy']) {
    assert.ok(mapa[k], `faltou o header ${k}`);
  }
  assert.equal(mapa['x-content-type-options'], 'nosniff');
  assert.equal(mapa['x-frame-options'], 'DENY');
});

test('SEC-09 CSP em enforce, script-src estrito sem liberar inline', () => {
  // Agora ENFORCE (nao mais report-only): a CSP bloqueia de fato.
  const csp = mapa['content-security-policy'];
  assert.ok(csp, 'faltou a CSP em enforce (Content-Security-Policy)');
  assert.ok(!mapa['content-security-policy-report-only'], 'nao deve sobrar CSP report-only');
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /script-src 'self'/);
  assert.match(csp, /object-src 'none'/);
  // Anti-teste-furado: script-src NAO pode conter 'unsafe-inline' (o valor do
  // enforce; os scripts inline passam por hash SHA-256, nao por unsafe-inline).
  const scriptSrc = csp.match(/script-src([^;]*)/)?.[1] ?? '';
  assert.ok(!/unsafe-inline/.test(scriptSrc), "script-src nao pode ter 'unsafe-inline'");
  assert.match(scriptSrc, /'sha256-[A-Za-z0-9+/=]+'/, 'script-src deve trazer hash(es) dos scripts inline');
});
