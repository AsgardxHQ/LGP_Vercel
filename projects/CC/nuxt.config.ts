import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  alias: {
    '@': resolve(process.cwd(), 'app'),
    '@': resolve(process.cwd(), '..', '..')
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  }
});
