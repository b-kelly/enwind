<script>
	import Icon from '#docs/Icon.svelte';
	import Sample from '#docs/Sample.svelte';
	import Section from '#docs/Section.svelte';
</script>

<Section title="Modals">
	<Sample
		content={`<aside class="modal visible">
	<div class="modal-dialog">
		<header class="modal-title">
			<span>Title text</span>
			<button type="button" class="btn btn-icon text-current">
				<Icon />
				<span class="sr-only">Close</span>
			</button>
		</header>
		<section class="modal-body">Body text</section>
		<footer class="modal-footer">Footer text</footer>
	</div>
</aside>`}
	>
		<aside class="modal visible relative p-lg">
			<div class="modal-dialog">
				<header class="modal-title">
					<span>Title text</span>
					<button type="button" class="btn btn-icon text-current">
						<Icon icon="xmark" />
						<span class="sr-only">Close</span>
					</button>
				</header>
				<section class="modal-body">Body text</section>
				<footer class="modal-footer">Footer text</footer>
			</div>
		</aside>
	</Sample>
</Section>
