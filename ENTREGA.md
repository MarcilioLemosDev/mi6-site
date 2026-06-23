# Entrega do site MI6 Consórcio Nacional

Documento de entrega. A parte de cima é para a diretoria; a de baixo, para quem
der continuidade técnica.

---

## Sumário executivo (diretoria)

### O que foi entregue
Um site institucional novo da MI6, com um **simulador de consórcio** que leva o
interessado direto ao WhatsApp comercial e **registra cada lead** (e-mail para o
time e linha em planilha), pronto para o time de vendas.

### Valor
- **Capta cliente:** todo simulador termina em contato comercial, com os dados
  do lead organizados, sem digitação manual.
- **Transmite confiança:** identidade visual própria (Union Jack, sóbria),
  regulação do Banco Central em destaque, base para aparecer bem no Google.
- **Roda barato e rápido:** site estático, sem servidor para manter.

### Régua de qualidade
- **Segurança:** programa de blindagem com 42 testes automatizados, scanner de
  segredo e auditoria de dependências, tudo verificado a cada alteração (CI).
- **LGPD:** consentimento informado no formulário e Política de Privacidade
  alinhada ao que o site realmente faz.
- **SEO:** dados estruturados (empresa, FAQ), sitemap e meta tags para busca e
  para mecanismos de resposta (IA).

### Status
A construção está concluída. **Falta a inauguração**, atos de lançamento que
dependem de acessos da empresa (DNS, e-mail do domínio, publicação). O roteiro
está em `docs/checklist-go-live.md`.

### Mapa de acessos (de quais contas o site depende, sem senhas)
| Serviço | Para quê | Dono |
|---|---|---|
| Vercel | hospedagem e deploy | MI6 |
| GitHub | código-fonte | MI6 |
| Power Automate (Microsoft 365) | fluxo que recebe o lead, e-mail e planilha | MI6 |
| SharePoint/Excel (Microsoft 365) | planilha de leads | MI6 |
| Registrador de DNS | domínio mi6consorcio.com.br | MI6 |

---

## Para quem der continuidade (técnico)

### Como funciona (mapa)
- **Lead:** o simulador (`src/pages/index.astro`) monta a mensagem e abre o
  WhatsApp; em paralelo, faz `POST /api/lead`. A função `api/lead.js` valida,
  sanitiza e repassa ao fluxo do Power Automate, que envia e-mail e grava na
  planilha. A URL do fluxo é segredo de servidor (`LEAD_ENDPOINT`).
- **Simulador:** os valores (taxa, prazo, faixa de crédito) vêm de
  `src/dados/grupos.json`, espelho manual da planilha de grupos. Ativar um novo
  segmento é só acrescentar um grupo no JSON (ver `docs/operacao-simulador.md`).
- **Deploy:** push no GitHub → build na Vercel. Produção acompanha a `main`.

### Índice de artefatos
- **[README.md](./README.md)** — como rodar, buildar, testar, variáveis.
- **[docs/operacao-simulador.md](./docs/operacao-simulador.md)** — operar grupos/taxas.
- **[docs/checklist-go-live.md](./docs/checklist-go-live.md)** — roteiro de lançamento.
- **[docs/roadmap-continuacao.md](./docs/roadmap-continuacao.md)** — o que vem depois.
- **[docs/seguranca-testes.md](./docs/seguranca-testes.md)** — blindagem e testes.
- **[docs/seguranca-pos-producao.md](./docs/seguranca-pos-producao.md)** — segurança que depende de tenant/DNS.
- **[docs/runbook-rotacao-segredo.md](./docs/runbook-rotacao-segredo.md)** — trocar o segredo do lead.
- **[docs/arquitetura-dados.md](./docs/arquitetura-dados.md)** — decisão de dados do simulador.

> Os demais documentos em `docs/` são histórico de design e decisão (benchmark,
> conceito, fases); úteis de referência, não necessários para operar.
