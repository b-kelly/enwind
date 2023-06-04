<script lang="ts">
	export let title: string = '';

	let className = '';
	export { className as class };

	let childContent: HTMLElement | undefined;
	$: innerContent = childContent?.innerHTML
		.replace(/<!--.+?-->/g, '')
		.replace(/<span class="icon.+?<\/span>/gs, '<Icon/>')
		.replace(/>\s*?</g, '>\n<');
</script>

<div class="flex flex-col gap-sm">
	{#if title}
		<h3 class="text-xl font-mono">{title}</h3>
	{/if}
	<div class={className || 'contents'} bind:this={childContent}>
		<slot />
	</div>
	<pre>{innerContent}</pre>
</div>

<style>
	pre {
		@apply font-mono bg-body-highlight p-sm max-w-full overflow-auto;
	}
</style>
