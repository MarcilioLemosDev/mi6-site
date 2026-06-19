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

## Onde vivem as planilhas (estrutura oficial, criada em 15/06/2026)

A casa segue o padrão de `Automacoes/001_Processos/` (CRM_v.1 e
Comunicados_BACEN_v.1). O site é a terceira automação, criada e populada por
Marcílio diretamente no SharePoint:

```
T.I_Marcilio/04_Areas/Desenvolvimento/Automacoes/001_Processos/
   003_Site_Mi6_v.1/
       001_Bases_Site/
           001_Grupos_Simulador.xlsx     (banco que alimenta os mostradores)
           002_Leads_Captados.xlsx       (receptora dos leads do formulário)
       002_Conteudo_Site/
       003_Logs/
       004_Estado/
       005_Fluxograma/
```

A planilha `001_Grupos_Simulador.xlsx` é o banco que alimenta o site. Hoje
tem o grupo de motos com: prazo 97 meses, taxa de administração 14%, fundo
de reserva 4%, seguro 0,08% sobre o total. O espelho local
`src/dados/grupos.json` foi sincronizado a partir do arquivo no novo
caminho oficial em 15/06/2026; a partir da fase 3, o Power Automate
publica o JSON a partir dela e o site reflete a cada commit.

A planilha `002_Leads_Captados.xlsx` existe pronta para receber, na fase
3, os leads vindos do formulário do simulador (uma linha por envio).

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

O simulador é, ao mesmo tempo, calculadora e captador de lead qualificado:
o cliente diz o bem (segmento), o valor do bem (crédito) e vê a parcela na
hora; depois deixa nome, telefone e e-mail. Esses leads alimentam uma
planilha receptora no Excel 365 (separada da tabela de grupos), via fluxo do
Power Automate (gatilho "quando uma solicitação HTTP é recebida"), que ainda
pode disparar e-mail ao consultor e abrir tarefa. A interface é do site; o
365 é o motor invisível, coerente com a visão omnichannel: nenhum canal é
privilegiado na página, o consultor retorna pelo meio que o cliente preferir.
Checkpoint de licenciamento: confirmar o gatilho HTTP no plano atual; havendo
restrição, alternativas dentro do próprio 365 serão avaliadas. Proteções
mínimas: campo isca contra robôs (já no protótipo) e validação no fluxo.

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

## Captação de leads: front-end pronto (rodada 49)

O formulário do simulador (conceito B) já está ligado em definitivo. No
envio ele monta o lead e faz `POST` JSON para o endereço do fluxo, lido da
variável de ambiente `PUBLIC_LEAD_ENDPOINT`. Enquanto a variável está
vazia, roda em modo demonstração (confirma na hora, sem enviar). Trata
estado de carregando, sucesso e erro; mantém a isca anti-robô.

Contrato do JSON enviado (uma chave por coluna sugerida da tabela):

```
{ data_hora, nome, telefone, email, segmento, credito, parcela, origem }
```

Para o teste de fogo passar ponta a ponta, faltam dois passos (conta do
Marcílio; o acesso do assistente ao 365 é só leitura):

1. Em `002_Leads_Captados.xlsx`, formatar a aba como Tabela nomeada com as
   colunas acima.
2. No Power Automate, fluxo com gatilho "Quando uma solicitação HTTP é
   recebida" (esquema JSON acima) e ação "Adicionar uma linha em uma
   tabela" apontando para essa planilha; responder 200. Copiar a URL HTTP
   gerada e defini-la na Vercel como `PUBLIC_LEAD_ENDPOINT` (ou me passar a
   URL para fixar). Checkpoint de licença: confirmar o gatilho HTTP no
   plano; se faltar, alternativa é o Microsoft Forms incorporado.

Verificação: enviar um lead real e ler a linha de volta na planilha pelo
acesso de leitura ao 365.
