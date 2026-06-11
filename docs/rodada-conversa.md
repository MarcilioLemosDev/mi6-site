# Rodada de conversa: análise por design thinking

Data: 12/06/2026, rodada 9. Pedido de Marcílio: pontos de melhoria, ajustes,
refinos e ideias inovadoras, por escrito, passando pelo raciocínio
estruturado do design thinking. Nada aqui foi implementado ainda; este
documento é insumo de decisão.

## 1. Empatizar: quem chega na página e o que sente

Três visitantes dominam o tráfego provável de uma administradora nova:

- **O desconfiado.** Já ouviu falar de golpe de cota contemplada; chega
  testando se a empresa existe de verdade. Procura CNPJ, regulação, gente.
  A pergunta dele não é "quanto custa", é "isso é real?".
- **O comparador.** Está entre consórcio e financiamento, provavelmente no
  celular, à noite. Quer números e prazo, odeia rolagem vazia e promessa.
- **O já-cliente.** Não é lead: quer boleto, segunda via, contrato. Precisa
  achar a porta da Área do Cliente em dois segundos e ir embora feliz.

A página atual serve bem o comparador (simulador com conta aberta), serve
razoavelmente o desconfiado (BACEN, ABAC, ofício) e serve pouco o
já-cliente no celular (um ícone no topo, sem rótulo).

## 2. Definir: os problemas que valem ser atacados

- **D1. A empresa não tem rosto.** "Um consultor responde" sem nome, foto ou
  assinatura. Em produto financeiro, gente nomeada é prova; anonimato é o
  padrão dos golpes que o desconfiado teme.
- **D2. O FAQ não cobre as objeções reais.** Faltam as perguntas que seguram
  a assinatura: e se eu atrasar uma parcela? posso desistir e receber de
  volta? quando exatamente recebo o crédito? quem guarda o dinheiro do
  grupo?
- **D3. O já-cliente é mal servido no mobile.** Sem rótulo no ícone, sem
  bloco "já sou cliente" no rodapé do celular.
- **D4. Transição claro/escuro seca.** As seções trocam de fundo em corte;
  falta costura (dívida já assumida na rodada 8).
- **D5. Menu mobile inexistente.** Navegação interna some abaixo de 960px.
- **D6. Pós-ação vazio.** Quando o Forms real entrar, o envio precisa de um
  estado de sucesso memorável; hoje a jornada termina em silêncio.
- **D7. Peso das imagens.** PNGs de até 1 MB; produção exige AVIF, srcset e
  lazy decode, ou o LCP cobra o preço da beleza.
- **D8. Movimento sem freio de mão visível.** Respeitamos a preferência do
  sistema, mas um controle "reduzir movimento" no rodapé é cortesia rara e
  barata.

## 3. Idear: ideias inovadoras, da mais quente à mais especulativa

- **I1. O Dossiê do Plano (assinatura da marca).** Ao final da simulação, a
  pessoa baixa ou recebe um cartão-dossiê do seu plano: a conta decomposta,
  data, marca d'água MI6, visual de documento. Lead leva um artefato bonito
  e compartilhável no WhatsApp; o artefato faz marketing sozinho. Ninguém no
  setor entrega isso.
- **I2. A régua dos 98 meses.** Visualização interativa da vida do grupo:
  arrasta o dedo pela linha do tempo e vê assembleias mensais, sorteio e o
  efeito do lance antecipando a contemplação. Educa o único conceito que o
  brasileiro não entende em consórcio (a contemplação) e vira a peça de
  compartilhamento orgânico.
- **I3. Selo "Conta Aberta MI6".** Transformar a transparência em ativo de
  marca: um selo próprio aplicado onde a conta aparece inteira (site,
  proposta, e-mail). Com o tempo, o selo vira atalho mental de confiança.
- **I4. Comparador honesto consórcio x financiamento.** Mesma parcela nos
  dois mundos, custo total lado a lado, com taxa média de financiamento
  citada com fonte e data (dados abertos do BCB). Exige validação jurídica
  e atualização periódica; potência alta, risco controlável.
- **I5. Concretude por faixa de crédito.** No simulador, microcopy que
  traduz a faixa escolhida em categoria de moto ("crédito nessa faixa
  cobre motos urbanas 160cc, por exemplo"), sem citar preço de modelo.
  Picture superiority: número vira imagem mental.
- **I6. Instituição viva.** Quando houver dados liberados: "resultado da
  última assembleia" na home, datado. Site que se atualiza é empresa que
  existe (efeito changelog).
- **I7. Estado de atendimento no topo.** "Atendimento aberto agora · Porto
  Alegre, 14h32" quando for horário comercial. Dado vivo, honesto, na
  estética de instrumento do dossiê.
- **I8. Retomar simulação.** Guardar a última simulação no navegador e, na
  volta, oferecer "continuar de onde parou" (Zeigarnik aplicado ao retorno;
  metade dos leads decide na segunda visita).
- **I9. Véu como sistema de navegação.** Na fase 3, usar View Transitions
  para que a passagem entre páginas internas herde a linguagem do véu;
  navegação vira assinatura.
- **I10. Estados de erro com a mesma voz.** Página 404 e estados vazios na
  linguagem dossiê ("arquivo não localizado"); craft nos cantos é o que
  separa site desenhado de template.

## 4. Prototipar: prioridade por impacto x esforço

| Item | Impacto | Esforço | Quando |
| --- | --- | --- | --- |
| D2 FAQ de objeções | alto | baixo | rodada 10 |
| D3 + D5 mobile (menu e já-cliente) | alto | médio | rodada 10 |
| I5 concretude por faixa | médio/alto | baixo | rodada 10 |
| I7 estado de atendimento | médio | baixo | rodada 10 |
| I8 retomar simulação | médio | baixo | rodada 10 |
| D4 costura claro/escuro | médio | médio | rodada 10/11 |
| D8 freio de movimento | médio | baixo | rodada 10 |
| I1 Dossiê do Plano | alto | médio/alto | fase 3 (desenho já) |
| I2 régua dos 98 meses | alto | alto | fase 3 |
| I3 selo Conta Aberta | médio/alto | médio | fase 3 (decisão de marca) |
| I4 comparador com fonte BCB | alto | médio | fase 3 (validação) |
| D1 rosto da empresa | alto | depende de Marcílio | fase 3 (fotos e nomes) |
| D6 sucesso pós-Forms | médio | baixo | fase 3 (junto do Forms real) |
| D7 imagens AVIF | alto (técnico) | baixo | fase 3, obrigatório |
| I6, I9, I10 | médio | médio | fase 3 |

## 5. Testar: como saber se acertamos

- Com o preview da Vercel no ar, teste de corredor com 5 pessoas e uma
  tarefa única: "descubra quanto custa por mês uma moto de 15 mil". Medir
  tempo até a resposta e onde travam.
- Quando houver tráfego: analytics de funil (chegada, scroll até simulador,
  interação com slider, clique no envio) e teste A/B dos enquadramentos
  (mensal x diário no ticket).
- Acessibilidade: navegação só por teclado e leitor de tela na rota
  completa do simulador, antes do lançamento.

## Decisões que só Marcílio pode tomar

1. Rosto da empresa: existem nomes e fotos de consultores ou sócios
   liberados para o site? (D1)
2. Dossiê do Plano e selo Conta Aberta: aprova como direção de marca? (I1,
   I3)
3. Faixas de exemplo por crédito: o comercial valida as categorias? (I5)
4. Horário oficial de atendimento para o estado vivo do topo. (I7)
