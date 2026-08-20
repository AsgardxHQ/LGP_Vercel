import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

const manifestDir = resolve(process.cwd(), '.data', 'project-manifest')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    '@': resolve(process.cwd(), 'app'),
    '@global': resolve(process.cwd())
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  hooks: {
    // Bundling projects/** whole (incl. each project's own node_modules) as
    // serverAssets OOMs the build, so ship a tiny name-only manifest instead.
    'build:before': () => {
      const projectsDir = resolve(process.cwd(), 'projects')
      const names = existsSync(projectsDir)
        ? readdirSync(projectsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name)
        : []

      mkdirSync(manifestDir, { recursive: true })
      writeFileSync(resolve(manifestDir, 'projects.json'), JSON.stringify(names))
    }
  },
  nitro: {
    // Bundles these into the deployed function on every preset (incl. Vercel),
    // where process.cwd()-relative fs reads of source folders aren't available.
    serverAssets: [
      { baseName: 'project-manifest', dir: manifestDir },
      { baseName: 'app', dir: resolve(process.cwd(), 'app') }
    ]
  }
})

