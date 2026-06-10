// @ts-check
import { defineConfig } from 'astro/config';

// Site estático para deploy na Vercel.
// A propriedade `site` será definida quando houver URL pública estável
// (preview da Vercel na FASE 2; mi6consorcio.com.br apenas no fim).
export default defineConfig({
  output: 'static',
});
