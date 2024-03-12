<script lang="ts">
	import { Icon } from '@enwind/svelte';
	import adjustments from 'heroicons/20/solid/adjustments-horizontal.svg?raw';
	import bars3 from 'heroicons/20/solid/bars-3.svg?raw';
	import sparkles from 'heroicons/20/solid/sparkles.svg?raw';
	import xmark from 'heroicons/20/solid/x-mark.svg?raw';

	const icons = {
		adjustments,
		bars3,
		sparkles,
		xmark
	} as const;

	export let icon: keyof typeof icons;
</script>

<Icon icon={icons[icon]} />
