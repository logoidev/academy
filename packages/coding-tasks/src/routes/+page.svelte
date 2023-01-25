<script lang="ts">
	import CodeOnGithub from '../components/CodeOnGithub.svelte';
	import { STUDENTS } from '../students/students';
</script>

<h1>Welcome to Logoi Academy</h1>

<h2>Here are the results of coding challenges for students.</h2>

{#each STUDENTS as student}
	{#if student.completed_tasks.length}
		<p><a href={`/${student.name.toLowerCase()}`}>{student.name}</a></p>
	{/if}
{/each}

<CodeOnGithub />
