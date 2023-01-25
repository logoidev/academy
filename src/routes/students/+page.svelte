<script lang="ts">
	import CodeOnGithub from '../../components/CodeOnGithub.svelte';
	import { STUDENTS } from '../../users/students/students';
</script>

<div class="flex justify-center items-center flex-col h-screen">
	<p>Students:</p>
	<ul>
		{#each STUDENTS as student}
			<li class="underline">
				<a href={`/students/${student.name.toLowerCase()}`}>👨‍💻 {student.name}</a>
			</li>
		{/each}
	</ul>
</div>
<CodeOnGithub />
