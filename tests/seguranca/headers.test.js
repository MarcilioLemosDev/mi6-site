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

test('SEC-05 CSP report-only sem liberar script inline', () => {
  const csp = mapa['content-security-policy-report-only'];
  assert.ok(csp, 'faltou a CSP report-only');
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /script-src 'self'/);
  assert.match(csp, /object-src 'none'/);
  // Anti-teste-furado: script-src NÃO pode conter 'unsafe-inline'.
  assert.ok(!/script-src[^;]*unsafe-inline/.test(csp), "script-src nao pode ter 'unsafe-inline'");
});
