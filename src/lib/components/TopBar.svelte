<script lang="ts">
	import { m } from '$lib/i18n.svelte';
	import { KEYWORDS } from '$lib/content';
	import SponsorButton from './SponsorButton.svelte';
	import LocaleThemeControls from './LocaleThemeControls.svelte';

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
		<SponsorButton compact />

		<LocaleThemeControls />
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
</style>
