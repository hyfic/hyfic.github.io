import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hyfic.org',
  output: 'static',
  trailingSlash: 'always',
  outDir: './dist',
});
