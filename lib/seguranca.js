// Funcoes de seguranca do lead, puras e testaveis, compartilhadas entre a
// funcao serverless (api/lead.js) e a suite de testes (tests/seguranca/).
// Mante-las aqui, fora de /api, evita que a Vercel as trate como endpoint.

// [Fase 1] Anti CSV/Formula Injection. Excel interpreta uma celula que comeca
// por '=', '+', '-' ou '@' como formula executavel. Defesa padrao (OWASP):
// prefixar com apostrofo, que forca a celula a ser texto, sem perder o
// conteudo original. Espacos/tab/CR a esquerda tambem disparam a formula no
// Excel, entao olhamos o primeiro caractere de conteudo.
const GATILHOS_FORMULA = ['=', '+', '-', '@'];

export function neutralizarFormula(valor) {
  if (typeof valor !== 'string') return valor;
  // Remove apenas espaco em branco a esquerda (\s cobre espaco, tab, CR e LF,
  // que sao o que o Excel usa para "esconder" o gatilho); nunca remove os
  // gatilhos = + - @, para que um hifen inicial continue sendo neutralizado.
  const conteudo = valor.replace(/^\s+/, '');
  if (conteudo.length === 0) return valor;
  if (GATILHOS_FORMULA.includes(conteudo[0])) {
    return "'" + valor;
  }
  return valor;
}
