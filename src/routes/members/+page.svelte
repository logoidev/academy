<script lang="ts">
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';
	import CodeOnGithub from '../../components/CodeOnGithub.svelte';
	import { MEMBERS } from '../../members/members';
</script>

<Breadcrumbs />
<div class="flex justify-center items-center flex-col h-screen">
	<ul>
		{#each MEMBERS as member}
			<li class="underline">
				<a href={`/members/${member.name.toLowerCase()}`}>👨‍💻 {member.name}</a>
			</li>
		{/each}
	</ul>
</div>
<CodeOnGithub />
