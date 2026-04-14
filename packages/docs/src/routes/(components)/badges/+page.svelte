<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title="Badge">
	<Sample
		title=".badge"
		class=""
		content={`<span class="badge">Unstyled badge</span>
<button class="btn btn-primary">
	Notifications <span class="badge">99+</span>
</button>`}
	>
		<span class="badge">Unstyled badge</span>
		<button class="btn btn-primary">
			Notifications <span class="badge">99+</span>
		</button>
	</Sample>
	<Sample
		title="Status variants"
		class="flex gap-md"
		content={`<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warn">Warn</span>
<span class="badge badge-danger">Danger</span>`}
	>
		<span class="badge badge-primary">Primary</span>
		<span class="badge badge-success">Success</span>
		<span class="badge badge-warn">Warn</span>
		<span class="badge badge-danger">Danger</span>
	</Sample>

	<Sample
		title="Sizes"
		content={`<span class="badge">Default</span>
<span class="badge badge-sm">Small</span>`}
	>
		<span class="badge">Default</span>
		<span class="badge badge-sm">Small</span>
	</Sample>

	<Sample
		title="Pills"
		content={`<span class="badge badge-pill">Default</span>
<span class="badge badge-pill badge-sm">Small</span>`}
	>
		<span class="badge badge-pill">Default</span>
		<span class="badge badge-pill badge-sm">Small</span>
		<span class="badge badge-pill badge-primary">Primary</span>
		<span class="badge badge-pill badge-success">Success</span>
		<span class="badge badge-pill badge-warn">Warn</span>
		<span class="badge badge-pill badge-danger">Danger</span>
	</Sample>

	<Sample
		title="Pills"
		content={`<button class="btn btn-primary relative">
	Inbox
	<span class="badge badge-indicator">
		99+ <span class="sr-only">unread messages</span>
	</span>
</button>

<button class="btn btn-primary relative">
	Inbox
	<span class="badge badge-indicator badge-danger">
		<span class="sr-only">New messages</span>
	</span>
</button>`}
	>
		<button class="btn btn-primary relative">
			Inbox
			<span class="badge badge-indicator">
				99+ <span class="sr-only">unread messages</span>
			</span>
		</button>

		<button class="btn btn-primary relative ml-6">
			Inbox
			<span class="badge badge-indicator badge-danger">
				<span class="sr-only">New messages</span>
			</span>
		</button>
	</Sample>
</Section>
