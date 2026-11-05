<script lang="ts">
	import LocaleThemeControls from '$lib/components/LocaleThemeControls.svelte';
	import { pick } from '$lib/i18n.svelte';
	import { SCRIPT_CHAPTERS, SCRIPT_PAGE, type ScriptWork } from '$lib/scripts';
	import { SPECIMENS } from '$lib/specimens';

	const isShown = (w: ScriptWork) => Boolean(w.shot || w.drawn);
	const fonts = [...new Set(SCRIPT_CHAPTERS.map((c) => c.font))].join(' · ');

	function host(href: string): string {
		const name = new URL(href).host;
		const known: Record<string, string> = {
			'github.com': 'GitHub',
			'www.npmjs.com': 'npm',
			'typst.app': 'Typst Universe',
			'greasyfork.org': 'Greasy Fork'
		};
		return known[name] ?? name;
	}
</script>

<svelte:head>
	<title>{pick(SCRIPT_PAGE.title)} — まくぽり mkpoli</title>
	<meta name="description" content={pick(SCRIPT_PAGE.description)} />
	<meta property="og:title" content="{pick(SCRIPT_PAGE.title)} — まくぽり mkpoli" />
	<meta property="og:description" content={pick(SCRIPT_PAGE.description)} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mkpo.li/scripts" />
	<meta property="og:image" content="https://mkpo.li/og.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://mkpo.li/scripts" />
</svelte:head>

{#snippet specimen(id: string)}
	<svg viewBox={SPECIMENS[id].viewBox} fill="currentColor" aria-hidden="true">
		<path d={SPECIMENS[id].d} />
	</svg>
{/snippet}

{#snippet address(work: ScriptWork)}
	{#if work.href}
		<span class="address">{host(work.href)} <span aria-hidden="true">↗</span></span>
	{:else}
		<span class="address pending">{pick(SCRIPT_PAGE.pending)}</span>
	{/if}
{/snippet}

{#snippet cardBody(work: ScriptWork)}
	<div class="plate">
		{#if work.drawn}
			<span class="drawn" role="img" aria-label="⿰亻哥"></span>
			<span class="drawn-ids">⿰亻哥</span>
		{:else}
			{@const alt = pick(SCRIPT_PAGE.shotAlt).replace('{name}', work.name)}
			<img
				class:day-only={work.night}
				src="/gallery/{work.shot}-light.webp"
				width="1280"
				height="800"
				loading="lazy"
				{alt}
			/>
			{#if work.night}
				<img
					class="night-only"
					src="/gallery/{work.shot}-dark.webp"
					width="1280"
					height="800"
					loading="lazy"
					{alt}
				/>
			{/if}
		{/if}
	</div>
	<div class="caption">
		<h3 class="display work-name">{work.name}</h3>
		<p class="desc">{pick(work.desc)}</p>
		{@render address(work)}
	</div>
{/snippet}

<header class="bar">
	<a class="back" href="/">
		<span aria-hidden="true">←</span>
		<span class="display">まくぽり</span>
	</a>
	<div class="controls"><LocaleThemeControls /></div>
</header>

<main id="main" class="page">
	<div class="masthead">
		<h1 class="display title">
			<ruby
				>{SCRIPT_PAGE.title.ja}{#if pick(SCRIPT_PAGE.gloss)}<rt>{pick(SCRIPT_PAGE.gloss)}</rt
					>{/if}</ruby
			>
		</h1>
		<p class="lede">{pick(SCRIPT_PAGE.description)}</p>
	</div>

	<nav class="index" aria-label={pick(SCRIPT_PAGE.title)}>
		{#each SCRIPT_CHAPTERS as chapter (chapter.id)}
			<a class="index-tile" href="#{chapter.id}">
				<span class="index-glyph">{@render specimen(chapter.id)}</span>
				<span class="index-name">{pick(chapter.name)}</span>
			</a>
		{/each}
	</nav>

	{#each SCRIPT_CHAPTERS as chapter (chapter.id)}
		<section id={chapter.id} class="chapter">
			<div class="rail">
				<div class="rail-inner">
					<div class="glyph">{@render specimen(chapter.id)}</div>
					<div>
						<h2 class="display chapter-name">{pick(chapter.name)}</h2>
						<p class="note">{pick(chapter.note)}</p>
						<p class="meta">{chapter.code} · {chapter.font}</p>
					</div>
				</div>
			</div>

			<div class="body">
				{#if chapter.works.some(isShown)}
					<div class="works">
						{#each chapter.works.filter(isShown) as work (work.name)}
							{#if work.href}
								<a class="card work" href={work.href} target="_blank" rel="noopener">
									{@render cardBody(work)}
								</a>
							{:else}
								<div class="card work">{@render cardBody(work)}</div>
							{/if}
						{/each}
					</div>
				{/if}

				{#if chapter.works.some((w) => !isShown(w))}
					<ul class="rows">
						{#each chapter.works.filter((w) => !isShown(w)) as work (work.name)}
							<li>
								<a class="row" href={work.href} target="_blank" rel="noopener">
									<span class="display row-name">{work.name}</span>
									<span class="row-desc">
										{pick(work.desc)}
										{#if work.sample}<span class="sample">{work.sample}</span>{/if}
									</span>
									{@render address(work)}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</section>
	{/each}

	<footer class="colophon">
		<h2 class="display">{pick(SCRIPT_PAGE.colophon)}</h2>
		<p>{pick(SCRIPT_PAGE.fonts)} {fonts}</p>
		<p>{pick(SCRIPT_PAGE.shots)}</p>
		<a class="link-soft" href="/">{pick(SCRIPT_PAGE.back)}</a>
	</footer>
</main>

<style>
	.bar {
		position: sticky;
		top: 0;
		z-index: 30;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		height: 3.5rem;
		padding-inline: clamp(1rem, 3vw, 1.5rem);
		background: color-mix(in oklab, var(--bg) 90%, transparent);
		border-bottom: 1px solid var(--surface-border);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.back {
		display: inline-flex;
		align-items: baseline;
		gap: 0.5rem;
		color: var(--ink);
		font-size: 1.125rem;
		letter-spacing: 0.08em;
	}

	.back:hover {
		color: var(--accent-strong);
	}

	.page {
		position: relative;
		z-index: 10;
		max-width: 76rem;
		margin-inline: auto;
		padding: clamp(2.5rem, 7vw, 5.5rem) clamp(1rem, 3vw, 1.5rem) 4rem;
	}

	.masthead {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		gap: 1rem 2.5rem;
	}

	.title {
		font-size: clamp(4.5rem, 14vw, 9.5rem);
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.04em;
	}

	.title rt {
		font-size: 0.14em;
		letter-spacing: 0.3em;
	}

	.lede {
		max-width: 26rem;
		padding-bottom: 0.75rem;
		color: var(--ink-soft);
		font-size: 1.0625rem;
		line-height: 1.7;
	}

	.index {
		display: grid;
		grid-template-columns: repeat(8, minmax(0, 1fr));
		margin-top: clamp(2rem, 5vw, 3.5rem);
		border-block: 1px solid var(--surface-border);
	}

	.index-tile {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 1.5rem 0.5rem 1.25rem;
		color: var(--ink);
		text-align: center;
		transition:
			background-color 200ms ease,
			color 200ms ease;
	}

	.index-tile + .index-tile {
		border-left: 1px solid var(--surface-border);
	}

	.index-glyph {
		width: min(100%, 4.5rem);
		aspect-ratio: 1;
	}

	.index-glyph :global(svg),
	.glyph :global(svg) {
		display: block;
		width: 100%;
		height: 100%;
	}

	.index-name {
		color: var(--ink-soft);
		font-size: 0.8125rem;
		line-height: 1.35;
	}

	@media (hover: hover) {
		.index-tile:hover {
			background: var(--surface);
			color: var(--accent-strong);
		}
	}

	.chapter {
		display: grid;
		grid-template-columns: 15rem minmax(0, 1fr);
		gap: clamp(1.5rem, 4vw, 3.5rem);
		padding-block: clamp(2.5rem, 6vw, 4.5rem);
		border-bottom: 1px solid var(--surface-border);
		scroll-margin-top: 3.5rem;
	}

	.rail-inner {
		position: sticky;
		top: 5.5rem;
	}

	.glyph {
		width: 100%;
		max-width: 13rem;
		aspect-ratio: 1;
		margin-bottom: 1.5rem;
		color: var(--ink);
	}

	.chapter-name {
		font-size: 1.75rem;
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: 0.04em;
	}

	.note {
		margin-top: 0.5rem;
		color: var(--ink-soft);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.meta {
		margin-top: 0.5rem;
		color: var(--ink-soft);
		font-size: 0.75rem;
		line-height: 1.5;
		opacity: 0.85;
	}

	.works {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.25rem;
	}

	/* An odd count opens on one wide card, so that no row ends on a gap. */
	.work:first-child:nth-last-child(odd) {
		grid-column: 1 / -1;
	}

	.work {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		color: var(--ink);
	}

	.plate {
		position: relative;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		border-bottom: 1px solid var(--surface-border);
		background: var(--bg-soft);
	}

	.plate img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

	:global(html[data-theme='night']) .day-only,
	:global(html:not([data-theme='night'])) .night-only {
		display: none;
	}

	.drawn {
		position: absolute;
		inset: 12% 0 12%;
		background: var(--ink);
		mask: url('/gallery/han-compose.svg') center / contain no-repeat;
		-webkit-mask: url('/gallery/han-compose.svg') center / contain no-repeat;
	}

	.drawn-ids {
		position: absolute;
		left: 1rem;
		bottom: 0.75rem;
		color: var(--ink-soft);
		font-size: 0.875rem;
	}

	.caption {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 1rem 1.25rem 1.125rem;
	}

	.work-name {
		font-size: 1.3125rem;
		font-weight: 500;
		line-height: 1.3;
	}

	.desc {
		flex: 1;
		margin-top: 0.375rem;
		color: var(--ink-soft);
		font-size: 0.9375rem;
		line-height: 1.65;
	}

	.address {
		margin-top: 0.75rem;
		color: var(--accent-strong);
		font-size: 0.8125rem;
	}

	.address.pending {
		color: var(--ink-soft);
	}

	.rows {
		display: grid;
		gap: 0;
	}

	.works + .rows {
		margin-top: 1.25rem;
	}

	.row {
		display: grid;
		grid-template-columns: 13rem minmax(0, 1fr) auto;
		align-items: baseline;
		gap: 0.25rem 1.25rem;
		padding: 0.875rem 0.25rem;
		color: var(--ink);
		border-top: 1px solid var(--surface-border);
		transition: color 200ms ease;
	}

	li:last-child .row {
		border-bottom: 1px solid var(--surface-border);
	}

	.row-name {
		font-size: 1.0625rem;
		font-weight: 500;
		overflow-wrap: anywhere;
	}

	.row-desc {
		color: var(--ink-soft);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.sample {
		display: block;
		margin-top: 0.25rem;
		color: var(--ink);
	}

	.row .address {
		margin-top: 0;
		white-space: nowrap;
	}

	@media (hover: hover) {
		.row:hover .row-name {
			color: var(--accent-strong);
		}
	}

	.colophon {
		padding-top: 2.5rem;
		color: var(--ink-soft);
		font-size: 0.8125rem;
		line-height: 1.7;
	}

	.colophon h2 {
		margin-bottom: 0.5rem;
		color: var(--ink);
		font-size: 1.125rem;
		font-weight: 500;
	}

	.colophon a {
		display: inline-block;
		margin-top: 1rem;
	}

	@media (max-width: 62rem) {
		.chapter {
			grid-template-columns: minmax(0, 1fr);
		}

		.rail-inner {
			position: static;
			display: flex;
			align-items: center;
			gap: 1.25rem;
		}

		.glyph {
			flex: none;
			width: 6.5rem;
			margin-bottom: 0;
		}
	}

	@media (max-width: 48rem) {
		.index {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.index-tile {
			padding-block: 1rem 0.875rem;
		}

		.index-tile:nth-child(4n + 1) {
			border-left: 0;
		}

		.index-tile:nth-child(n + 5) {
			border-top: 1px solid var(--surface-border);
		}

		.works {
			grid-template-columns: minmax(0, 1fr);
		}

		.row {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
