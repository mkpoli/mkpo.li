<script lang="ts">
	import { m, pick } from '$lib/i18n.svelte';
	import { RESEARCH_ITEMS } from '$lib/content';
	import SectionShell from './SectionShell.svelte';
	import Reveal from './Reveal.svelte';
</script>

<SectionShell id="shiraberu">
	<div class="flex flex-col gap-4">
		{#each RESEARCH_ITEMS as item, i (item.href ?? item.title.en)}
			<Reveal delay={Math.min(i * 60, 300)}>
				<div class="card flex flex-wrap items-center justify-between gap-4 p-5">
					<div class="min-w-0">
						<h3 class="m-0 text-base font-medium">{pick(item.title)}</h3>
						<p class="mt-1 text-sm leading-relaxed" style="color: var(--ink-soft)">
							{pick(item.desc)}
						</p>
					</div>
					{#if item.href}
						<a class="chip shrink-0" href={item.href} target="_blank" rel="noopener">
							<svg
								viewBox="0 0 24 24"
								width="14"
								height="14"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M14 5h5v5" />
								<path d="M19 5 10 14" />
								<path d="M17 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4" />
							</svg>
							{new URL(item.href).hostname}
							<span class="sr-only">{pick(item.title)} ({m().a11y.externalLink})</span>
						</a>
					{/if}
				</div>
			</Reveal>
		{/each}
	</div>
</SectionShell>
