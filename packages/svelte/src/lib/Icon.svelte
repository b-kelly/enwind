<script lang="ts">
	interface Props {
		icon: string;
		[key: string]: unknown;
	}

	let { icon, ...rest }: Props = $props();
</script>

<span class="icon" {...rest}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html icon}
</span>

<style>
	.icon {
		@apply inline-block h-[20px] w-[20px] align-bottom text-[0];
	}
</style>
