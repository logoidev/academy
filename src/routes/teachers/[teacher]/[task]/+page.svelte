<script lang="ts">
	import { onMount } from 'svelte';

	import CodeOnGithub from '../../../../components/CodeOnGithub.svelte';
	import type { Task } from '../../../../types/task';
	import type { Teacher } from '../../../../types/teacher';
	import { TEACHERS } from '../../../../users/teachers/teachers';

	let teacher: Teacher | undefined;
	let task: Task | undefined;
	let getComponent: () => Promise<any>;

	// TODO: Move out
	const getPaths = () => window.location.pathname.substring(1).split('/');
	const getTeacherByName = (name: string) =>
		TEACHERS.find((s) => name.toLowerCase() === s.name.toLowerCase());
	const getTaskByName = (teacher: Teacher, taskName: string) =>
		teacher?.completed_tasks.find((task) => task.toLocaleLowerCase() === taskName);

	onMount(async () => {
		const [, teacherNameFromUrl, taskNameFromUrl] = getPaths();

		teacher = getTeacherByName(teacherNameFromUrl);
		task = teacher && getTaskByName(teacher, taskNameFromUrl);

		if (!task) {
			window.location.href = `/teachers/${teacher?.name.toLocaleLowerCase() || ''}`;
			return;
		}

		getComponent = () =>
			import(
				`../../../../users/teachers/${teacher?.name.toLowerCase()}/${task?.toLowerCase()}/+page.svelte`
			);
	});
</script>

{#if getComponent}
	{#await getComponent() then module}
		<svelte:component this={module.default} />
	{/await}
{/if}

<CodeOnGithub />
