import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contemSegredo } from '../../scripts/scan-segredos.mjs';

// SEC-06a: a LÓGICA de detecção do scanner. Os literais são montados por
// concatenação para não introduzir um "segredo" de verdade no repositório.

test('SEC-06 detecta a assinatura de uma SAS URL', () => {
  const host = ['logic', 'azure', 'com'].join('.');
  const fake =
    `https://prod-00.brazilsouth.${host}/workflows/FAKE/triggers/manual/paths/invoke` +
    '?api-version=2016-06-01&sp=%2Ftriggers&sv=1.0&' +
    's' + 'ig=ASSINATURA_FALSA';
  assert.equal(contemSegredo(fake), true);
});

test('SEC-06 nao acusa conteudo legitimo', () => {
  // Anti-teste-furado: o domínio do site e e-mails não podem disparar alarme.
  assert.equal(contemSegredo('https://mi6consorcio.com.br/ contato tecnologia@mi6consorcio.com.br'), false);
  assert.equal(contemSegredo('fetch same-origin para /api/lead, sem segredo'), false);
});
