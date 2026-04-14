<script>
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
	import { Icon } from '@enwindui/svelte';
	import home from 'heroicons/20/solid/home.svg?raw';
	import homeLg from 'heroicons/24/solid/home.svg?raw';
	import homeSm from 'heroicons/16/solid/home.svg?raw';
</script>

<Section title="Icon">
	<Sample
		title=".icon"
		class="flex gap-md"
		content={`<span class="icon"><svg>...</svg></span>
<span class="icon text-primary"><svg>...</svg></span>`}
	>
		{#snippet description()}
			Designed for use with <a href="https://heroicons.com/" rel="nofollow" target="_blank"
				>heroicons</a
			>. The default size matches the "mini" icons (<code>20px &times; 20px</code>).
		{/snippet}

		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<span class="icon">{@html home}</span>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<span class="icon text-primary">{@html home}</span>
	</Sample>

	<Sample
		title="Size variants"
		class="flex gap-md"
		content={`<span class="icon icon-lg"><svg>...</svg></span> Large
<span class="icon"><svg>...</svg></span> Default
<span class="icon icon-sm"><svg>...</svg></span> Small`}
	>
		{#snippet description()}
			Sizes match heroicons's sizes:
			<ul>
				<li>Default: "mini" (<code>20px &times; 20px</code>)</li>
				<li>Large: "outline" / "solid" (<code>24px &times; 24px</code>)</li>
				<li>Small: "micro" (<code>16px &times; 16px</code>)</li>
			</ul>
		{/snippet}
		<div>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<span class="icon icon-lg">{@html homeLg}</span> Large
		</div>
		<div>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<span class="icon">{@html home}</span> Default
		</div>
		<div>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<span class="icon icon-sm">{@html homeSm}</span> Small
		</div>
	</Sample>

	<Sample
		title="<Icon /> component"
		class="flex gap-md"
		content={`<script>
	import { Icon } from '@enwindui/svelte';
	import home from 'heroicons/20/solid/home.svg?raw';
	import homeLg from 'heroicons/24/solid/home.svg?raw';
	import homeSm from 'heroicons/16/solid/home.svg?raw';
<script>

<Icon icon={home} />
<Icon icon={home} class="text-primary" />
<Icon icon={homeLg} size="lg" />
<Icon icon={homeSm} size="sm" />`}
		svelte
	>
		<Icon icon={home} />
		<Icon icon={home} class="text-primary" />
		<Icon icon={homeLg} size="lg" />
		<Icon icon={homeSm} size="sm" />
	</Sample>
</Section>
