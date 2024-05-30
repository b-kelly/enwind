import { initializeDrawerStore, getDrawerStore } from './Drawer/store.js';
import { initializeModalStore, getModalStore } from './Modal/store.js';

/**
 * Initializes the app's stores; call in your root layout
 */
export function initializeStores() {
	initializeDrawerStore();
	initializeModalStore();
}

export { getDrawerStore, getModalStore };
