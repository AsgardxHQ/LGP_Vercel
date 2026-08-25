import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

const sharedSource = process.env.LGP_SHARED_SOURCE === 'copied'
  ? resolve(process.cwd(), 'app', 'utils', 'shared')
  : resolve(process.cwd(), '..', '..', 'app', 'utils');
const taxonomySource = process.env.LGP_SHARED_SOURCE === 'copied'
  ? resolve(process.cwd(), 'HI_taxonomy.json')
  : resolve(process.cwd(), '..', '..', 'HI_taxonomy.json');

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  alias: {
    '@': resolve(process.cwd(), 'app'),
    '#shared-utils': sharedSource,
    '#shared-taxonomy': taxonomySource
  },
  imports: {
    dirs: [sharedSource]
  },
  runtimeConfig: {
    public: {
      leadApiUrl: process.env.NUXT_PUBLIC_LEAD_API_URL || ''
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  }
});
