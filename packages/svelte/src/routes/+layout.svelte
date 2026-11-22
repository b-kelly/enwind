<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Icon from '#docs/Icon.svelte';
	import Sidebar from '#docs/Sidebar.svelte';
	import { AppLayout, Drawer } from '#lib';
	import type { Snippet } from 'svelte';
	import '../app.css';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let menuOpen = $state(false);

	// TODO reenable when dark mode class support is readded
	// function toggleMode() {
	// 	document.body.classList.toggle('theme-dark');
	// }
	onNavigate(({ shallow, type }) => {
		if (shallow && type === 'goto') return;

		menuOpen = false;
	});
</script>

<Drawer bind:open={menuOpen} aria-label="Menu">
	<Sidebar class="p-md flex" />
</Drawer>

<AppLayout>
	{#snippet header()}
		<nav class="gap-sm py-md mx-auto flex w-full max-w-screen-lg items-center">
			<button class="btn lg:hidden" aria-expanded={menuOpen} onclick={() => (menuOpen = true)}>
				<Icon icon="bars3" />
				<span class="sr-only">Menu</span>
			</button>
			<h1 class="text-3xl font-bold"><a href={resolve('/')}>enwind</a></h1>
			<!-- <button
				class="btn inline-flex items-center gap-xs ml-auto"
				onclick={toggleMode}
				type="button"
			>
				<Icon icon="sparkles" />
				Switch mode
			</button> -->
		</nav>
	{/snippet}

	{#snippet sidebar()}
		<Sidebar class="hidden lg:flex" />
	{/snippet}

	{@render children?.()}

	<!-- {#snippet footer()}
		<div class="mx-auto w-full max-w-screen-lg">TODO FOOTER</div>
	{/snippet} -->
</AppLayout>
