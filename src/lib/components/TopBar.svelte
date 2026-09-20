<script lang="ts">
	import { m, getLocale, setLocale, type Locale } from '$lib/i18n.svelte';
	import { getTheme, toggleTheme } from '$lib/theme.svelte';
	import { KEYWORDS } from '$lib/content';

	/* Language names are always shown in their own script, regardless of
	 * the active locale — that is the point of a language switcher. */
	const localeButtons: { locale: Locale; label: string }[] = [
		{ locale: 'ja', label: '日本語' },
		{ locale: 'en', label: 'EN' },
		{ locale: 'zh', label: '中' }
	];

	let visible = $state(false);

	$effect(() => {
		let ticking = false;

		function apply() {
			visible = window.scrollY > window.innerHeight * 0.8;
			ticking = false;
		}

		function onScroll() {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(apply);
		}

		apply();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#snippet sunFlower()}
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
		<g transform="translate(12 12)">
			<path d="M0,-1.5 C -2,-3.6 -2.4,-6.6 0,-7.5 C 2.4,-6.6 2,-3.6 0,-1.5 Z" />
			<path
				d="M0,-1.5 C -2,-3.6 -2.4,-6.6 0,-7.5 C 2.4,-6.6 2,-3.6 0,-1.5 Z"
				transform="rotate(72)"
			/>
			<path
				d="M0,-1.5 C -2,-3.6 -2.4,-6.6 0,-7.5 C 2.4,-6.6 2,-3.6 0,-1.5 Z"
				transform="rotate(144)"
			/>
			<path
				d="M0,-1.5 C -2,-3.6 -2.4,-6.6 0,-7.5 C 2.4,-6.6 2,-3.6 0,-1.5 Z"
				transform="rotate(216)"
			/>
			<path
				d="M0,-1.5 C -2,-3.6 -2.4,-6.6 0,-7.5 C 2.4,-6.6 2,-3.6 0,-1.5 Z"
				transform="rotate(288)"
			/>
			<circle r="1.6" />
		</g>
	</svg>
{/snippet}

{#snippet moonPetal()}
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
		<path d="M20.5 14.3 A8.3 8.3 0 1 1 9.7 3.5 7 7 0 0 0 20.5 14.3 Z" />
		<path d="M6.2 17.2 C 4.6 16.1 4.2 14.1 6.2 12.7 C 8.2 14.1 7.8 16.1 6.2 17.2 Z" />
	</svg>
{/snippet}

<header
	class="topbar fixed inset-x-0 top-0 z-30 flex h-14 items-center gap-3 px-4 md:px-6"
	class:is-visible={visible}
	inert={!visible}
>
	<a href="#main" class="wordmark display shrink-0 text-lg">まくぽり</a>

	<nav class="hidden flex-1 items-center justify-center gap-4 md:flex" aria-label={m().a11y.menu}>
		{#each KEYWORDS as k (k.id)}
			<a href="#{k.id}" class="keyword-link">{k.label}</a>
		{/each}
	</nav>

	<div class="ml-auto flex shrink-0 items-center gap-2">
		<div class="locale-group" role="group" aria-label={m().a11y.langLabel}>
			{#each localeButtons as { locale, label } (locale)}
				<button
					type="button"
					class="locale-btn"
					class:is-active={getLocale() === locale}
					aria-pressed={getLocale() === locale}
					onclick={() => setLocale(locale)}
				>
					{label}
				</button>
			{/each}
		</div>

		<button
			type="button"
			class="theme-btn"
			aria-label={m().a11y.themeToggle}
			aria-pressed={getTheme() === 'night'}
			onclick={toggleTheme}
		>
			{#if getTheme() === 'day'}
				{@render sunFlower()}
			{:else}
				{@render moonPetal()}
			{/if}
		</button>
	</div>
</header>

<style>
	.topbar {
		background: var(--surface);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border-bottom: 1px solid var(--surface-border);
		opacity: 0;
		transform: translateY(-100%);
		pointer-events: none;
	}

	.topbar.is-visible {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}

	@media (prefers-reduced-motion: no-preference) {
		.topbar {
			transition:
				transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1),
				opacity 420ms ease;
		}
	}

	.wordmark {
		color: var(--ink);
		letter-spacing: 0.08em;
		transition: color 200ms ease;
	}

	.wordmark:hover {
		color: var(--accent);
	}

	.keyword-link {
		font-size: 0.8125rem;
		color: var(--ink-soft);
		white-space: nowrap;
		transition: color 200ms ease;
	}

	@media (hover: hover) {
		.keyword-link:hover {
			color: var(--accent-strong);
		}
	}

	.locale-group {
		display: inline-flex;
		align-items: center;
		gap: 0.125rem;
		padding: 0.1875rem;
		border-radius: 9999px;
		border: 1px solid var(--surface-border);
		background: var(--bg-soft);
	}

	.locale-btn {
		padding: 0.25rem 0.5rem;
		border-radius: 9999px;
		font-size: 0.6875rem;
		line-height: 1.4;
		color: var(--ink);
		transition:
			color 200ms ease,
			background-color 200ms ease;
	}

	.locale-btn.is-active {
		background: var(--surface);
		color: var(--accent-strong);
		box-shadow: 0 1px 4px -1px rgba(178, 58, 116, 0.25);
	}

	@media (hover: hover) {
		.locale-btn:hover {
			color: var(--accent-strong);
		}
	}

	.theme-btn {
		display: inline-flex;
		flex: none;
		align-items: center;
		justify-content: center;
		width: 2.125rem;
		height: 2.125rem;
		border-radius: 9999px;
		border: 1px solid var(--surface-border);
		background: var(--bg-soft);
		color: var(--accent);
	}

	@media (hover: hover) {
		.theme-btn:hover {
			border-color: var(--accent);
			color: var(--accent-strong);
		}
	}

	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		.theme-btn {
			transition:
				transform 200ms ease,
				border-color 200ms ease,
				color 200ms ease;
		}

		.theme-btn:hover {
			transform: scale(1.06);
		}
	}
</style>
