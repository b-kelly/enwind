import { writable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

const CTX_KEY = 'ENWIND_DRAWER_STORE';

interface DrawerSettings {
	open?: boolean;
}

export interface DrawerStore extends Writable<DrawerSettings> {
	open(): void;
	close(): void;
}

export function getDrawerStore(): DrawerStore {
	const drawerStore = getContext<DrawerStore | undefined>(CTX_KEY);

	if (!drawerStore) {
		throw 'drawer store is not initialized; call `initializeStores()` in your root layout';
	}

	return drawerStore;
}

export function initializeDrawerStore(): DrawerStore {
	const drawerStore = createDrawerStore();

	return setContext(CTX_KEY, drawerStore);
}

function createDrawerStore() {
	const store = writable<DrawerSettings>({});
	const toggle = (open: boolean) =>
		store.update((d) => {
			d.open = open;
			return d;
		});

	return {
		...store,
		open: () => toggle(true),
		close: () => toggle(false)
	};
}
