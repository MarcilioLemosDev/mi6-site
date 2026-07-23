// Guarda de CSP. RODA SO NO CI (npm run verificar:csp), NUNCA dentro do build
// de deploy da Vercel: como ele sai != 0 quando acha divergencia, se estivesse
// no comando de build da Vercel derrubaria TODO deploy (foi o que aconteceu e
// travou a producao por dias).
//
// O cabecalho Content-Security-Policy em `vercel.json` traz script-src ESTRITO:
// 'self' mais o hash SHA-256 de cada script inline. Atencao: o `@vercel/
// analytics` injeta um bootstrap inline DIFERENTE no build da Vercel e no build
// local (conteudos e hashes distintos), entao a CSP lista os hashes dos DOIS
// ambientes. Os scripts de componente (menu, clique de segmento) sao nossos e
// deterministicos, entao tem hash unico e estavel.
//
// O que este guarda pega: se alguem editar um script de componente, o hash
// muda e some da CSP; o CI falha e obriga a atualizar antes do merge. Ele
// valida a cobertura do build LOCAL (o do CI); os hashes do ambiente Vercel
// ficam na CSP por conta da reconciliacao manual documentada.
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const DIST = path.resolve('dist');
const VERCEL = path.resolve('vercel.json');

async function paginas(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const arquivos = [];
  for (const e of entradas) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) arquivos.push(...(await paginas(p)));
    else if (e.name.endsWith('.html')) arquivos.push(p);
  }
  return arquivos;
}

// Scripts inline executaveis: sem `src`, e nao data-block (ld+json / json).
const RE_SCRIPT = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi;
const ehDados = (attrs) => /type=["']application\/(ld\+json|json)["']/i.test(attrs);

function hashSha256(texto) {
  return 'sha256-' + createHash('sha256').update(texto, 'utf8').digest('base64');
}

const html = await paginas(DIST);
const inline = new Map(); // hash -> exemplo de pagina
for (const arquivo of html) {
  const conteudo = await readFile(arquivo, 'utf8');
  let m;
  while ((m = RE_SCRIPT.exec(conteudo))) {
    const [, attrs, corpo] = m;
    if (ehDados(attrs) || corpo.trim() === '') continue;
    const h = hashSha256(corpo);
    if (!inline.has(h)) inline.set(h, path.relative(DIST, arquivo));
  }
}

const vercel = JSON.parse(await readFile(VERCEL, 'utf8'));
const regra = (vercel.headers ?? [])
  .flatMap((r) => r.headers ?? [])
  .find((h) => h.key === 'Content-Security-Policy');

if (!regra) {
  console.error('[verificar-csp] FALHA: cabecalho Content-Security-Policy nao encontrado em vercel.json.');
  process.exit(1);
}
const scriptSrc = (regra.value.match(/script-src([^;]*)/i)?.[1] ?? '');

const faltando = [...inline.entries()].filter(([h]) => !scriptSrc.includes(h));
if (faltando.length > 0) {
  console.error('[verificar-csp] FALHA: script(s) inline sem hash na CSP (quebrariam em producao):');
  for (const [h, pagina] of faltando) console.error(`  ${h}  (ex.: ${pagina})`);
  console.error('  Acao: adicione o(s) hash(es) ao script-src do Content-Security-Policy em vercel.json.');
  process.exit(1);
}

console.log(`[verificar-csp] OK: ${inline.size} script(s) inline, todos com hash na CSP.`);
