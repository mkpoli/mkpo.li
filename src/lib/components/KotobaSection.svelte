<script lang="ts">
	import { pick } from '$lib/i18n.svelte';
	import { FOCUS_AREAS, LANGUAGE_TIERS } from '$lib/content';
	import SectionShell from './SectionShell.svelte';
	import Reveal from './Reveal.svelte';

	const CIRCLED = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];
</script>

<SectionShell id="kotoba">
	<div class="tiers">
		{#each LANGUAGE_TIERS as t (t.tier)}
			<p class="tier-row">
				<span class="tier display">{t.tier}</span>
				<span class="tier-langs">{t.langs.join('・')}</span>
			</p>
		{/each}
	</div>

	<ol class="senses mt-10">
		{#each FOCUS_AREAS as area, i (area.icon)}
			<Reveal delay={Math.min(i * 60, 300)}>
				<li class="sense">
					<span class="sense-num display" aria-hidden="true">{CIRCLED[i]}</span>
					<h3 class="sense-name">{pick(area.name)}</h3>
					<span class="sense-note">{pick(area.note)}</span>
				</li>
			</Reveal>
		{/each}
	</ol>
</SectionShell>

<style>
	.tiers {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}

	.tier-row {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.tier {
		flex: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.25rem;
		padding: 0.125rem 0.375rem;
		border: 1.5px solid var(--accent);
		border-radius: 0.375rem;
		color: var(--accent-strong);
		font-size: 0.8125rem;
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	.tier-langs {
		color: var(--ink-soft);
		font-size: 0.9375rem;
		line-height: 1.9;
	}

	.senses {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 3rem;
	}

	@media (min-width: 48rem) {
		.senses {
			grid-template-columns: 1fr 1fr;
		}
	}

	.sense {
		display: flex;
		align-items: baseline;
		gap: 0.625rem;
		padding: 0.875rem 0.25rem;
		border-bottom: 1px dashed var(--surface-border);
	}

	.sense-num {
		flex: none;
		color: var(--accent);
		font-size: 1.125rem;
	}

	.sense-name {
		margin: 0;
		font-size: 1rem;
		font-weight: 500;
		color: var(--ink);
		white-space: nowrap;
	}

	.sense-note {
		color: var(--ink-soft);
		font-size: 0.8125rem;
		margin-left: auto;
		text-align: right;
	}
</style>
