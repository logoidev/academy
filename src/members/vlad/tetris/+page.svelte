<script>
	import { onMount } from 'svelte';

	import { runTetris } from './script';

	onMount(runTetris);
</script>

<div>
	<h1>
		<span class="red">T</span>
		<span class="orange">E</span>
		<span class="yellow">T</span>
		<span class="green">R</span>
		<span class="blue">I</span>
		<span class="purple">S</span>
	</h1>

	<canvas id="canvas" />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: calc(100vh - 24px);
	}

	h1 {
		font-family: 'Courier New', Courier, monospace;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 48px;
		margin-top: -48px;
		-webkit-text-stroke: 1px black;
	}
	.red {
		color: red;
	}
	.orange {
		color: orange;
	}
	.yellow {
		color: yellow;
	}
	.green {
		color: green;
	}
	.blue {
		color: blue;
	}
	.purple {
		color: purple;
	}
</style>
