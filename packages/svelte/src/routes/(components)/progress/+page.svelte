<script>
	import Sample from '#docs/Sample.svelte';
	import Section from '#docs/Section.svelte';
</script>

<Section title="Progress bar">
	<Sample
		class="gap-md flex flex-col"
		content={`<div
	class="progress"
	role="progressbar"
	aria-label="current progress"
	aria-valuemin="0"
	aria-valuemax="100"
	aria-valuenow="50"
	style="--value: 50">
</div>

<!-- Bar color -->
<div class="progress text-success" style="--value: 75"></div>`}
	>
		<div class="progress" style:--value={0}></div>
		<div class="progress" style:--value={50}></div>
		<div class="progress" style:--value={100}></div>
		<div class="progress text-success" style:--value={75}></div>
	</Sample>
</Section>

<Section title="Progress circle">
	<Sample
		class="gap-md flex"
		content={`<div class="progress-circle"
	role="progressbar"
	aria-label="current progress"
	aria-valuemin="0"
	aria-valuemax="100"
	aria-valuenow="50"
	style="--value: 50">
	50%
</div>

<!-- Bar color -->
<div class="progress-circle text-success" style="--value: 75">75%</div>`}
	>
		<div class="progress-circle" style="--value: 0">0%</div>
		<div class="progress-circle" style="--value: 50">50%</div>
		<div class="progress-circle" style="--value: 100">100%</div>

		<div class="progress-circle text-success" style="--value: 75">75%</div>
	</Sample>
</Section>
