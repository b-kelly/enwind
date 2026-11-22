<script lang="ts">
	import Sample from '#docs/Sample.svelte';
	import Section from '#docs/Section.svelte';
	import { Drawer } from '#lib';

	let open = $state(false);
</script>

<Section title="Drawer">
	<Sample
		title=".drawer"
		class="gap-sm flex flex-col"
		content={`<dialog class="drawer" aria-label="Menu">
	<div class="drawer-contents">Drawer contents</div>
</dialog>

<script>
	document.querySelector('dialog.drawer').showModal();
<\/script>`}
	>
		<!-- Shown inline (non-modal) for the preview -->
		<dialog open class="drawer border-body-highlight bg-body-overlay relative h-96 border">
			<div class="drawer-contents">Drawer contents</div>
		</dialog>
	</Sample>

	<Sample
		title="<Drawer /> component"
		content={`<script>
	import { Drawer } from '@enwindui/svelte';

	let open = $state(false);
<\/script>

<button class="btn" onclick={() => (open = true)}>Open drawer</button>

<Drawer bind:open aria-label="Example drawer" class="p-md">
	Drawer contents
</Drawer>`}
		svelte
	>
		<button class="btn btn-outline" onclick={() => (open = true)}>Open drawer</button>

		<Drawer bind:open aria-label="Example drawer" class="p-md">Drawer contents</Drawer>
	</Sample>
</Section>
