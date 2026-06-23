# mi6-site

Site institucional da MI6 Consórcio Nacional (remodelagem). Astro estático,
deploy na Vercel.

> Para a visão de entrega (diretoria) e o índice de todos os artefatos, veja
> **[ENTREGA.md](./ENTREGA.md)**.

## Stack

- **Framework:** Astro (site estático, SEO-first).
- **Hospedagem:** Vercel (deploy automático via GitHub; preview por branch).
- **Captação de lead:** o simulador monta uma mensagem e abre o WhatsApp já
  preenchido; em paralelo, registra o lead via função serverless `api/lead.js`,
  que repassa ao fluxo do Power Automate (e-mail para o time + linha na planilha).
- **Domínio final:** mi6consorcio.com.br (swap de DNS só no go-live).

## Como rodar

```bash
npm install
npm run dev        # ambiente local
npm run build      # build de produção (gera dist/)
npm run preview    # serve o build local
npm test           # suíte de testes (inclui segurança)
npm run test:seguranca   # só os testes de segurança
npm run audit:segredos   # varredura de vazamento de segredo (dist + git)
```

## Variáveis de ambiente (na Vercel)

- `PUBLIC_WHATSAPP` — número do WhatsApp comercial (DDI + DDD + número, só
  dígitos). Pública (vai ao cliente).
- `LEAD_ENDPOINT` — URL assinada (SAS) do fluxo do Power Automate. **Secreta**,
  só no servidor, nunca no código. Rotação: ver `docs/runbook-rotacao-segredo.md`.

## Estrutura

- `src/pages/` — páginas Astro (home, área do cliente, política de privacidade).
- `src/dados/grupos.json` — fonte dos valores do simulador (espelho da planilha;
  sincronização manual, ver `docs/operacao-simulador.md`).
- `api/lead.js` — função serverless que valida, sanitiza e repassa o lead.
- `lib/seguranca.js` — funções puras de validação/sanitização (testáveis).
- `tests/seguranca/` — suíte de testes de segurança.
- `scripts/scan-segredos.mjs` — scanner de vazamento de segredo.
- `public/` — estáticos (favicon, robots, og, imagens, docs PDF).
- `content/` — conteúdo textual de referência.
- `docs/` — documentação (ver índice em ENTREGA.md).

## Qualidade e segurança

Suíte de testes (`node:test`), scanner de segredo e `npm audit` rodam no CI
(`.github/workflows/ci.yml`) a cada push. O plano e o estado da blindagem estão
em `docs/seguranca-testes.md`; o backlog que depende de tenant/DNS em
`docs/seguranca-pos-producao.md`.
