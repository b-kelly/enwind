<script lang="ts">
	import { onMount } from 'svelte';
	import { getDrawerStore } from './store.js';

	export let id: string = '';

	const store = getDrawerStore();
	let backdrop: HTMLElement;

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
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		{id}
		bind:this={backdrop}
		class="drawer {$$props.class}"
		on:click={interact}
		on:keydown={onEscape}
		aria-expanded={$store[id]}
	>
		<div class="drawer-contents {$$props.class}" role="dialog" aria-modal="true">
			<slot />
		</div>
	</div>
{/if}
