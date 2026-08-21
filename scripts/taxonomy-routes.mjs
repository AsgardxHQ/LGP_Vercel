import { copyFile, mkdir, readdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = join(rootDir, 'app', 'utils', 'taxonomy-routes.ts');
const projectsDir = join(rootDir, 'projects');

const isDirectory = async (path) => {
	try {
		return (await stat(path)).isDirectory();
	} catch {
		return false;
	}
};

const projectNames = await readdir(projectsDir);
const copiedProjects = [];

for (const projectName of projectNames) {
	const projectDir = join(projectsDir, projectName);
	const appDir = join(projectDir, 'app');

	if ((await isDirectory(projectDir)) === false || (await isDirectory(appDir)) === false) continue;

	const targetPath = join(appDir, 'utils', 'taxonomy-routes.ts');
	await mkdir(dirname(targetPath), { recursive: true });
	await copyFile(sourcePath, targetPath);
	copiedProjects.push(projectName);
}

if (copiedProjects.length === 0) {
	console.log('No project app directories found.');
} else {
	console.log(`Synced taxonomy-routes.ts to ${copiedProjects.join(', ')}.`);
}
