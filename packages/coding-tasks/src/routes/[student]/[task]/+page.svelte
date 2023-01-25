<script lang="ts">
	import { onMount } from 'svelte';

	import { STUDENTS, type Student } from '../../../data/students';
	import type { Task } from '../../../data/tasks';

	let student: Student | undefined;
	let task: Task | undefined;
	let getComponent: () => Promise<any>;

	onMount(async () => {
		const [studentNameFromUrl, taskNameFromUrl] = window.location.pathname.substring(1).split('/');

		student = STUDENTS.find((s) => studentNameFromUrl === s.name.toLowerCase());
		task = student?.completed_tasks.find((task) => task.toLocaleLowerCase() === taskNameFromUrl);

		if (!task) {
			window.location.href = `/${student?.name.toLocaleLowerCase() || ''}`;
			return;
		}

		getComponent = () =>
			import(`../../../students/${student?.name.toLowerCase()}/${task.toLowerCase()}/+page.svelte`);
	});
</script>

{#if getComponent}
	{#await getComponent() then module}
		<svelte:component this={module.default} />
	{/await}
{/if}
