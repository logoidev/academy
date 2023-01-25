<script lang="ts">
	import { onMount } from 'svelte';

	import CodeOnGithub from '../../../components/CodeOnGithub.svelte';
	import type { User } from '../../../types/user';
	import type { Teacher } from '../../../types/teacher';
	import { TEACHERS } from '../../../users/teachers/teachers';

	let teacher: Teacher | undefined;

	const getPaths = () => window.location.pathname.substring(1).split('/');
	const getUserByName = (users: Array<User>, name: string) =>
		users.find((u) => name.toLowerCase() === u.name.toLowerCase());
	const getTeacherByName = (name: string) => getUserByName(TEACHERS, name);

	onMount(() => {
		const [, studentNameFromUrl] = getPaths();
		teacher = getTeacherByName(studentNameFromUrl);
		if (!teacher) {
			window.location.href = '/';
		}
	});
</script>

<div class="h-screen flex flex-col items-center justify-center">
	{#if teacher}
		<h3 class="text-2xl">👨‍💻 {teacher.name}</h3>

		<br />
		<h5>Completed tasks:</h5>
		{#each teacher.completed_tasks as task}
			<p class="underline">
				<a href={[teacher.name, task].map((p) => p.toLowerCase()).join('/')}>🕹 {task}</a>
			</p>
		{/each}
	{/if}
</div>

<CodeOnGithub />
