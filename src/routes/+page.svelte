<script lang="ts">
	import { onMount } from 'svelte';

	import Image from '@logoi/blog/src/components/Image.svelte';
	import Copyright from '@logoi/blog/src/components/Copyright.svelte';
	import QrSvgSrc from '@logoi/design/images/logos/qr/qr.svg';
	import LogoSrc from '@logoi/blog/static/images/logo-big.svg';
	import { getFullMainUrl } from '../../../blog/src/data/consts';
	import CodeOnGithub from '../components/CodeOnGithub.svelte';

	const MAILTO_URL = `mailto:academy@logoi.dev?subject=Expressing interest in Logoi Academy`;

	let isMottoShown = false;

	let apprenticeshipIndex = 0;

	let ms = 3333;
	let index = 0;
	const next = () => {
		index += 1;
		if (index > ACADEMY.length - 1) {
			index = 0;
		}
	};

	let clear: Timer;
	$: {
		clearInterval(clear);
		clear = setInterval(next, ms);
	}

	onMount(() => {
		if (window.location.search) {
			window.location.href = window.location.pathname;
		}
	});

	$: MAILTO = MAILTO_URL + `, ${APPRENTICESHIPS[apprenticeshipIndex]} Apprenticeship`;

	const LANGUAGES = ['English', 'Greek', 'Ukrainian', 'Russian', 'Georgian', 'Hebrew'];
	const ACADEMY = ['Academy', 'Ακαδημία', 'Академія', 'Aкадемия', 'აკადემია', 'אֲקָדֶמִיָה'];
	const MOTTO = [
		'Let no one untrained in geometry enter.',
		'Ἀγεωμέτρητος μηδεὶς εἰσίτω',
		'Не геометр, та не ввійде',
		'Не геометр да не войдёт!',
		'გეომეტრიის უცოდინარი არ შეიძლება შემოვიდეს',
		'אף אחד שלא יודע בגיאומטריה רשאי להיכנס'
	];

	const SUMMARY = ['Dialectic approach to Software Engineering', 'Practical group learning'];

	const APPRENTICESHIPS = [
		'Software Engineeering',
		'Digital Design',
		'Web Development',
		'Game Development'
	];
</script>

<div
	class="wrapper flex items-center flex-col justify-between flex-col touch-manipulation scroll-smooth h-screen min-w-fit font-serif"
>
	<div class="flex flex-col items-center justify-center h-full">
		<div class="w-80">
			<Image src={LogoSrc} />
		</div>

		<div class="flex flex-col items-center h-20">
			<button class="text-xl" on:click={() => (isMottoShown = !isMottoShown)}>
				<span class="trajan text-3xl">{ACADEMY[index]}</span>
			</button>

			{#if isMottoShown}
				<div class="text-xl">
					<span class="text-sm trajan">"{MOTTO[index]}"</span>
				</div>
			{/if}
		</div>

		{#each SUMMARY as line}
			<div class="text-lg">{line}</div>
		{/each}

		<div class="text-sm mt-8 flex flex-col items-center">
			<div class="w-48 flex text-center">
				<button
					class="text-xl p-4"
					disabled={apprenticeshipIndex === 0}
					on:click={() => {
						if (apprenticeshipIndex > 0) {
							apprenticeshipIndex--;
						}
					}}>{'<'}</button
				>
				<span class="text-lg">{APPRENTICESHIPS[apprenticeshipIndex] ?? ''} Aprenticeship</span>
				<button
					class="text-xl p-4"
					disabled={apprenticeshipIndex === APPRENTICESHIPS.length - 1}
					on:click={() => {
						if (apprenticeshipIndex < APPRENTICESHIPS.length - 1) {
							apprenticeshipIndex++;
						}
					}}>{'>'}</button
				>
			</div>
		</div>

		<div class="call-to-action text-lg">
			<a href={MAILTO} target="__blank">Get in touch</a>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<div class="text-base underline">
			<a href="/members">Members</a>
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
		font-family: ui-serif, serif;
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

	.trajan {
		font-family: 'Trajan Pro', serif;
	}
</style>
