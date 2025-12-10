// @ts-check
import { defineConfig, envField } from 'astro/config';

import vue from '@astrojs/vue';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    vue(),
    react(),
    keystatic()
  ],
  env: {
    schema: {
      KEYSTATIC_GITHUB_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      KEYSTATIC_GITHUB_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
      KEYSTATIC_SECRET: envField.string({ context: "server", access: "secret" }),
    }
  },
  // Force restart
  vite: {
    plugins: [tailwindcss()]
  }
});