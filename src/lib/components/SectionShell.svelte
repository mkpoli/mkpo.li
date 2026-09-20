<script lang="ts">
	import type { Snippet } from 'svelte';
	import Reveal from './Reveal.svelte';
	import { pick } from '$lib/i18n.svelte';
	import { KEYWORDS } from '$lib/content';

	let { id, children }: { id: string; children: Snippet } = $props();

	const ORDER = ['kotoba', 'shiraberu', 'tsukuru', 'hiraku', 'tsunagu'];
	const NUMERALS = ['一', '二', '三', '四', '五'];
	const numeral = $derived(NUMERALS[ORDER.indexOf(id)] ?? '');
	const keyword = $derived(KEYWORDS.find((k) => k.id === id) ?? KEYWORDS[0]);
</script>

<section {id} class="relative mx-auto max-w-5xl scroll-mt-20 px-6 py-20 md:py-24">
	<span aria-hidden="true" class="watermark display">{keyword.label}</span>

	<Reveal>
		<p class="index display" aria-hidden="true">第{numeral}</p>
		<h2 class="section-title">
			<svg
				class="flower-bullet"
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path
					d="M12 10.5 C 10 8.5, 9.5 5, 12 3.5 C 14.5 5, 14 8.5, 12 10.5 Z M13.4 11.6 C 15.4 9.6, 18.9 9.9, 20 12.6 C 18.1 14.8, 14.9 14.2, 13.4 11.6 Z M12.9 13.4 C 15.2 14.6, 15.9 18.1, 13.7 19.8 C 11.2 18.6, 10.9 15.2, 12.9 13.4 Z M11.1 13.4 C 13.1 15.2, 12.8 18.6, 10.3 19.8 C 8.1 18.1, 8.8 14.6, 11.1 13.4 Z M10.6 11.6 C 9.1 14.2, 5.9 14.8, 4 12.6 C 5.1 9.9, 8.6 9.6, 10.6 11.6 Z"
				/>
			</svg>
			<ruby>{keyword.label}<rt>{pick(keyword.gloss)}</rt></ruby>
		</h2>
	</Reveal>

	<div class="relative z-10 mt-10">
		<Reveal delay={100}>
			{@render children()}
		</Reveal>
	</div>
</section>

<style>
	section {
		overflow-x: clip;
	}

	.index {
		font-size: 0.875rem;
		letter-spacing: 0.5em;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}

	/* giant vertical keyword ghosting behind the section */
	.watermark {
		position: absolute;
		top: 1rem;
		right: 0;
		writing-mode: vertical-rl;
		font-size: clamp(5.5rem, 13vw, 10rem);
		line-height: 1;
		letter-spacing: 0.08em;
		color: var(--accent);
		opacity: 0.07;
		pointer-events: none;
		user-select: none;
	}

	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			.watermark {
				animation: wm-drift linear both;
				animation-timeline: view();
			}

			@keyframes wm-drift {
				from {
					transform: translateY(4rem);
				}
				to {
					transform: translateY(-4rem);
				}
			}
		}
	}

	/* flower ornament sketches itself in when the section reveals */
	@media (prefers-reduced-motion: no-preference) {
		:global(.reveal:not(.hidden-state)) .flower-bullet path {
			stroke-dasharray: 46;
			animation: flower-draw 1.2s ease-out both;
		}

		@keyframes flower-draw {
			from {
				stroke-dashoffset: 46;
			}
			to {
				stroke-dashoffset: 0;
			}
		}
	}
</style>
