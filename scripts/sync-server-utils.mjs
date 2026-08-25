import { cp, mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(rootDir, 'server', 'utils', 'shared');
const projectsDir = join(rootDir, 'projects');

// Thin re-export entry points generated into each project's server/api/ so
// Nitro registers the route locally, backed by the shared handler logic.
const sharedApiEndpoints = {
  'lead.post.ts': "export { default } from '../utils/shared/lead';\n"
};

const isDirectory = async (path) => {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
};

const projectNames = process.env.LGP_PROJECT_NAME
  ? [process.env.LGP_PROJECT_NAME]
  : await readdir(projectsDir);
const syncedProjects = [];

for (const projectName of projectNames) {
  const projectDir = join(projectsDir, projectName);

  if ((await isDirectory(projectDir)) === false) continue;

  const targetDir = join(projectDir, 'server', 'utils', 'shared');
  await mkdir(targetDir, { recursive: true });
  await cp(sourceDir, targetDir, { recursive: true, filter: (src) => !src.endsWith('README.md') });

  const apiDir = join(projectDir, 'server', 'api');
  await mkdir(apiDir, { recursive: true });
  await Promise.all(
    Object.entries(sharedApiEndpoints).map(([fileName, content]) => writeFile(join(apiDir, fileName), content))
  );

  syncedProjects.push(projectName);
}


if (syncedProjects.length === 0) {
  console.log('No project directories found.');
} else {
  console.log(`Synced server/utils/shared to ${syncedProjects.join(', ')}.`);
}
