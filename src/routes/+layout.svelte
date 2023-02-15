<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	import '@logoi/blog/src/shared/fonts/index';
	import '../app.css';
	import Spinner from '@logoi/blog/src/components/Spinner.svelte';

	// TODO: [9] Add hostnames and instruction in README.md
	const SHOULD_REDIRECT_ON_LOCAL_DEV = false;
	const LOCAL_ORIGIN = 'logoi.academy';

	let loaded = false;

	onMount(() => {
		if (SHOULD_REDIRECT_ON_LOCAL_DEV && dev) {
			if (['localhost', '127.0.0.1'].includes(location.hostname)) {
				location.hostname = LOCAL_ORIGIN;
			}
		}

		if (!loaded) {
			loaded = true;
		}
	});
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
<link
	href="https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap"
	rel="stylesheet"
/>

{#if loaded}
	<slot />
{:else}
	<div class="w-screen h-screen flex items-center justify-center">
		<Spinner />
	</div>
{/if}
