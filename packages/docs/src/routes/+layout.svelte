<script>
	import { AppLayout, Drawer, initializeStores, getDrawerStore } from '@enwind/svelte';
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	initializeStores();

	const drawerStore = getDrawerStore();

	function toggleMode() {
		document.body.classList.toggle('theme-dark');
	}

	onNavigate(() => {
		drawerStore.close();
	});
</script>

<Drawer class="lg:hidden">
	<Sidebar class="p-md flex" />
</Drawer>

<AppLayout class="w-full max-w-screen-lg mx-auto">
	<svelte:fragment slot="header">
		<nav class="flex items-center mb-4 p-md gap-sm">
			<button class="btn lg:hidden" on:click={() => drawerStore.open()}>
				<Icon icon="bars3"></Icon>
			</button>
			<h1 class="text-3xl font-bold"><a href={base || '/'}>enwind</a></h1>
			<button
				class="btn inline-flex items-center gap-xs ml-auto"
				on:click={toggleMode}
				type="button"
			>
				<Icon icon={'sparkles'} />
				Switch mode
			</button>
		</nav>
	</svelte:fragment>

	<svelte:fragment slot="sidebar">
		<Sidebar class="px-md hidden lg:flex" />
	</svelte:fragment>

	<div class="px-md">
		<slot />
	</div>
</AppLayout>
