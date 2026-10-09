import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://edychie1.github.io',
  base: '/introduce',
  trailingSlash: 'always',
  integrations: [mdx()],
  output: 'static',
  devToolbar: { enabled: false }
});