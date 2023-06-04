<script lang="ts">
	export let title: string;
</script>

<section class="pb-md flex flex-col gap-md">
	<h2 class="text-2xl mb-sm font-mono">{title}</h2>
	<slot />
</section>
