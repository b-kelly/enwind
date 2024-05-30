import { writable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

const CTX_KEY = 'ENWIND_DRAWER_STORE';

interface ModalSettings {
	[key: string]: boolean;
}

export interface ModalStore extends Writable<ModalSettings> {
	open(): void;
	open(id: string | undefined): void;
	close(): void;
	close(id: string | undefined): void;
	register(id: string): void;
}

export function getModalStore(): ModalStore {
	const drawerStore = getContext<ModalStore | undefined>(CTX_KEY);

	if (!drawerStore) {
		throw 'drawer store is not initialized; call `initializeStores()` in your root layout';
	}

	return drawerStore;
}

export function initializeModalStore(): ModalStore {
	const drawerStore = createModalStore();

	return setContext(CTX_KEY, drawerStore);
}

function createModalStore() {
	const store = writable<ModalSettings>({});
	const toggle = (id: string | undefined, open: boolean) =>
		store.update((d) => {
			const keys = Object.keys(d);
			const numKeys = keys.length;
			if (!id && (!numKeys || numKeys > 1)) {
				throw 'Unable to toggle without id; multiple or zero entries created';
			} else if (!id) {
				id = keys[0] || '';
			}

			d[id] = open;
			return d;
		});

	return {
		...store,
		open: (id: string | undefined = undefined) => toggle(id, true),
		close: (id: string | undefined = undefined) => toggle(id, false),
		register: (id: string) =>
			store.update((d) => {
				if (id in d) {
					throw `There is already an item registered with id "${id}"`;
				}

				d[id] = false;
				return d;
			})
	};
}
