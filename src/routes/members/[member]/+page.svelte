<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';

	import CodeOnGithub from '../../../components/CodeOnGithub.svelte';
	import { MEMBERS } from '../../../members/members';
	import type { Member } from '../../../types/member';

	let member: Member | undefined;

	const getPaths = () => window.location.pathname.substring(1).split('/');
	const getMemberByName = (name: string) =>
		MEMBERS.find((u) => name.toLowerCase() === u.name.toLowerCase());

	onMount(() => {
		const [, memberNameFromUrl] = getPaths();
		member = getMemberByName(memberNameFromUrl);
		if (!member) {
			window.location.href = '/';
		}
	});
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<Breadcrumbs />

	{#if member}
		<h3 class="text-2xl">👨‍💻 {member.name}</h3>

		<p>{member.distinction} Member</p>

		<br />
		<h5>Completed tasks:</h5>
		{#each member.completed_tasks as task}
			<p class="underline">
				<a href={[member.name, task].map((p) => p.toLowerCase()).join('/')}>🕹 {task}</a>
			</p>
		{/each}
	{/if}
</div>

<CodeOnGithub />
