<script lang="ts">
	import adjustments from 'heroicons/20/solid/adjustments-horizontal.svg?raw';
	import sparkles from 'heroicons/20/solid/sparkles.svg?raw';
	import xmark from 'heroicons/20/solid/x-mark.svg?raw';

	const icons = {
		adjustments,
		sparkles,
		xmark
	} as const;

	export let icon: keyof typeof icons;
</script>

<span class="icon" {...$$restProps}>{@html icons[icon]}</span>

<style>
	.icon {
		@apply inline-block h-[20px] w-[20px] text-[0] align-bottom;
	}
</style>
