<script lang="ts">
	import CodeOnGithub from '../../components/CodeOnGithub.svelte';
	import { TEACHERS } from '../../users/teachers/teachers';
</script>

<div class="flex justify-center items-center flex-col h-screen">
	<p>Teachers:</p>
	<ul>
		{#each TEACHERS as teacher}
			<li class="underline">
				<a href={`/teachers/${teacher.name.toLowerCase()}`}>👨‍🎓 {teacher.name}</a>
			</li>
		{/each}
	</ul>
</div>
<CodeOnGithub />
