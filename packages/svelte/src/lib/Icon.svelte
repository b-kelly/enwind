<script lang="ts">
	interface Props {
		icon: string;
		size?: 'lg' | 'sm' | '';
		class?: string;
		[key: string]: unknown;
	}

	let { icon, size = '', class: className, ...rest }: Props = $props();

	function getSizeClass(size: Props['size']) {
		return size ? `icon-${size}` : '';
	}
</script>

<span class="icon {getSizeClass(size)} {className}" {...rest}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html icon}
</span>
