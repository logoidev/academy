<script lang="ts">
	import { onMount } from 'svelte';

	let parts: Array<string> = [];

	const getPath = (parts: Array<string>, index: number) => {
		const path = parts.slice(0, index + 1).join('/');
		return `/${path}`;
	};

	onMount(() => {
		parts = window.location.pathname.split('/');
		parts[0] = '.';
	});
</script>

<div>
	{#each parts as part, i}
		{#if i !== 0}
			<span>/</span>
		{/if}
		<a href={getPath(parts, i)}>{part}</a>
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
