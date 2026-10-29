<script lang="ts">
	import { m, pick } from '$lib/i18n.svelte';
	import { KEYWORDS } from '$lib/content';
	import portrait from '$lib/assets/portrait.webp';
	import SponsorButton from './SponsorButton.svelte';
</script>

{#snippet petals5(scale: number)}
	<g transform="scale({scale})">
		<path d="M0,-2 C -3,-5.2 -3.6,-9.6 0,-11 C 3.6,-9.6 3,-5.2 0,-2 Z" />
		<path d="M0,-2 C -3,-5.2 -3.6,-9.6 0,-11 C 3.6,-9.6 3,-5.2 0,-2 Z" transform="rotate(72)" />
		<path d="M0,-2 C -3,-5.2 -3.6,-9.6 0,-11 C 3.6,-9.6 3,-5.2 0,-2 Z" transform="rotate(144)" />
		<path d="M0,-2 C -3,-5.2 -3.6,-9.6 0,-11 C 3.6,-9.6 3,-5.2 0,-2 Z" transform="rotate(216)" />
		<path d="M0,-2 C -3,-5.2 -3.6,-9.6 0,-11 C 3.6,-9.6 3,-5.2 0,-2 Z" transform="rotate(288)" />
		<circle r="1.4" />
	</g>
{/snippet}

{#snippet floral(cls: string)}
	<svg
		aria-hidden="true"
		class={cls}
		viewBox="0 0 200 200"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M196 4 C 150 42, 118 64, 78 132" />
		<path d="M150 40 C 138 46, 128 56, 122 66" />
		<g transform="translate(120 74)">{@render petals5(1.1)}</g>
		<g transform="translate(166 22)">{@render petals5(0.75)}</g>
		<circle cx="78" cy="132" r="2.5" />
		<circle cx="98" cy="102" r="2" />
	</svg>
{/snippet}

<section class="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-16">
	<!-- vertical catchcopy, like a hanging scroll -->
	<p
		class="rise vertical-catch display absolute left-6 hidden xl:block 2xl:left-12"
		style="--d: 900ms"
	>
		{m().hero.catch}
	</p>

	<!-- corner florals -->
	{@render floral('floral absolute -top-6 -right-8 h-56 w-56 md:top-2 md:right-4')}
	{@render floral('floral absolute -bottom-6 -left-8 h-56 w-56 rotate-180 md:bottom-2 md:left-4')}

	<div
		class="relative z-10 flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14"
	>
		<!-- portrait illustration -->
		<figure class="rise portrait-wrap relative flex-none" style="--d: 80ms">
			<div aria-hidden="true" class="portrait-glow"></div>
			<img
				src={portrait}
				alt={m().a11y.portraitAlt}
				width="580"
				height="1030"
				fetchpriority="high"
				class="portrait"
			/>
		</figure>

		<div class="relative flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
			<!-- hanko signature seal -->
			<svg class="rise hanko" style="--d: 800ms" viewBox="0 0 64 64" aria-hidden="true">
				<rect
					x="2.5"
					y="2.5"
					width="59"
					height="59"
					rx="10"
					fill="none"
					stroke="currentColor"
					stroke-width="3.5"
				/>
				<text x="45" y="27">ま</text>
				<text x="45" y="55">く</text>
				<text x="19" y="27">ぽ</text>
				<text x="19" y="55">り</text>
			</svg>
			<svg
				class="rise mb-5"
				style="--d: 0ms; color: var(--accent)"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="currentColor"
				opacity="0.9"
				aria-hidden="true"
			>
				<path
					d="M12 10.5 C 10 8.5, 9.5 5, 12 3.5 C 14.5 5, 14 8.5, 12 10.5 Z M13.4 11.6 C 15.4 9.6, 18.9 9.9, 20 12.6 C 18.1 14.8, 14.9 14.2, 13.4 11.6 Z M12.9 13.4 C 15.2 14.6, 15.9 18.1, 13.7 19.8 C 11.2 18.6, 10.9 15.2, 12.9 13.4 Z M11.1 13.4 C 13.1 15.2, 12.8 18.6, 10.3 19.8 C 8.1 18.1, 8.8 14.6, 11.1 13.4 Z M10.6 11.6 C 9.1 14.2, 5.9 14.8, 4 12.6 C 5.1 9.9, 8.6 9.6, 10.6 11.6 Z"
				/>
			</svg>

			<h1 class="rise name display" style="--d: 100ms">まくぽり</h1>
			<p class="rise wordmark display" style="--d: 220ms">mkpoli</p>
			<p class="rise mt-4 text-base text-balance md:text-lg" style="--d: 340ms; color: var(--ink-soft)">
				{m().hero.tagline}
			</p>
			<p class="rise catch display mt-3 text-lg xl:hidden" style="--d: 400ms">
				{m().hero.catch}
			</p>

			<div class="rise mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" style="--d: 460ms">
				<span class="chip">{m().hero.location}</span>
				<span class="chip">{m().hero.langs}</span>
			</div>

			<div class="rise mt-5" style="--d: 520ms">
				<SponsorButton />
			</div>

			<nav
				class="rise mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start"
				style="--d: 600ms"
				aria-label={m().a11y.menu}
			>
				{#each KEYWORDS as k (k.id)}
					<a class="chip keyword" href="#{k.id}">
						<span class="label">{k.label}</span>
						<span class="gloss">{pick(k.gloss)}</span>
					</a>
				{/each}
			</nav>
		</div>
	</div>

	<a class="rise scroll-hint absolute bottom-6" style="--d: 1100ms" href="#kotoba">
		<span class="text-xs tracking-widest" style="color: var(--ink-soft)">{m().hero.scroll}</span>
		<svg
			class="drift"
			width="14"
			height="18"
			viewBox="0 0 14 18"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			aria-hidden="true"
		>
			<path d="M7 1 v 12 M2 9 l 5 5 5 -5" />
		</svg>
	</a>
</section>

<style>
	.portrait-wrap {
		width: 11rem;
	}

	.portrait {
		width: 100%;
		height: 11rem;
		object-fit: cover;
		object-position: 50% 16%;
		border-radius: 9999px;
		border: 2px solid var(--surface-border);
		box-shadow: 0 10px 40px -10px var(--glow);
	}

	.portrait-glow {
		position: absolute;
		inset: -18%;
		z-index: -1;
		border-radius: 9999px;
		background: radial-gradient(closest-side, var(--glow), transparent);
		filter: blur(12px);
	}

	@media (min-width: 64rem) {
		.portrait-wrap {
			width: clamp(16rem, 24vw, 21rem);
		}

		.portrait {
			height: auto;
			aspect-ratio: 580 / 1030;
			max-height: 74svh;
			object-fit: cover;
			object-position: 50% 0%;
			border-radius: 12rem 12rem 2rem 2rem;
			mask-image: linear-gradient(to bottom, #000 82%, transparent 100%);
			-webkit-mask-image: linear-gradient(to bottom, #000 82%, transparent 100%);
			border: none;
		}

		.portrait-glow {
			inset: -10% -14%;
			border-radius: 12rem;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.portrait-wrap {
			animation: breathe 7s ease-in-out infinite;
		}

		@keyframes breathe {
			0%,
			100% {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-8px);
			}
		}
	}

	.name {
		font-size: clamp(3rem, 9vw, 5rem);
		font-weight: 400;
		letter-spacing: 0.12em;
		line-height: 1.1;
		text-shadow: 0 2px 30px var(--glow);
	}

	.wordmark {
		font-style: italic;
		font-weight: 500;
		font-size: clamp(1.375rem, 4vw, 1.875rem);
		letter-spacing: 0.35em;
		margin-left: 0.35em; /* optically recenter the tracked text */
		color: var(--accent);
	}

	.catch {
		letter-spacing: 0.2em;
		color: var(--accent-strong);
	}

	.vertical-catch {
		writing-mode: vertical-rl;
		font-size: 1.375rem;
		letter-spacing: 0.5em;
		color: var(--ink-soft);
	}

	.floral {
		color: var(--accent);
		opacity: 0.3;
	}

	.hanko {
		position: absolute;
		top: 0;
		right: 0;
		width: 3rem;
		height: 3rem;
		color: var(--seal);
		transform: rotate(-6deg);
		opacity: 0.92;
	}

	.hanko text {
		fill: currentColor;
		stroke: none;
		font-family: var(--font-display);
		font-size: 23px;
		text-anchor: middle;
	}

	@media (min-width: 64rem) {
		.hanko {
			top: 0.5rem;
			right: -0.75rem;
			width: 3.5rem;
			height: 3.5rem;
		}
	}

	.keyword {
		padding: 0.5rem 1rem;
	}

	.keyword .label {
		font-weight: 500;
	}

	.keyword .gloss {
		font-size: 0.6875rem;
		color: var(--ink-soft);
	}

	.scroll-hint {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.375rem;
		color: var(--accent);
	}

	.rise {
		opacity: 1;
	}

	@media (prefers-reduced-motion: no-preference) {
		.rise {
			opacity: 0;
			animation: rise 900ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
			animation-delay: var(--d, 0ms);
		}

		@keyframes rise {
			from {
				opacity: 0;
				transform: translateY(18px);
			}
			to {
				opacity: 1;
				transform: none;
			}
		}

		.drift {
			animation: drift 2.2s ease-in-out infinite;
		}

		@keyframes drift {
			0%,
			100% {
				transform: translateY(0);
				opacity: 0.9;
			}
			50% {
				transform: translateY(5px);
				opacity: 0.5;
			}
		}
	}
</style>
