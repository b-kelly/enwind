<script lang="ts">
	import { getDrawerStore } from './store.js';

	const store = getDrawerStore();
	let backdrop: HTMLElement;

	function interact(e: MouseEvent) {
		if (e.target === backdrop) {
			store.close();
		}
	}

	function onEscape(e: KeyboardEvent) {
		if (e.code === 'Escape') {
			store.close();
		}
	}
</script>

<svelte:window on:keydown={onEscape} />

{#if $store.open}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		bind:this={backdrop}
		class="drawer {$$props.class}"
		on:click={interact}
		on:keydown={onEscape}
		aria-expanded={$store.open}
	>
		<div class="drawer-contents {$$props.class}" role="dialog" aria-modal="true">
			<slot />
		</div>
	</div>
{/if}
