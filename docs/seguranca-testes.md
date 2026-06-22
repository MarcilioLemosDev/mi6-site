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

| Fase | Ponto (red team) | Testes | Status |
|---|---|---|---|
| 1 | #1 Injeção de fórmula em planilha | 10 | ✅ verde |
| 2 | #7 Injeção em e-mail (header/HTML) | ~6 | ⬜ a fazer |
| 3 | #2/#8 Abuso e validação do endpoint | ~8 | ⬜ a fazer |
| 4 | #4/#16 Vazamento de segredo (dist + git) | ~3 | ⬜ a fazer |
| 5 | #6 XSS / DOM (Playwright) | ~3 | ⬜ a fazer |
| 6 | #12 Cadeia de dependências (npm audit) | 1 | ⬜ a fazer |

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

### Fase 1 — Injeção de fórmula em planilha (✅)

`lib/seguranca.js: neutralizarFormula()`. Prefixa com apóstrofo qualquer valor
cujo primeiro caractere de conteúdo seja `=`, `+`, `-` ou `@` (gatilhos de
fórmula do Excel), ignorando espaços/tab/CR à esquerda, sem mutilar o conteúdo
e sem tocar em texto legítimo. 10 testes em `tests/seguranca/formula.test.js`
(8 ataques + 2 legítimos). Demonstração: contra o stub inicial, os 8 ataques
falharam (vermelho) e os 2 legítimos passaram; após a correção, 10/10 verdes.
