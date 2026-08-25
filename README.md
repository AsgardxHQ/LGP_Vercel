# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Turborepo

The root workspace contains the dashboard and the site projects under `projects/*`.
Use these commands from the repository root:

```bash
# Build every site with Turborepo
npm run build:sites

# Run all site development servers
npm run dev:sites

# Generate every site
npm run generate:sites
```

Individual sites can still be run from their own directory with `npm run dev` or
`npm run build`.

## Standalone Vercel Sites

Create one Vercel project per directory under `projects/*` and set its **Root
Directory** to that site's directory. In Vercel, enable **Include files outside
the root directory in the Build Step**. The site's `npm run build` command then
copies shared root files before Nuxt builds:

- `app/utils/*` is copied to `app/utils/shared/`.
- `server/utils/shared/*` is copied to `server/utils/shared/`.
- `HI_taxonomy.json` is copied to the site root.

Those generated files are ignored by Git. Local `npm run dev` does not copy
anything: it resolves shared utilities and taxonomy data directly from the
repository root, so edit the root files during development.

## Lead Delivery

The root application exposes `POST /api/lead`. Each site sends its completed
flow answers to the root API URL configured with `NUXT_PUBLIC_LEAD_API_URL`.
Set these server-only environment variables on the root Vercel project:

```bash
NUXT_LEAD_WEBHOOK_URL=https://your-backend.example.com/leads
NUXT_LEAD_API_KEY=your-secret-api-key
```

The root API validates `{ site, answers }` and forwards it to the webhook with
the API key in an `Authorization: Bearer` header. Set
`NUXT_PUBLIC_LEAD_API_URL=https://your-root-app.example.com/api/lead` on each
site Vercel project. Do not set `NUXT_LEAD_API_KEY` on a site project.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
