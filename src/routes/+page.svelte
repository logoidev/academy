<script lang="ts">
	import { onMount } from 'svelte';

	import Image from '@logoi/blog/src/components/Image.svelte';
	import Copyright from '@logoi/blog/src/components/Copyright.svelte';
	import QrSvgSrc from '@logoi/design/images/logos/qr/qr.svg';
	import LogoSrc from '@logoi/blog/static/images/logo-big.svg';
	import { getFullMainUrl } from '../../../blog/src/data/consts';
	import CodeOnGithub from '../components/CodeOnGithub.svelte';

	const MAILTO_URL = `mailto:academy@logoi.dev?subject=Expressing interest in Logoi Academy`;

	onMount(() => {
		if (window.location.search) {
			window.location.href = window.location.pathname;
		}
	});
</script>

<div
	class="wrapper flex items-center flex-col justify-between flex-col touch-manipulation scroll-smooth h-screen min-w-fit font-serif"
>
	<div class="flex flex-col items-center justify-center h-full">
		<div class="w-80">
			<Image src={LogoSrc} />
		</div>
		<div class="text-xl">
			<span>Academy</span>
		</div>
		<div class="text-sm mt-8">
			<span>Software Engineeering Aprenticeship</span>
		</div>
		<div class="call-to-action text-sm">
			<a href={MAILTO_URL} target="__blank">Get in touch</a>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<div class="text-sm underline">
			<a href="/teachers">🧑‍🎓 Teachers</a>
		</div>
		<div class="text-sm underline">
			<a href="/students">👨‍💻 Students</a>
		</div>

		<div class="mt-16 w-24">
			<a href={getFullMainUrl('academy')} target="__blank">
				<Image class="mt-4" src={QrSvgSrc} />
			</a>
		</div>

		<Copyright withLink referrer="academy" />
	</div>

	<CodeOnGithub />
</div>

<style>
	div.wrapper {
		font-family: 'e-Ukraine', sans-serif;
	}

	.call-to-action a {
		border-radius: 2px;
		padding: 4px 12px;
		margin: 4px;
		border: 1px solid grey;
		cursor: pointer;
		display: block;
		margin-top: 32px;
	}

	.call-to-action a:hover {
		background-color: lightgrey;
	}
</style>
