<script lang="ts">
	import Icon from './Icon.svelte';
	import pause from 'heroicons/20/solid/pause.svg?raw';
	import play from 'heroicons/20/solid/play.svg?raw';
	import speakerWave from 'heroicons/20/solid/speaker-wave.svg?raw';
	import speakerXMark from 'heroicons/20/solid/speaker-x-mark.svg?raw';
	import { onMount } from 'svelte';

	interface Props {
		audio: HTMLAudioElement;
	}

	let ready = $state(false);
	let isMuted = $state(false);
	let isPlaying = $state(false);
	let duration = $state(0);
	let currentTime = $state(0);

	const { audio }: Props = $props();

	onMount(() => {
		if (audio.readyState > 0) {
			initAudio();
		}
		audio.addEventListener('loadedmetadata', initAudio);
	});

	function initAudio() {
		duration = audio.duration;
		ready = true;

		audio.addEventListener('timeupdate', () => {
			currentTime = audio.currentTime;
		});

		audio.addEventListener('play', () => {
			isPlaying = true;
		});

		audio.addEventListener('pause', () => {
			isPlaying = false;
		});

		audio.addEventListener('volumechange', () => {
			isMuted = audio.muted;
		});
	}

	function onPlayPause() {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}

		isPlaying = !isPlaying;
	}

	function onVolumeMute() {
		isMuted = !isMuted;
		audio.muted = isMuted;
	}

	function onSeek(value: number) {
		audio.currentTime = value;
		currentTime = value;
	}

	function formatTime(seconds: number) {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		const padded = secs < 10 ? '0' + secs : secs;

		return `${mins}:${padded}`;
	}
</script>

<div class="audio" class:disabled={!ready}>
	<button class="btn btn-icon" onclick={onPlayPause}>
		<Icon icon={isPlaying ? pause : play} />
		<span class="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
	</button>

	<span class="audio-duration-text">{formatTime(currentTime)} / {formatTime(duration)}</span>

	<input
		class="input audio-seek-control"
		type="range"
		bind:value={currentTime}
		min="0"
		max={duration}
		step="1"
		onchange={(e) => onSeek(+e.currentTarget.value)}
	/>

	<button class="btn btn-icon" onclick={onVolumeMute}>
		<Icon icon={isMuted ? speakerXMark : speakerWave} />
		<span class="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
	</button>
</div>
