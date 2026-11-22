<script lang="ts">
	import Icon from '#lib/Icon.svelte';
	import xmark from 'heroicons/20/solid/x-mark.svg?raw';
	import type { Snippet } from 'svelte';
	import type { HTMLDialogAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLDialogAttributes, 'open' | 'title' | 'class'> {
		/** Whether the modal is shown; use `bind:open` */
		open?: boolean;
		title?: Snippet;
		body?: Snippet;
		footer?: Snippet;
		/** Close when clicking outside the dialog panel (default `true`) */
		closeOnBackdrop?: boolean;
		/** Classes for the dialog panel (`.modal-dialog`) */
		class?: string;
	}

	let {
		open = $bindable(false),
		title,
		body,
		footer,
		closeOnBackdrop = true,
		class: className = '',
		...rest
	}: Props = $props();

	const titleId = $props.id();
	let dialog: HTMLDialogElement | undefined = $state();

	$effect(() => {
		if (!dialog) return;

		if (open && !dialog.open) {
			dialog.showModal();
		} else if (!open && dialog.open) {
			dialog.close();
		}
	});
</script>

<dialog
	{...rest}
	bind:this={dialog}
	class="modal"
	aria-labelledby={title ? titleId : undefined}
	onclose={() => (open = false)}
	onclick={(e) => {
		if (closeOnBackdrop && e.target === dialog) {
			open = false;
		}
	}}
>
	<div class="modal-dialog {className}">
		<header class="modal-title">
			{#if title}
				<h2 id={titleId}>{@render title()}</h2>
			{/if}
			<button
				type="button"
				class="btn btn-icon ml-auto text-current"
				onclick={() => (open = false)}
			>
				<Icon icon={xmark} />
				<span class="sr-only">Close</span>
			</button>
		</header>
		{#if body}
			<section class="modal-body">
				{@render body()}
			</section>
		{/if}
		{#if footer}
			<footer class="modal-footer">
				{@render footer()}
			</footer>
		{/if}
	</div>
</dialog>
