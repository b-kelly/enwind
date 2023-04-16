<script>
	import '../app.css';

	function toggleMode() {
		document.body.classList.toggle('theme-dark');
	}
</script>

<nav class="flex justify-between items-center mb-4">
	<h1 class="text-3xl font-bold"><a href="/">enwind</a></h1>
	<button class="btn inline-flex items-center gap-1" on:click={toggleMode} type="button">
		<span class="icon icon-sparkles" />
		Switch mode
	</button>
</nav>

<slot />
