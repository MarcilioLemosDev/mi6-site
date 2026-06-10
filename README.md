# mi6-site

Site institucional da MI6 Consórcio Nacional (remodelagem).

## Stack
- Framework: Astro (site estático, SEO-first)
- Hospedagem: Vercel (deploy automático via GitHub)
- Formulário de lead: Microsoft Forms incorporado
- Domínio final: mi6consorcio.com.br (swap de DNS só no fim)

## Fases do projeto
1. Raspagem e auditoria do site atual -> content/ e docs/
2. Play (referências e protótipos divergentes) -> docs/benchmark.md + protótipos
3. Desenvolvimento final -> site de produção

## Estrutura
- content/ - conteúdo textual em markdown (fiel ao site atual)
- docs/ - inventário, auditoria, benchmark, decisões
- src/ - código Astro (pages, components, layouts)
- public/ - estáticos (favicon, robots, imagens)
