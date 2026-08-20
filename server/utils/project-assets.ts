// Read-only project data served via Nitro serverAssets so it's bundled into
// the deployed function on every preset (including Vercel), not just local disk.
const PROJECT_MANIFEST_BASE = 'assets:project-manifest';
const APP_ASSET_BASE = 'assets:app';

export const listProjectNames = async (): Promise<string[]> => {
  const storage = useStorage(PROJECT_MANIFEST_BASE);
  const raw = await storage.getItemRaw('projects.json');
  if (!raw) return [];

  const text = Buffer.isBuffer(raw) ? raw.toString('utf8') : String(raw);
  return JSON.parse(text);
};

export const readBaseConfig = async () => {
  const storage = useStorage(APP_ASSET_BASE);
  const raw = await storage.getItemRaw('base.conf');
  if (!raw) {
    throw createError({ statusCode: 404, statusMessage: 'base.conf not found' });
  }

  const text = Buffer.isBuffer(raw) ? raw.toString('utf8') : String(raw);
  return JSON.parse(text);
};

export const listTemplateComponents = async () => {
  const storage = useStorage(APP_ASSET_BASE);
  const keys = await storage.getKeys();
  const prefix = 'templates:app:components:';

  return keys
    .filter((key) => key.startsWith(prefix) && key.endsWith('.vue'))
    .map((key) => {
      const fileName = key.slice(prefix.length);
      return {
        name: fileName.replace(/\.vue$/, ''),
        path: `app/templates/app/components/${fileName}`
      };
    });
};
