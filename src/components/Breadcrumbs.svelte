<script lang="ts">
	import { onMount } from 'svelte';

	let parts: Array<string> = [];

	onMount(() => {
		parts = window.location.pathname.split('/').slice(0, -1);
		parts[0] = '.';
	});
</script>

<div>
	{#each parts as part, i}
		{#if i !== 0}
			<span>/</span>
		{/if}
		<a href={`/${part}`}>{part}</a>
	{/each}
</div>

<style>
	div {
		display: flex;
		position: absolute;
		top: 16px;
		left: 16px;
	}

	span {
		opacity: 0.5;
	}
</style>
