<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Inputs">
	<Sample title="input[type=text]" class="grid grid-cols-2 gap-2">
		<input type="text" class="input" placeholder="default" />
		<input type="text" class="input focus" placeholder="focus" />
		<input type="text" class="input" value="filled" />
		<input type="text" class="input" placeholder="disabled" disabled />
	</Sample>

	<Sample title="textarea" class="grid grid-cols-2 gap-2">
		<textarea class="input" placeholder="default" />
		<textarea class="input focus" placeholder="focus" />
		<textarea class="input">filled</textarea>
		<textarea class="input" placeholder="disabled" disabled />
	</Sample>

	<Sample title="select" class="grid grid-cols-2 gap-2">
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

<Section title="Form groups">
	<Sample>
		<div class="form-group">
			<label for="fg-example-1">Foo label</label>
			<input id="fg-example-1" type="text" class="input" />
		</div>
	</Sample>
</Section>

<Section title="Checks">
	<Sample class="grid grid-cols-2 gap-2">
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
