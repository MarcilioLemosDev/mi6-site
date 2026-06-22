import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import handler from '../../api/lead.js';

// SEC-12a: observabilidade na função. O log tem de registrar o evento E
// JAMAIS conter PII (nome, e-mail, telefone, resumo).

const ENDPOINT = 'https://fluxo-exemplo.invalido/post';
let logs;
const fetchOriginal = global.fetch;
const logOriginal = console.log;

beforeEach(() => {
  process.env.LEAD_ENDPOINT = ENDPOINT;
  logs = [];
  global.fetch = async () => ({ ok: true });
  console.log = (...a) => logs.push(a.join(' '));
});
afterEach(() => {
  global.fetch = fetchOriginal;
  console.log = logOriginal;
});

function fakeRes() {
  return {
    statusCode: 0,
    status(c) {
      this.statusCode = c;
      return this;
    },
    json() {
      return this;
    },
    setHeader() {},
  };
}

function reqJson(body) {
  const txt = JSON.stringify(body ?? {});
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'content-length': String(Buffer.byteLength(txt)),
      origin: 'https://mi6consorcio.com.br',
    },
    body,
  };
}

const EMAIL = 'maria.secreta@exemplo.com.br';
const NOME = 'Maria Sobrenome Secreto';
const TEL = '(11) 98140-6486';
const leadBom = { nome: NOME, telefone: TEL, email: EMAIL, resumo: 'Ola, quero simular minha moto.' };

test('SEC-12a sucesso gera log "repassado"', async () => {
  await handler(reqJson(leadBom), fakeRes());
  const tudo = logs.join('\n');
  assert.match(tudo, /"evento":"repassado"/);
});

test('SEC-12a honeypot gera log "honeypot"', async () => {
  await handler(reqJson({ ...leadBom, confirme: 'bot' }), fakeRes());
  assert.match(logs.join('\n'), /"evento":"honeypot"/);
});

test('SEC-12a rejeicao por validacao e logada com o campo', async () => {
  await handler(reqJson({ ...leadBom, email: 'invalido' }), fakeRes());
  const tudo = logs.join('\n');
  assert.match(tudo, /"motivo":"validacao"/);
});

test('SEC-12a o log NUNCA contem PII (nome, email, telefone, resumo)', async () => {
  await handler(reqJson(leadBom), fakeRes());
  const tudo = logs.join('\n');
  assert.ok(!tudo.includes(EMAIL), 'vazou e-mail no log');
  assert.ok(!tudo.includes(NOME), 'vazou nome no log');
  assert.ok(!tudo.includes(TEL), 'vazou telefone no log');
  assert.ok(!tudo.toLowerCase().includes('simular minha moto'), 'vazou resumo no log');
});
