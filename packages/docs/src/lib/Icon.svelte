<script lang="ts">
	import { Icon } from '@enwindui/svelte';
	import adjustments from 'heroicons/20/solid/adjustments-horizontal.svg?raw';
	import bars3 from 'heroicons/20/solid/bars-3.svg?raw';
	import play from 'heroicons/20/solid/play.svg?raw';
	import sparkles from 'heroicons/20/solid/sparkles.svg?raw';
	import speakerWave from 'heroicons/20/solid/speaker-wave.svg?raw';
	import xmark from 'heroicons/20/solid/x-mark.svg?raw';

	const icons = {
		adjustments,
		bars3,
		play,
		sparkles,
		speakerWave,
		xmark
	} as const;

	interface Props {
		icon: keyof typeof icons;
	}

	let { icon }: Props = $props();
</script>

<Icon icon={icons[icon]} />
