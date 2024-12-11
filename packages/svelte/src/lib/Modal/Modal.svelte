<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import xmark from 'heroicons/20/solid/x-mark.svg?raw';
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { getModalStore } from './store.js';

	interface Props {
		id: string;
		title?: Snippet;
		body?: Snippet;
		footer?: Snippet;
		[key: string]: unknown;
	}

	const { id = '', title, body, footer, ...props }: Props = $props();

	const store = getModalStore();
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

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<aside
	class="modal"
	class:visible={$store[id]}
	{id}
	bind:this={backdrop}
	onclick={interact}
	onkeydown={onEscape}
>
	<div class="modal-dialog {props.class}" role="dialog" aria-modal="true">
		<header class="modal-title">
			{@render title?.()}
			<button type="button" class="btn btn-icon text-current" onclick={() => store.close(id)}>
				<Icon title="Close" icon={xmark} />
			</button>
		</header>
		<section class="modal-body">
			{@render body?.()}
		</section>
		<footer class="modal-footer">
			{@render footer?.()}
		</footer>
	</div>
</aside>
