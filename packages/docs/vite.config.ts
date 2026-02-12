import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import enwindPluginWatcher from './src/vite-plugin-watcher';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss()
		//enwindPluginWatcher()
	]
});
