// @ts-check
import { defineConfig, envField } from 'astro/config';

import vue from '@astrojs/vue';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://omarmtya.com',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    vue(),
    react(),
    keystatic(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-MX',
        },
      },
      filter: (page) => 
        !page.includes('/keystatic') && 
        !page.includes('/admin') &&
        !page.includes('/api/')
    })
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