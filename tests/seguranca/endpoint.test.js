import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import handler from '../../api/lead.js';

// #2/#8 (SEC-04): validação e abuso do endpoint. Testamos o handler direto,
// com fetch mockado, sem rede. Anti-teste-furado: além de barrar os ataques,
// o caso legítimo TEM de repassar (1 fetch) e já sanitizado.

const ENDPOINT = 'https://fluxo-exemplo.invalido/post';
let fetchCalls;
const fetchOriginal = global.fetch;

beforeEach(() => {
  process.env.LEAD_ENDPOINT = ENDPOINT;
  fetchCalls = [];
  global.fetch = async (url, opts) => {
    fetchCalls.push({ url, opts });
    return { ok: true };
  };
});
afterEach(() => {
  global.fetch = fetchOriginal;
});

function fakeRes() {
  return {
    statusCode: 0,
    corpo: null,
    status(c) {
      this.statusCode = c;
      return this;
    },
    json(o) {
      this.corpo = o;
      return this;
    },
    setHeader() {},
  };
}

const leadBom = {
  nome: 'Maria Silva',
  telefone: '(11) 98140-6486',
  email: 'maria@exemplo.com.br',
  resumo: 'Ola! Quero simular.',
};

function reqJson(body, headers = {}) {
  const txt = JSON.stringify(body ?? {});
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'content-length': String(Buffer.byteLength(txt)),
      ...headers,
    },
    body, // a Vercel entrega objeto quando é JSON
  };
}

test('SEC-04 metodo GET -> 405', async () => {
  const res = fakeRes();
  await handler({ method: 'GET', headers: {} }, res);
  assert.equal(res.statusCode, 405);
  assert.equal(fetchCalls.length, 0);
});

test('SEC-04 content-type nao-json -> 415', async () => {
  const res = fakeRes();
  await handler({ method: 'POST', headers: { 'content-type': 'text/plain' }, body: 'x' }, res);
  assert.equal(res.statusCode, 415);
  assert.equal(fetchCalls.length, 0);
});

test('SEC-04 corpo acima do limite -> 413', async () => {
  const res = fakeRes();
  await handler(
    {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'content-length': String(20 * 1024) },
      body: {},
    },
    res
  );
  assert.equal(res.statusCode, 413);
  assert.equal(fetchCalls.length, 0);
});

test('SEC-04 honeypot preenchido -> 200 silencioso, sem repassar', async () => {
  const res = fakeRes();
  await handler(reqJson({ ...leadBom, confirme: 'sou-um-bot' }), res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.corpo.ok, true);
  assert.equal(fetchCalls.length, 0); // NÃO repassou ao fluxo
});

test('SEC-04 json malformado (string) -> 400', async () => {
  const res = fakeRes();
  await handler(
    { method: 'POST', headers: { 'content-type': 'application/json', 'content-length': '4' }, body: '{bad' },
    res
  );
  assert.equal(res.statusCode, 400);
  assert.equal(fetchCalls.length, 0);
});

test('SEC-04 lead invalido (email) -> 400, sem repassar', async () => {
  const res = fakeRes();
  await handler(reqJson({ ...leadBom, email: 'nao-eh-email' }), res);
  assert.equal(res.statusCode, 400);
  assert.equal(fetchCalls.length, 0);
});

test('SEC-04 lead valido -> repassa 1x, ja sanitizado', async () => {
  const res = fakeRes();
  await handler(reqJson({ ...leadBom, nome: '=cmd' }), res);
  assert.equal(res.statusCode, 200);
  assert.equal(fetchCalls.length, 1);
  const enviado = JSON.parse(fetchCalls[0].opts.body);
  assert.ok(enviado.nome.startsWith("'"), `nome deveria ir neutralizado: ${enviado.nome}`);
  assert.equal(enviado.confirme, undefined); // honeypot não vaza ao fluxo
});
