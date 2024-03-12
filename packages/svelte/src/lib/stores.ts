import { initializeDrawerStore, getDrawerStore } from './Drawer/store.js';

/**
 * Initializes the app's stores; call in your root layout
 */
export function initializeStores() {
	initializeDrawerStore();
}

export { getDrawerStore };
