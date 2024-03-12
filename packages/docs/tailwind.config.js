// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore import the distributable directly so vite picks up rebuilds
import enwind from '../enwind/dist/plugin.js';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', '../svelte/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [enwind({ strict: true })]
};
