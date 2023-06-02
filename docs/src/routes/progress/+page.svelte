<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Progress">
	<Sample class="flex gap-md">
		<div class="progress-circle" style="--value: 0">0%</div>
		<div class="progress-circle" style="--value: 50">50%</div>
		<div class="progress-circle" style="--value: 100">100%</div>
	</Sample>
</Section>
