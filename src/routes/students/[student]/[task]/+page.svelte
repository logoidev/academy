<script lang="ts">
	import { onMount } from 'svelte';

	import { STUDENTS } from '../../../../users/students/students';
	import CodeOnGithub from '../../../../components/CodeOnGithub.svelte';
	import type { Task } from '../../../../types/task';
	import type { Student } from '../../../../types/student';

	let student: Student | undefined;
	let task: Task | undefined;
	let getComponent: () => Promise<any>;

	// TODO: Move out
	const getPaths = () => window.location.pathname.substring(1).split('/');
	const getStudentByName = (name: string) =>
		STUDENTS.find((s) => name.toLowerCase() === s.name.toLowerCase());
	const getTaskByName = (student: Student, taskName: string) =>
		student?.completed_tasks.find((task) => task.toLocaleLowerCase() === taskName);

	onMount(async () => {
		const [, studentNameFromUrl, taskNameFromUrl] = getPaths();

		student = getStudentByName(studentNameFromUrl);
		task = student && getTaskByName(student, taskNameFromUrl);

		if (!task) {
			window.location.href = `/students/${student?.name.toLocaleLowerCase() || ''}`;
			return;
		}

		getComponent = () =>
			import(
				`../../../../users/students/${student?.name.toLowerCase()}/${task?.toLowerCase()}/+page.svelte`
			);
	});
</script>

{#if getComponent}
	{#await getComponent() then module}
		<svelte:component this={module.default} />
	{/await}
{/if}

<CodeOnGithub />
