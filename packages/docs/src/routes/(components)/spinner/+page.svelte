<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Spinner">
	<Sample
		title=".spinner"
		class="flex gap-md"
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
		class="flex gap-md"
		content={`<button class="btn btn-primary spinner" aria-busy="true">Loading...</button>
<span class="spinner text-body-content">Loading...</span>`}
	>
		<button class="btn btn-primary spinner" aria-busy="true">Loading...</button>
		<span class="spinner text-body-content">Loading...</span>
	</Sample>
</Section>
