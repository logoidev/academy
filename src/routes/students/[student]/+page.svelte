<script lang="ts">
	import { onMount } from 'svelte';

	import CodeOnGithub from '../../../components/CodeOnGithub.svelte';
	import { STUDENTS } from '../../../users/students/students';
	import type { Student } from '../../../types/student';
	import type { User } from '../../../types/user';

	let student: Student | undefined;

	const getPaths = () => window.location.pathname.substring(1).split('/');
	const getUserByName = (users: Array<User>, name: string) =>
		users.find((u) => name.toLowerCase() === u.name.toLowerCase());
	const getStudentByName = (name: string) => getUserByName(STUDENTS, name);

	onMount(() => {
		const [, studentNameFromUrl] = getPaths();
		student = getStudentByName(studentNameFromUrl);
		if (!student) {
			window.location.href = '/';
		}
	});
</script>

<div class="h-screen flex flex-col items-center justify-center">
	{#if student}
		<h3 class="text-2xl">👨‍💻 {student.name}</h3>

		<br />
		<h5>Completed tasks:</h5>
		{#each student.completed_tasks as task}
			<p class="underline">
				<a href={[student.name, task].map((p) => p.toLowerCase()).join('/')}>🕹 {task}</a>
			</p>
		{/each}
	{/if}
</div>

<CodeOnGithub />
