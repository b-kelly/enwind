<script>
	import { AppLayout, Drawer, initializeStores, getDrawerStore } from '@enwindui/svelte';
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

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

<AppLayout class="w-full max-w-screen-lg mx-auto">
	{#snippet header()}
	
			<nav class="flex items-center mb-4 p-md gap-sm">
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
	
			<Sidebar class="px-md hidden lg:flex" />
		
	{/snippet}

	<div class="px-md">
		{@render children?.()}
	</div>
</AppLayout>
