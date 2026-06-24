import { test } from 'node:test';
import assert from 'node:assert/strict';
import { neutralizarFormula } from '../../lib/seguranca.js';

// #1 Injeção de fórmula em planilha (CSV/Formula Injection).
// Garantia anti-teste-furado: ATAQUE (tem de bloquear) + LEGÍTIMO (tem de
// sobreviver). Um fix que não faz nada falha nos ataques; um fix que prefixa
// tudo falha nos legítimos.

const ataques = [
  ['=SUM(A1)', 'sinal de igual'],
  ['+1+1', 'sinal de mais'],
  ['-2+3', 'sinal de menos'],
  ['@SUM', 'arroba'],
  ['\t=cmd', 'tab antes do igual'],
  ['\r=cmd', 'retorno de carro antes do igual'],
  ['=HYPERLINK("http://mau","x")', 'HYPERLINK'],
  ["=cmd|'/C calc'!A1", 'execucao de comando'],
];

for (const [entrada, nome] of ataques) {
  test(`#1 formula neutralizada: ${nome}`, () => {
    const saida = neutralizarFormula(entrada);
    // Verde quando: ganha o prefixo apóstrofo (vira texto no Excel)...
    assert.ok(saida.startsWith("'"), `esperava prefixo apostrofo, veio: ${JSON.stringify(saida)}`);
    // ...e o apóstrofo é o ÚNICO acréscimo (não mutila o conteúdo original).
    assert.equal(saida.slice(1), entrada);
  });
}

const legitimos = [
  ['Maria Silva', 'nome comum'],
  ["O'Brien", 'apostrofo no meio'],
];

for (const [entrada, nome] of legitimos) {
  test(`#1 texto legitimo intacto: ${nome}`, () => {
    // Verde quando: sai idêntico, sem prefixo (não suja lead legítimo).
    assert.equal(neutralizarFormula(entrada), entrada);
  });
}

// Bypasses de Unicode (negative space que o red team não cobriu):
const ZWSP = String.fromCharCode(0x200b); // espaço de largura zero
const bypasses = [
  [ZWSP + '=cmd', 'zero-width antes do igual'],
  ['＝' + 'cmd', 'sinal de igual em forma larga (NFKC)'],
];

for (const [entrada, nome] of bypasses) {
  test(`#1 bypass unicode neutralizado: ${nome}`, () => {
    const saida = neutralizarFormula(entrada);
    assert.ok(saida.startsWith("'"), `esperava prefixo, veio: ${JSON.stringify(saida)}`);
    assert.equal(saida.slice(1), entrada);
  });
}
