<script lang="ts">
    export let icon: string;
</script>

<span class="icon" {...$$restProps}>{@html icon}</span>

<style>
	.icon {
		@apply inline-block h-[20px] w-[20px] text-[0] align-bottom;
	}
</style>
