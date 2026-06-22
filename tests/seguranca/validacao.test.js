import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validarLead, limparCampo, sanitizarLead } from '../../lib/seguranca.js';

// #7 + WS1: validação positiva, limpeza de campo e sanitização do lead.
// Anti-teste-furado: cada bloco tem ATAQUE (bloquear) + LEGÍTIMO (sobreviver).

const leadBom = {
  nome: 'Maria Silva',
  telefone: '(11) 98140-6486',
  email: 'maria@exemplo.com.br',
};

// --- validarLead: allowlist por formato ---
test('validacao: lead legitimo passa', () => {
  assert.equal(validarLead(leadBom).ok, true);
});

const invalidos = [
  [{ ...leadBom, email: 'nao-eh-email' }, 'email', 'email sem @'],
  [{ ...leadBom, telefone: 'abc' }, 'telefone', 'telefone com letras'],
  [{ ...leadBom, nome: 'M' }, 'nome', 'nome curto demais'],
  [{ ...leadBom, nome: 'x'.repeat(200) }, 'nome', 'nome longo demais'],
];
for (const [lead, campo, nome] of invalidos) {
  test(`validacao: rejeita ${nome}`, () => {
    const r = validarLead(lead);
    assert.equal(r.ok, false);
    assert.ok(r.erros.includes(campo), `esperava erro em ${campo}, veio ${r.erros}`);
  });
}

// --- limparCampo: header/HTML injection ---
test('#7 remove CRLF (forja de cabecalho)', () => {
  // Verde quando: a quebra some, vira uma linha só (sem manterQuebras).
  const saida = limparCampo('Maria\r\nBcc: x@y.com');
  assert.ok(!/[\r\n]/.test(saida), `sobrou quebra: ${JSON.stringify(saida)}`);
});

test('#7 neutraliza tag HTML', () => {
  const saida = limparCampo('<script>alert(1)</script>');
  assert.ok(!saida.includes('<') && !saida.includes('>'), `sobrou angular: ${saida}`);
});

test('#7 trunca no limite', () => {
  assert.equal(limparCampo('x'.repeat(500), 120).length, 120);
});

test('#7 legitimo: preserva acentos', () => {
  assert.equal(limparCampo('José da Conceição'), 'José da Conceição');
});

test('#7 legitimo: resumo mantem quebras quando pedido', () => {
  const saida = limparCampo('linha 1\nlinha 2', 1000, true);
  assert.ok(saida.includes('\n'), 'deveria manter a quebra legitima do corpo');
});

// --- sanitizarLead: integra tudo no ponto único ---
test('sanitizarLead: nome com formula e neutralizado', () => {
  const s = sanitizarLead({ ...leadBom, nome: '=HYPERLINK("http://mau")' });
  assert.ok(s.nome.startsWith("'"), `nome nao neutralizado: ${s.nome}`);
});

test('sanitizarLead: resumo com formula e neutralizado', () => {
  const s = sanitizarLead({ ...leadBom, resumo: '=cmd' });
  assert.ok(s.resumo.startsWith("'"), `resumo nao neutralizado: ${s.resumo}`);
});

test('sanitizarLead: telefone com + NAO ganha prefixo (validado, texto)', () => {
  // Caso legítimo-mas-poderia-ser-prefixado: telefone validado não é fórmula.
  const s = sanitizarLead({ ...leadBom, telefone: '+55 11 98140-6486' });
  assert.equal(s.telefone, '+55 11 98140-6486');
});

test('sanitizarLead: CRLF removido dos campos discretos', () => {
  const s = sanitizarLead({ ...leadBom, nome: 'Maria\r\nEvil' });
  assert.ok(!/[\r\n]/.test(s.nome));
});
