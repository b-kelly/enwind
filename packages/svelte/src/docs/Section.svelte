<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section class="pb-md gap-md flex flex-col">
	<h2 class="mb-sm font-mono text-2xl">{title}</h2>
	{@render children?.()}
</section>
