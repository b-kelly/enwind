<script lang="ts">
	interface Props {
		header?: import('svelte').Snippet;
		sidebar?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { ...props }: Props = $props();
</script>

<div class="flex h-full w-full flex-col overflow-hidden {props.class}">
	{#if props.header}
		<header class="z-10 flex-none">{@render props.header?.()}</header>
	{/if}

	<div class="flex h-full w-full flex-auto overflow-hidden">
		{#if props.sidebar}
			<aside class="w-auto flex-none overflow-y-auto overflow-x-hidden">
				{@render props.sidebar?.()}
			</aside>
		{/if}

		<div class="flex flex-1 flex-col overflow-x-hidden">
			<main class="flex-auto">{@render props.children?.()}</main>

			{#if props.footer}
				<footer class="flex-none">
					{@render props.footer?.()}
				</footer>
			{/if}
		</div>
	</div>
</div>
