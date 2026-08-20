import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  buildDir: '.nuxt',
  alias: {
    '@': resolve(process.cwd(), 'app')
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  }
});
