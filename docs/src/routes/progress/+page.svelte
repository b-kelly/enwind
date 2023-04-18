<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Progress">
	<Sample>
		<div>
			<div class="progress-circle" style="--value: 0">test</div>
			<div class="progress-circle" style="--value: 50">test</div>
			<div class="progress-circle" style="--value: 100">test</div>
		</div>
	</Sample>
</Section>
