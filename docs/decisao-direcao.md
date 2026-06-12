# Decisão de direção, FASE 2 (Play), rodada 3

Data: 11/06/2026. Comparação dos conceitos de homepage em `/play`,
com pontos fortes, riscos, esforço de produção e recomendação.
A escolha final é de Marcílio.

## Decisão tomada

Na avaliação da rodada 3 (11/06/2026), Marcílio escolheu o **Conceito A,
Dossiê, como direção da homepage**, e abriu um ciclo de refino fino sobre
ele ("refinar até ficar belo", com mais algumas rodadas previstas). O B
permanece como linguagem candidata para as páginas narrativas.

### Rodada 13 (a marca viva: contorno do logo desenhado por caneta)

Ideia de Marcílio: as linhas sem forma do hero dariam lugar ao contorno do
próprio logo MI6, percorrido por uma caneta fluorescente em laço, como uma
dança. Executado:

- O logo (PNG) foi vetorizado com potrace em dois traços, as letras MI6 e a
  barra vermelha do I/6, salvos como dado em `src/dados/mi6-traco.json`.
- No hero, as linhas diagonais animadas foram substituídas pelo contorno do
  logo (fill nenhum, só traço), como watermark grande e fantasma (letras em
  branco gelo a 0,3, barra em vermelho a 0,5, com brilho fluorescente).
- A animação desenha o contorno via stroke-dashoffset, em laço yoyo: a
  caneta percorre as letras, depois a barra (defasadas), segura e recolhe,
  repetindo. Desligada sob prefers-reduced-motion (contorno estático), com
  uma grade diagonal levíssima preservada para profundidade.

### Rodada 12 (Dossiê do Plano v1)

Primeira das três ideias aprovadas a sair do papel. No simulador, o botão
"Baixar o dossiê do meu plano" gera na hora um cartão-documento (canvas,
1080x1350) com a identidade do site: logo branco, geometria da marca,
crédito simulado em serif gigante, a conta decomposta linha a linha com a
parcela grifada em vermelho, grupo, prazo, dia de assembleia, aviso de
valores aproximados e a autorização do BACEN com ofício no rodapé. No
celular abre direto a folha de compartilhamento (WhatsApp); no desktop
baixa o PNG. Os números vêm do mesmo estado vivo do simulador, alimentado
pelo espelho da tabela verdade. O artefato viaja sozinho e leva a marca
junto; nenhum concorrente do benchmark entrega isso.

### Rodada 11 (diamante três: dados, dois usuários e a cortina-pergunta)

Rodada de diálogo (diamante um e dois do "triplo diamante" de Marcílio)
seguida de implementação aprovada em quatro marteladas:

1. Cortina-pergunta aprovada: o véu de abertura virou a pergunta
   estratégica. Dois panos (navy "Já sou cliente", vermelho "Ainda não
   sou"), logo revelado pela linha central, "Entrar sem escolher" e Esc
   como saídas, escolha guardada e trocável no rodapé ("Trocar perfil de
   navegação"), página completa por baixo (SEO intacto). A escolha
   reordena os destaques: cliente vê "Área do Cliente" como CTA primário
   do hero e atalho de contemplação; visitante novo vê o fluxo de venda.
2. Barra do topo: os três links de conteúdo saíram (moraram no dock); a
   barra carrega só o par estratégico, "Sou cliente" e "Simular". Canal do
   parceiro saiu do palco (vive na folha do cliente e no rodapé).
3. Nomes do dock (decisão delegada e tomada): Como funciona ·
   Contemplação · Simular (círculo central) · Dúvidas · Sou cliente.
   Critério: vocabulário de app que o usuário moderno já conhece.
4. Dados: criado `src/dados/grupos.json` (espelho da tabela verdade do
   Excel 365) e o simulador passou a ler tudo dele; arquitetura completa
   registrada em `arquitetura-dados.md`. Folhas reorganizadas: "Como
   funciona" (o que é + vantagens + passo a passo + números),
   "Contemplação" (educativo v0 da jornada, com a régua interativa
   prevista para a fase 3) e "Sou cliente" (hub do cliente: Área do
   Cliente, contemplado e agora, simular de novo, parceiro, canais
   humanos).

### Rodada 10 (home enxuta e dock flutuante)

Veredito de Marcílio sobre a rodada de conversa (`rodada-conversa.md`):
seguem em frente apenas o Dossiê do Plano, a régua dos 98 meses e o véu
como navegação com 404 na voz do dossiê (todos para a fase 3); as demais
ideias foram descartadas por ora. Foco do momento: design, um passo de
cada vez.

Pedido novo dele: rolagem da home mínima, só o que importa, com o restante
disponível em um menu suspenso moderno e arredondado na parte central
inferior da tela, estilo Nubank.

- A home encolheu para: hero, faixa de credibilidade, marquee, seis
  caminhos e simulador, com o rodapé institucional. Três telas de conteúdo,
  todas de decisão.
- Nasceu o dock flutuante central inferior (navy translúcido, pílula, cinco
  itens): O básico, Método, Simular (círculo vermelho elevado), Dúvidas e
  Cliente. Presente em todas as larguras de tela; entra animado depois do
  véu.
- O conteúdo retirado da rolagem virou três folhas (lâminas que sobem do
  rodapé, papel, cantos arredondados): O básico (o que é consórcio e
  vantagens), Método (passo a passo, números do setor) e Dúvidas (FAQ,
  diferenciais, documentos). Fecham por botão, fundo ou Esc; foco vai ao
  fechamento; links internos fecham a lâmina antes de rolar.
- Header e rodapé passaram a acionar as folhas; o CTA de bolso do mobile
  foi aposentado (o dock assume o papel, com o simulador no centro).

### Rodada 8 (simulador real, credenciais oficiais e autocrítica)

Pedidos de Marcílio: "Em breve" fora de qualquer destaque (o estado do
segmento só aparece se o cliente clicar nele); o destino do clique vira um
simulador pequeno e rico baseado na planilha oficial da empresa; faixa com
o logo da ABAC (filiação confirmada) e citação do BACEN logo após o hero;
linhas do fundo com movimento de fato perceptível. E uma rodada de
autorreflexão estruturada (design thinking) corrigindo o que ele apontaria.

O que entrou:

- Política do "Em breve": eliminado da vitrine de segmentos e de todos os
  destaques. A galeria mostra os seis caminhos em pé de igualdade, com uma
  única ação ("Simule agora"); o estado "grupos em formação" só aparece
  dentro do simulador, após a escolha do segmento, como convite de posição
  antecipada.
- Simulador com a conta aberta, fiel à planilha oficial: prazo 98 meses,
  taxa de administração 20%, fundo de reserva 4%, seguro prestamista 0,08%
  sobre o total. Validado contra os exemplos da planilha: crédito de
  R$ 15.000 dá parcela de R$ 189,80 (R$ 204,68 com seguro); R$ 30.000 dá
  R$ 379,59 (R$ 409,35). Slider de crédito com números subindo ao vivo,
  decomposição linha a linha (fundo comum, taxa, reserva) e nota de que a
  proposta final vem do consultor. O envio abrirá o Microsoft Forms
  preenchido.
- Credenciais oficiais: faixa pós-hero com o logo oficial da ABAC (vetor do
  site da associação; uso autorizado pela filiação) e a citação textual
  "Autorizada pelo Banco Central do Brasil, Ofício nº 33.288/2024
  BCB/Deorf/GTCUR", sem logo do BACEN; ofício também no rodapé. O marquee
  ficou só com Lei, SAC e Ouvidoria para não duplicar.
- Linhas vivas recalibradas: a versão anterior era imperceptível (ciclos de
  16s com pouca amplitude). Agora os ciclos são de 9s com amplitude maior e
  pulsos de luz viajam pelos traçados (dasharray animado), no hero e no
  bloco final.

Autocrítica registrada (design thinking aplicado: empatia com o visitante
que decide, definição do problema "a página termina num bloco que pede fé",
ideação, protótipo e julgamento pelo teste do logo):

- O fechamento era o ponto mais fraco: bloco vermelho retórico pedindo
  contato. Virou a peça mais útil da página (a conta inteira), o que também
  resolve a maior lacuna do benchmark.
- A vitrine carregava rótulos de estado que criavam seis hierarquias; com
  ação única, a leitura ficou mais limpa e o teste do logo segue passando.
- A lente do hero era estática demais de perto: ganhou deriva sutil ao
  cursor (desktop), reforçando a metáfora de instrumento vivo.
- Dívidas assumidas para as próximas rodadas: menu mobile completo,
  transição menos seca entre claro e escuro, e fotografia própria.

### Rodada 7 (movimento como diferencial e entrega navegável)

Feedback de Marcílio: as animações não aparecem em screenshot; pediu linhas
trocando de cor nas cores da marca e uma entrada de logo com suspense, com
véu sendo retirado.

- Véu de abertura no conceito A: linha vermelha desenha no navy escuro, o
  logo branco é revelado por ela, a cortina sobe e o hero entra em
  sequência. Roda uma vez por sessão, não roda com movimento reduzido e não
  bloqueia a página se o JavaScript falhar.
- Linhas vivas: a geometria do hero e do bloco final pulsa lentamente entre
  as cores da marca (ciclos de 16 segundos, defasados por linha).
- Entrega passa a incluir vídeo navegado (gravado com Playwright) além de
  screenshot; o caminho definitivo é o preview da Vercel, a cargo de
  Marcílio importar o repositório.

### Rodada 6 (densidade oculta)

Psicologia aplicada em doze detalhes honestos, catalogados em
`densidade-oculta.md`.

### Rodada 5 (marca oficial no topo e microdetalhes)

Feedback de Marcílio: a logo oficial primária não deve ser recolorida na
barra do topo (variações seguem permitidas fora dela), e o nível de detalhe
deve descer mais um degrau (ícones nos acessos de login, botões
arredondados, criatividade nas cores).

- Header redesenhado como barra clara fixa, habitat natural do logo
  primário oficial, nos dois conceitos finalistas.
- Acessos com identidade própria: Canal do parceiro (ícone de maleta,
  fantasma, hover vermelho) e Área do cliente (ícone de pessoa, pílula
  contornada em navy que preenche no hover); CTA vermelho em pílula.
- Botões de ação em pílula em todo o site; cartões e fichas continuam de
  canto reto de propósito (contraste intencional de raios, não raio
  uniforme).
- Faixa "0 juros" com tratamento tipográfico novo (itálico com grifo
  vermelho); ticket de motos reage ao hover; o bloco vermelho final ganhou
  a geometria diagonal da marca para não ficar chapado.

### Rodada 4 (refino do A)

- Logo: criada a versão branca para fundos navy
  (`public/imgs/logo-mi6-branco.png`, recolorida do original preservando o
  vermelho); some a caixa branca do header e do rodapé que Marcílio apontou.
  No B, o header alterna entre as duas versões conforme o fundo.
- Favicon institucional provisório (`public/favicon.svg`).
- Régua dupla navy/vermelho de volta aos títulos de seção, como assinatura.
- FAQ com abertura animada (CSS `interpolate-size`, melhora progressiva).
- Decodificação do kicker com conjunto de caracteres limpo.

## Registro do processo

### Rodada 3 (refino A + B)

Avaliação de Marcílio sobre a rodada 2: A e B aprovados para refino, com a
observação de que a modernidade do A e a humanização do B chamam atenção ao
mesmo tempo; C fora da disputa (mantido em `/play` como registro). O refino
fez os dois finalistas trocarem qualidades:

- O Conceito A ganhou humanização: foto humana em duotone dentro de uma
  lente circular no hero (rostos, não objetos), ritmo claro/escuro entre as
  seções (papel entre os blocos navy), fotos da galeria que ganham cor ao
  passar o cursor, header que se solidifica no scroll.
- O Conceito B ganhou precisão moderna: rótulos e microdados em IBM Plex
  Mono, régua de dados no pé do hero, sublinhado vermelho desenhado no
  "perto", índices numerados nos spreads, passos que acendem ao entrar.

### Rodada 2 (reconstrução)

A rodada 1 (três protótipos estáticos, texto reescrito) foi descartada por
decisão de Marcílio em 11/06/2026: faltava inovação visual e craft de UX/UI,
e o texto havia sido reescrito além do desejado. A rodada 2 reconstruiu os
três conceitos sob duas regras novas:

1. O texto do site atual é a base, com ajuste fino apenas (correções da
   FASE 1: tempos verbais, CTA morto, atribuição de fonte). Headlines e
   seções vêm de `content/` quase intactas.
2. O esforço pesado vai para a interface: tipografia de display de verdade,
   movimento coreografado (GSAP + ScrollTrigger + SplitText, Lenis para
   scroll suave), microinterações e composição com assinatura. A skill
   oficial `frontend-design` da Anthropic foi instalada em
   `.claude/skills/` e norteia o trabalho visual.

Todos os conceitos respeitam: paleta Union Jack do CLAUDE.md, vermelho
apenas em ação, segmentos sem grupo tratados com honestidade ("Em breve"
como estado, nunca como CTA morto), nenhum depoimento inventado, movimento
desligado para quem prefere movimento reduzido.

## Como avaliar

Rotas: `/play/conceito-a/`, `/play/conceito-b/`, `/play/conceito-c/`
(hub em `/play/`). Avaliar no navegador, com scroll; metade do desenho de
cada conceito é movimento. São protótipos: pesos de imagem, SEO fino e
variações de viewport extremas ficam para a fase final.

---

## Conceito A, Dossiê

Tese: inteligência britânica cinematográfica. Navy profundo dominante,
Instrument Serif gigante, rótulos em IBM Plex Mono, geometria fina da Union
Jack ao fundo, grão de filme, vermelho cirúrgico. O texto de abertura é o do
site atual ("O Melhor Investimento: 6 caminhos para transformar sonhos em
conquistas"), revelado com decodificação e máscara de linhas.

**Assinaturas visuais**: kicker que se decodifica (ScrambleText); título por
máscara de linhas; coordenadas de Porto Alegre na lateral; faixa marquee com
a linha regulatória; galeria horizontal pinada dos seis caminhos; contador
do dado ABAC; numerais vazados (stroke).

**Pontos fortes**

- A identidade mais inconfundível dos três; nenhum concorrente do benchmark
  poderia assinar esta página. O conceito da marca (MI6, Union Jack) vira
  experiência, não decoração.
- O navy dominante com vermelho raro segue à risca a hierarquia de cor do
  CLAUDE.md e dá à regulação (marquee, ficha de motos) papel de destaque.
- Galeria horizontal resolve os seis segmentos sem grade de cards.

**Riscos**

- Página escura como primeira impressão pode pesar para parte do público;
  exige cuidado redobrado com contraste e legibilidade em telas ruins.
- É o conceito mais dependente de execução: sem o movimento, perde mais que
  os outros (há fallbacks, mas a experiência plena é a animada).
- Pinagem horizontal precisa de teste fino em trackpads e telas baixas.

**Esforço para virar produção: médio-alto.**

## Conceito B, Travessia

Tese: editorial cinematográfico. A homepage como uma revista de uma pauta
só, o projeto de vida. Fotografia em tela cheia lavada de navy, Fraunces
variável como voz de display (com itálico expressivo), capítulos numerados,
fio vermelho que se desenha no passo a passo, número ABAC como página
inteira. Headline de abertura: "Você está perto de realizar o seu projeto
de vida", que é frase do site atual.

**Assinaturas visuais**: hero fotográfico com zoom lento e revelação por
palavras; frase manifesto que acende palavra a palavra durante a leitura;
spreads dos seis caminhos com parallax interno e numerais vazados; coluna de
capítulo fixa (sticky) no passo a passo.

**Pontos fortes**

- O mais emocional e humano dos três; vende o sonho antes do produto, com a
  voz do próprio site atual.
- Estrutura de capítulos escala naturalmente para as páginas de segmento
  (cada segmento é um spread que vira página).
- Fraunces dá personalidade tipográfica rara no setor sem perder sobriedade.

**Riscos**

- É refém da fotografia: com banco de imagem genérico o efeito cai pela
  metade; pede fotografia própria ou curadoria muito boa na fase final.
- Conversão menos agressiva; o caminho até o formulário é mais longo.
- Páginas com muita imagem grande exigem disciplina de performance.

**Esforço para virar produção: alto** (por causa do material fotográfico).

## Conceito C, Painel (fora da disputa)

Eliminado por decisão de Marcílio na avaliação da rodada 2; permanece em
`/play/conceito-c/` como registro. O módulo de proposta pré-segmentada com
slider de parcela continua sendo a melhor mecânica de conversão observada e
deve ser importado pela direção vencedora.

Tese: conversão como produto, com craft. Grade suíça em branco, Source
Serif 4 nos títulos, Archivo (inclusive expandida) nos números, vermelho só
no CTA. A primeira dobra já começa a proposta: chips de segmento e slider de
parcela com o valor subindo em tempo real; cada seção devolve ao mesmo
destino.

**Assinaturas visuais**: módulo de proposta com slider e número vivo; faixa
de medidas com contador; tabela de segmentos com preview de foto que segue o
cursor; passo a passo sobre navy; comparativo com o cartão MI6 em navy.

**Pontos fortes**

- O caminho mais curto para o lead qualificado; o módulo entrega segmento e
  faixa de parcela ao consultor, exatamente a recomendação da FASE 1.
- Leve, claro, mobile-first; o mais barato de manter e medir.
- O preview que segue o cursor e os números em Archivo expandida dão o
  toque memorável que faltava na rodada 1.

**Riscos**

- Ainda é o mais próximo da convenção fintech; a identidade depende da
  disciplina de paleta e tipografia para não escorregar em template.
- O slider sugere simulação; é preciso deixar claro que é o início de uma
  conversa, não uma calculadora de crédito.

**Esforço para virar produção: baixo-médio.**

---

## Comparação direta

| Critério | A, Dossiê | B, Travessia | C, Painel |
| --- | --- | --- | --- |
| Identidade (teste do logo) | forte | forte | média/forte |
| Impacto visual imediato | forte | forte | médio |
| Conversão de lead | média | média | forte |
| Dependência de fotografia | baixa | alta | média |
| Performance (custo do brilho) | médio | médio-alto | baixo |
| Esforço de produção | médio-alto | alto | baixo-médio |

## Recomendação (atualizada na rodada 3)

Com a humanização incorporada, **o Conceito A refinado é a recomendação
para base da homepage**: ele agora entrega as duas qualidades que Marcílio
apontou (a modernidade do A e o calor humano do B) em uma página só, e
continua sendo a identidade que nenhum concorrente poderia assinar.

Papéis sugeridos para o que sobra:

1. Do B: vira a linguagem das páginas narrativas do site (Sobre, "Como
   funciona o consórcio", páginas de segmento), onde a fotografia em tela
   cheia e os capítulos rendem mais que na home. A e B refinados já
   compartilham família de detalhes (mono, sublinhados, numerais vazados),
   então a costura é natural.
2. Do C: o módulo de proposta (chips de segmento + parcela) entra na home
   do A, na linguagem visual do dossiê, como evolução do ticket de motos.

## Próximo passo

Marcílio bate o martelo entre: (a) A como home e B como sistema das páginas
internas, que é a recomendação; (b) B como home. Na FASE 3: tokens
definitivos, componentes, páginas internas, orçamento de performance para o
movimento (LCP e CLS com meta verde) e plano de fotografia própria.
