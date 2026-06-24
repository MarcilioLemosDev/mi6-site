# Auditoria de conteúdo do site atual

Data: 10/06/2026. Base: conteúdo raspado em `content/` (a coleta fiel não foi alterada; tudo aqui é sugestão para a próxima fase).

## Resumo executivo

O site atual tem uma base de mensagem correta (consórcio sem juros, regulação pelo Banco Central, seis segmentos), mas transmite a sensação de obra inacabada: a maioria dos CTAs diz "Em breve", o blog está inteiro em lorem ipsum, os depoimentos parecem placeholder e o rodapé não tem as informações institucionais mínimas de uma administradora regulada. Os cinco problemas com maior impacto, em ordem de prioridade:

1. CTAs "Em breve" em quase todo o site, incluindo links com destino errado (Serviços e Eletro apontam para a página de Carros).
2. Rodapé sem CNPJ, razão social, endereço, SAC, Ouvidoria e menção à autorização do BACEN; isso custa credibilidade exatamente onde consórcio mais precisa dela.
3. Blog público com lorem ipsum visível, inclusive um H2 "Lorem ipsum dolor sit amet consectetur." na página de listagem.
4. Inconsistência de marca: "MI6", "Mi6", "mi6", "M.I6 Administradora de Consórcio Ltda." e "Consórcio Nacional MI6" convivem sem padrão, e o e-mail de contato usa outro domínio (contato@mi6.com.br, não @mi6consorcio.com.br).
5. Conteúdo duplicado em série: as seis páginas de segmento compartilham vantagens, diferenciais, depoimentos e FAQ idênticos, com pouca diferenciação real por segmento.

## Problemas globais (afetam todas as páginas)

### O que está bom

- Arquitetura simples e clara: home, sobre, seis segmentos, contato. Fácil de navegar.
- Os links de Área do Cliente e Canal do parceiro existem no cabeçalho de todas as páginas.
- Padrão de titles consistente nas páginas de segmento, com palavras-chave coerentes ("consórcio de carros sem juros e sem entrada").
- A Política de Privacidade é completa, versionada e adequada à LGPD.

### O que está fraco

- Rodapé vazio de substância: só logo, tagline, links de navegação e política de privacidade. Faltam CNPJ, razão social, endereço, SAC 0800 000 5228, Ouvidoria 0800 000 5267, autorização do BACEN e selo da ABAC se aplicável. Em um produto financeiro, essas informações no rodapé são convenção de mercado e sinal de legitimidade.
- Nenhuma presença social: zero links de Instagram, Facebook, LinkedIn ou YouTube, e nenhum canal de WhatsApp. Se os perfis existem, o site não os aproveita; se não existem, é uma lacuna de canal de aquisição.
- Depoimentos genéricos na seção "O que nossos especialistas dizem?": dois dos três depoimentos são atribuídos à mesma pessoa ("Alexandre Santos - Executivo") com falas diferentes, um deles diz "Hoje eu realizei a conquista dos meus sonhos" (fala de cliente, não de especialista) e as aspas misturam "consórcio Nacional Mi6" com "Consórcio Nacional Mi6". Parece conteúdo provisório e fragiliza a prova social.
- FAQ idêntico repetido em oito páginas, com uma resposta truncada no próprio site ("...com segurança e sem juro", sem o final da frase).
- O número "+1,27 mi de contemplados em 2024" é da ABAC, ou seja, do setor inteiro, não da MI6. A fonte está citada, mas a leitura rápida sugere que o número é da empresa. O outro destaque, "0% de juros embutidos no financiamento", é confuso: consórcio não é financiamento.
- Imagens quase todas sem texto alternativo (alt), e os heroes desktop são background de CSS, invisíveis para leitores de tela e para SEO de imagem.
- A URL do "Canal do parceiro" expõe uma applicationKey longa diretamente no href; vale confirmar com a Evertec se existe URL curta institucional.

### Sugestões

- Definir um padrão único de marca por escrito (sugestão: "MI6" em texto corrente, "M.I6 Administradora de Consórcios Ltda." apenas em contexto jurídico) e aplicar em todo o conteúdo novo.
- Construir o rodapé novo como bloco institucional completo: CNPJ, endereço, SAC, Ouvidoria, link da Área do Cliente, autorização BACEN e política de privacidade.
- Trocar a seção de "especialistas" por prova concreta: autorização do BACEN com data, dados auditáveis do setor claramente atribuídos à ABAC e, quando existirem, depoimentos reais de clientes com nome completo e contexto.
- Unificar o FAQ em uma fonte única de conteúdo (e corrigir a resposta truncada), variando por página apenas as perguntas específicas do segmento.
- Resolver o e-mail de contato: confirmar se contato@mi6.com.br está correto ou se deveria ser contato@mi6consorcio.com.br.

## Home

### O que está bom

- O conceito "6 caminhos para transformar sonhos em conquistas" conecta o nome MI6 aos seis segmentos; é uma boa ideia de marca que merece ser mantida e reforçada.
- A seção "O que é consórcio?" cumpre papel educativo logo no início.
- O passo a passo descreve o funcionamento real (grupo, parcelas, sorteio, lance, contemplação) sem promessas falsas.
- FAQ com respostas tecnicamente corretas sobre fundo comum, taxa de administração e diferenças entre consórcio e financiamento.

### O que está fraco

- O hero anuncia "Parcelas a partir de R$ 200,00" apenas para motos, único segmento com simulação ativa; os outros cinco cards da página dizem "Em breve". A primeira impressão é de site em construção.
- O CTA do passo a passo ("Em breve, simule o consórcio ideal para você") aponta para a própria home; é um link morto na prática.
- A frase "Em breve, junte-se a nós e adquira seu consórcio" na seção educativa contradiz o restante da página, que já convida a simular.
- O texto de "O consórcio ideal para você" fala no futuro ("Estamos trabalhando em soluções", "Nosso objetivo será"), o que enfraquece a oferta atual.
- O passo a passo tem quatro parágrafos sem títulos ou numeração visível no conteúdo, o que dificulta a leitura escaneada.
- A faixa de números mistura um dado do setor (1,27 mi de contemplados, ABAC) com um slogan ("0% de juros") sem nenhum número próprio da MI6.

### Sugestões

- Decidir a postura editorial: se a operação de motos está ativa, a home deve vender motos com força (hero, prova, simulação) e tratar os demais segmentos como expansão anunciada com data, em vez de seis promessas vagas.
- Reescrever o futuro como presente onde a operação já existe ("trabalhamos com", "oferecemos") e reservar "em breve" só para o que realmente não lançou, com texto específico.
- Numerar o passo a passo (1 a 4) com subtítulos curtos.
- Substituir a faixa de números por dados próprios assim que existirem (grupos ativos, assembleias realizadas, contemplações da MI6), mantendo o dado da ABAC com atribuição clara enquanto isso.

## Sobre

### O que está bom

- Conteúdo factual valioso: administradora autorizada pelo Banco Central desde dezembro de 2024, sede em Porto Alegre, atuação nacional. É o tipo de fato concreto que o site novo deve destacar.
- Missão, visão e valores definidos, e uma seção de responsabilidade socioambiental que diferencia o discurso.

### O que está fraco

- A página não tem H1; começa direto em H2, o que prejudica SEO e hierarquia.
- O fato mais forte da empresa (autorização do BACEN) está em um parágrafo comum, sem destaque visual nem link para a verificação no site do Banco Central.
- Mistura de tempos verbais que gera dúvida sobre o que existe de fato: "A Mi6 incentivará", "desenvolverá ações sociais" (futuro) convivem com "Anualmente, apoiamos iniciativas sociais" e um "Projeto Sonhos que se Realizam" descrito como corrente. Para uma empresa autorizada em dezembro de 2024, programas "anuais" soam como conteúdo aspiracional apresentado como realizado.
- Não há nomes de fundadores ou diretoria, números da operação, nem linha do tempo; "Pensada por especialistas com experiência no setor" é vago.

### Sugestões

- Criar um H1 claro (por exemplo, a frase que hoje abre a página como H2).
- Dar destaque de bloco à autorização do BACEN, com número ou data do ato e link para consulta oficial.
- Separar com honestidade o que é compromisso futuro do que já acontece; um bloco "Compromissos para os próximos anos" resolve sem perder a ambição.
- Avaliar incluir quem está por trás da empresa (sócios, executivos com experiência no setor); em serviços financeiros, rosto e trajetória geram confiança.

## Páginas de segmento (Carros, Motos, Pesados, Imóveis, Serviços, Eletro)

### O que está bom

- Estrutura de página consistente e completa: hero, vantagens, passo a passo, diferenciais, comparativo consórcio x financiamento, outros segmentos, FAQ.
- O comparativo "Consórcio ou financiamento?" em duas colunas é o conteúdo mais persuasivo do site.
- Headlines dos heroes são específicas por segmento e razoáveis ("Realize a conquista do seu próximo caminhão", "Sua nova moto com zero entrada e zero juros").
- A página de Motos publica Regulamento e Contrato de Adesão em PDF; transparência rara e valiosa.

### O que está fraco

- Fora o hero, as meta tags e a seção de diferenciais (esta sim adaptada por segmento), as seis páginas são praticamente idênticas: mesmas vantagens, mesmos depoimentos, mesmo FAQ, mesmo comparativo. Não há conteúdo específico de cada segmento onde mais importa (faixas de crédito, prazos, exemplos de uso).
- CTAs com destino errado: nos heroes de Serviços e Eletro, o link "Em breve, simulação..." aponta para /carros/. O de Motos aponta para /moto/ (funciona por redirecionamento, mas é descuido).
- Apenas Motos tem simulação ativa; nas demais, o CTA principal de cada página é um link inerte para a própria página, repetido três vezes (hero, passo a passo e comparativo).
- Os PDFs de Regulamento e Contrato existem só em Motos, e o nome do arquivo diz "so Auto e Imovel", sugerindo que valem para mais segmentos do que a página mostra.
- Os cards de "Outros segmentos atendidos" repetem o mesmo texto "Em breve, conheça a simulação do consórcio ideal para você" em todos os itens.
- Eletro tem identidade indefinida: o H1 fala em "investir em mais tecnologia", a meta description fala em eletrodomésticos e o corpo fala em "equipamentos e soluções digitais".

### Sugestões

- Diferenciar cada página com conteúdo que só faz sentido naquele segmento: faixas de carta de crédito e prazos típicos, exemplos concretos (consórcio para entrada elevada de imóvel, renovação de frota em pesados, placas fotovoltaicas em eletro), e FAQ específico (carta de crédito de imóvel aceita usado? pesados aceita pessoa jurídica?).
- Corrigir todos os destinos de CTA e eliminar o padrão de link que aponta para a própria página; enquanto não houver simulação, o CTA deve levar ao formulário de contato ou de interesse com o segmento pré-preenchido.
- Publicar Regulamento e Contrato em todas as páginas a que se aplicam, não só em Motos.
- Definir o escopo real de Eletro (eletrodomésticos? eletrônicos? energia solar?) e alinhar headline, meta e corpo.

## Simulação (motos)

### O que está bom

- Texto curto e direto, com promessa clara ("rápida, gratuita e sem compromisso").
- Formulário enxuto, com aceite de termos e política.

### O que está fraco

- Não é uma simulação: o formulário pede só nome, e-mail e telefone. Não pergunta valor da moto, valor de parcela desejado ou prazo. O usuário que espera ver números sai frustrado e a empresa recebe um lead sem qualificação.
- O título "Simule seu consórcio em poucos passos" aparece duplicado no conteúdo da página.
- Página sem meta description e sem H1 (os títulos são H3).
- A página só existe para motos, embora a home prometa seis caminhos.

### Sugestões

- Decidir o produto da página: ou vira uma simulação real (faixa de crédito, prazo, parcela estimada) ou assume ser captação de interesse, com título honesto como "Fale com um consultor" e campos de qualificação (segmento, valor aproximado). Na FASE de remodelagem, isso conversa com a decisão já tomada de usar Microsoft Forms para lead.
- Acrescentar ao formulário um campo de valor de crédito pretendido e segmento; qualifica o lead sem aumentar muito o atrito.

## Contato

### O que está bom

- SAC e Ouvidoria com números corretos e links de telefone clicáveis.
- Formulário simples com aceite de privacidade.

### O que está fraco

- O e-mail exibido é contato@mi6.com.br, domínio diferente do site (mi6consorcio.com.br). Se for erro, mensagens podem estar se perdendo; se for correto, é confuso para o usuário.
- Página sem H1 (o título da seção é H2), sem meta description, sem endereço físico, sem horário de atendimento e sem WhatsApp.
- O campo "Assunto" é texto livre; um seletor (quero contratar, já sou cliente, ouvidoria, imprensa, parcerias) rotearia melhor as mensagens.
- Não há orientação de fluxo: cliente com boleto em atraso, por exemplo, deveria ser direcionado à Área do Cliente antes do formulário.

### Sugestões

- Confirmar e unificar o e-mail oficial.
- Estruturar a página por intenção: "Quero ser cliente" (formulário comercial), "Já sou cliente" (Área do Cliente, SAC), "Ouvidoria" (com explicação de quando usar), cada bloco com seu canal.
- Incluir endereço da sede (Porto Alegre, citado na página Sobre) e horários de atendimento.

## Blog

### O que está fraco

(Não há o que elogiar nesta página no estado atual.)

- Todo o conteúdo é placeholder: 13 posts em lorem ipsum, um "Olá, mundo!" do WordPress, e o destaque da listagem exibe literalmente "Lorem ipsum dolor sit amet consectetur." como título de seção em produção.
- As categorias criadas (Consórcio, Empréstimo, Financiamento, Investimento, Seguro) prometem uma pauta que não existe e extrapolam o produto da empresa.
- A seção "Artigos mais lidos" destaca posts falsos, o que escancara o problema.

### Sugestões

- Não levar o blog para o site novo no lançamento, a menos que existam pelo menos três artigos reais prontos. Um site sem blog é melhor que um blog em lorem ipsum.
- Quando lançar, restringir a pauta ao que a MI6 domina (consórcio, educação financeira, contemplação, lances) e deixar Empréstimo e Seguro de fora até existirem produtos correspondentes.
- Aproveitar o FAQ existente como semente de pauta: cada pergunta do FAQ rende um artigo aprofundado.

## Política de Privacidade

### O que está bom

- Texto completo e bem estruturado: público-alvo, definições, finalidades, compartilhamento, direitos dos titulares, cookies e histórico de revisões (versão 1.0, 02/12/2025).
- Canal específico de privacidade (privacidade@mi6consorcio.com.br) e prazo de resposta declarado (15 dias).
- Linguagem simples, fiel à promessa feita no próprio texto.

### O que está fraco

- Usa a grafia "M.I6 Administradora de Consórcio Ltda." em todo o texto, diferente do restante do site; falta CNPJ para identificar o controlador com precisão.
- Não nomeia o Encarregado de Dados (DPO), apenas o e-mail.
- A página não tem meta description e o aviso de cookies do site usa o plugin padrão sem detalhar categorias de cookies na política.

### Sugestões

- Incluir razão social com CNPJ no parágrafo de identificação do controlador.
- Nomear o Encarregado (ou declarar formalmente a função) como recomenda a LGPD.
- Manter o histórico de revisões no site novo; é um bom hábito que vale preservar.

## SEO e técnica (visão transversal)

- Meta descriptions ausentes em Contato, Blog, Simulação e Política de Privacidade; titles dessas páginas no padrão automático "Nome - mi6", em minúsculo, destoando das demais.
- Nenhuma página define og:image (exceto a Simulação de motos); compartilhamentos em rede social saem sem imagem.
- H1 ausente em Sobre, Contato, Blog e Simulação.
- Sem dados estruturados além do padrão do Yoast; o FAQ repetido em oito páginas seria candidato natural a schema FAQPage em uma única página canônica.
- Acessibilidade: padronizar alt em todas as imagens no site novo; hoje quase nenhuma tem.
- Performance: várias imagens grandes em PNG (o backup de assets soma 15 MB); o site novo em Astro deve servir derivados otimizados (AVIF/WebP), aproveitando que alguns originais já existem em AVIF.

## Conteúdo a confirmar com a MI6 antes da reescrita

1. O e-mail oficial de contato é contato@mi6.com.br ou contato@mi6consorcio.com.br?
2. Quais segmentos estão de fato operando hoje (a julgar pelo site, apenas motos; o nome dos PDFs sugere auto e imóvel)?
3. Os programas sociais da página Sobre (Projeto "Sonhos que se Realizam", voluntariado, inclusão) já existem ou são planos?
4. Existem perfis de redes sociais e número de WhatsApp comercial a divulgar?
5. Número ou data do ato de autorização do BACEN, para citar com precisão e linkar à consulta oficial.
6. Há dados próprios de operação (grupos ativos, assembleias, contemplados) liberados para publicação?
7. A URL do Canal do parceiro com applicationKey exposta é a oficial ou existe endereço mais limpo?
