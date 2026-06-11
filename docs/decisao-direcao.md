# Decisão de direção, FASE 2 (Play), rodada 2

Data: 11/06/2026. Comparação dos três conceitos de homepage em `/play`,
com pontos fortes, riscos, esforço de produção e recomendação.
A escolha final é de Marcílio.

## Registro do processo

A rodada 1 (três protótipos estáticos, texto reescrito) foi descartada por
decisão de Marcílio em 11/06/2026: faltava inovação visual e craft de UX/UI,
e o texto havia sido reescrito além do desejado. A rodada 2 foi refeita sob
duas regras novas:

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

## Conceito C, Painel

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

## Recomendação

**Conceito A, Dossiê, como direção dominante**, pelos mesmos fundamentos da
rodada 1 que continuam valendo (identidade inconfundível em um setor de
sites intercambiáveis, regulação como protagonista), agora com a execução
visual à altura. Dois empréstimos:

1. Do C: o módulo de proposta (chips + parcela) entra na primeira dobra ou
   logo após o hero do A, na linguagem visual do dossiê.
2. Do B: o tratamento fotográfico navy e o capítulo explicativo viram a
   página "Como funciona", linkada com destaque na home.

Se a prioridade do lançamento for volume de lead com mídia paga desde o
primeiro dia, o C é o plano B defensável; nesse caso, importar do A o hero
navy como abertura para não perder a assinatura.

## Próximo passo

Marcílio escolhe a direção (ou pede uma rodada de ajuste). Na FASE 3:
tokens definitivos, componentes, páginas internas, orçamento de performance
para o movimento (LCP e CLS com meta verde) e fotografia.
