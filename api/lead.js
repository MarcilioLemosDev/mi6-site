// Função serverless (Vercel) da MI6 [rev 2]: recebe o lead do site na mesma
// origem (/api/lead) e repassa ao fluxo do Power Automate. A URL assinada (SAS)
// do fluxo fica só aqui, na variável de servidor LEAD_ENDPOINT (não pública,
// definida no painel da Vercel), nunca no navegador. Antes de repassar, valida
// (allowlist) e sanitiza o lead num ponto único (WS1): defesa contra injeção de
// fórmula na planilha e de cabeçalho/HTML no e-mail. Devolve sucesso/erro real.
import { validarLead, sanitizarLead } from '../lib/seguranca.js';

// Teto de corpo: um lead legítimo tem centenas de bytes; 10 KB é folga
// generosa que ainda barra payloads de abuso.
const LIMITE_CORPO = 10 * 1024;

// Log estruturado e SEM PII (nunca nome/e-mail/telefone/resumo). Alimenta os
// logs da Vercel para revelar padrão de abuso. SEC-12a: observabilidade em
// código, sem depender de alerta no tenant. Nunca pode derrubar o fluxo.
function registrar(evento, req, extra = {}) {
  try {
    const origem = (req && req.headers && req.headers['origin']) || '';
    console.log(JSON.stringify({ ev: 'lead', evento, origem, ...extra }));
  } catch {
    /* log é best-effort */
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, erro: 'metodo nao permitido' });
  }

  const endpoint = process.env.LEAD_ENDPOINT;
  if (!endpoint) {
    return res.status(503).json({ ok: false, erro: 'LEAD_ENDPOINT nao configurado' });
  }

  // Só aceitamos JSON (o site sempre envia assim); fora disso é abuso.
  const tipo = String(req.headers['content-type'] || '').toLowerCase();
  if (!tipo.includes('application/json')) {
    registrar('rejeitado', req, { motivo: 'content-type' });
    return res.status(415).json({ ok: false, erro: 'content-type invalido' });
  }

  // Teto de corpo pelo cabeçalho (barato) antes de processar qualquer coisa.
  const tamanho = Number(req.headers['content-length'] || 0);
  if (tamanho > LIMITE_CORPO) {
    registrar('rejeitado', req, { motivo: 'tamanho' });
    return res.status(413).json({ ok: false, erro: 'corpo grande demais' });
  }

  // Corpo: a Vercel já entrega objeto quando o Content-Type é JSON; se vier
  // string, fazemos parse defensivo. JSON malformado é 400, nunca 500.
  let corpo;
  if (typeof req.body === 'string') {
    try {
      corpo = JSON.parse(req.body || '{}');
    } catch {
      registrar('rejeitado', req, { motivo: 'json-invalido' });
      return res.status(400).json({ ok: false, erro: 'json invalido' });
    }
  } else {
    corpo = req.body ?? {};
  }
  if (!corpo || typeof corpo !== 'object' || Array.isArray(corpo)) {
    registrar('rejeitado', req, { motivo: 'corpo-invalido' });
    return res.status(400).json({ ok: false, erro: 'corpo invalido' });
  }

  // Reforço do teto caso o cabeçalho content-length não tenha vindo.
  if (JSON.stringify(corpo).length > LIMITE_CORPO) {
    registrar('rejeitado', req, { motivo: 'tamanho' });
    return res.status(413).json({ ok: false, erro: 'corpo grande demais' });
  }

  // Honeypot: o campo isca 'confirme' é invisível ao humano; preenchido = bot.
  // Respondemos 200 (o bot pensa que funcionou) e NÃO repassamos ao fluxo.
  if (typeof corpo.confirme === 'string' && corpo.confirme.trim() !== '') {
    registrar('honeypot', req);
    return res.status(200).json({ ok: true });
  }

  const validacao = validarLead(corpo);
  if (!validacao.ok) {
    registrar('rejeitado', req, { motivo: 'validacao', campos: validacao.erros });
    return res.status(400).json({ ok: false, erro: 'dados invalidos', campos: validacao.erros });
  }

  const lead = sanitizarLead(corpo);

  try {
    const resposta = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    registrar(resposta.ok ? 'repassado' : 'falha-repasse', req, { segmento: lead.segmento });
    return res.status(resposta.ok ? 200 : 502).json({ ok: resposta.ok });
  } catch (e) {
    registrar('falha-repasse', req, { motivo: 'excecao' });
    return res.status(502).json({ ok: false, erro: 'falha ao repassar' });
  }
}
