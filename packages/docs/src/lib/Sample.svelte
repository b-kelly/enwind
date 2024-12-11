<script lang="ts">
	import type { Snippet } from 'svelte';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	hljs.registerLanguage('javascript', xml);

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
	<pre class="codeblock rounded-none"><code
			>{@html hljs.highlight(content, { language: 'html' }).value}</code
		></pre>
</div>

<style>
	pre {
		@apply font-mono p-sm max-w-full overflow-auto;
	}
</style>
