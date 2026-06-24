# Runbook: rotação do segredo LEAD_ENDPOINT (SAS URL do fluxo)

Procedimento para trocar a URL assinada (SAS) do fluxo do Power Automate que
recebe os leads. Seguir **sem improviso**. Tempo estimado: 15 minutos.

## Quando rotacionar

- A varredura `npm run audit:segredos` (ou o CI) acusou a assinatura da SAS no
  código, no `dist/` ou no histórico do git.
- Suspeita de exposição (URL colada em e-mail, print, chat, log de terceiro).
- Rotação preventiva periódica (recomendado: a cada 6 meses).

## Donos

- **Power Automate (gerar/invalidar):** Marcílio ou agente cowork.
- **Vercel (env + redeploy):** Marcílio.
- **Verificação:** Engenharia.

## Passo a passo

1. **Gerar nova URL no fluxo (Power Automate).**
   Abrir o fluxo "Leads Site MI6" → editar o gatilho "Quando uma solicitação
   HTTP é recebida". Regenerar a chave de acesso do gatilho (ou remover e
   readicionar o gatilho e salvar). Isso muda o parâmetro `sig` da URL e
   **invalida a URL antiga** imediatamente. Copiar a nova URL completa.

2. **Atualizar a variável na Vercel.**
   Projeto → Settings → Environment Variables → `LEAD_ENDPOINT` → editar o
   valor para a nova URL. Manter os escopos **Production** e **Preview**.
   Salvar.

3. **Redeploy.**
   Disparar um novo deploy (Production e, se aplicável, a branch de preview),
   para a função passar a usar o novo valor. A env só vale para deploys novos.

4. **Verificar o caminho feliz.**
   Enviar um lead de teste pelo site (nome/telefone/e-mail válidos) e confirmar:
   resposta `{ ok: true }`, e-mail recebido no tecnologia@ e linha na planilha.

5. **Confirmar que a antiga morreu.**
   Tentar um POST na URL **antiga** (curl). Tem de falhar (401/403/404). Se
   ainda responder, a regeneração no passo 1 não invalidou; refazer o passo 1.

6. **Fechar o ciclo.**
   Rodar `npm run audit:segredos` e confirmar limpo. Se a URL vazou no histórico
   do git, a rotação já a tornou inútil; registrar o incidente e seguir.

## Observações

- A função `api/lead.js` lê a URL só de `process.env.LEAD_ENDPOINT`; nunca há
  valor fixo no código, então a rotação é só env + redeploy, sem mudança de
  código.
- Marcar a env como **Sensitive** na Vercel (item SEC-06b do backlog) reduz a
  chance de a URL aparecer em logs de build.
