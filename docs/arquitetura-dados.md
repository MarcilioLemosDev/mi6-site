# Arquitetura de dados: Excel 365 como fonte de verdade

Data: 12/06/2026, rodada 11. Decisão aprovada por Marcílio: o simulador é a
feature; a tabela verdade de grupos, mantida em Excel no Microsoft 365, é o
banco de dados; o site é a interface que esconde a tubulação. Atualização
quase sem intervenção humana, exceto abrir e encerrar grupos.

## O contrato (tabela verdade)

Uma linha por grupo, colunas estáveis (a tabela nomeada no Excel é a API):

| Coluna | Exemplo | Observação |
| --- | --- | --- |
| grupo | M-01 | identificador público |
| segmento | motos | minúsculo, sem acento |
| status | ativo | ativo ou encerrado |
| prazo_total_meses | 98 | |
| primeira_assembleia | 2026-06-20 | data da assembleia 1 |
| dia_assembleia | 20 | |
| taxa_administracao | 0,20 | fração, não % |
| fundo_reserva | 0,04 | fração |
| seguro_prestamista_mes | 0,0008 | fração sobre o total |
| credito_min / credito_max / passo_credito | 8000 / 40000 / 500 | faixa do slider |
| credito_padrao | 15000 | valor inicial exibido |
| prazo_restante_meses | fórmula | ver abaixo |

A conta do simulador (validada contra a planilha de Marcílio):
parcela = crédito x (1 + taxa + fundo de reserva) / prazo restante;
com seguro = parcela + crédito x (1 + taxa + reserva) x seguro mensal.

## O decremento automático do prazo

Não precisa de automação rodando no dia 20; é fórmula viva no Excel:

```
prazo_restante = prazo_total - DATADIF(primeira_assembleia; HOJE(); "m")
  (com trava em 0 e respeitando o dia da assembleia)
```

Humano só toca na tabela para inserir grupo novo ou marcar encerrado.

## O fluxo de publicação (fase 3)

1. Excel (SharePoint) com a tabela nomeada `Grupos`.
2. Fluxo do Power Automate, agendado (diário ou no dia 20) e/ou ao salvar o
   arquivo: lê as linhas da tabela, monta o JSON no formato de
   `src/dados/grupos.json` e faz commit no repositório GitHub.
3. O push dispara o build na Vercel; os números nascem dentro do HTML
   estático (princípio 6: performance é credibilidade; nada de chamada de
   API no navegador, nenhum segredo no site).
4. Cada atualização de dado vira um commit auditável no histórico.

Credenciais envolvidas: nenhuma no site. O fluxo usa a conexão GitHub
autorizada dentro do Power Automate (Marcílio autoriza uma vez ao criar o
fluxo) e, opcionalmente, um Deploy Hook da Vercel.

## Mostradores dinâmicos (confirmado na rodada 16)

Tudo que mostra número de plano lê do mesmo banco, sem valor fixo no código:

- O simulador usa o grupo ativo do segmento escolhido (prazo, taxa,
  fundo de reserva, seguro, faixa de crédito). A conta foi enxugada para o
  cliente: parcela mensal em destaque e a taxa de administração convertida
  a taxa mensal equivalente (taxa total dividida pelo prazo), sem expor o
  desmembramento interno (fundo comum, fundo de reserva).
- O ticket "parcelas a partir de" do hero é calculado: a menor parcela
  entre todos os grupos ativos, a partir do crédito mínimo de cada um. O
  valor por dia é derivado da mesma parcela.
- Multi-segmento: conforme cada novo grupo entra no Excel (uma linha por
  grupo, com seu segmento e status), o simulador passa a oferecê-lo e o
  ticket recalcula o destaque sozinho. Grupos com status diferente de
  "ativo" aparecem como "em formação" no simulador, sem inventar números.

Implicação prática: lançar um grupo é adicionar uma linha na planilha; o
site reflete na próxima publicação, sem tocar em código.

## Formulários com a cara do site (mesma filosofia)

Em vez do iframe do Microsoft Forms, o formulário desenhado no site posta em
um fluxo do Power Automate (gatilho "quando uma solicitação HTTP é
recebida"), que grava o lead, dispara e-mail e abre tarefa, tudo no 365.
Checkpoint de licenciamento: confirmar a disponibilidade desse gatilho no
plano atual; havendo restrição, alternativas dentro do próprio 365 serão
avaliadas. Proteções mínimas: campo isca contra robôs e validação no fluxo.

## Acesso do assistente ao 365

O ambiente desta sessão tem acesso de leitura ao ecossistema (busca em
SharePoint e Outlook), suficiente para consultar a tabela verdade e
documentos internos quando necessário. Nenhum segredo adicional é
necessário para o desenvolvimento; o que a fase 3 pedirá é a criação do
fluxo no Power Automate pelo time, seguindo a receita acima.

## Roadmap da contemplação (rio natural)

- v0 (feita na rodada 11): folha "Contemplação" com o educativo geral e
  honesto (assembleia dia 20, sorteio pela Loteria Federal ou lance,
  comunicação, documentação conforme regulamento, crédito).
- v1: quando o primeiro ciclo real de contemplação da operação se encerrar
  e o fluxograma oficial existir, a folha vira a linha do tempo exata do
  processo MI6.
- v2: jornada interativa: o contemplado preenche e anexa toda a
  documentação no próprio site (interface nossa, Power Automate e
  SharePoint por trás), elimina atendimento humano do fluxo padrão.

## Status

- Passo 1 concluído: `src/dados/grupos.json` criado como espelho do
  contrato e o simulador do conceito A lê tudo dele (prazo, taxas, faixa do
  slider, crédito padrão, grupo e dia de assembleia). Trocar o JSON troca o
  site, sem tocar em código.
- Passo 2 (fase 3): criar a tabela oficial no Excel e o fluxo do Power
  Automate conforme a receita.
