<script lang="ts">
	import { m } from '$lib/i18n.svelte';
	import { WIKI_PROJECTS, META_WIKI_URL } from '$lib/content';
	import SectionShell from './SectionShell.svelte';
</script>

<SectionShell id="hiraku">
	<div class="card flex flex-wrap items-center gap-4 p-6 md:p-8">
		<div class="flex flex-wrap gap-2">
			{#each WIKI_PROJECTS as project (project)}
				<span class="chip">{project}</span>
			{/each}
		</div>

		<a
			class="link-soft inline-flex items-center gap-1"
			href={META_WIKI_URL}
			target="_blank"
			rel="noopener"
		>
			{m().sections.hiraku.metaLink}
			<span class="sr-only">({m().a11y.externalLink})</span>
		</a>
	</div>
</SectionShell>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
