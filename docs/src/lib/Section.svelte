<script lang="ts">
	export let title: string;
</script>

<section class="pb-4 flex flex-col gap-4">
	<h2 class="text-2xl mb-2 font-mono">{title}</h2>
	<slot />
</section>
