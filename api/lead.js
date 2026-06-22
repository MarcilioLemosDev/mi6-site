// Função serverless (Vercel) da MI6 [rev 2]: recebe o lead do site na mesma
// origem (/api/lead) e repassa ao fluxo do Power Automate. A URL assinada (SAS)
// do fluxo fica só aqui, na variável de servidor LEAD_ENDPOINT (não pública,
// definida no painel da Vercel), nunca no navegador. Antes de repassar, valida
// (allowlist) e sanitiza o lead num ponto único (WS1): defesa contra injeção de
// fórmula na planilha e de cabeçalho/HTML no e-mail. Devolve sucesso/erro real.
import { validarLead, sanitizarLead } from '../lib/seguranca.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, erro: 'metodo nao permitido' });
  }

  const endpoint = process.env.LEAD_ENDPOINT;
  if (!endpoint) {
    return res.status(503).json({ ok: false, erro: 'LEAD_ENDPOINT nao configurado' });
  }

  // Corpo: a Vercel já entrega objeto quando o Content-Type é JSON; se vier
  // string, fazemos parse defensivo. JSON malformado é 400, nunca 500.
  let corpo;
  if (typeof req.body === 'string') {
    try {
      corpo = JSON.parse(req.body || '{}');
    } catch {
      return res.status(400).json({ ok: false, erro: 'json invalido' });
    }
  } else {
    corpo = req.body ?? {};
  }
  if (!corpo || typeof corpo !== 'object' || Array.isArray(corpo)) {
    return res.status(400).json({ ok: false, erro: 'corpo invalido' });
  }

  const validacao = validarLead(corpo);
  if (!validacao.ok) {
    return res.status(400).json({ ok: false, erro: 'dados invalidos', campos: validacao.erros });
  }

  const lead = sanitizarLead(corpo);

  try {
    const resposta = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    return res.status(resposta.ok ? 200 : 502).json({ ok: resposta.ok });
  } catch (e) {
    return res.status(502).json({ ok: false, erro: 'falha ao repassar' });
  }
}
