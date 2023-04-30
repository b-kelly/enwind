<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Buttons">
	<Sample title=".btn" class="flex gap-2">
		<button type="button" class="btn">default</button>
		<button type="button" class="btn hover">hover</button>
		<button type="button" class="btn focus">focus</button>
		<button type="button" class="btn active">active</button>
		<button type="button" class="btn" disabled>disabled</button>
	</Sample>

	<Sample title=".btn.btn-primary" class="flex gap-2">
		<button type="button" class="btn btn-primary">default</button>
		<button type="button" class="btn btn-primary hover"> hover </button>
		<button type="button" class="btn btn-primary focus"> focus </button>
		<button type="button" class="btn btn-primary active"> active </button>
		<button type="button" class="btn btn-primary" disabled> disabled </button>
	</Sample>

	<Sample title=".btn.btn-icon" class="flex gap-2">
		<button type="button" class="btn btn-icon">
			<span class="icon icon-adjustments" />
		</button>
		<button type="button" class="btn btn-icon hover">
			<span class="icon icon-adjustments" />
		</button>
		<button type="button" class="btn btn-icon focus">
			<span class="icon icon-adjustments" />
		</button>
		<button type="button" class="btn btn-icon active">
			<span class="icon icon-adjustments" />
		</button>
		<button type="button" class="btn btn-icon" disabled>
			<span class="icon icon-adjustments" />
		</button>
	</Sample>
</Section>
