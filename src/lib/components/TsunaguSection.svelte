<script lang="ts">
	import { m, pick } from '$lib/i18n.svelte';
	import { COMMUNITIES } from '$lib/content';
	import SectionShell from './SectionShell.svelte';
	import Reveal from './Reveal.svelte';
</script>

<SectionShell id="tsunagu">
	<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
		{#each COMMUNITIES as community, i (community.name)}
			<Reveal delay={i * 80}>
				<div class="card flex h-full flex-col gap-3 p-6">
					<div class="flex flex-wrap items-center justify-between gap-2">
						<h3 class="display" style="font-size: 1.125rem; font-weight: 500">
							{community.name}
						</h3>
						<span class="chip">{pick(community.role)}</span>
					</div>
					<p class="leading-relaxed" style="color: var(--ink-soft)">
						{pick(community.desc)}
					</p>
					{#if community.href}
						<a
							class="link-soft mt-auto inline-flex items-center gap-1 self-start"
							href={community.href}
							target="_blank"
							rel="noopener"
						>
							{new URL(community.href).hostname}
							<svg
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M7 17 17 7 M9 7 h8 v8" />
							</svg>
							<span class="sr-only">({m().a11y.externalLink})</span>
						</a>
					{/if}
				</div>
			</Reveal>
		{/each}
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
