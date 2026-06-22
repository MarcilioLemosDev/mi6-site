// Função serverless (Vercel) da MI6: recebe o lead do site na mesma origem
// (/api/lead) e repassa ao fluxo do Power Automate. A URL assinada (SAS) do
// fluxo fica só aqui, na variável de servidor LEAD_ENDPOINT (não pública,
// definida no painel da Vercel), nunca no navegador. Devolve sucesso/erro
// de verdade para o site.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, erro: 'metodo nao permitido' });
  }

  const endpoint = process.env.LEAD_ENDPOINT;
  if (!endpoint) {
    return res.status(503).json({ ok: false, erro: 'LEAD_ENDPOINT nao configurado' });
  }

  try {
    const corpo = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {});
    const resposta = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: corpo,
    });
    return res.status(resposta.ok ? 200 : 502).json({ ok: resposta.ok });
  } catch (e) {
    return res.status(502).json({ ok: false, erro: 'falha ao repassar' });
  }
}
