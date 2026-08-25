# Shared server utils

Put code here that individual sites under `projects/*` should also be able to
use (e.g. generic API helpers, validators). This folder is the **source of
truth** — do not edit the copies under `projects/*/server/utils/shared/`
directly, they get overwritten.

Run `npm run sync` (or `node scripts/sync-server-utils.mjs`) to copy this
folder into every `projects/*/server/utils/shared/`.

Why copy instead of importing across the monorepo with `../../`: each
project in `projects/*` is deployed on Vercel as its own project with its
own Root Directory. Vercel's build for that Root Directory does not see
sibling folders outside it, so any code a site's `server/` needs at runtime
must physically live inside that project's folder. Copying at sync-time
(the same pattern already used for `HI_taxonomy.json` and
`app/utils/*.ts`) keeps every project self-contained and deployable in
isolation while still letting you edit the logic once, here.
