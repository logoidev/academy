<script>
	import { onMount } from 'svelte';
	import { runSnake } from './script';

	onMount(runSnake);
</script>

<div>
	<h1>Snake</h1>
	<canvas id="canvas" />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 24px);
		flex-direction: column;
	}
</style>
