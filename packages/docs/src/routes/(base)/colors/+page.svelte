<script>
	import Section from '$lib/Section.svelte';
</script>

<Section title="Colors">
	<div class="grid grid-cols-2 gap-sm font-mono">
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body"></span>
			<span>colors.body</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body-content"></span>
			<span>colors.body.content</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body-content-light"></span>
			<span>colors.body.content.light</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body-content-dark"></span>
			<span>colors.body.content.dark</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body-highlight"></span>
			<span>colors.body.highlight</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-body-overlay"></span>
			<span>colors.body.overlay</span>
		</div>

		<hr class="col-span-2" />

		<div class="flex ai-center gap-sm">
			<span class="swatch bg-primary"></span>
			<span>colors.primary</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-primary-content"></span>
			<span>colors.primary.content</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-primary-focus"></span>
			<span>colors.primary.focus</span>
		</div>

		<hr class="col-span-2" />

		<div class="flex ai-center gap-sm">
			<span class="swatch bg-success"></span>
			<span>colors.success</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-success-focus"></span>
			<span>colors.success.focus</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-warn"></span>
			<span>colors.warn</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-warn-focus"></span>
			<span>colors.warn.focus</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-danger"></span>
			<span>colors.danger</span>
		</div>
		<div class="flex ai-center gap-sm">
			<span class="swatch bg-danger-focus"></span>
			<span>colors.danger.focus</span>
		</div>
	</div>
</Section>

<Section title="Examples">
	<div class="flex flex-col gap-sm">
		<div class="flex gap-sm">
			<div>
				<p class="text-body-content-light">light text</p>
				<p class="text-body-content">default text</p>
				<p class="text-body-content-dark">dark text</p>
			</div>

			<div>
				<p class="text-success">success text</p>
				<p class="text-warn">warn text</p>
				<p class="text-danger">danger text</p>
			</div>
		</div>

		<hr />

		<div class="bg-body-overlay flex flex-col p-sm gap-sm items-center justify-center rounded">
			<div class="self-start text-body-content-dark">.bg-body-overlay</div>
			<div class="bg-body p-sm rounded">
				.bg-body
				<div class="bg-body-highlight p-xs rounded">.bg-body-highlight</div>
			</div>
		</div>

		<div class="flex gap-sm">
			<div class="bg-primary text-primary-content rounded p-sm">primary content</div>
			<div class="bg-primary-focus text-primary-content rounded p-sm">focused primary content</div>
		</div>

		<div class="flex gap-sm">
			<div class="bg-success text-primary-content rounded p-sm">success content</div>
			<div class="bg-success-focus text-primary-content rounded p-sm">focused success content</div>
		</div>

		<div class="flex gap-sm">
			<div class="bg-warn text-primary-content rounded p-sm">warn content</div>
			<div class="bg-warn-focus text-primary-content rounded p-sm">focused warn content</div>
		</div>

		<div class="flex gap-sm">
			<div class="bg-danger text-primary-content rounded p-sm">danger content</div>
			<div class="bg-danger-focus text-primary-content rounded p-sm">focused danger content</div>
		</div>
	</div>
</Section>

<style>
	.swatch {
		@apply w-lg h-lg inline-block border;
	}
</style>
