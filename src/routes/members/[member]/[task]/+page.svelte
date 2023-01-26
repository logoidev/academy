<script lang="ts">
	import { onMount } from 'svelte';

	import { MEMBERS } from '../../../../members/members';
	import CodeOnGithub from '../../../../components/CodeOnGithub.svelte';
	import type { Task } from '../../../../types/task';
	import type { Member } from '../../../../types/member';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';

	let member: Member | undefined;
	let task: Task | undefined;
	let getComponent: () => Promise<any>;

	// TODO: Move out
	const getPaths = () => window.location.pathname.substring(1).split('/');
	const getMemberByName = (name: string) =>
		MEMBERS.find((s) => name.toLowerCase() === s.name.toLowerCase());
	const getTaskByName = (member: Member, taskName: string) =>
		member?.completed_tasks.find((task) => taskName.toLowerCase() === task.toLowerCase());

	onMount(async () => {
		const [, studentNameFromUrl, taskNameFromUrl] = getPaths();

		member = getMemberByName(studentNameFromUrl);
		task = member && getTaskByName(member, taskNameFromUrl);

		if (!task) {
			window.location.href = `/members/${member?.name.toLocaleLowerCase() || ''}`;
			return;
		}

		getComponent = () =>
			import(
				`../../../../members/${member?.name.toLowerCase()}/${task?.toLowerCase()}/+page.svelte`
			);
	});
</script>

<Breadcrumbs />

{#if getComponent}
	{#await getComponent() then module}
		<svelte:component this={module.default} />
	{/await}
{/if}

<CodeOnGithub />
