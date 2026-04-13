<script lang="ts">
	import Sample from '$lib/Sample.svelte';
	import Section from '$lib/Section.svelte';
	import { Audio } from '@enwindui/svelte';

	let audio: HTMLAudioElement | undefined = $state();
</script>

<Section title="Audio">
	<Sample
		title="<Audio /> component"
		class="flex flex-col gap-sm"
		content={`<script>
    import { Audio } from  "@enwindui/svelte";
	let audioEl = $state();
<script>
<audio bind:this={audioEl}>
<Audio audio={audioEl} />`}
	>
		<audio src="https://cdn.pixabay.com/audio/2024/06/25/audio_edba63c54d.mp3" bind:this={audio}
		></audio>
		<Audio {audio} />
	</Sample>
</Section>
