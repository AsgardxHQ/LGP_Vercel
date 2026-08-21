import { copyFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = join(rootDir, 'HI_taxonomy.json');
const projectsDir = join(rootDir, 'projects');

const isDirectory = async (path) => {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
};

const { readdir } = await import('node:fs/promises');
const projectNames = await readdir(projectsDir);
const copiedProjects = [];

for (const projectName of projectNames) {
  const projectDir = join(projectsDir, projectName);

  if ((await isDirectory(projectDir)) === false) continue;

  await copyFile(sourcePath, join(projectDir, 'HI_taxonomy.json'));
  copiedProjects.push(projectName);
}

if (copiedProjects.length === 0) {
  console.log('No project directories found.');
} else {
  console.log(`Synced HI_taxonomy.json to ${copiedProjects.join(', ')}.`);
}