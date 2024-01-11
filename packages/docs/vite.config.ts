import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import enwindPluginWatcher from './src/vite-plugin-watcher';

export default defineConfig({
	plugins: [sveltekit(), enwindPluginWatcher()]
});
