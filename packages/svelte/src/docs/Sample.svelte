<script lang="ts">
	import type { Snippet } from 'svelte';
	import { highlight } from './highlight.ts';

	interface Props {
		title?: string;
		class?: string;
		content: string;
		svelte?: boolean;
		children?: Snippet;
		description?: Snippet;
	}

	let {
		title = '',
		class: className = '',
		content,
		svelte,
		children,
		description
	}: Props = $props();
</script>

<div class="gap-sm border-body-highlight flex flex-col rounded border">
	{#if title || description}
		<div class="p-sm flex flex-col">
			{#if title}
				<h3 class="gap-sm flex items-center text-xl">
					<span class="font-mono">{title}</span>
					{#if svelte}
						<span class="badge badge-primary badge-sm">Svelte</span>
					{/if}
				</h3>
			{/if}
			{#if description}
				<p class="text-sm">{@render description()}</p>
			{/if}
		</div>
	{/if}
	<div class="p-sm {className}">
		{@render children?.()}
	</div>
	<!-- eslint-disable svelte/no-at-html-tags -->
	<pre class="codeblock rounded-none"><code>{@html highlight(content, 'xml')}</code></pre>
</div>
