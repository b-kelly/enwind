<script lang="ts">
	interface Props {
		header?: import('svelte').Snippet;
		sidebar?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
		class?: string;
	}

	let { ...props }: Props = $props();
</script>

<div class="main-container {props.class}">
	{#if props.header}
		<header class="px-md">{@render props.header?.()}</header>
	{/if}

	<div class="content">
		<div class="gap-lg mx-auto flex w-full max-w-screen-lg">
			{#if props.sidebar}
				<aside class="sidebar">
					{@render props.sidebar?.()}
				</aside>
			{/if}

			<main class="flex-1">{@render props.children?.()}</main>
		</div>

		{#if props.footer}
			<footer class="px-md">
				{@render props.footer?.()}
			</footer>
		{/if}
	</div>
</div>

<style>
	.main-container {
		@apply grid h-screen w-screen;

		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas: 'header' 'main';
	}

	header {
		grid-area: header;
	}

	.content {
		@apply px-md grid overflow-auto;

		grid-area: main;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		grid-template-areas: 'content' 'footer';
	}

	footer {
		grid-area: footer;
	}

	main {
		grid-area: content;
	}
</style>
