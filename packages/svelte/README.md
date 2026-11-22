# @enwindui/svelte

Svelte 5 components for [enwind](https://github.com/b-kelly/enwind), a small Tailwind CSS v4 design system.

## Installation

```bash
npm install @enwindui/svelte
```

Requires Svelte 5 and Vite (icons are imported with `?raw`). `@enwindui/enwind` and `heroicons` are installed as dependencies.

## Setup

Import Tailwind and enwind in your CSS:

```css
@import 'tailwindcss';
@import '@enwindui/enwind';
```

Initialize the stores once, in your root layout, so `Modal` and `Drawer` can be opened and closed:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
	import { initializeStores } from '@enwindui/svelte';

	let { children } = $props();

	initializeStores();
</script>

{@render children()}
```
