# Contexto do projeto para o Claude

Site institucional da MI6 Consórcio Nacional. Remodelagem do site atual
(mi6consorcio.com.br); conteúdo raspado e revisado em content/.

## Stack decidida (não rediscutir)
- Astro, site estático
- Vercel para deploy (preview por PR)
- Formulário de lead: Microsoft Forms incorporado (iframe)
- Domínio: desenvolver em URL da Vercel; swap de DNS apenas no fim

## Identidade visual (cores do Reino Unido, referência do nome MI6)
- Azul institucional (dominante): #012169
- Vermelho de ação / CTA: #C8102E
- Branco: #FFFFFF (fundo)
- Neutros de apoio: tons de cinza para texto secundário e divisórias
- Logo: https://mi6consorcio.com.br/wp-content/themes/mi6/assets/imgs/logo-att.png
- Versões da marca (regra de Marcílio, 12/06/2026): a primária é o logo
  completo nas cores oficiais (navy + vermelho), para fundo claro (ex.:
  barra do topo). As secundárias se resumem ao símbolo, ou nome + símbolo,
  sempre 100% em branco; quem varia é o fundo (azul, vermelho ou preto).
  Nunca recolorir parcialmente (proibido, por exemplo, M branco com barra
  vermelha sobre navy).

Conceito de marca: MI6 remete a inteligência britânica. A identidade visual
bebe da Union Jack (azul, vermelho, branco) e o tom deve transmitir confianca,
sobriedade e precisao, sem cair em clichê patriótico.


## Links e contatos institucionais
- Área do Cliente (Evertec): https://mi6.evertecinc.com.br/autoatendimento
- SAC: 0800 000 5228
- Ouvidoria: 0800 000 5267

## Padrões de escrita (obrigatório em todo texto produzido)
- Nunca usar travessões no corpo de texto; usar vírgula, ponto e vírgula ou ponto.
- Tom institucional claro, sem jargão técnico desnecessário.
- Português do Brasil.

## Direção de arte (obrigatório, vale para todo o frontend)

### Proibições (clichês de design gerado por IA)
- Gradientes roxo/azul ou rosa/laranja genéricos.
- Glassmorphism, blobs decorativos e particulas flutuantes sem função.
- Emojis usados como ícones na interface.
- Hero centralizado com headline vaga ("Soluções inovadoras") e dois botões.
- Grade de 3 cards idênticos com sombras iguais como recurso padrão.
- Inter, Poppins ou Montserrat como tipografia principal.
- Ilustrações 3D genéricas ou estilo corporate memphis.
- Border-radius uniforme em tudo; dark mode sem necessidade.
- Texto placeholder vago; todo texto vem de content/ ou tem número e fato real.

### Direções positivas
- Identidade editorial: títulos em serif (os e-mails da MI6 já usam Georgia em
  destaque; o site deve herdar essa assinatura), corpo em sans sóbria. Sugerir
  pares tipográficos específicos antes de aplicar.
- Layout com hierarquia forte e assimetria intencional; espaço em branco
  generoso; nem toda seção precisa de card.
- Paleta restrita da Union Jack: azul #012169 dominante, vermelho #C8102E
  apenas em ação/CTA, branco de fundo, cinzas como neutros. Contraste alto.
- Fotografia real ou abstração geométrica da marca em vez de ilustração genérica.
- Números e provas concretas (anos de mercado, grupos ativos, regulação BACEN)
  em vez de adjetivos.
- Microinterações discretas e rápidas; nada que atrase o carregamento.

### Teste de aprovação
Antes de apresentar qualquer página, aplicar o teste: "se eu trocar o logo,
esta página poderia ser de qualquer empresa?" Se sim, refazer. O design deve
parecer desenhado para a MI6, não montado de template.
## Forma de trabalhar
- Commits descritivos, trabalho em branch, PR para main só com aprovação do Marcílio.
- Decisões de produto/design são do Marcílio; apresentar opções com recomendação.
