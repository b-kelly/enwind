<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Path } from '$app/types';

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
			items: [
				'Audio',
				'Badges',
				'Buttons',
				'Codeblock',
				'Drawer',
				'Icons',
				'Inputs',
				'Modals',
				'Progress',
				'Spinner',
				'Tables'
			]
		}
	];
</script>

<div class="gap-md flex flex-col {props.class}">
	<a href={resolve('/')}>Home</a>
	{#each menu as cat, i (i)}
		<div>
			<h2 class="mb-xs text-xl">{cat.title}</h2>
			<ul>
				{#each cat.items as item, i (i)}
					<li>
						<a href={resolve(('/' + item.toLocaleLowerCase()) as Path)}>{item}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
