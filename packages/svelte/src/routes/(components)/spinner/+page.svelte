<script>
	import Sample from '#docs/Sample.svelte';
	import Section from '#docs/Section.svelte';
</script>

<Section title="Spinner">
	<Sample
		title=".spinner"
		class="gap-md flex"
		content={`<div class="spinner">
	<span class="sr-only">Loading...</span>
</div>

<div class="spinner spinner-lg text-primary">
	<span class="sr-only">Loading...</span>
</div>`}
	>
		<div class="spinner">
			<span class="sr-only">Loading...</span>
		</div>
		<div class="spinner spinner-lg text-primary">
			<span class="sr-only">Loading...</span>
		</div>
	</Sample>
	<Sample
		title="With text"
		class="gap-md flex"
		content={`<button class="btn btn-primary spinner" aria-busy="true">Loading...</button>
<span class="spinner text-body-content">Loading...</span>`}
	>
		<button class="btn btn-primary spinner" aria-busy="true">Loading...</button>
		<span class="spinner text-body-content">Loading...</span>
	</Sample>
</Section>
