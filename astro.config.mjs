// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site estático para deploy na Vercel.
// `site` aponta para o domínio final (mi6consorcio.com.br), usado para gerar
// canonical e sitemap; o swap de DNS acontece só no go-live.
export default defineConfig({
  site: 'https://mi6consorcio.com.br',
  output: 'static',
  integrations: [sitemap()],
});
