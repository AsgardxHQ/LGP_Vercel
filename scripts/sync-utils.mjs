import { copyFile, mkdir, readdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(rootDir, 'app', 'utils');
const projectsDir = join(rootDir, 'projects');
const sharedFiles = ['form-validation.ts', 'taxonomy-routes.ts', 'index.ts'];

const isDirectory = async (path) => {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
};

const projectNames = await readdir(projectsDir);
const syncedProjects = [];

for (const projectName of projectNames) {
  const projectDir = join(projectsDir, projectName);
  const appDir = join(projectDir, 'app');

  if ((await isDirectory(projectDir)) === false || (await isDirectory(appDir)) === false) continue;

  const targetDir = join(appDir, 'utils');
  await mkdir(targetDir, { recursive: true });
  await Promise.all(sharedFiles.map((fileName) => copyFile(join(sourceDir, fileName), join(targetDir, fileName))));
  syncedProjects.push(projectName);
}

if (syncedProjects.length === 0) {
  console.log('No project app directories found.');
} else {
  console.log(`Synced shared utils to ${syncedProjects.join(', ')}.`);
}