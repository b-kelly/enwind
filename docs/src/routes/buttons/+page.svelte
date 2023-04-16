<script>
	import Section from '$lib/Section.svelte';
</script>

<Section title="Buttons">
	<h3>.btn</h3>
	<div class="flex gap-2">
		<button type="button" class="btn">default</button>
		<button type="button" class="btn hover">hover</button>
		<button type="button" class="btn focus">focus</button>
		<button type="button" class="btn active">active</button>
		<button type="button" class="btn" disabled>disabled</button>
	</div>

	<h3>.btn.btn-primary</h3>
	<div class="flex gap-2">
		<button type="button" class="btn btn-primary">default</button>
		<button type="button" class="btn btn-primary hover"> hover </button>
		<button type="button" class="btn btn-primary focus"> focus </button>
		<button type="button" class="btn btn-primary active"> active </button>
		<button type="button" class="btn btn-primary" disabled> disabled </button>
	</div>

	<h3>.btn.btn-icon</h3>
	<div>
		<div class="flex gap-2">
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
		</div>
	</div>
</Section>
