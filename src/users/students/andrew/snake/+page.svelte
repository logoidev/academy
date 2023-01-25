<script>
	import { onMount } from 'svelte';
	import { runSnake } from './main.js';

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
		flex-direction: column;
		height: calc(100vh - 24px);
	}
	canvas {
		box-shadow: 20px 10px 50px;
	}
</style>
