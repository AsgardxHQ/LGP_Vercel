import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';

const sharedSource = process.env.LGP_SHARED_SOURCE === 'copied'
  ? resolve(process.cwd(), 'app', 'utils', 'shared')
  : resolve(process.cwd(), '..', '..', 'app', 'utils');
const taxonomySource = process.env.LGP_SHARED_SOURCE === 'copied'
  ? resolve(process.cwd(), 'HI_taxonomy.json')
  : resolve(process.cwd(), '..', '..', 'HI_taxonomy.json');

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  buildDir: '.nuxt',
  alias: {
    '#shared-utils': sharedSource,
    '#shared-taxonomy': taxonomySource
  },
  imports: {
    dirs: [sharedSource]
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  }
});
