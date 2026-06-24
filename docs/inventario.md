# Inventário do site atual (mi6consorcio.com.br)

Data da raspagem: 10/06/2026.
Método: sitemap do Yoast SEO (`/sitemap_index.xml`) confirmado por navegação dos links internos. O `robots.txt` não impõe restrições (Disallow vazio).

Plataforma identificada: WordPress com tema próprio "mi6", Yoast SEO, Contact Form 7 (formulários) e plugin Cookie Law Info (aviso de cookies).

## 1. Árvore de páginas

### Páginas institucionais (12)

| Página | URL | Arquivo em content/ |
|---|---|---|
| Home | https://mi6consorcio.com.br/ | `home.md` |
| Sobre | https://mi6consorcio.com.br/sobre/ | `sobre.md` |
| Consórcio de carros | https://mi6consorcio.com.br/carros/ | `carros.md` |
| Consórcio de motos | https://mi6consorcio.com.br/motos/ | `motos.md` |
| Consórcio de pesados | https://mi6consorcio.com.br/pesados/ | `pesados.md` |
| Consórcio de imóveis | https://mi6consorcio.com.br/imoveis/ | `imoveis.md` |
| Consórcio de serviços | https://mi6consorcio.com.br/servicos/ | `servicos.md` |
| Consórcio de eletro | https://mi6consorcio.com.br/eletro/ | `eletro.md` |
| Simulação (motos) | https://mi6consorcio.com.br/motos/simulacao/ | `motos--simulacao.md` |
| Contato | https://mi6consorcio.com.br/contato/ | `contato.md` |
| Blog (listagem) | https://mi6consorcio.com.br/blog/ | `blog.md` |
| Política de Privacidade | https://mi6consorcio.com.br/politica-de-privacidade/ | `politica-de-privacidade.md` |

O cabeçalho e o rodapé, idênticos em todas as páginas, estão registrados em `content/_global.md`.

### Posts de blog (13, todos placeholder)

O sitemap lista 13 posts, todos publicados em 22/09/2025 ou 08/10/2025, com corpo em lorem ipsum (slugs em latim como `similique-at-porro-tenetur-quo`) e um post padrão do WordPress ("Olá, mundo!"). Verificado por amostragem: títulos e corpo são texto de preenchimento, sem conteúdo real. Por isso não foram extraídos para `content/`; não há texto a preservar.

URLs dos posts placeholder:

- /similique-at-porro-tenetur-quo/
- /non-quia-libero-debitis-qui/
- /voluptatem-suscipit-itaque-quo-libero-totam-ipsam/
- /adipisci-doloremque-ullam-fugit/
- /omnis-ad-eum-cum-mollitia-dolores/
- /voluptate-voluptatibus-fugiat-autem-voluptatibus-doloribus-ut/
- /ola-mundo/
- /consequatur-id-soluta-illo-recusandae-rem/
- /ea-id-quas-nostrum-voluptates-placeat/
- /aperiam-reiciendis-illo-animi/
- /ut-amet-ex-laborum/
- /est-ut-quis-nobis-et-tempora-voluptatem/
- /quas-qui-corrupti-sit-qui-possimus/

### Arquivos de taxonomia (sem conteúdo próprio)

- Categorias do blog: /category/consorcio/, /category/emprestimo/, /category/financiamento/, /category/investimento/, /category/seguro/, /category/sem-categoria/
- Autor: /author/devili/

### Redirecionamentos observados

Os cards "Em breve" da home e da página Sobre apontam para `/consorcio/carros/`, `/consorcio/pesados/`, `/consorcio/motos/` e `/consorcio/imoveis/`; todas essas URLs respondem 301 para as páginas reais (`/carros/` etc.). Os cards de serviços e eletro já apontam direto para `/servicos/` e `/eletro/`.

## 2. SEO atual (titles, meta descriptions, headings)

| Página | Title | Meta description | H1 |
|---|---|---|---|
| Home | MI6 \| consórcio inteligente para realizar sonhos | "Consórcio MI6: planos sem juros para veículos, imóveis, serviços e mais. Escolha com liberdade e realize seus sonhos com segurança." | "6 caminhos para transformar sonhos em conquistas" |
| Sobre | MI6 \| sobre quem somos e nossa missão | "Conheça a MI6 Consórcio: autorizada pelo Banco Central, com transparência, ética e soluções voltadas para carros, imóveis e mais." | NENHUM (página começa em H2) |
| Carros | MI6 \| consórcio de carros sem juros e sem entrada | "Realize o sonho do carro próprio com o consórcio MI6: parcelas acessíveis, sem juros, sem entrada e total transparência." | "O caminho mais seguro para conquistar seu carro" |
| Motos | MI6 \| consórcio de motos sem juros e sem entrada | "Conquiste sua moto com parcelas suaves, sem entrada e sem juros. Planeje com segurança e aproveite a liberdade da escolha." | "Sua nova moto com zero entrada e zero juros" |
| Pesados | MI6 \| consórcio de veículos pesados sem juros | "Invista na sua frota com o consórcio MI6 para pesados: sem entrada, sem juros e com regras claras para você planejar com segurança." | "Realize a conquista do seu próximo caminhão" |
| Imóveis | MI6 \| consórcio de imóveis sem juros e sem entrada | "Realize o sonho da casa própria com MI6: parcelas acessíveis, sem entrada, sem juros e crédito planejado com clareza." | "O melhor caminho para seu imóvel próprio" |
| Serviços | MI6 \| consórcio de serviços sem entrada e sem juros | "Use seu crédito para reformas, cursos, cirurgias e mais. Sem entrada, sem juros e com total transparência no consórcio MI6." | "A solução para investir nos seus projetos" |
| Eletro | MI6 \| consórcio de eletros sem juros e sem entrada | "Adquira eletrodomésticos com consórcio: parcelas acessíveis, sem juros, sem entrada e total transparência com a MI6." | "Uma solução segura para investir em mais tecnologia" |
| Simulação (motos) | Simulação - mi6 | NENHUMA | NENHUM |
| Contato | Contato - mi6 | NENHUMA | NENHUM |
| Blog | Blog - mi6 | NENHUMA | NENHUM |
| Política de Privacidade | Política de Privacidade - mi6 | NENHUMA | "Política de Privacidade" |

Observações de SEO:

- Canonicals corretos em todas as páginas (Yoast).
- Nenhuma página define og:image, exceto a Simulação de motos (foto-moto.jpg).
- As páginas de segmento seguem padrão consistente de title; as páginas utilitárias (Contato, Blog, Simulação, Política) usam o padrão automático "Nome - mi6" e não têm meta description.
- Estrutura de headings das páginas de segmento: H1 no hero, H2 por seção, H3 nos itens. Na Home e Sobre algumas seções usam H2/H3 de forma consistente, mas Sobre não tem H1.

## 3. CTAs e links externos

### Links externos (em todas as páginas, no cabeçalho)

| Texto | Destino |
|---|---|
| Área do cliente | https://mi6.evertecinc.com.br/autoatendimento |
| Canal do parceiro | https://mi6.evertecinc.com.br/newcon.web/frmCorCCCnsLogin.aspx?applicationKey=3M9zL0+WaLYAeBQwijSQEkhjyy42CGuQj8DXZNFUeAoW7bdn/JfcNmUNbNUgQJqaufUv7kqAamOQCRrx6B2F7w== |

### Contatos (página Contato e Política de Privacidade)

- E-mail geral: contato@mi6.com.br (link mailto na página Contato)
- E-mail de privacidade: privacidade@mi6consorcio.com.br (Política de Privacidade)
- SAC: 0800 000 5228 (link tel:08000005228)
- Ouvidoria: 0800 000 5267 (link tel:08000005267)

### Ausências relevantes

- Não há nenhum link de redes sociais (Instagram, Facebook, LinkedIn, YouTube) em nenhuma página.
- Não há botão ou link de WhatsApp.
- O rodapé não traz CNPJ, endereço, telefones de SAC e Ouvidoria, nem selos de regulação.

### CTAs principais por página

| Página | CTA | Destino | Estado |
|---|---|---|---|
| Home (hero) | "Conheça as soluções MI6" | âncora #solucoes | Ativo |
| Home (hero, card motos) | "Simule agora" | /motos/simulacao/ | Ativo |
| Home (cards de segmento) | "Em breve" | páginas de segmento | Texto desabilitado, link funciona |
| Home (passo a passo) | "Em breve, simule o consórcio ideal para você" | / (link para a própria home) | Inativo na prática |
| Segmentos (hero e passo a passo) | "Em breve, simulação do consórcio ideal para você" | varia; ver nota abaixo | Inativo na prática |
| Motos (hero) | "Regulamento" e "Contrato" | PDFs em /wp-content/uploads/2026/02/ | Ativo |
| Segmentos (consórcio x financiamento) | "Simulação em breve" | a própria página | Inativo na prática |
| Segmentos (outros segmentos) | "Saiba mais" | demais páginas de segmento | Ativo |
| Simulação motos | Formulário "Simular agora" | Contact Form 7 (POST na própria página) | Ativo |
| Contato | Formulário "Enviar mensagem" | Contact Form 7 (POST na própria página) | Ativo |
| Blog | "Ver mais posts" | botão de paginação | Ativo |

Nota sobre os CTAs "Em breve" dos heroes de segmento: o destino varia e nem sempre é coerente. Carros, Pesados e Imóveis apontam para a própria página; Motos aponta para /moto/ (redireciona 301 para /motos/); Serviços e Eletro apontam para /carros/, destino errado.

### Formulários

- Contato (CF7 id 113): campos Nome, E-mail, Telefone, Assunto, checkbox "Aceito os termos de uso e a política de privacidade", botão "Enviar mensagem".
- Simulação de motos (CF7 id 589): campos Nome, E-mail, Telefone, mesmo checkbox, botão "Simular agora". Não pergunta valor de crédito nem modelo.
- Busca do blog: campo "Encontre o tema que você deseja".

## 4. Imagens e assets por página

Backup local em `content/assets-originais/`, organizado por página; imagens usadas em mais de uma página ficam em `compartilhadas/` e a identidade da marca em `globais/`.

### Globais (cabeçalho e rodapé de todas as páginas)

- logo-att.png (logo principal, 219x47, alt "mi6")
- logo-footer.svg e logo-footer-att.png (logos do rodapé)
- icon-footer.svg, icon-footer-home.png (ícones do rodapé)

### Home

- bg-_1_.avif (fundo do hero desktop, via CSS) e bg-home-mobile.png (hero mobile)
- Frame-39597.png (ilustração "O que é consórcio"), img-detalhe.png
- Frame-6.png, Frame-6-1.png, Frame-6-2.png (ícones de vantagens)
- icone-att-mi6-1.png, icone-att-mi6-2.png, icone-att-mi6-3.png (ícones do passo a passo)
- icone-e2.png, icon-e2ok.png, img-card.png (faixa de números)

### Sobre

- img-sobre.png (abertura), img-cultura.png, img-responsabilidade.png
- icone-att-mi6-4.png, icone-att-mi6-5.png, icone-att-mi6-6.png (missão, visão, valores)
- img-compromisso-1.png, img-compromisso-2.png, img-compromisso-3.png

### Páginas de segmento

- Heroes desktop via CSS: bg-carro.png (carros), moto.png (motos), pesados.png, imoveis.png, servicos.png, eletro.png
- Heroes mobile: mobile-carro.png, mobile-moto.png, mobile-caminhao.png, mobile-casa.png, mobile-servico.png, mobile-eletro.png
- Compartilhadas entre os segmentos: img-vantagem.png, planejamento-acessivel.png, liberdade-de-escolha.png (vantagens), img-mi6.png (diferenciais), Rectangle-46*.png (cards "outros segmentos")

### Documentos (PDF)

Linkados apenas no hero da página de Motos, com backup em `assets-originais/documentos/`:

- REGULAMENTO-Mi6-so-Auto-e-Imovel-Revisado-Juridico.pdf (39 páginas)
- Contrato-Adesao-Mi6-so-Auto-e-Imovel-Revisado-Juridico.pdf (39 páginas)

### Demais páginas

- Home e Sobre compartilham os cards de segmento Frame-39602*.png/.avif e image-card-3.png
- Simulação motos: foto-moto.jpg
- Contato: contato.png
- Política de Privacidade: bg-single.png (fundo do título)
- Blog: thumbnails dos posts placeholder (não são assets da marca; backup feito mesmo assim em blog/)

## 5. O que não foi raspado e por quê

- Posts do blog: conteúdo lorem ipsum, sem texto real a preservar (lista de URLs acima).
- Arquivos de categoria e autor: páginas geradas automaticamente, sem conteúdo próprio.
- Área do cliente e Canal do parceiro: sistemas externos da Evertec, fora do escopo do site público.
