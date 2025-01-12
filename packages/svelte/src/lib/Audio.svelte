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
		} else {
			audio.addEventListener('loadedmetadata', initAudio);
		}

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

		// listen for duration change, which may fire *after* a file starts playing
		// this is true for Blob files, whose duration is set to Infinity until they are buffered
		audio.addEventListener('durationchange', () => {
			duration = audio.duration;
		});
	});

	function initAudio() {
		duration = audio.duration;
		ready = true;
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
		// ignore invalid duration values
		if (seconds === Infinity || isNaN(+seconds)) {
			return '0:00';
		}

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
