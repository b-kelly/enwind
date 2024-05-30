<script lang="ts">
	import { onMount } from 'svelte';
	import { getModalStore } from './store.js';
	import Icon from '$lib/Icon.svelte';
	import xmark from 'heroicons/20/solid/x-mark.svg?raw';

	export let id: string = '';

	const store = getModalStore();
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

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<aside
	class="modal"
	class:visible={$store[id]}
	{id}
	bind:this={backdrop}
	on:click={interact}
	on:keydown={onEscape}
>
	<div class="modal-dialog {$$props.class}" role="dialog" aria-modal="true">
		<header class="modal-title">
			<slot name="title"></slot>
			<button type="button" class="btn btn-icon text-current" on:click={() => store.close(id)}>
				<Icon title="Close" icon={xmark} />
			</button>
		</header>
		<section class="modal-body">
			<slot name="body"></slot>
		</section>
		<footer class="modal-footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</aside>
