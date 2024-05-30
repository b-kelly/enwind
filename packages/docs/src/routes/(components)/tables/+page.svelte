<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Tables">
	<Sample
		content={`<table class="table">
	<thead>
		<tr>
			<th>Column 1</th>
			<th>Column 2</th>
			<th>Column 3</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Foo 1</td>
			<td>Foo 2</td>
			<td>Foo 3</td>
		</tr>
		...
	</tbody>
</table>`}
	>
		<table class="table">
			<thead>
				<tr>
					<th>Column 1</th>
					<th>Column 2</th>
					<th>Column 3</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Foo 1</td>
					<td>Foo 2</td>
					<td>Foo 3</td>
				</tr>
				<tr>
					<td>Bar 1</td>
					<td>Bar 2</td>
					<td>Bar 3</td>
				</tr>
			</tbody>
		</table>
	</Sample>
</Section>
