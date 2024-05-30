<script>
	import Icon from '$lib/Icon.svelte';
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Buttons">
	<Sample
		title=".btn"
		class="flex gap-sm"
		content={`<button type="button" class="btn">default</button>
<button type="button" class="btn" disabled>default</button>`}
	>
		<button type="button" class="btn">default</button>
		<button type="button" class="btn hover">hover</button>
		<button type="button" class="btn focus">focus</button>
		<button type="button" class="btn active">active</button>
		<button type="button" class="btn" disabled>disabled</button>
	</Sample>

	<Sample
		title=".btn.btn-primary"
		class="flex gap-sm"
		content={`<button type="button" class="btn btn-primary">primary</button>
<button type="button" class="btn btn-primary" disabled>primary</button>`}
	>
		<button type="button" class="btn btn-primary">default</button>
		<button type="button" class="btn btn-primary hover">hover</button>
		<button type="button" class="btn btn-primary focus">focus</button>
		<button type="button" class="btn btn-primary active">active</button>
		<button type="button" class="btn btn-primary" disabled> disabled </button>
	</Sample>

	<Sample
		title=".btn.btn-icon"
		class="flex gap-sm"
		content={`<button type="button" class="btn btn-icon"><Icon/></button>
<button type="button" class="btn btn-icon" disabled><Icon/></button>`}
	>
		<button type="button" class="btn btn-icon">
			<Icon icon={'adjustments'} />
		</button>
		<button type="button" class="btn btn-icon hover">
			<Icon icon={'adjustments'} />
		</button>
		<button type="button" class="btn btn-icon focus">
			<Icon icon={'adjustments'} />
		</button>
		<button type="button" class="btn btn-icon active">
			<Icon icon={'adjustments'} />
		</button>
		<button type="button" class="btn btn-icon" disabled>
			<Icon icon={'adjustments'} />
		</button>
	</Sample>
</Section>
