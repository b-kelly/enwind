<script lang="ts">
	export let title: string;
</script>

<section>
	<h2>{title}</h2>
	<slot />
</section>

<style lang="postcss">
	section {
		@apply mb-4 border-b pb-4 flex flex-col gap-2
            last-of-type:border-b-0;
	}

	section h2 {
		@apply text-2xl mb-2 font-mono;
	}

	section :global(h3) {
		@apply text-xl font-mono;
	}
</style>
