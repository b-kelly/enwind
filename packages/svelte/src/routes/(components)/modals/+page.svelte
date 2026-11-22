<script lang="ts">
	import Icon from '#docs/Icon.svelte';
	import Sample from '#docs/Sample.svelte';
	import Section from '#docs/Section.svelte';
	import { Modal } from '#lib';

	let open = $state(false);
</script>

<Section title="Modals">
	<Sample
		title=".modal"
		content={`<dialog class="modal">
	<div class="modal-dialog">
		<header class="modal-title">
			<h2>Title text</h2>
			<button type="button" class="btn btn-icon text-current">
				<Icon />
				<span class="sr-only">Close</span>
			</button>
		</header>
		<section class="modal-body">Body text</section>
		<footer class="modal-footer">Footer text</footer>
	</div>
</dialog>

<script>
	// open as a modal (backdrop, focus trapping, Escape to close)
	document.querySelector('dialog.modal').showModal();
<\/script>`}
	>
		<!-- Shown inline (non-modal) for the preview -->
		<dialog open class="modal bg-body-overlay relative h-auto">
			<div class="modal-dialog">
				<header class="modal-title">
					<h2>Title text</h2>
					<button type="button" class="btn btn-icon text-current">
						<Icon icon="xmark" />
						<span class="sr-only">Close</span>
					</button>
				</header>
				<section class="modal-body">Body text</section>
				<footer class="modal-footer">Footer text</footer>
			</div>
		</dialog>
	</Sample>

	<Sample
		title="<Modal /> component"
		content={`<script>
	import { Modal } from '@enwindui/svelte';

	let open = $state(false);
<\/script>

<button class="btn" onclick={() => (open = true)}>Open modal</button>

<Modal bind:open>
	{#snippet title()}Are you sure?{/snippet}
	{#snippet body()}This can't be undone.{/snippet}
	{#snippet footer()}
		<button class="btn" onclick={() => (open = false)}>Cancel</button>
	{/snippet}
</Modal>`}
		svelte
	>
		<button class="btn btn-outline" onclick={() => (open = true)}>Open modal</button>

		<Modal bind:open>
			{#snippet title()}Are you sure?{/snippet}
			{#snippet body()}This can't be undone.{/snippet}
			{#snippet footer()}
				<button class="btn btn-outline" onclick={() => (open = false)}>Cancel</button>
			{/snippet}
		</Modal>
	</Sample>
</Section>
