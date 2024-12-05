<script lang="ts">
	import { onMount } from 'svelte';
	import { getDrawerStore } from './store.js';

	interface Props {
		id: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	const { id = '', children, ...props }: Props = $props();

	const store = getDrawerStore();
	let backdrop: HTMLElement | undefined = $state();

	onMount(() => {
		store.register(id);
	});

	function interact(e: MouseEvent) {
		if (e.target === backdrop) {
			store.close(id);
		}
	}

	function onEscape(e: KeyboardEvent) {
		if (e.code === 'Escape') {
			store.close(id);
		}
	}
</script>

<svelte:window on:keydown={onEscape} />

{#if $store[id]}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		{id}
		bind:this={backdrop}
		class="drawer {props.class}"
		onclick={interact}
		onkeydown={onEscape}
		aria-expanded={$store[id]}
	>
		<div class="drawer-contents {props.class}" role="dialog" aria-modal="true">
			{@render children?.()}
		</div>
	</div>
{/if}
