<script lang="ts">
	import Sample from '#docs/Sample.svelte';
	import Section from '#docs/Section.svelte';
</script>

<Section title="Drawer">
	<Sample
		class="flex flex-col gap-sm"
		content={`<div class="drawer">
	<div class="drawer-contents" role="dialog" aria-modal="true">Drawer contents</div>
</div>`}
	>
		<div class="drawer relative h-96 border border-body-highlight">
			<div class="drawer-contents" role="dialog" aria-modal="true">Drawer contents</div>
		</div>
		<!-- <Drawer /> -->
	</Sample>
</Section>
