import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',  // ou 'static', dependendo do que você precisa
  adapter: cloudflare(),
});
