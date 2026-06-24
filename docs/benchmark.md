# Benchmark de referências, FASE 2 (Play)

Data: 10/06/2026. Pesquisa feita para orientar a remodelagem do site da MI6
Consórcio Nacional. Os princípios derivados desta pesquisa estão em
`principios-design.md`; a comparação dos protótipos ficará em
`decisao-direcao.md`.

## Método e limites

Cada site foi acessado por captura de página (fetch do HTML convertido em
texto). Isso registra textos, estrutura, números e links reais, mas não
renderiza visual nem JavaScript; observações sobre layout vêm da estrutura do
markup, e os casos em que algo pode ser efeito da captura sem JS estão
sinalizados. Sites que bloquearam o acesso (403 ou similar) foram descartados
ou documentados por fontes secundárias citadas, sempre com sinalização.

Falhas registradas: Itaú Consórcio, Canopus, C6 Bank, XP e Revolut bloquearam
captura; o Banco Inter serviu versão global com placeholders quebrados;
sis.gov.uk, nomos-glashuette.com, aesop.com, economist.com e ft.com
bloquearam fetch direto.

---

## Parte 1: concorrentes diretos (administradoras de consórcio no Brasil)

Documentados em perfil completo: Mycon, Embracon, Ademicon, Rodobens, Porto,
Consórcio Magalu, Bradesco Consórcios, Consórcio Nacional Honda, HS
Consórcios. O Consórcio Nacional Volkswagen (cnvw.com.br) foi observado e
entra apenas na síntese.

### 1. Mycon

https://www.mycon.com.br

**O que faz bem**

- Hero curto e emocional ("Sua conquista é única") com CTA único e repetido,
  "Simular agora", presente em mais de quatro pontos da página.
- Prova social agregada e quantificada: Reclame Aqui 8.4/10, Google 4.7, App
  Store 4.8, "9 em cada 10 clientes recomendam", além de logos de mídia
  (Estadão, Folha, UOL).
- Regulação explícita no corpo: "consórcio autorizado pelo Banco Central",
  com número do Certificado de Autorização (03.00.010.91) e citação da Lei
  11.795.
- Números de produto concretos: taxa a partir de 0,08% ao mês, crédito de
  imóvel até R$ 700 mil, claim de "7x mais barato que financiamento".

**O que faz mal**

- Menu inchado (seis grupos com mais de 20 itens) e seções de produto
  duplicadas ("Produtos" e "Conheça também" se sobrepõem).
- Simulador em domínio externo (simule.mycon.com.br), quebrando a
  continuidade do site.
- Tom oscila entre informal ("Partiu!") e jurídico denso no rodapé, sem
  transição.

**O que vale adaptar para a MI6**

1. Bloco único de confiança perto do CTA: autorização BACEN com número do
   certificado, SAC e Ouvidoria, nota de avaliação quando existir.
2. Um só CTA primário com o mesmo rótulo em toda a página, apontando para o
   formulário de lead.
3. Citar a taxa de administração em número, não em adjetivo.

### 2. Embracon

https://www.embracon.com.br

**O que faz bem**

- Bloco de estatísticas forte: 90 filiais, mais de 600 mil bens entregues,
  mais de 2.500 contemplações por mês, mais de 300 mil clientes ativos,
  atuação desde 1988 com número de autorização BACEN (3/00/223/88) e data.
- Prova social abundante: cerca de 12 depoimentos nomeados, logos de
  parceiros (montadoras, cooperativas, XP) e links para matérias em UOL,
  Veja, Reuters.
- Faixas de prazo claras por segmento (motos de 25 a 70 meses, veículos de
  50 a 120 meses).

**O que faz mal**

- Menu e rodapé extensos demais; depoimentos longos que viram parede de
  texto e atrapalham o scroll.
- "Premiada e referência em consórcio" sem nomear prêmio; nenhuma nota
  numérica (Reclame Aqui ou similar) visível.
- CTAs de simulação por segmento visualmente iguais, sem hierarquia entre
  eles.

**O que vale adaptar para a MI6**

1. Prazos e faixas de crédito por segmento exibidos como dado, mesmo nos
   segmentos que ainda vão lançar.
2. Depoimentos curtos, nomeados, um parágrafo no máximo; o formato longo da
   Embracon mostra o limite.
3. Nunca usar elogio sem prêmio nomeado; se não há prêmio, não simular que
   há.

### 3. Ademicon

https://www.ademicon.com.br

**O que faz bem**

- Tom sóbrio e premium, o mais próximo do posicionamento institucional que a
  MI6 busca. Hero explicativo: "O que é possível conquistar com o consórcio".
- Simulador embutido na própria página, com escolha de segmento e modo de
  simulação por parcela ou por crédito, com slider de valores (R$ 269,84 a
  R$ 8.399,62 de parcela).
- Números de escala com auditoria: 35 anos, mais de 675 mil clientes,
  R$ 145,8 bi em créditos, logo da PwC como auditora, certificado BACEN
  nº 92060028 no rodapé, e a frase "Todo processo é regulamentado pelo Banco
  Central" no corpo.
- Seis depoimentos em vídeo com nome e história específica (ex.: cliente que
  comprou carro aos 19 anos).

**O que faz mal**

- Página muito longa; o simulador fica no final, exigindo scroll considerável
  até o principal elemento de conversão.
- Vários botões "Simular Agora" espalhados sem deixar claro se levam ao mesmo
  lugar.
- Contato de vendas pouco visível (SAC com telefone fixo de Curitiba; sem
  WhatsApp aparente no conteúdo capturado).

**O que vale adaptar para a MI6**

1. Simulação mental "por parcela" ("quanto cabe no seu bolso") como modelo de
   formulário de lead, mesmo sem simulador real.
2. Selo de regulação com número de certificado no rodapé de todas as páginas.
3. Elemento de conversão na primeira dobra, não no fim da página.

### 4. Rodobens

https://www.rodobens.com.br/consorcio

**O que faz bem**

- Abre a página com números em vez de slogan: "+75 anos de experiência",
  "Top 3 melhores consórcios" com logo do Reclame Aqui, "+1.1mm cotas
  vendidas", "+370mil contemplações".
- Comparação lado a lado entre financiamento e consórcio com ícones de
  aprovado/bloqueado, citando 27% de juros ao ano no financiamento como
  contraste; educação que vende.
- Selos diversificados: Reclame Aqui, MESC 2025, Great Place to Work; rodapé
  com "Autorizado e Fiscalizado pelo Banco Central".
- Formulário de WhatsApp com pré-captura (nome, e-mail, celular, aceite de
  privacidade) antes de abrir a conversa.

**O que faz mal**

- Na seção do simulador, o texto "Parcelas a partir de R$" aparece repetido
  sem valores no HTML capturado; os valores devem ser injetados via
  JavaScript, o que deixa o conteúdo vazio para crawlers e para a primeira
  renderização.
- Navegação extensa (consórcio, financiamento, seguros, varejo) dilui o foco;
  submenus densos.
- Aviso sobre site falso de leilões, necessário, mas posicionado de forma que
  pode gerar desconfiança.

**O que vale adaptar para a MI6**

1. Tabela comparativa consórcio x financiamento com números reais; é o
   conteúdo educativo mais persuasivo observado no setor.
2. Pré-captura de dados antes de abrir o WhatsApp, integrável à lógica de
   lead da MI6.
3. Garantir que todo número importante esteja no HTML estático (vantagem
   natural do Astro).

### 5. Porto / Porto Bank

https://www.portoseguro.com.br/consorcio

**O que faz bem**

- Headline com ideia própria: "Quem planeja, conquista antes", e benefício
  concreto na subheadline: "parcelas até 50% menores até a contemplação".
- Único site do setor observado que publica a taxa de administração em
  número na própria página: "entre 15% e 18%, conforme o plano" para
  automóveis, além de prazos operacionais (grupo inaugura em até 90 dias).
- Cita a Lei 11.795/2008 e a regulação do Banco Central; FAQ detalhada.
- Simulação via WhatsApp como caminho de menor atrito.

**O que faz mal**

- Nenhum número institucional (clientes, contemplações, anos); a página
  confia só na marca Porto.
- Sem ABAC, sem Reclame Aqui, sem selos; prova social limitada a vídeos de
  contemplados e à associação com o Domingão com Huck.
- Simulador citado, mas sem formulário interativo visível na página.

**O que vale adaptar para a MI6**

1. Publicar a taxa de administração em percentual na página de cada segmento;
   quase ninguém faz e é o dado que o comprador mais procura.
2. Benefício mensurável no hero (no caso da MI6, algo verificável do produto
   de motos), em vez de adjetivo.
3. Prazos operacionais públicos (quando o grupo inaugura, quando ocorre
   assembleia) como sinal de precisão.

### 6. Consórcio Magalu

https://www.consorciomagalu.com.br

**O que faz bem**

- Único concorrente observado com segmento de eletro e móveis (incluindo
  recorte "Gamer" e "Sustentáveis" com placas solares), o mesmo território
  que a MI6 quer ocupar.
- Números institucionais simples e legíveis: mais de 30 anos, mais de 95 mil
  clientes ativos, mais de 350 mil bens entregues, 1.245 lojas físicas.
- Aviso antifraude com razão social e CNPJ: "só realize pagamentos com
  boletos emitidos por Luiza Administradora de Consórcios Ltda
  60.250.776/0001-91".
- Menciona autorização do Banco Central e filiação à ABAC, com selo GPTW
  2024.

**O que faz mal**

- No HTML capturado, os botões "SIMULE AGORA" apontam para âncora vazia
  ("#"); mesmo que funcionem via JavaScript no navegador, o link morto no
  markup é frágil para SEO e para quem navega sem JS, e nenhum simulador
  aparece na página.
- Seção "Histórias reais" sem nomes, fotos ou notas; depoimento genérico não
  prova nada.
- Nenhuma taxa, valor de crédito ou parcela em toda a home.

**O que vale adaptar para a MI6**

1. Aviso antifraude com razão social e CNPJ da MI6 perto de qualquer menção
   a boleto ou pagamento.
2. No segmento eletro, nomear objetos concretos (geladeira, console, monitor)
   como o Magalu faz com "Gamer".
3. Lição negativa: nenhum CTA pode apontar para "#"; todo botão do site da
   MI6 deve levar a um destino real no HTML.

### 7. Bradesco Consórcios

https://banco.bradesco

**O que faz bem**

- Estrutura didática em etapas (o que é, como contratar, contemplação) com
  FAQ extensa, com mais de 19 perguntas.
- Dados operacionais concretos por segmento: prazos de até 192 meses para
  imóveis, até 100 meses para tratores; resposta em até 2 dias úteis.
- Cita a Lei 11.795/2008 e "autorizado e fiscalizado pelo Banco Central do
  Brasil".

**O que faz mal**

- Prova social ausente por completo: sem depoimentos, notas, selos ou ABAC; a
  página presume que a marca basta.
- "O que é consórcio?" aparece três vezes na mesma página; conteúdo repetido
  e imagens decorativas sem função informativa.
- Simulação redireciona para domínio de terceiro
  (bradesco.planejarconsorcio.com.br), com aparência de outro fornecedor;
  avisos de navegador antigo no topo passam descuido.

**O que vale adaptar para a MI6**

1. Página de segmento com prazo máximo e faixa de crédito como dados de
   tabela, padrão que o Bradesco executa bem.
2. Lição negativa: marca não substitui prova; a MI6, sem marca conhecida,
   precisa fazer o oposto e empilhar evidência verificável.
3. Manter toda a jornada no mesmo domínio, com a mesma identidade visual.

### 8. Consórcio Nacional Honda

https://www.consorcionacionalhonda.com.br

**O que faz bem**

- Benchmark direto para o segmento de motos da MI6: cards por modelo com
  crédito e parcela reais (POP 110i com crédito de R$ 11.893,00 e parcelas a
  partir de R$ 197,73; até CITY EX com R$ 126.023,00), com a observação de
  que os valores incluem seguro de vida em grupo.
- Números de escala: "há mais de 40 anos", "mais de 8 milhões de
  contemplações".
- Geolocalização por estado para ajustar oferta e encontrar concessionária;
  separação clara no menu entre contratar consórcio novo e gerenciar
  consórcio em andamento.

**O que faz mal**

- No conteúdo capturado da home não há nenhuma menção a Banco Central, ABAC,
  certificado, selo ou avaliação externa; para um produto financeiro é uma
  lacuna grave que só a força da marca Honda compensa.
- Prova social apenas prometida ("Como o Consórcio Honda transforma a vida de
  nossos clientes") com link para blog, sem depoimento visível.
- Sem WhatsApp e sem chat; conversão depende de telefone e app.

**O que vale adaptar para a MI6**

1. Para motos, o padrão de card com modelo, valor de crédito e parcela
   inicial reais; é o formato mais concreto observado no setor.
2. Ocupar exatamente a lacuna da Honda: regulação BACEN visível e
   verificável ao lado dos preços.
3. Deixar explícito o que a parcela inclui (seguro, fundo de reserva), como a
   Honda faz com o seguro de vida.

### 9. HS Consórcios

https://www.hsconsorcios.com.br

**O que faz bem**

- Concorrente gaúcho (telefones com DDD 51), referência regional direta para
  a MI6 em Porto Alegre.
- Logos do Banco Central e da ABAC visíveis, com dois banners do Reclame Aqui
  linkados.
- Aviso de integridade em destaque: a empresa "não comercializa cotas
  contempladas", proteção contra golpe comum no setor.
- Posicionamento desde 1993 e segmentos amplos (autos, motos, imóveis,
  caminhões, agro, náutico, energia solar).

**O que faz mal**

- Os contadores de resultados aparecem zerados no HTML capturado ("+ de 0 mil
  bens entregues", "+ de 0 contemplações mensais"); são quase certamente
  animados via JavaScript, mas o efeito prático é que crawlers, leitores de
  tela sem JS e a primeira pintura da página mostram zero, o oposto de
  credibilidade.
- Nenhum depoimento ou nota de avaliação no conteúdo capturado; menu repetido
  em mais de um bloco.
- Hero vago ("Venha investir na HS Consórcios") sem benefício nem número.

**O que vale adaptar para a MI6**

1. Aviso explícito de que a MI6 não vende cota contemplada e de como
   reconhecer canais oficiais.
2. Lição técnica central para o projeto Astro: números institucionais
   renderizados no HTML estático, nunca dependentes de JS.
3. Explorar a identidade regional (sede em Porto Alegre, atendimento local)
   que a HS usa pouco.

### Síntese da Parte 1

**Padrões do setor (o que todo mundo faz)**

- CTA universal "Simular agora" repetido ao longo da página; o simulador é o
  eixo de conversão, frequentemente hospedado em domínio externo (Mycon,
  Bradesco, VW) ou via WhatsApp (Porto, Rodobens, Embracon).
- Argumento central idêntico em todos: compra "sem juros" mais a frase
  "regulamentado pelo Banco Central", quase sempre com a Lei 11.795/2008; nos
  melhores casos, com número de certificado (Mycon, Embracon, Ademicon).
- Bloco de números históricos (anos de mercado, bens entregues,
  contemplações) como principal construção de confiança; cards por segmento;
  FAQ longa na própria home; WhatsApp como canal padrão.
- Depoimentos em vídeo com nome e história (Ademicon, Rodobens, Embracon) nas
  administradoras independentes; bancos e marcas (Bradesco, Honda) tendem a
  dispensar prova social.

**Lacunas (diferenciação possível para a MI6)**

1. Transparência de custo total. Só a Porto publica taxa de administração em
   percentual na página. Nenhum site mostra um exemplo de conta completa
   (crédito, taxa, fundo de reserva, seguro, parcela). A MI6 pode ser a
   administradora que mostra a conta inteira.
2. Honestidade sobre disponibilidade. Ninguém comunica o que está ativo e o
   que está por lançar; o Consórcio VW exibe cards de modelos sem preço com
   um vago "Consulte nossos planos", um beco sem saída. A MI6 pode
   transformar sua limitação (só motos ativo) em narrativa de precisão:
   grupos novos, posição cedo no grupo, lista de interesse por segmento.
3. Identidade visual com assinatura. Aplicando o teste do logo, todos os dez
   sites observados poderiam trocar de marca entre si sem estranhamento; são
   variações de azul ou verde corporativo com cards iguais. A direção
   editorial da MI6 (serif, paleta Union Jack, assimetria) não tem
   concorrente no setor.
4. Regulação como protagonista, não rodapé. Para quase todos, BACEN e ABAC
   são logos pequenos no fim da página; a Honda nem isso. Uma administradora
   autorizada em dezembro de 2024 pode fazer da autorização recente um fato
   central e verificável, com link para a consulta no site do Banco Central.
5. Robustez técnica do conteúdo. HS com contadores zerados, Rodobens com
   parcelas sem valor e Magalu com âncoras vazias mostram dependência frágil
   de JavaScript. Um site Astro estático que entrega todos os números no HTML
   já nasce na frente em SEO, acessibilidade e percepção de solidez.

**Os 3 erros mais comuns a evitar**

1. Quebrar a confiança exatamente no momento da conversão: botões de
   simulação que apontam para âncora vazia (Magalu), redirecionam para
   domínio externo com outra cara (Bradesco, Mycon) ou exibem valores
   ausentes (Rodobens, HS). Na MI6, o formulário de lead deve estar no
   próprio site, com destino real e identidade consistente.
2. Soterrar a hierarquia com excesso: menus com dezenas de itens (Mycon,
   Rodobens, Embracon), FAQ de milhares de palavras na home (VW, Bradesco),
   depoimentos em parede de texto (Embracon), conteúdo repetido três vezes
   (Bradesco). Cada seção da MI6 precisa de uma função única.
3. Confiança genérica ou ausente: elogio sem prêmio nomeado (Embracon), selos
   sem link nem contexto (Magalu), nenhuma menção regulatória (Honda) ou
   nenhuma prova social (Bradesco, Porto). Para uma estreante como a MI6,
   cada afirmação de confiança deve ter número, nome, certificado ou link
   verificável.

---

## Parte 2: fintechs e bancos digitais (BR e mundo)

Observados diretamente: Nubank, Creditas, Wise, Monzo (página de contas
correntes), Starling, Mercury, Stripe, Ramp. Informações de Revolut e do
fluxo de cadastro do Monzo vêm de snippets de busca e estão sinalizadas.

### 1. Nubank

https://www.nubank.com.br

**Confiança.** Um único número domina a página: "130 milhões que já
escolheram o Nu". O rodapé é o mais completo do benchmark em termos
regulatórios brasileiros: designação "Instituição de Pagamento", CNPJ,
programa PLD/CFTP, PRSAC, repositório de contratos, relatórios financeiros,
encarregada de dados nomeada e ouvidoria com 0800 e horário de atendimento.
"Segurança" é item da navegação principal, com Central de Proteção e canal
de denúncias. Transparência de tarifa como slogan: "Sem anuidade, sem tarifas
abusivas".

**Conversão.** Fricção mínima: campo único de CPF no hero com botão
"Continuar". CTA secundário "Abra sua conta Nubank". Cada produto tem card
próprio com CTA "Conheça". Sem calculadoras na home.

**Clareza.** Tom casual e aspiracional, muitos adjetivos ancorados em um
único número forte. Estrutura modular de cards por produto.

**Adaptar para a MI6**

1. Rodapé regulatório completo é a convenção brasileira: CNPJ,
   "administradora autorizada e fiscalizada pelo Banco Central do Brasil",
   SAC 0800 000 5228 e Ouvidoria 0800 000 5267 com horário, em todas as
   páginas.
2. Primeiro passo de conversão com o mínimo de dados; o Microsoft Forms
   incorporado precisa ser curto.
3. Segurança como item nomeado da navegação, não como nota de rodapé.

### 2. Creditas

https://www.creditas.com

O caso mais próximo do modelo MI6: produto de crédito vendido por simulação e
lead, não por abertura de conta.

**Confiança.** Bloco de métricas de jornada: mais de 10 anos de mercado, mais
de R$ 12,1 bilhões em crédito concedido, mais de R$ 6,2 bilhões economizados
pelos clientes, app 4,8/5 com 196.000 avaliações. Taxas expostas no próprio
card de produto: "a partir de 1,49% ao mês" (garantia de veículo), "1,09% ao
mês" (imóvel). Fraqueza observada: no conteúdo capturado o rodapé não exibia
ouvidoria nem aviso de correspondente bancário; CNPJ só em metadados.

**Conversão.** Seis simuladores, um por produto, com CTA "Quero simular" ou
"Simular" em cada card. O simulador é a porta de entrada do lead; não há
captura de e-mail na home.

**Clareza.** Frases curtas e diretas, tratamento por "você", claims sempre
pareados com número ("menores taxas do mercado" ao lado do percentual real).

**Adaptar para a MI6**

1. "Quero simular" por produto é o padrão de conversão mais transferível para
   consórcio: crédito desejado, parcela estimada, depois o formulário.
2. Bloco de 3 a 4 métricas de jornada; a MI6 pode usar autorização BCB em
   dezembro de 2024, número de grupos ativos, taxa de administração.
3. Condição comercial visível no card do produto, não escondida atrás do
   contato.

### 3. Wise

https://wise.com

**Confiança.** A mais densa em números verificáveis: "Regulated nationwide,
with 65 licences worldwide", registro MSB na FinCEN, seguro FDIC repassado
até US$ 250.000; 14,8 milhões de clientes; US$ 16 bilhões movidos por mês;
"74% das transferências chegam em menos de 20 segundos, 95% em um dia"; "mais
de 1.000 especialistas e nossos sistemas executam 7 milhões de verificações
por dia". Tabela comparativa aberta contra o Wells Fargo com tarifas reais
(12,65 contra 32,35 USD na mesma remessa) e seção "100% transparent pricing"
comparando o câmbio com a taxa de mercado do Google. Seis depoimentos do
Trustpilot.

**Conversão.** Calculadora de câmbio dentro do hero, funcional, com tarifa
total exposta, prazo de chegada e botão "Send money". A ferramenta é
simultaneamente o argumento de transparência e o início do funil.

**Clareza.** Frases de 8 a 15 palavras no hero; desempenho comunicado em
percentuais, não em advérbios; notas de rodapé numeradas ligando cada claim à
condição legal.

**Adaptar para a MI6**

1. Ferramenta funcional na primeira dobra: um simulador de consórcio (crédito
   x parcela x prazo) antes do formulário transforma transparência em
   mecanismo de conversão.
2. Custo exposto sem provocação do usuário: taxa de administração visível,
   com comparação honesta entre consórcio e financiamento.
3. Claims de desempenho em percentual com nota explicativa, nunca soltos.

### 4. Monzo

https://monzo.com

**Confiança.** Linha regulatória padronizada: "Monzo Bank Limited is
authorised by the Prudential Regulation Authority and regulated by the
Financial Conduct Authority", com número de registro 730427 e selo FSCS.
Prêmios de terceiros datados: "Best British Bank Award 2025" e "Which?
Recommended Provider 2025". Mais de 15 milhões de clientes. Seção de
segurança própria. Garantia de processo com prazo: troca de banco "It's free,
takes just 7 days", em 3 passos.

**Conversão.** "Open a personal account" levando ao cadastro; badges de App
Store e Google Play ao final. Snippet de busca indica que o cadastro web
apresenta QR code para baixar o app (inferência, não observada diretamente).

**Clareza.** Conversacional, com preços exatos por plano (de £3 a £25 por
mês) e juros com duas casas (2,75% e 3,25% AER). Cards com ícone, título, 3
bullets e CTA.

**Adaptar para a MI6**

1. Uma frase regulatória padrão, idêntica em todas as páginas, com o registro
   verificável no BCB.
2. Processos descritos em 3 passos com prazo concreto ("simule, contrate,
   participe da primeira assembleia em X dias").
3. Selos de terceiros datados quando existirem; antes disso, não inventar
   selo.

### 5. Starling Bank

https://www.starlingbank.com

**Confiança.** Rodapé com autorização PRA/FCA e registro 730166, proteção
FSCS, razão social, número de registro da empresa e endereço físico completo
em Londres. Prova por pesquisa independente: Which? Recommended (novembro de
2025) e ranking do CMA Service Quality Survey. "24/7 UK support from humans".
Curioso: nenhuma contagem de clientes na home.

**Conversão.** Botão "Apply now" fixo no topo; sem formulário na própria
home; taxas de poupança com números exatos (3,70%, 2,50%).

**Clareza.** Headline curta e comportamental: "Good with money starts here."
Mistura adjetivos com números de registro e percentuais.

**Adaptar para a MI6**

1. Endereço físico, razão social e CNPJ visíveis no rodapé; para uma
   administradora nova, materialidade é prova.
2. CTA persistente no header em toda página ("Simule seu consórcio" ou "Fale
   com um consultor").
3. Atendimento humano como diferencial declarado, com os 0800 reais da MI6 em
   evidência, não escondidos.

### 6. Mercury

https://mercury.com

**Confiança.** O caso exemplar de honestidade regulatória como ativo:
disclosure proeminente "Mercury is a fintech company, not an FDIC-insured
bank. Banking services provided through Choice Financial Group and Column
N.A., Members FDIC", repetida no rodapé com link para página explicativa "how
Mercury works". Números: 300 mil+ clientes, "1 in 3 startups", US$ 20
bilhões+ de volume mensal, nota 4,9 na App Store, parceiros nomeados.

**Conversão.** Campo de e-mail único no hero com botão "Open account" e
promessa de tempo: "Apply online in 10 minutes". Rota alternativa sem
cadastro: "Launch demo" abre um dashboard de demonstração.

**Clareza.** Profissional, sem jargão; bloco de "trust metrics" com 4 fatos.

**Adaptar para a MI6**

1. Dizer com precisão o que a empresa é e o que o produto é ("administradora
   de consórcios autorizada e fiscalizada pelo Banco Central"); e o que não
   é: não é empréstimo, contemplação depende de sorteio ou lance. Precisão
   regulatória lida como confiança, não como letra miúda.
2. Promessa de tempo junto ao CTA ("simulação em 2 minutos; um consultor
   responde em X horas").
3. Uma página "Como funciona a MI6" explicando a mecânica do consórcio e do
   fundo do grupo, no espírito do "how Mercury works".

### 7. Stripe

https://stripe.com

**Confiança.** Prova por escala auditável: "$1.9T in payments volume
processed in 2025", "99.999% historical uptime" com link para a página de
status, "50% of Fortune 100 companies have used Stripe". Logos de clientes.
Quase nenhum descritor vago.

**Conversão.** Dupla rota explícita: "Get started" (autosserviço) e "Contact
sales" no topo e no rodapé; quiz de personalização para recomendar produtos.

**Clareza.** Hierarquia tipográfica forte, CTAs de 1 a 3 palavras, subtítulos
de 15 a 25 palavras, bloco central de métricas.

**Adaptar para a MI6**

1. Bloco de métricas como espinha da página, com 4 a 6 números que a MI6
   possa defender (data da autorização BCB, grupos, participantes, crédito
   comercializado).
2. Verificabilidade: assim como o uptime linka para a página de status, a
   autorização da MI6 deve linkar para a consulta pública no site do Banco
   Central.
3. Duas rotas de conversão lado a lado: formulário de lead e canal humano
   (telefone ou WhatsApp); quem rejeita formulário precisa de saída.

### 8. Ramp

https://ramp.com

**Confiança.** "Join the 70,000+ businesses simplifying their finances with
Ramp" repetido 3 vezes na página; logos; depoimento atribuído com nome
completo e cargo; claim "up to 5% savings" com longa nota metodológica no
rodapé; bancos parceiros e números NMLS no rodapé. Detalhe de mercado: a raiz
ramp.com já serve uma versão estruturada específica para agentes de IA.

**Conversão.** E-mail único + "Get started for free" no hero; rota paralela
"See a demo"; o CTA se repete ao fim de cada seção.

**Clareza.** Frases de 5 a 8 palavras; disciplina total de quantificação:
praticamente todo claim carrega número, e o número carrega nota de método.

**Adaptar para a MI6**

1. Depoimento com nome completo, cidade e situação real (cliente contemplado,
   com autorização de uso); depoimento anônimo não vale nada em produto
   financeiro.
2. Regra editorial "todo claim com número, todo número com fonte ou nota";
   combina com a diretriz de arte do projeto.
3. CTA de lead repetido ao final de cada seção da landing, não apenas no
   hero.

### Síntese da Parte 2: 8 padrões transversais de confiança e conversão

1. **Linha regulatória padronizada, com número verificável, em toda página.**
   Os melhores não dizem "somos seguros"; dizem qual lei, qual órgão, qual
   registro. Quem faz melhor: Monzo.
2. **Honestidade sobre a própria natureza, em destaque, não em letra miúda.**
   Mercury abre dizendo o que não é e sai mais confiável; para consórcio,
   explicar que não é empréstimo e que contemplação depende de sorteio ou
   lance, antes que o cliente descubra sozinho. Quem faz melhor: Mercury.
3. **Números auditáveis no lugar de adjetivos.** Empresa nova sem histórico
   usa os números que tem: data da autorização, grupos ativos, taxa de
   administração, e dados do mercado (ABAC, BCB) com fonte citada. Quem faz
   melhor: Stripe.
4. **Ferramenta funcional na primeira dobra.** A calculadora da Wise dentro
   do hero é simultaneamente prova de transparência e início do funil; para
   consórcio, simulador de crédito x parcela é o análogo natural. Quem faz
   melhor: Wise; Creditas no contexto brasileiro de lead.
5. **Primeiro passo com um campo só e expectativa de tempo.** Nubank pede
   apenas CPF; Mercury promete "10 minutes". A fricção percebida cai quando o
   usuário sabe o tamanho do compromisso. Quem faz melhor: Mercury.
6. **Transparência de preço como argumento de venda, inclusive comparativa.**
   Wise publica tabela aberta contra o Wells Fargo; em consórcio, expor taxa
   de administração e comparar com o custo de financiamento é o movimento
   equivalente, e quase nenhuma administradora tradicional faz. Quem faz
   melhor: Wise.
7. **Confiança terceirizada: prêmios datados, avaliações e depoimentos
   nomeados.** A MI6, sem prêmios ainda, deve começar pela autorização BCB
   verificável e por depoimentos reais de contemplados. Quem faz melhor:
   Monzo.
8. **Duas rotas de conversão e segurança com seção própria.** Formulário de
   lead e canal humano lado a lado em toda página, e uma página "Segurança e
   regulação" explicando como o dinheiro do grupo é protegido e fiscalizado.
   Quem faz melhor: Stripe (rotas) e Nubank (segurança nomeada).

---

## Parte 3: sites excepcionais de outros mercados

Verificados por fetch direto: GOV.UK, Stripe Press, The Pudding, 37signals,
Linear, Teenage Engineering, Klim Type Foundry, Works in Progress, e o design
system público do MI6 real (repositório GitHub mi6/ic-design-system). SIS e
NOMOS documentados por fontes secundárias citadas.

### 1. GOV.UK

https://www.gov.uk

**O que faz de especial.** A home abre com uma única frase factual, "The best
place to find government services and information", seguida imediatamente de
uma caixa de busca; nada de hero decorativo. Estrutura utilitária: serviços
populares, grade de categorias com subtítulos descritivos ("Includes
eligibility, appeals, tax credits and Universal Credit"). Sinais de confiança
institucionais, não adjetivos. A tipografia é a fonte proprietária GDS
Transport, com apenas dois pesos e sem itálico; serviços fora do domínio
oficial são obrigados a usar Helvetica/Arial, o que transforma a própria
fonte em credencial de autenticidade (fonte: GOV.UK Design System,
design-system.service.gov.uk/styles/typeface/).

**O que vale adaptar para a MI6**

1. Abrir a home com uma frase de utilidade e um caminho de ação imediato
   (simular ou entrar na Área do Cliente), em vez de slogan vago.
2. Subtítulos descritivos sob cada link de seção ("Inclui regras de
   contemplação, lances e assembleias"), que reduzem cliques errados e soam
   como serviço, não como marketing.
3. Disciplina tipográfica de dois pesos: a restrição comunica seriedade
   institucional.

### 2. SIS, o MI6 real

https://www.sis.gov.uk e https://design.sis.gov.uk

**O que faz de especial.** O fetch direto da home foi bloqueado; os trechos
indexados mostram o tom: "Our people work secretly around the world to make
the UK safer and more prosperous" como abertura, "For over 100 years MI6 has
helped the UK and our allies keep one step ahead of our adversaries" como
prova de longevidade, valores em frases curtas. O achado mais útil é
verificado: o MI6 real publica abertamente seu design system, o Intelligence
Community Design System (design.sis.gov.uk), usado por MI6, MI5, GCHQ e
HMGCC, com código aberto no GitHub. Nas especificações: títulos sempre em
caixa de sentença; arquitetura de tokens de cor em três níveis com papéis
semânticos fixos; compromisso explícito de acessibilidade.

**O que vale adaptar para a MI6**

1. A fórmula retórica "quem somos + desde quando + para quê" em uma frase só;
   para a MI6 Consórcio, autorização do Banco Central no primeiro parágrafo.
2. Transparência como gesto de marca: uma instituição secreta que publica
   suas regras em público; traduzido, uma página de regras do consórcio
   radicalmente clara, com taxas e critérios de contemplação expostos.
3. Tokens de cor com papel semântico fixo, garantindo que o vermelho #C8102E
   nunca vaze para fora de ação/CTA.

### 3. Stripe Press

https://press.stripe.com

**O que faz de especial.** Braço editorial da Stripe. Abre com o nome e uma
tagline de três palavras, "Ideas for progress". O catálogo é uma estante 3D
em WebGL: os livros giram conforme o scroll, exibindo lombada e capa; fundo
escuro, espaçamento generoso, movimento contido a serviço do objeto. Cada
livro traz autor, descrição e elogios atribuídos a nomes reais.

**O que vale adaptar para a MI6**

1. Uma interação assinatura só, profunda e a serviço do conteúdo, em vez de
   dez efeitos genéricos; por exemplo, uma linha do tempo de assembleias que
   avança com o scroll.
2. Tagline de três palavras sob o logo, no espírito de "Ideas for progress".
3. Depoimentos com nome, contexto e fonte, nunca elogios anônimos.

### 4. NOMOS Glashütte

https://nomos-glashuette.com (documentado por fontes secundárias; estado
atual não verificado)

**O que faz de especial.** Relojoaria alemã de precisão. A página premiada no
Awwwards usava paleta estritamente limitada, grandes fotografias e tipografia
limpa; a descrição oficial resume o produto em uma frase concreta, "Fine
mechanical watches, built by hand to last a lifetime, designed to look good
any time", e a credibilidade aparece como fato operacional ("shipping to 47
countries"). A filosofia declarada é a omissão deliberada: design reduzido ao
essencial, herança Bauhaus.

**O que vale adaptar para a MI6**

1. Paleta de duas cores e meia: azul #012169 e branco carregam tudo; o
   vermelho aparece tão raramente quanto um ponteiro de segundos.
2. Descrever o produto em uma frase de fatos encadeados (o que é, como é
   feito, para que serve), sem adjetivo inflado.
3. Credibilidade como dado operacional, no lugar de "líder em soluções".

### 5. The Pudding

https://pudding.cool

**O que faz de especial.** Publicação de jornalismo visual; automissão
declarada: "The Pudding explains ideas debated in culture with visual essays.
We're not chasing current events or clickbait." Cada história transforma um
dado complexo em narrativa conduzida por scroll. Filtros editoriais honestos
("Our Faves", "Popular", "Updating", "Your Input").

**O que vale adaptar para a MI6**

1. Um ensaio visual explicando como funciona um consórcio: grupo, assembleia,
   lance, contemplação, passo a passo conduzido pelo scroll, com números
   reais; é a peça com maior potencial de diferenciação no setor.
2. Comparativo visual consórcio versus financiamento com dados em vez de
   tabela de marketing.
3. A categoria "Updating": conteúdos que se assumem vivos, como uma página de
   resultados de assembleias atualizada mensalmente.

### 6. 37signals

https://37signals.com

**O que faz de especial.** A home é quase só texto: um índice numerado de 00
a 37 com posições da empresa, cada uma com título lapidado: "Work isn't war",
"Companies aren't families". Sem foto de equipe, sem métricas vaidosas, sem
card; a opinião é a estética.

**O que vale adaptar para a MI6**

1. Uma página manifesto numerada, "Como a MI6 trabalha", com princípios
   curtos e afirmativos ("Taxa explicada antes da assinatura"; "Sem juros,
   com regra").
2. Coragem de fazer uma seção inteira só de texto bem composto; num mercado
   de sites poluídos, texto limpo é luxo visual.
3. Títulos que tomam posição em três ou quatro palavras, úteis para as seções
   institucionais.

### 7. Linear

https://linear.app

**O que faz de especial.** Headline direta e categórica. O produto é
explicado em módulos numerados como versões: Intake (1.0), Plan (2.0), Build
(3.0). Credibilidade em número exato e nomes reais: "Linear powers over
33,000 product teams", depoimentos atribuídos a pessoas da OpenAI, Ramp e
Opendoor. O changelog aparece na própria home, sinal de produto vivo. A
reputação de microinterações rápidas e polidas é conhecida do mercado
(inferência, não observável em fetch de texto).

**O que vale adaptar para a MI6**

1. Numerar a jornada do consorciado como sistema: 1. Adesão, 2. Assembleia,
   3. Contemplação, 4. Crédito na mão; numeração transmite método, e método é
   a promessa central de um consórcio.
2. Um número exato e verificável acima da dobra, com fonte.
3. Uma seção curta de novidades na home (resultados de assembleia, novos
   grupos), mostrando instituição viva.

### 8. Teenage Engineering

https://teenage.engineering

**O que faz de especial.** Hardware de áudio sueco. Tudo em caixa baixa,
fotografia de produto sobre fundo neutro, zero retórica. Na página de
produto, a especificação é a estética: lista seca de fatos ("24-bit/96 kHz
usb audio interface", "dimensions: 96 x 68 x 16 mm"), galeria numerada e link
para o guia. Controle total da microtipografia.

**O que vale adaptar para a MI6**

1. Ficha técnica do plano como peça de design: taxa de administração, prazo,
   fundo de reserva, índice de correção, em lista tipográfica limpa;
   transparência regulatória apresentada com o orgulho de uma spec de
   engenharia.
2. Uma página por segmento com estrutura idêntica e sóbria: foto, uma frase,
   ficha, ação.
3. Documentos para download (regulamento, contrato) tratados como parte nobre
   da página, não como link escondido.

### 9. Klim Type Foundry

https://klim.co.nz

**O que faz de especial.** Fundição tipográfica neozelandesa. A home vai
direto às fontes em destaque e à seção "Fonts in use" com aplicações reais. A
credibilidade vem do ofício narrado: ensaios longos sobre o desenho de cada
tipo, com prosa de autoridade. O copyright registra a longevidade (2005 a
2026) e o rodapé organiza o catálogo inteiro como índice.

**O que vale adaptar para a MI6**

1. Explicar as próprias escolhas como prova de competência: um texto curto
   sobre por que os e-mails e o site usam a mesma assinatura tipográfica.
2. "Consórcio in use": casos reais de contemplados, com bem adquirido, grupo
   e prazo, no formato de portfólio documentado.
3. Rodapé como índice completo do site; em produto financeiro, achar tudo em
   um lugar é confiança.

### 10. Works in Progress

https://worksinprogress.co

**O que faz de especial.** Revista de ensaios publicada pela Stripe Press.
Abre direto no texto do ensaio em destaque, primeira frase forte, sem hero de
marketing. Autoridade construída por aparato editorial: edições numeradas (01
a 24), autores nomeados com página própria, declaração de ética e créditos de
design no rodapé. Detalhe importante: o fetch indicou sans-serif dominante; a
impressão de revista vem da estrutura, não da serifa, o que mostra que
aparato editorial é mais decisivo que a fonte.

**O que vale adaptar para a MI6**

1. Abrir páginas de conteúdo direto no texto, primeira frase forte, sem
   banner introdutório.
2. Numerar e datar o conteúdo institucional (edição, atualização), criando
   sensação de publicação séria e mantida.
3. Autores nomeados nos conteúdos educativos sobre consórcio; pessoa com nome
   assina, empresa anônima não.

### Síntese da Parte 3: as 5 ideias mais fortes, por impacto

1. **Hero factual com ação imediata (GOV.UK + SIS).** Uma frase que diz o que
   a MI6 faz, desde quando e sob qual regulação, com ação logo abaixo. Troca
   adjetivo por fato no primeiro segundo da visita, exatamente onde um
   produto financeiro ganha ou perde confiança.
2. **Método numerado como espinha dorsal (Linear + 37signals).** A jornada do
   consorciado em etapas numeradas e uma página manifesto de princípios
   curtos. Consórcio vende método e disciplina; a numeração é a forma visual
   disso e estrutura a home inteira sem precisar de cards.
3. **Especificação como estética da transparência (Teenage Engineering + ICDS
   do MI6 real).** Ficha técnica de cada plano composta como peça tipográfica
   nobre. No setor, taxa escondida é a norma; expor a spec com orgulho vira
   diferencial competitivo e de design ao mesmo tempo.
4. **Um ensaio visual "como funciona o consórcio" (The Pudding + Stripe
   Press).** Uma única interação assinatura, conduzida por scroll, mostrando
   grupo, assembleia, lance e contemplação com números reais. É a peça mais
   memorável que o site pode ter, e ninguém no mercado tem algo assim.
5. **Prova por número exato e nome real (Linear + NOMOS + Klim).** Substituir
   todo superlativo por dado verificável, combinado com a paleta estrita
   azul/branco com vermelho raro, no espírito NOMOS; fecha a identidade de
   precisão que o nome MI6 promete.

Observação final da pesquisa: o achado mais conceitual é que o MI6 verdadeiro
constrói confiança publicando suas regras (design system aberto,
acessibilidade declarada, tipografia normatizada). Para uma administradora de
consórcio, imitar essa postura, com regras visíveis e auditáveis, é a
tradução mais fiel possível da marca.
