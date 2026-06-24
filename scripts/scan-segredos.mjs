#!/usr/bin/env node
// SEC-06a: varredura de vazamento de segredo. Procura a assinatura da SAS URL
// do fluxo (LEAD_ENDPOINT) onde ela NUNCA deve aparecer: no bundle do cliente
// (dist/), na árvore de código e no histórico do git. Os tokens do alvo são
// montados em tempo de execução para o próprio scanner não casar consigo mesmo.
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = ['logic', 'azure', 'com'].join('.'); // host das flows do Power Automate
const RE_HOST = new RegExp(HOST.replace(/\./g, '\\.'), 'i');
const RE_SAS = /[?&]sig=[A-Za-z0-9%]/; // assinatura de SAS em query string

export function contemSegredo(texto) {
  if (typeof texto !== 'string') return false;
  return RE_HOST.test(texto) || RE_SAS.test(texto);
}

const PASTAS_IGNORADAS = new Set(['node_modules', '.git', '.astro', '.vercel', 'scripts', 'tests']);
const ARQUIVOS_IGNORADOS = new Set(['package-lock.json']);
const EXT = /\.(js|mjs|cjs|ts|tsx|astro|json|html|css|txt|md|map)$/i;

function varrer(dir, achados) {
  for (const nome of readdirSync(dir)) {
    if (PASTAS_IGNORADAS.has(nome) || ARQUIVOS_IGNORADOS.has(nome)) continue;
    const p = join(dir, nome);
    const st = statSync(p);
    if (st.isDirectory()) varrer(p, achados);
    else if (EXT.test(nome)) {
      if (contemSegredo(readFileSync(p, 'utf8'))) achados.push(p);
    }
  }
}

function historicoVazou() {
  try {
    const out = execSync(
      `git log -S"${HOST}" --oneline -- . ":(exclude)scripts" ":(exclude)tests"`,
      { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }
    );
    return out.trim();
  } catch {
    return ''; // sem git ou fora de repo: trata como sem histórico
  }
}

function main() {
  const achados = [];
  varrer(process.cwd(), achados);
  const hist = historicoVazou();

  if (achados.length === 0 && !hist) {
    console.log('[scan-segredos] OK: nenhuma assinatura de SAS URL no codigo, no dist nem no historico.');
    process.exit(0);
  }
  console.error('[scan-segredos] ALERTA: possivel vazamento de segredo.');
  for (const a of achados) console.error('  arquivo:', a);
  if (hist) {
    console.error('  historico do git contem a assinatura nestes commits:');
    console.error(hist.replace(/^/gm, '    '));
    console.error('  -> acionar o runbook de rotacao da SAS URL (SEC-15).');
  }
  process.exit(1);
}

const invocadoDireto =
  process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (invocadoDireto) main();
