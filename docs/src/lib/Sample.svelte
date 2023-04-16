<script lang="ts">
	export let title: string = '';

	let childContent: HTMLElement;
</script>

<div class="flex flex-col gap-2">
	{#if title}
		<h3 class="text-xl font-mono">{title}</h3>
	{/if}
	<div class="contents" bind:this={childContent}>
		<slot />
	</div>
	<pre>{childContent?.innerHTML.replace(/>\s*?</g, '>\n<')}</pre>
</div>

<style>
	pre {
		@apply font-mono bg-body-highlight p-2 max-w-full overflow-auto;
	}
</style>
