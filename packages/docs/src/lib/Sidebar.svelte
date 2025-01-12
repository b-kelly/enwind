<script lang="ts">
	import { base } from '$app/paths';
	interface Props {
		[key: string]: unknown;
	}

	let { ...props }: Props = $props();

	const menu: {
		title: string;
		items: string[];
	}[] = [
		{
			title: 'Base',
			items: ['Colors', 'Utilities']
		},
		{
			title: 'Components',
			items: ['Buttons', 'Codeblock', 'Inputs', 'Modals', 'Progress', 'Spinner', 'Tables']
		}
	];

	function link(url: string) {
		return `${base}/${url.toLocaleLowerCase()}`;
	}
</script>

<div class="flex flex-col gap-md {props.class}">
	<a href="{base}/">Home</a>
	{#each menu as cat}
		<div>
			<h2 class="text-xl mb-xs">{cat.title}</h2>
			<ul>
				{#each cat.items as item}
					<li>
						<a href={link(item)}>{item}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
