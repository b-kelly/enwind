<script lang="ts">
	import Section from '$lib/Section.svelte';

	const spacingClasses = ['w-0', 'w-px', 'w-xs', 'w-sm', 'w-md', 'w-lg', 'w-xl', 'w-2xl', 'w-3xl'];
</script>

<Section title="Spacing">
	<div class="inline-grid grid-cols-2 gap-sm">
		{#each spacingClasses as spacing, i (i)}
			<span>.{spacing}</span>
			<div class="bg-primary text-primary-content {spacing}">&nbsp;</div>
		{/each}
	</div>
</Section>

<!-- TODO add examples -->
<Section title="Utility classes">
	<ul>
		<li>
			<code>.opacity-disabled</code>
		</li>
		<li>
			<code>.outline-sm</code>
		</li>
		<li>
			<code>.z-base</code>
		</li>
		<li>
			<code>.z-drawer</code>
		</li>
		<li>
			<code>.z-modal</code>
		</li>
	</ul>
</Section>
