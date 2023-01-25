<script lang="ts">
	import { onMount } from 'svelte';
	import { STUDENTS, type Student } from '../../data/students';

	let student: Student | undefined;

	onMount(() => {
		const studentNameFromUrl = window.location.pathname.substring(1);
		student = STUDENTS.find((s) => studentNameFromUrl === s.name.toLowerCase());
		if (!student) {
			window.location.href = '/';
		}
	});
</script>

{#if student}
	<h3>{student.name}</h3>

	<h4>Canvas:</h4>

	{#each student.completed_tasks as task}
		<p><a href={[student.name, task].map((p) => p.toLowerCase()).join('/')}>{task}</a></p>
	{/each}
{/if}
