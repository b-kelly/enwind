<script lang="ts"></script>

<div class="flex h-full w-full flex-col overflow-hidden {$$props.class}">
	{#if $$slots.header}
		<header class="z-10 flex-none"><slot name="header" /></header>
	{/if}

	<div class="flex h-full w-full flex-auto overflow-hidden">
		{#if $$slots.sidebar}
			<aside class="w-auto flex-none overflow-y-auto overflow-x-hidden">
				<slot name="sidebar" />
			</aside>
		{/if}

		<div class="flex flex-1 flex-col overflow-x-hidden">
			<main class="flex-auto"><slot /></main>

			{#if $$slots.footer}
				<footer class="flex-none">
					<slot name="footer">(slot:footer)</slot>
				</footer>
			{/if}
		</div>
	</div>
</div>
