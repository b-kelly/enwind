<script>
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';
	import '../app.css';

	function toggleMode() {
		document.body.classList.toggle('theme-dark');
	}
</script>

<nav class="flex justify-between items-center mb-4">
	<h1 class="text-3xl font-bold"><a href={base || '/'}>enwind</a></h1>
	<button class="btn inline-flex items-center gap-xs" on:click={toggleMode} type="button">
		<Icon icon={'sparkles'} />
		Switch mode
	</button>
</nav>

<slot />
