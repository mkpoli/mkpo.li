<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { m, pick } from '$lib/i18n.svelte';
	import { reducedMotion } from '$lib/theme.svelte';
	import { PROJECTS, PROJECT_CATEGORIES, MINI_WORKS, type ProjectCategory } from '$lib/content';
	import SectionShell from './SectionShell.svelte';
	/* the クィア hero keyword anchors to the TransNavi card (id="queer") */

	let active = $state<ProjectCategory | 'all'>('all');

	const filtered = $derived(
		active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active)
	);
	const miniGroups = $derived(
		PROJECT_CATEGORIES.map((cat) => ({
			cat,
			works: MINI_WORKS.filter(
				(w) => w.category === cat.id && (active === 'all' || w.category === active)
			)
		})).filter((group) => group.works.length)
	);

	// motion budget — flip for reflow, scale/fade for enter/leave; gated for
	// a11y, read at animation time so mid-session OS changes are honored
	const dur = () => (reducedMotion() ? 0 : 300);
	const dur2 = () => (reducedMotion() ? 0 : 200);
</script>

<SectionShell id="tsukuru">
	<div class="flex flex-wrap gap-2" role="group" aria-label={m().sections.tsukuru.filterAll}>
		<button
			type="button"
			class="chip filter"
			class:is-active={active === 'all'}
			aria-pressed={active === 'all'}
			onclick={() => (active = 'all')}
		>
			{m().sections.tsukuru.filterAll}
		</button>
		{#each PROJECT_CATEGORIES as cat (cat.id)}
			<button
				type="button"
				class="chip filter"
				class:is-active={active === cat.id}
				aria-pressed={active === cat.id}
				onclick={() => (active = cat.id)}
			>
				{pick(cat.label)}
			</button>
		{/each}
	</div>

	<div class="mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each filtered as p (p.name)}
			<article
				class="card project-card scroll-mt-24"
				class:is-rainbow={p.rainbow}
				class:is-archived={p.archived}
				id={p.anchor}
				animate:flip={{ duration: dur() }}
				in:scale={{ duration: dur2(), start: 0.94, opacity: 0, easing: cubicOut }}
				out:fade={{ duration: dur2() }}
			>
				{#if p.rainbow}
					<span class="rainbow-rule" aria-hidden="true"></span>
				{/if}
				<h3 class="name display" class:has-links={p.url || p.repo}>{p.name}</h3>
				{#if p.role}
					<span class="role chip">{pick(p.role)}</span>
				{/if}
				{#if p.archived}
					<span class="role archived-badge chip">{m().sections.tsukuru.archived}</span>
				{/if}
				<p class="desc">{pick(p.desc)}</p>

				{#if p.tags.length}
					<ul class="tags">
						{#each p.tags as tag (tag)}
							<li class="tag">{tag}</li>
						{/each}
					</ul>
				{/if}

				{#if p.url || p.repo}
					<div class="links">
						{#if p.url}
							<a
								class="icon-link"
								href={p.url}
								target="_blank"
								rel="noopener"
								aria-label="{p.name} · {m().a11y.externalLink}"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<circle cx="12" cy="12" r="9" />
									<path d="M3 12h18" />
									<path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
								</svg>
							</a>
						{/if}
						{#if p.repo}
							<a
								class="icon-link"
								href={p.repo}
								target="_blank"
								rel="noopener"
								aria-label="{p.name} · GitHub"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<path
										d="M9 19c-4.5 1.5-4.5-2.2-6-2.8m12 4.8v-3.5a3 3 0 0 0-.8-2.3c2.8-.3 5.7-1.4 5.7-6.2a4.8 4.8 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.4s-1.1-.3-3.5 1.3a12.2 12.2 0 0 0-6.4 0C6.5.6 5.4.9 5.4.9A4.4 4.4 0 0 0 5.3 4.3 4.8 4.8 0 0 0 4 7.6c0 4.8 2.9 5.9 5.7 6.2a3 3 0 0 0-.8 2.3V22"
									/>
								</svg>
							</a>
						{/if}
					</div>
				{/if}
			</article>
		{/each}
	</div>

	{#if miniGroups.length}
		<div class="mini-groups">
			{#each miniGroups as group (group.cat.id)}
				<section class="mini-group" animate:flip={{ duration: dur() }}>
					<h3 class="display mini-heading">{pick(group.cat.label)}</h3>
					<div class="mini-scroll" role="region" aria-label={pick(group.cat.label)}>
						{#each group.works as work (work.name)}
							<a
								class="chip mini-work"
								class:is-archived={work.archived}
								href={work.href}
								target="_blank"
								rel="noopener"
							>
								{work.name}
								{#if work.archived}
									<span class="mini-badge">{m().sections.tsukuru.archived}</span>
								{/if}
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
						{/each}
					</div>
				</section>
			{/each}
		</div>
	{/if}
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

	.filter {
		cursor: pointer;
	}

	.filter.is-active {
		background: var(--accent-strong);
		border-color: var(--accent-strong);
		color: var(--bg);
	}

	@media (hover: hover) {
		.filter.is-active:hover {
			background: var(--accent);
			border-color: var(--accent);
			color: var(--bg);
		}
	}

	.project-card {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 1.5rem;
	}

	.rainbow-rule {
		display: block;
		width: 4rem;
		height: 2px;
		border-radius: 9999px;
		background: var(--rainbow);
		margin-bottom: 0.75rem;
	}

	.role {
		align-self: flex-start;
		margin-top: 0.375rem;
		font-size: 0.6875rem;
		padding: 0.125rem 0.625rem;
		color: var(--accent-strong);
	}

	.archived-badge,
	.mini-badge {
		color: var(--ink-soft);
	}

	.project-card.is-archived,
	.mini-work.is-archived {
		border-color: color-mix(in oklab, var(--surface-border) 80%, var(--ink-soft));
	}

	.project-card.is-archived .name,
	.mini-work.is-archived {
		color: var(--ink-soft);
	}

	.mini-badge {
		font-size: 0.6875rem;
		letter-spacing: 0.02em;
	}

	.mini-groups {
		margin-top: 2.5rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
		gap: 1rem;
	}

	.mini-group {
		min-width: 0;
	}

	.mini-heading {
		margin-bottom: 0.5rem;
		color: var(--ink-soft);
		font-size: 0.9375rem;
		letter-spacing: 0.04em;
	}

	.mini-scroll {
		display: flex;
		max-height: 13.5rem;
		overflow-y: auto;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 0.5rem;
		padding: 0.75rem;
		border: 1px solid var(--surface-border);
		border-radius: 1.25rem;
		background: color-mix(in oklab, var(--surface) 72%, transparent);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		scrollbar-color: var(--accent) transparent;
		scrollbar-width: thin;
	}

	.mini-scroll::-webkit-scrollbar {
		width: 0.5rem;
	}

	.mini-scroll::-webkit-scrollbar-thumb {
		border-radius: 9999px;
		background: color-mix(in oklab, var(--accent) 60%, transparent);
	}

	.name {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.3;
		letter-spacing: 0.01em;
		color: var(--ink);
	}

	.name.has-links {
		padding-right: 3.5rem;
	}

	.desc {
		margin-top: 0.5rem;
		flex: 1 1 auto;
		color: var(--ink-soft);
		font-size: 0.9375rem;
		line-height: 1.65;
	}

	.tags {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.tag {
		display: inline-flex;
		align-items: center;
		padding: 0.125rem 0.5rem;
		border-radius: 9999px;
		border: 1px solid var(--surface-border);
		background: color-mix(in oklab, var(--petal) 20%, transparent);
		color: var(--ink-soft);
		font-size: 0.6875rem;
		letter-spacing: 0.02em;
		line-height: 1.4;
	}

	.links {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		display: flex;
		gap: 0.5rem;
	}

	.icon-link {
		display: inline-flex;
		color: var(--ink-soft);
		transition:
			color 200ms ease,
			transform 200ms ease;
	}

	.icon-link:hover {
		color: var(--accent);
	}

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		.icon-link:hover {
			transform: translateY(-1px);
		}
	}
</style>
