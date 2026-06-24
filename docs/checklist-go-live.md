# Checklist de go-live (VIRADA)

Roteiro para colocar o site no ar. Marcado por dono: **[ENG]** engenharia,
**[VOCÊ]** Marcílio/time (tenant, DNS, aprovação).

## Pré-condições

- [ ] **[ENG]** Suíte verde, scanner limpo, build ok (CI no verde).
- [ ] **[VOCÊ]** SPF/DKIM/DMARC publicados para `mi6consorcio.com.br`
      (latência de DNS; começar cedo). Evita spoofing e e-mail em spam.

## Passo 1 — Re-testar o lead no preview [ENG + VOCÊ]

Mudamos validação e payload desde o último teste real; reconfirmar ponta a ponta:
1. Abrir o preview da Vercel, usar o simulador, preencher nome/telefone/e-mail
   válidos e clicar em "Falar no WhatsApp".
2. Confirmar: WhatsApp abre preenchido; chega e-mail no tecnologia@; nova linha
   na planilha de leads.
3. Teste negativo rápido: enviar com e-mail claramente inválido e confirmar que
   o site não quebra (o registro é recusado com 400; o WhatsApp ainda abre).

## Passo 2 — Merge para a `main` [VOCÊ aprova → ENG executa]

- [ ] **[VOCÊ]** Aprovar o merge da branch `claude/modest-babbage-zl2omk`.
- [ ] **[ENG]** Abrir o PR e, com o aval, fazer o merge. A Vercel publica o
      Production automaticamente.

## Passo 3 — Tornar o site público [VOCÊ]

- [ ] Vercel → Settings → Deployment Protection: desligar, para o domínio
      oficial ficar acessível sem senha.
- [ ] Conferir que `LEAD_ENDPOINT` e `PUBLIC_WHATSAPP` estão em Production.

## Passo 4 — Swap de DNS [VOCÊ]

- [ ] Apontar `mi6consorcio.com.br` para a Vercel (registros que a Vercel indica
      no painel do domínio). Aguardar propagação e o certificado HTTPS.

## Passo 5 — Smoke pós-deploy [ENG]

Com o domínio no ar:
- [ ] Cabeçalhos de segurança presentes:
      ```bash
      curl -sI https://mi6consorcio.com.br | grep -iE 'content-security-policy|x-frame-options|x-content-type-options|referrer-policy|permissions-policy'
      ```
- [ ] HTTPS forçado (http redireciona para https).
- [ ] Lead em **produção** funciona (repetir o Passo 1 no domínio oficial).
- [ ] `robots.txt` e `sitemap-index.xml` acessíveis; páginas sem `noindex`.

## Passo 6 — Entrega [ENG]

- [ ] Marcar a versão: `git tag v1.0 && git push origin v1.0` (ponto fixo da
      entrega à diretoria).
- [ ] Conferir que `ENTREGA.md` e os docs de handover estão atualizados.

## Depois do go-live

Seguir o **`docs/roadmap-continuacao.md`**, começando pela segurança operacional
da primeira semana (alertas, rate limit, espelho no fluxo) e pela vigilância
manual dos logs descrita em `docs/seguranca-pos-producao.md`.
