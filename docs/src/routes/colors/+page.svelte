<script>
	import Section from '$lib/Section.svelte';
</script>

<Section title="Colors">
	<div class="grid grid-cols-2 gap-sm font-mono">
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body" />
			<span>colors.body</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body-content" />
			<span>colors.body.content</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body-highlight" />
			<span>colors.body.highlight</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-primary" />
			<span>colors.primary</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-primary-content" />
			<span>colors.primary.content</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-primary-focus" />
			<span>colors.primary.focus</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-success" />
			<span>colors.success</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-success-focus" />
			<span>colors.success.focus</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-warn" />
			<span>colors.warn</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-warn-focus" />
			<span>colors.warn.focus</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-danger" />
			<span>colors.danger</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-danger-focus" />
			<span>colors.danger.focus</span>
		</div>
	</div>
</Section>

<style>
	.swatch {
		@apply w-8 h-8 inline-block border;
	}
</style>
