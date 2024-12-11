<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import { AppLayout, Drawer, getDrawerStore, initializeStores } from '@enwindui/svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	initializeStores();

	const drawerStore = getDrawerStore();

	function toggleMode() {
		document.body.classList.toggle('theme-dark');
	}

	onNavigate(() => {
		drawerStore.close();
	});
</script>

<Drawer id="sidebar-drawer" class="lg:hidden">
	<Sidebar class="p-md flex" />
</Drawer>

<AppLayout>
	{#snippet header()}
		<nav class="mx-auto w-full max-w-screen-lg flex items-center gap-sm py-md">
			<button class="btn lg:hidden" onclick={() => drawerStore.open()}>
				<Icon icon="bars3"></Icon>
				<span class="sr-only">Menu</span>
			</button>
			<h1 class="text-3xl font-bold"><a href={base || '/'}>enwind</a></h1>
			<button
				class="btn inline-flex items-center gap-xs ml-auto"
				onclick={toggleMode}
				type="button"
			>
				<Icon icon={'sparkles'} />
				Switch mode
			</button>
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
