// Portao de auditoria de dependencias (CI). Substitui o `npm audit
// --audit-level=high` cru, que era fragil: o site publicado e ESTATICO
// (HTML/CSS/JS pre-renderizado) e nao embarca nenhum pacote de node_modules,
// mas o `astro` (dep de producao) arrasta toda a sua cadeia de BUILD (sharp,
// esbuild, svgo, js-yaml) para a arvore, e cada advisory nova nesses pacotes
// de build derrubava o CI de PRs sem relacao, mesmo sem afetar producao.
//
// Politica deste portao (honesta para a arquitetura estatica):
//   - CRITICAL: sempre bloqueia (exige olho humano, seja onde for).
//   - HIGH: bloqueia, EXCETO quando o pacote esta na allowlist de ferramentas
//     que so rodam no build e nunca vao para o navegador (abaixo). Esses ficam
//     registrados e tolerados, nao quebram o build.
//   - moderate/low: nao bloqueiam (reportados).
//
// Regra de manutencao: se qualquer pacote da allowlist passar a ser embarcado
// no bundle do cliente (deixar de ser so-build), TIRE-O da lista. E se um high
// aparecer FORA da lista (ex.: gsap, lenis, @vercel/analytics), o build falha
// de proposito, forcando triagem.
import { execSync } from 'node:child_process';

// Pacotes cujo codigo so roda durante `astro build` / trace de imagem e nunca
// e servido ao navegador no site estatico. Triados como nao aplicaveis a
// producao (ver docs/seguranca-testes.md e docs/pentest-mapa-livro.md).
const BUILD_ONLY = new Set([
  'astro', // toolchain de build/SSR; a saida e estatica, o runtime do Astro nao vai ao ar
  'sharp', // otimizacao de imagem no build (libvips)
  'esbuild', // bundler (advisory so afeta o dev server)
  'svgo', // otimizacao de SVG no build
  'js-yaml', // parsing de config/conteudo no build
  'potrace', // devDependency: trace de imagem
  'jimp', '@jimp/core', '@jimp/custom', // cadeia do potrace
  'phin', // cadeia do potrace
]);

let relatorio;
try {
  relatorio = execSync('npm audit --json', { encoding: 'utf8' });
} catch (e) {
  // npm audit sai com codigo != 0 quando ha vulnerabilidades; a saida JSON vem no stdout.
  relatorio = e.stdout?.toString() || '';
}

let dados;
try {
  dados = JSON.parse(relatorio);
} catch {
  console.error('[audit-deps] FALHA: nao consegui interpretar a saida do npm audit.');
  process.exit(1);
}

const vulns = dados.vulnerabilities || {};
const bloqueantes = [];
const tolerados = [];

for (const nome of Object.keys(vulns)) {
  const v = vulns[nome];
  const sev = v.severity;
  if (sev === 'critical') {
    bloqueantes.push({ nome, sev, motivo: 'critical sempre bloqueia' });
  } else if (sev === 'high') {
    if (BUILD_ONLY.has(v.name || nome)) tolerados.push({ nome: v.name || nome, sev });
    else bloqueantes.push({ nome: v.name || nome, sev, motivo: 'high fora da allowlist de build' });
  }
}

const resumo = dados.metadata?.vulnerabilities || {};
console.log(
  `[audit-deps] total: ${resumo.critical || 0} critical, ${resumo.high || 0} high, ` +
    `${resumo.moderate || 0} moderate, ${resumo.low || 0} low.`
);

if (tolerados.length) {
  console.log('[audit-deps] highs tolerados (so-build, nao embarcam no site):');
  for (const t of tolerados) console.log(`  - ${t.nome} (${t.sev})`);
}

if (bloqueantes.length) {
  console.error('[audit-deps] FALHA: advisory(ies) que exigem acao:');
  for (const b of bloqueantes) console.error(`  - ${b.nome} (${b.sev}) [${b.motivo}]`);
  console.error('  Resolva o pacote ou, se for comprovadamente so-build, adicione-o a BUILD_ONLY com justificativa.');
  process.exit(1);
}

console.log('[audit-deps] OK: nenhum high fora da allowlist, nenhum critical.');
