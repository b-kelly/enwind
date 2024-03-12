<script lang="ts">
	import Section from '$lib/Section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Section title="Spacing">
	<div class="inline-grid grid-cols-2 gap-sm">
		{#each Object.entries(data?.spacing || {}) as [key, value]}
			<span>{key} ({value})</span>
			<div class="bg-primary text-primary-content" style="width: {value}">&nbsp;</div>
		{/each}
	</div>
</Section>
