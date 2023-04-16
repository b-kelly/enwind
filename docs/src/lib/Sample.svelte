<script lang="ts">
	export let title: string = '';
</script>

<div class="flex flex-col gap-2">
	{#if title}
		<h3 class="text-xl font-mono">{title}</h3>
	{/if}
	<slot />
</div>
