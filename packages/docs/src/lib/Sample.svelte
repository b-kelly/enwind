<script lang="ts">
	import type { Snippet } from 'svelte';
	import { highlight } from './highlight';

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
	<!-- eslint-disable svelte/no-at-html-tags -->
	<pre class="codeblock rounded-none"><code>{@html highlight(content, 'xml')}</code></pre>
</div>
