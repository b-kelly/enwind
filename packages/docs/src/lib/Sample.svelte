<script lang="ts">
	import type { Snippet } from 'svelte';
	import { highlight } from './highlight';

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

<div class="flex flex-col gap-sm border border-body-highlight rounded">
	{#if title || description}
		<div class="flex flex-col p-sm">
			{#if title}
				<h3 class="text-xl flex items-center gap-sm">
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
