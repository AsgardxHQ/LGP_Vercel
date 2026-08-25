import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { sharedUtilImports } from '../../scripts/shared-util-imports.mjs';

const sharedSource = process.env.LGP_SHARED_SOURCE === 'copied'
  ? resolve(process.cwd(), 'app', 'utils', 'shared')
  : resolve(process.cwd(), '..', '..', 'app', 'utils');

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  buildDir: '.nuxt',
  alias: {
    '@': resolve(process.cwd(), 'app'),
    '#shared-utils': sharedSource
  },
  // Named imports only, see projects/CC/nuxt.config.ts for why not `dirs: [sharedSource]`.
  imports: {
    imports: sharedUtilImports(sharedSource)
  },
  runtimeConfig: {
    leadWebhookUrl: process.env.NUXT_LEAD_WEBHOOK_URL || '',
    leadApiKey: process.env.NUXT_LEAD_API_KEY || '',
    public: {
      leadApiUrl: process.env.NUXT_PUBLIC_LEAD_API_URL || ''
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  }
});
