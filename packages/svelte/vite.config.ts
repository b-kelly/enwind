import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

// src/lib is the published library (built by svelte-package);
// src/routes + src/docs are the docs site (built by vite build, deployed to GitHub Pages).
export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [vitePreprocess({})],
			adapter: adapter(),
			paths: { base: (process.env.BASE_PATH || '') as '' | `/${string}` }
		}),
		tailwindcss()
	],
	test: { include: ['src/**/*.{test,spec}.{js,ts}'] }
});
