<script lang="ts">
	import { onMount } from 'svelte';

	const GITHUB_REPO_URL_BASE = 'https://github.com/logoidev/academy';
	const GITHUB_REPO_URL = `${GITHUB_REPO_URL_BASE}/tree/main/src/`;
	const GITHUB_LOGO_URL =
		'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg';

	let url = GITHUB_REPO_URL;

	onMount(() => {
		const paths = window.location.pathname.split('/').filter(Boolean);
		url = paths.length ? GITHUB_REPO_URL + paths.join('/') : GITHUB_REPO_URL_BASE;
	});
</script>

<div>
	<img alt="GitHub logo" src={GITHUB_LOGO_URL} />
	<a href={url}>View code on GitHub</a>
</div>

<style>
	div {
		position: absolute;
		display: flex;
		align-items: center;
		bottom: 0;
		right: 0;
		margin: 8px;
	}
	img {
		width: 24px;
		margin: 8px;
	}

	@media only screen and (max-width: 450px) {
		a {
			display: none;
		}
	}
</style>
