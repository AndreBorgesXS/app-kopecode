
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    esbuild: {
        // Desabilita a verificação de tipos durante a compilação
        jsxInject: `import React from 'react'`,
    },
  plugins: [
    svelte({
      /* Opções de configuração do Svelte, se necessário */
    }),
  ],
  optimizeDeps: {
    exclude: ['@astrojs/svelte'], // Exclui o plugin Astro Svelte da otimização
  },
});
