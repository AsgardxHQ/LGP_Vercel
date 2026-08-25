import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';
import { sharedUtilImports } from '../../scripts/shared-util-imports.mjs';

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
  // Named imports only (not `dirs: [sharedSource]`): in LGP_SHARED_SOURCE=root dev
  // mode sharedSource is the whole root app/utils folder, and directory-scanning it
  // would also auto-import root-only files like usePageFlow.ts, silently shadowing
  // this project's own same-named usePageFlow.ts/FlowAnswers.
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
