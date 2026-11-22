<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section class="pb-md flex flex-col gap-md">
	<h2 class="text-2xl mb-sm font-mono">{title}</h2>
	{@render children?.()}
</section>
