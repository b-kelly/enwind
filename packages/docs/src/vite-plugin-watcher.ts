import type { Plugin } from 'vite';
import { Minimatch } from 'minimatch';
import { exec } from 'node:child_process';
import { join, resolve, basename } from 'node:path';
import util from 'node:util';

const execAsync = util.promisify(exec);

export default function enwindPluginWatcher(): Plugin {
	const pluginSrcPath = resolve('.', join('..', 'enwind', 'src'));
	const mm = new Minimatch('**/packages/enwind/src/**/*');
	let locked = false;

	return {
		name: 'enwind-plugin-watcher',
		configureServer(vite) {
			vite.watcher.add(pluginSrcPath);
			vite.watcher.on('all', async (_, path) => {
				if (mm.match(path) && !path.includes('dist')) {
					console.log(`[Enwind]: File Updated: ${basename(path)}`);
					if (!locked) {
						locked = true;
						await build(Date.now());
						locked = false;
					}
				}
			});
		},
		async buildStart() {
			await build(Date.now());
		}
	};
}

async function build(startTime: number) {
	await execAsync('npm run build -w @enwindui/enwind');
	console.log(`[Enwind]: Completed in ${Date.now() - startTime}ms`);
}
