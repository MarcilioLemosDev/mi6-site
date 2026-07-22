// Funcoes de seguranca do lead, puras e testaveis, compartilhadas entre a
// funcao serverless (api/lead.js) e a suite de testes (tests/seguranca/).
// Mante-las aqui, fora de /api, evita que a Vercel as trate como endpoint.
//
// Nota de manutencao: nao usar escapes \uXXXX/\xXX no fonte deste arquivo;
// usar literais hex (0x...) e classes \s \n \t \r \d. (Escapes numericos ja
// foram convertidos em bytes de controle no passado, corrompendo o arquivo.)

// [Fase 1 / WS1] Anti CSV/Formula Injection. Excel interpreta uma celula que
// comeca por '=', '+', '-' ou '@' como formula executavel. Defesa padrao
// (OWASP): prefixar com apostrofo, que forca a celula a ser texto, sem perder
// o conteudo original.
const GATILHOS_FORMULA = ['=', '+', '-', '@'];

// Primeiro caractere "de conteudo", ignorando branco e invisiveis (espaco,
// tab, CR, LF, zero-width e BOM), que o Excel tambem aceita antes do gatilho.
function primeiroVisivel(s) {
  for (const ch of s) {
    const c = ch.codePointAt(0);
    const invisivel =
      ch.trim() === '' || c === 0x200b || c === 0x200c || c === 0x200d || c === 0xfeff;
    if (!invisivel) return ch;
  }
  return '';
}

export function neutralizarFormula(valor) {
  if (typeof valor !== 'string') return valor;
  // Decide sobre uma copia normalizada (NFKC resolve formas largas como
  // U+FF1D) e prefixa o ORIGINAL para nao mutilar o conteudo do usuario.
  const ch = primeiroVisivel(valor.normalize('NFKC'));
  if (ch && GATILHOS_FORMULA.includes(ch)) {
    return "'" + valor;
  }
  return valor;
}

// [Fase 2 / WS1] Limpeza de campo: mata header/HTML injection. Troca controles
// (CR, LF, tab, C0, DEL) por espaco, remove angulares para neutralizar tags em
// qualquer contexto (e-mail HTML ou celula), colapsa branco e corta no limite.
// Preserva acentos. `manterQuebras` mantem as quebras de linha legitimas do
// resumo (que vai para o corpo do e-mail e a celula, nunca para cabecalho).
export function limparCampo(valor, maxLen = 200, manterQuebras = false) {
  if (typeof valor !== 'string') return '';
  const semControle = [...valor]
    .map((ch) => {
      const c = ch.codePointAt(0);
      if (manterQuebras && (c === 0x0a || c === 0x0d)) return ch;
      return c < 0x20 || c === 0x7f ? ' ' : ch;
    })
    .join('');
  const semTags = semControle.replace(/[<>]/g, '');
  const colapsado = manterQuebras
    ? semTags.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim()
    : semTags.replace(/\s+/g, ' ').trim();
  return colapsado.slice(0, maxLen);
}

// [WS1] Validacao positiva (allowlist) antes da sanitizacao: e-mail e telefone
// validos por formato nao conseguem carregar fórmula nem cabecalho, encolhendo
// a superficie por construcao. Campos obrigatorios do formulario.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEL_RE = /^[\d\s()+-]{8,20}$/;

export function validarLead(lead) {
  const erros = [];
  const obj = lead && typeof lead === 'object' ? lead : {};
  const nome = typeof obj.nome === 'string' ? obj.nome.trim() : '';
  const telefone = typeof obj.telefone === 'string' ? obj.telefone.trim() : '';
  const email = typeof obj.email === 'string' ? obj.email.trim() : '';
  if (nome.length < 2 || nome.length > 120) erros.push('nome');
  if (!TEL_RE.test(telefone)) erros.push('telefone');
  if (!EMAIL_RE.test(email) || email.length > 160) erros.push('email');
  return { ok: erros.length === 0, erros };
}

// [WS1] Ponto unico de sanitizacao do lead antes de repassar ao fluxo. Campos
// validados (telefone, email, segmento) so sao limpos; campos de texto livre
// (nome, resumo) tambem passam pela neutralizacao de formula.
export function sanitizarLead(lead) {
  const obj = lead && typeof lead === 'object' ? lead : {};
  return {
    data_hora:
      typeof obj.data_hora === 'string' ? obj.data_hora.slice(0, 40) : new Date().toISOString(),
    nome: neutralizarFormula(limparCampo(obj.nome, 120)),
    telefone: limparCampo(obj.telefone, 20),
    email: limparCampo(obj.email, 160),
    segmento: limparCampo(obj.segmento, 40),
    credito: limparCampo(obj.credito, 20),
    parcela: limparCampo(obj.parcela, 20),
    resumo: neutralizarFormula(limparCampo(obj.resumo, 1000, true)),
    // Campos do formulario de parceiro (vazios num lead de consorcio comum).
    // Ficam como colunas proprias para a aba de parceiros da planilha, roteada
    // pelo fluxo com base no segmento 'parceria-*'. empresa/mensagem sao texto
    // livre, entao passam pela neutralizacao de formula como nome/resumo.
    empresa: neutralizarFormula(limparCampo(obj.empresa, 120)),
    cidade: limparCampo(obj.cidade, 80),
    mensagem: neutralizarFormula(limparCampo(obj.mensagem, 500, true)),
    origem: limparCampo(obj.origem, 60) || 'site/mi6/simulador',
    // Unidade (ex.: 'campinas'): usada para rotear o lead a uma planilha
    // separada e distinguir a origem. Vazia para a matriz. Sempre minuscula.
    unidade: limparCampo(obj.unidade, 40).toLowerCase(),
  };
}
