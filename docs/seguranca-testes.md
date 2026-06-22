# Segurança guiada por testes (pré-produção)

Plano vivo da blindagem do site. Cada ponto da revisão de red team vira teste
automático que primeiro **explora a falha** (vermelho) e depois **prova a
correção** (verde), ficando como guarda de regressão.

Garantia anti-teste-furado: todo ponto tem **caso de ataque** (tem de
bloquear) **+ caso legítimo** (tem de sobreviver). Um fix que não faz nada
falha no ataque; um fix que rejeita tudo falha no legítimo.

## Como rodar

```
npm test              # toda a suite
npm run test:seguranca   # só os testes de seguranca
```

Ferramentas: `node:test` nativo (zero dependência) para unidade/integração;
Playwright (já instalado) para os testes de DOM.

## Fases

| WS | Ponto (red team) | Testes | Status |
|---|---|---|---|
| 1 | #1 Injeção de fórmula (+ bypass unicode) | 12 | ✅ verde |
| 1 | #7 Injeção em e-mail + validação positiva | 14 | ✅ verde |
| 6 | Portão automático (CI rodando a suíte) | — | ✅ no ar |
| 2 | #2/#8 Endpoint (content-type, body cap, honeypot server-side) | 7 | ✅ verde |
| 2 | Rate limit de plataforma (WAF/KV) | — | ⬜ tenant (Gate 2) |
| 3 | Detecção & alerta (falha do fluxo, custo, volume) | — | ⬜ tenant |
| 4 | CSP + cabeçalhos de segurança (HSTS fica para o go-live) | 2 | ✅ verde |
| 5 | #4/#16 Vazamento de segredo (dist + git) | ~3 | ⬜ a fazer |
| 5 | #12 Cadeia de dependências (npm audit) | 1 | ⬜ no CI (informativo) |
| 5 | #6 XSS / DOM (Playwright) | ~3 | ⬜ a verificar |

**Espelho no fluxo (defesa em profundidade):** a neutralização de fórmula tem
de existir TAMBÉM na etapa do Power Automate que escreve a célula, porque a SAS
URL é chamável direto se vazar. Trilha do tenant (cowork), não trava o Gate 1.

As primitivas de sanitização (`neutralizarFormula`, depois `limparCampo`)
vivem em `lib/seguranca.js` e são plugadas no único ponto de estrangulamento,
a função `api/lead.js`, na Fase 3 (endpoint), para que todo lead passe por uma
sanitização só antes de virar e-mail/planilha.

## Fora da suíte (checklist de smoke pós-deploy / ações no tenant)

Não são testáveis por unidade; viram verificação em runtime (curl/dig) ou
configuração no ambiente, com dono indicado:

- #5 Cabeçalhos de segurança efetivamente servidos (curl) — app/Vercel.
- #11 Deployment Protection e isolamento de variáveis — Vercel.
- #13 SPF/DKIM/DMARC do domínio — DNS (Marcílio).
- #14 HTTPS/HSTS e subdomain takeover — DNS/Vercel (Marcílio).
- #15 Acesso ao Excel/fluxo, retenção e backup dos leads — Microsoft 365 (Marcílio).
- Rotação do segredo `LEAD_ENDPOINT` — procedimento documentado.

## Registro das fases

### WS1 — Defesa do dado (✅, lado da função)

`lib/seguranca.js` reúne as primitivas, plugadas no ponto único `api/lead.js`
(valida → sanitiza → repassa):

- `neutralizarFormula()` prefixa com apóstrofo valor cujo primeiro caractere de
  conteúdo seja `=`, `+`, `-` ou `@`, ignorando branco e invisíveis à esquerda
  e normalizando NFKC (pega zero-width e forma larga `＝`). 12 testes.
- `validarLead()` valida por formato (e-mail, telefone, tamanho do nome) antes
  de tudo: e-mail/telefone válidos não conseguem carregar fórmula nem cabeçalho.
- `limparCampo()` troca CR/LF/controle por espaço e remove `< >` (anti header e
  HTML injection), preservando acentos; mantém quebras legítimas no resumo.
- `sanitizarLead()` aplica tudo a todos os campos, incluindo `resumo`.

26 testes em `tests/seguranca/` (formula + validacao), todos verdes. Baseline
vermelho demonstrado na primeira rodada (#1 com 8 ataques falhando no stub).

Pendente do WS1: o espelho da neutralização no fluxo do Power Automate (tenant).
