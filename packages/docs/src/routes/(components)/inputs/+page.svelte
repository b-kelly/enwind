<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Inputs">
	<Sample
		title="input[type=text]"
		class="grid grid-cols-2 gap-sm"
		content={`<input type="text" class="input" />`}
	>
		<input type="text" class="input" placeholder="default" />
		<input type="text" class="input focus" placeholder="focus" />
		<input type="text" class="input" value="filled" />
		<input type="text" class="input" placeholder="disabled" disabled />
	</Sample>

	<Sample title="textarea" class="grid grid-cols-2 gap-sm" content={`<textarea class="input" />`}>
		<textarea class="input" placeholder="default"></textarea>
		<textarea class="input focus" placeholder="focus"></textarea>
		<textarea class="input">filled</textarea>
		<textarea class="input" placeholder="disabled" disabled></textarea>
	</Sample>

	<Sample
		title="select"
		class="grid grid-cols-2 gap-sm"
		content={`<select class="input">
	<option>select</option>
</select>`}
	>
		<select class="input">
			<option>select</option>
		</select>
		<select class="input focus">
			<option>focus</option>
		</select>
		<select class="input" disabled>
			<option>disabled</option>
		</select>
	</Sample>
</Section>

<Section title="Checks">
	<Sample
		class="grid grid-cols-2 gap-sm"
		content={`<input type="checkbox" class="check" />
<input type="checkbox" class="check" checked disabled />

<input type="radio" class="check" />
<input type="radio" class="check" checked disabled />`}
	>
		<div>
			<input type="checkbox" class="check" />
			<input type="checkbox" class="check focus" />
			<input type="checkbox" class="check" checked />
			<input type="checkbox" class="check" disabled />
			<input type="checkbox" class="check" checked disabled />
		</div>
		<div>
			<input type="radio" class="check" />
			<input type="radio" class="check focus" />
			<input type="radio" class="check" checked />
			<input type="radio" class="check" disabled />
			<input type="radio" class="check" checked disabled />
		</div>
	</Sample>
</Section>

<Section title="Layout">
	<Sample
		title=".form-group"
		content={`<div class="form-group">
	<label for="fg-example-1">Foo label</label>
	<input id="fg-example-1" type="text" class="input" />
</div>`}
	>
		<div class="form-group">
			<label for="fg-example-1">Foo label</label>
			<input id="fg-example-1" type="text" class="input" />
		</div>
	</Sample>

	<Sample
		title=".form-check"
		content={`<div class="form-check">
	<input id="fc-example-1" type="checkbox" class="check" />
	<label for="fc-example-1">Foo label</label>
</div>`}
	>
		<div class="form-check">
			<input id="fc-example-1" type="checkbox" class="check" />
			<label for="fc-example-1">Foo label</label>
		</div>
	</Sample>

	<Sample
		title=".form-inline"
		content={`<form class="form-inline">
	<div class="form-check">
		<input id="fi-example-1" type="checkbox" class="check" />
		<label for="fi-example-1">Foo label</label>
	</div>

	<div class="form-group">
		<label for="fi-example-2">Foo label</label>
		<input id="fi-example-2" type="text" class="input" />
	</div>
</div>`}
	>
		<div class="form-inline">
			<div class="form-check">
				<input id="fi-example-1" type="checkbox" class="check" />
				<label for="fi-example-1">Check label</label>
			</div>

			<div class="form-group">
				<label for="fi-example-2">Input label</label>
				<input id="fi-example-2" type="text" class="input" />
			</div>
		</div>
	</Sample>
</Section>
