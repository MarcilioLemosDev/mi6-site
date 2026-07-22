# Backlog de segurança pós-produção (depende de tenant/DNS)

Itens da BLINDAGEM que **não** se resolvem só em código, então ficam fora do
sprint de código e viram features após o go-live. Registrados aqui para não se
perderem. Cada um traz o porquê e o impacto. As defesas de código já no ar
cobrem o caminho principal; estes são defesa em profundidade, operação e
infraestrutura.

## Prioridade alta (fazer colado ao go-live)

### SEC-10 — SPF/DKIM/DMARC do domínio
- **O quê:** publicar registros SPF, DKIM e DMARC para `mi6consorcio.com.br`.
- **Por quê:** sem eles, qualquer um falsifica e-mail `@mi6consorcio.com.br`.
- **Impacto:** phishing contra os próprios clientes; e-mails de lead caindo em
  spam. **É o item diferido de maior risco** (marca financeira).
- **Dono:** DNS/Microsoft 365 (Marcílio). **Latência:** propagação de DNS.

### SEC-11 — HTTPS/HSTS + checagem de subdomain takeover
- **O quê:** no swap de DNS, forçar HTTPS, avaliar HSTS, checar que não há
  registro DNS órfão apontando para serviço não reclamado.
- **Por quê:** downgrade para HTTP e sequestro de subdomínio.
- **Impacto:** interceptação e personificação do domínio.
- **Dono:** DNS/Vercel (Marcílio + Eng na verificação).

## Prioridade média (primeira semana)

### SEC-03 — Espelho da neutralização de fórmula no fluxo
- **O quê:** aplicar a mesma neutralização de fórmula na etapa do Power Automate
  que escreve a célula (expressão já entregue ao cowork).
- **Por quê:** defesa em profundidade. A `api/lead` já sanitiza no caminho
  normal; o espelho protege caso a SAS URL seja chamada direto.
- **Impacto:** injeção de fórmula se o proxy for contornado.
- **Dono:** cowork (Power Automate).

### SEC-08 — Rate limit de plataforma (WAF/KV)
- **O quê:** rate limit real via Vercel WAF/Attack Challenge ou Edge + KV.
- **Por quê:** função serverless não tem estado para throttle confiável.
- **Impacto:** abuso/custo se o honeypot e o teto de corpo não bastarem.
- **Dono:** Vercel (Marcílio confirma o plano) + Eng. **Depende de:** plano da Vercel.

### SEC-09 — CSP em enforce ✅ FEITO (2026-07-21)
- **O quê:** trocado `Content-Security-Policy-Report-Only` por
  `Content-Security-Policy` (enforce) no `vercel.json`.
- **Como ficou seguro:** `script-src` estrito, `'self'` mais o hash SHA-256 de
  cada um dos 3 scripts inline do site (bootstrap do Vercel Analytics, script do
  menu e do clique de segmento), **sem** `'unsafe-inline'`. `style-src` mantém
  `'unsafe-inline'` porque a interface aplica estilos inline em runtime
  (sliders, GSAP), que não são hasheáveis; risco de CSS injection é baixo.
- **Anti-regressão:** `scripts/verificar-csp.mjs` roda no `build` e **falha o
  build** se algum script inline não tiver hash na CSP, então a Vercel nunca
  publica uma política que derrube um script legítimo.
- **Verificação:** Chromium real (offline) sobre o `dist/` com a CSP do
  `vercel.json` aplicada: 0 violações em 7 páginas.

### SEC-07b / SEC-12b — Alertas automáticos e anomalia de volume
- **O quê:** alerta de falha do fluxo, alerta de custo, e detecção de pico de
  leads/rejeições sobre os logs do SEC-12a.
- **Por quê:** o SEC-12a dá visibilidade; falta o aviso ativo.
- **Impacto:** abuso só percebido tarde (fatura/caixa cheia).
- **Dono:** Power Automate/Vercel (Marcílio) + Eng.

## Prioridade de processo (contínuo)

### SEC-06b — Marcar `LEAD_ENDPOINT` como Sensitive na Vercel
- **Por quê:** reduz chance de a URL aparecer em logs de build.
- **Dono:** Vercel (Marcílio). **Custo:** trivial.

### SEC-16 — Acesso ao SharePoint + retenção/backup dos leads
- **O quê:** revisar quem acessa a planilha; definir retenção e backup.
- **Por quê:** dado pessoal de cliente pede acesso mínimo e ciclo de vida.
- **Impacto:** exposição/perda de dado de cliente (LGPD).
- **Dono:** organização (Marcílio).

## Também recomendado (apareceu na revisão de gerência)

- **Termos de Uso + aviso de consentimento LGPD no formulário** (link para a
  Política perto do botão do WhatsApp) e alinhar o texto de cookies à realidade.
- **Coletor de relatórios da CSP** (report-uri/report-to) para enxergar
  violações sem depender do console do navegador.

## Operação / prontidão (trazido pelo coordenador na revisão de fechamento)

Enquanto SEC-07b/SEC-12b (alertas automáticos) e SEC-08 (rate limit) não
entram, a operação cobre o intervalo na mão:

- **Vigilância manual na semana 1:** alguém olha os logs da Vercel (eventos
  `"ev":"lead"`) periodicamente para flagrar pico de rejeições ou de honeypots,
  ou seja, abuso em andamento. Hoje a detecção existe (logs), mas o **aviso
  ativo não**; isso é tarefa humana até o SEC-07b.
- **Monitorar volume/custo** do Power Automate e da função até o WAF (SEC-08).
- **Plano de rollback:** site estático + função; reverter = redeploy do build
  anterior na Vercel (Deployments → Promote/Redeploy a versão boa). Sem migração
  de dados envolvida, então é rápido e seguro.
- **Dono:** operação (Marcílio/time), com a engenharia de apoio na leitura dos
  logs. Encerrar quando os alertas automáticos estiverem no ar.
