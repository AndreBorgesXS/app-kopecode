
import { defineConfig } from 'vite';
import path from 'path';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src').toString(), // Defina aliases conforme necessário
    },
  },
});
