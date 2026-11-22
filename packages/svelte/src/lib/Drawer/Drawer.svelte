<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLDialogAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLDialogAttributes, 'open' | 'class'> {
		/** Whether the drawer is shown; use `bind:open` */
		open?: boolean;
		children?: Snippet;
		/** Close when clicking outside the drawer panel (default `true`) */
		closeOnBackdrop?: boolean;
		/** Classes for the drawer panel (`.drawer-contents`) */
		class?: string;
	}

	let {
		open = $bindable(false),
		children,
		closeOnBackdrop = true,
		class: className = '',
		...rest
	}: Props = $props();

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
	class="drawer"
	onclose={() => (open = false)}
	onclick={(e) => {
		if (closeOnBackdrop && e.target === dialog) {
			open = false;
		}
	}}
>
	<div class="drawer-contents {className}">
		{@render children?.()}
	</div>
</dialog>
