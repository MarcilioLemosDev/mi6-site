# Operação do simulador: grupos e sincronização

Guia prático para manter os valores do simulador (taxa, prazo, faixa de
crédito) e para ativar novos segmentos. Resume o "como fazer" do dia a dia.

## Onde os valores vivem

- **Planilha (fonte de verdade):** `001_Grupos_Simulador.xlsx`
  em `T.I_Marcilio/04_Areas/Desenvolvimento/Automacoes/001_Processos/003_Site_Mi6_v.1/001_Bases_Site/`
  (SharePoint do time MI6).
- **Espelho no site:** `src/dados/grupos.json`. É ele que o simulador lê. O
  site é estático: o JSON é lido na hora em que o site é publicado, não ao vivo.

## Sincronização (modelo atual: manual)

Decisão de 22/06/2026: por ora a sincronização é manual, para agilidade.

1. Marcílio altera a planilha (taxa, prazo, faixa, ou ativa/encerra um grupo).
2. Marcílio avisa o time de tecnologia.
3. Tecnologia reflete a mudança em `src/dados/grupos.json`, commita e publica.
   A Vercel republica e o simulador passa a usar os novos valores.

> Mudou a planilha → avisar → sincronizar o JSON → publicar.

Automação futura (Camada 2): um fluxo do Power Automate que, ao detectar
mudança na planilha, regenera o `grupos.json` e grava no repositório; a Vercel
republica sozinha. Engatilhado para quando fizer sentido tirar a pessoa do meio.

## Como editar um grupo existente

Abrir `src/dados/grupos.json` e ajustar o campo. Atenção: **percentuais são
frações**, não porcentagem (20% = `0.2`; 0,08% = `0.0008`). Atualizar também
`atualizado_em`.

## Como ativar um segmento novo (ex.: carros, casa)

Os seis segmentos já existem na página (carros, motos, imóveis, pesados,
serviços, eletro). Ativar é só acrescentar um grupo com `"status": "ativo"`
para aquele segmento. Nenhuma mudança de código é necessária: o chip passa a
calcular sozinho.

Exemplo de bloco a adicionar no array `grupos`:

```json
{
  "grupo": "C-01",
  "segmento": "carros",
  "status": "ativo",
  "prazo_total_meses": 80,
  "prazo_restante_meses": 80,
  "primeira_assembleia": "2026-09-15",
  "dia_assembleia": 15,
  "taxa_administracao": 0.18,
  "fundo_reserva": 0.04,
  "seguro_prestamista_mes": 0.0008,
  "credito_min": 40000,
  "credito_max": 90000,
  "passo_credito": 5000,
  "credito_padrao": 50000
}
```

Campos obrigatórios para o cálculo: `segmento`, `status`,
`prazo_restante_meses`, `taxa_administracao`, `fundo_reserva`,
`seguro_prestamista_mes`, `credito_min`, `credito_max`, `passo_credito`,
`credito_padrao`.

## Como o simulador calcula

Parcela com seguro prestamista (sempre embutido, regra do produto):

```
base    = credito * (1 + taxa_administracao + fundo_reserva)
parcela = base / prazo_restante_meses + base * seguro_prestamista_mes
```

A "taxa de administração ao mês" exibida é `taxa_administracao / prazo * 100`.

## Conferência rápida após editar

1. `npm run build` (tem que terminar com "Complete!" e gerar as páginas).
2. Conferir no preview da Vercel que o chip do segmento mostra a parcela certa
   e que a faixa do slider bate com `credito_min`/`credito_max`.
