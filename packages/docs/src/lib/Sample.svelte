<script lang="ts">
	export let title: string = '';

	let className = '';
	export { className as class };

	export let content: string;
</script>

<div class="flex flex-col gap-sm border border-body-highlight rounded">
	{#if title}
		<h3 class="p-sm text-xl font-mono">{title}</h3>
	{/if}
	<div class="p-sm {className}">
		<slot />
	</div>
	<pre>{content}</pre>
</div>

<style>
	pre {
		@apply font-mono bg-body-highlight p-sm max-w-full overflow-auto;
	}
</style>
