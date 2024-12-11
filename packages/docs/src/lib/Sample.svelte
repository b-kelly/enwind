<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		class?: string;
		content: string;
		children?: Snippet;
	}

	let { title = '', class: className = '', content, children }: Props = $props();
</script>

<div class="flex flex-col gap-sm border border-body-highlight rounded">
	{#if title}
		<h3 class="p-sm text-xl font-mono">{title}</h3>
	{/if}
	<div class="p-sm {className}">
		{@render children?.()}
	</div>
	<pre>{content}</pre>
</div>

<style>
	pre {
		@apply font-mono bg-body-highlight p-sm max-w-full overflow-auto;
	}
</style>
