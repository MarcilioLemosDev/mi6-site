# Roadmap de continuação

O que fica para depois do go-live, consolidado por macro. Cada macro tem um
documento ou seção de detalhe. Ordem por horizonte, não por esforço.

## Agora: VIRADA (lançamento)
O site está construído; falta inaugurar. Passos em
**`docs/checklist-go-live.md`** (re-teste do lead, SPF/DKIM/DMARC, merge na
`main`, Deployment Protection, swap de DNS, smoke, tag de release).

## Primeira semana: fechar a segurança operacional
Detalhe em **`docs/seguranca-pos-producao.md`**. Em resumo:
- SPF/DKIM/DMARC do domínio (também pré-condição do go-live).
- Espelho da neutralização de fórmula no fluxo do Power Automate.
- Rate limit de plataforma (Vercel WAF/KV).
- Alertas automáticos (falha do fluxo, custo, volume anômalo).
- CSP em enforce (após observar o report-only em produção).
- Marcar `LEAD_ENDPOINT` como *Sensitive* na Vercel.
- Revisão de acesso ao SharePoint + política de retenção/backup dos leads.

## Curto prazo: DESCOBERTA (SEO além do básico)
- Completar o schema da empresa com **CNPJ, endereço e nº de processo BACEN**
  (depende desses dados oficiais).
- Medir Core Web Vitals e ajustar o que o véu/animações custarem.
- SEO local (Porto Alegre / Brasil) e perfil no Google Business, se fizer sentido.
- Páginas dedicadas por segmento (moto, carro, imóvel) quando os grupos abrirem.

## Médio prazo: AUTOMAÇÃO (Camada 2)
- Ponte automática planilha → `src/dados/grupos.json`: um fluxo do Power Automate
  que, ao detectar mudança na planilha de grupos, regenera o JSON e grava no
  repositório; a Vercel republica sozinha. Tira a sincronização manual de cena.

## Médio prazo: MENSURAÇÃO
- Google Search Console (indexação, consultas, erros).
- Analytics com consentimento, se a diretoria quiser medir conversão (exige
  banner de cookies, hoje não necessário porque não há rastreamento).
- Monitoramento contínuo dos logs de lead.

## Decisões de negócio pendentes (suas, não são código)
- **Termos de Uso:** decidir se o site terá, e o conteúdo.
- Completar os dados oficiais para o schema de SEO (CNPJ/endereço/BACEN).
- Coletor de relatórios da CSP (report-uri), se quiser visibilidade fina de XSS.
