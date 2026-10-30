<script lang="ts">
	import { m } from '$lib/i18n.svelte';
	import face from '$lib/assets/sponsor-face.webp';
	import portrait from '$lib/assets/sponsor-portrait.webp';

	/* A Sponsor pill led by mkpoli's face, and the dialog it opens: her portrait, what a tip
	 * pays for, then three steps that end at the Ko-fi button. */
	let { compact = false }: { compact?: boolean } = $props();

	let open = $state(false);
	let dialog = $state<HTMLDialogElement>();

	$effect(() => {
		if (open && dialog && !dialog.open) dialog.showModal();
	});

	/* A click on the backdrop closes the dialog; one on its own scrollbar also targets the dialog,
	 * so only a click outside its box counts. */
	function outside(event: MouseEvent) {
		if (!dialog || event.target !== dialog) return;
		const box = dialog.getBoundingClientRect();
		const { clientX: x, clientY: y } = event;
		if (x < box.left || x > box.right || y < box.top || y > box.bottom) dialog.close();
	}

	/* The dialog lives under <body>: the top bar copy would otherwise sit inside the bar, which turns
	 * inert when it hides on scroll and would freeze an open dialog with it. */
	function portal(node: HTMLElement) {
		document.body.append(node);
		return { destroy: () => node.remove() };
	}

	const heart =
		'M12 21s-8.5-5.1-8.5-11.3A4.7 4.7 0 0 1 12 6.9a4.7 4.7 0 0 1 8.5 2.8C20.5 15.9 12 21 12 21Z';
</script>

<button
	type="button"
	class="sponsor"
	class:compact
	aria-label={m().sponsor.label}
	aria-haspopup="dialog"
	onclick={() => (open = true)}
>
	<span class="face" aria-hidden="true">
		<img src={face} alt="" width="26" height="26" decoding="async" />
		<svg class="face-heart" viewBox="0 0 24 24"><path d={heart} /></svg>
	</span>
	<span class="label">{m().sponsor.label}</span>
</button>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
	<dialog
		class="sponsor-dialog"
		bind:this={dialog}
		use:portal
		aria-labelledby="sponsor-title"
		onclose={() => (open = false)}
		onclick={outside}
	>
		<header>
			<h2 id="sponsor-title" class="display">{m().sponsor.label}</h2>
			<button
				type="button"
				class="close"
				aria-label={m().sponsor.close}
				onclick={() => dialog?.close()}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg
				>
			</button>
		</header>
		<div class="sheet">
			<div class="hero" aria-hidden="true">
				<span class="portrait">
					<img src={portrait} alt="" width="112" height="112" decoding="async" />
					<svg class="heart" viewBox="0 0 24 24">
						<path d={heart} />
						<ellipse
							class="shine"
							cx="7.6"
							cy="9.6"
							rx="1.5"
							ry="2.1"
							transform="rotate(-30 7.6 9.6)"
						/>
					</svg>
				</span>
				<span class="spark s1">✦</span><span class="spark s2">✦</span><span class="spark s3">✦</span
				>
			</div>
			<p class="lead">{m().sponsor.lead}</p>
			<p class="ask">{m().sponsor.ask}</p>
			<section class="how">
				<h3>{m().sponsor.howTo}</h3>
				<ol class="steps" role="list">
					{#each m().sponsor.steps as step (step)}<li>{step}</li>{/each}
				</ol>
			</section>
			<a class="kofi" href="https://ko-fi.com/mkpoli" target="_blank" rel="noreferrer">
				<span class="mark" aria-hidden="true">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path
							d="M4 9h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4ZM16 11h2a2.5 2.5 0 0 1 0 5h-2M7 3v3M11 2v3M15 3v3"
						/></svg
					>
				</span>
				<span class="copy"><strong>Ko-fi</strong><small>{m().sponsor.kofi}</small></span>
				<svg
					class="arrow"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg
				>
			</a>
			<a class="company" href="mailto:mkpoli@mkpo.li?subject=Sponsorship%20on%20mkpo.li">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M3 6h18v12H3zM3 7l9 6 9-6" /></svg
				>
				<span class="copy"
					><strong>{m().sponsor.company}</strong><small>{m().sponsor.companyHint}</small></span
				>
			</a>
			<p class="thanks">{m().sponsor.thanks}</p>
		</div>
	</dialog>
{/if}

<style>
	.sponsor {
		display: inline-flex;
		flex: none;
		align-items: center;
		gap: 0.5625rem;
		height: 2.375rem;
		padding: 0 1rem 0 0.375rem;
		border: 1px solid var(--petal);
		border-radius: 9999px;
		background: linear-gradient(135deg, var(--bg-soft), var(--surface));
		color: var(--accent-strong);
		font-size: 0.875rem;
		font-weight: 700;
		white-space: nowrap;
		box-shadow: 0 1px 3px -1px rgba(178, 58, 116, 0.25);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
	}

	.sponsor.compact {
		height: 2.125rem;
		padding-right: 0.75rem;
		font-size: 0.75rem;
	}

	.sponsor:focus-visible,
	.close:focus-visible,
	.kofi:focus-visible,
	.company:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	.face {
		position: relative;
		flex: none;
		width: 1.625rem;
		height: 1.625rem;
	}

	.compact .face {
		width: 1.5rem;
		height: 1.5rem;
	}

	.face img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		box-shadow:
			0 0 0 1.5px var(--bg),
			0 0 0 2.5px var(--petal);
	}

	.face-heart {
		position: absolute;
		right: -4px;
		bottom: -3px;
		width: 12px;
		height: 12px;
		fill: var(--accent);
		stroke: var(--bg);
		stroke-width: 2.5;
		paint-order: stroke;
		overflow: visible;
		transform-origin: 50% 60%;
	}

	@media (max-width: 767px) {
		.sponsor.compact {
			width: 2.125rem;
			padding: 0;
			justify-content: center;
		}

		.compact .label {
			display: none;
		}
	}

	.sponsor-dialog {
		width: min(480px, calc(100vw - 32px));
		max-height: calc(100dvh - 32px);
		margin: auto;
		padding: 0;
		border: 1px solid var(--surface-border);
		border-radius: 1.25rem;
		background: var(--bg);
		color: var(--ink);
		box-shadow: 0 30px 80px -20px rgba(70, 40, 56, 0.45);
		overflow: auto;
	}

	.sponsor-dialog::backdrop {
		background: rgba(70, 40, 56, 0.35);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.875rem 0.875rem 0 1.5rem;
	}

	h2 {
		font-size: 1.5rem;
		letter-spacing: 0.06em;
	}

	.close {
		display: grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		color: var(--ink-soft);
	}

	.close:hover {
		background: var(--bg-soft);
		color: var(--accent-strong);
	}

	.close svg {
		width: 18px;
		height: 18px;
	}

	.sheet {
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
		padding: 0.25rem 1.5rem 1.375rem;
	}

	.hero {
		position: relative;
		display: grid;
		place-items: center;
		height: 8.5rem;
		background: radial-gradient(closest-side, var(--glow), transparent);
	}

	.portrait {
		position: relative;
		width: 7rem;
		height: 7rem;
	}

	.portrait img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		box-shadow:
			0 0 0 4px var(--bg),
			0 0 0 6px var(--petal),
			0 10px 24px rgba(214, 84, 143, 0.3);
	}

	.heart {
		position: absolute;
		right: -2px;
		bottom: 2px;
		width: 34px;
		height: 34px;
		fill: var(--accent);
		stroke: var(--bg);
		stroke-width: 2;
		paint-order: stroke;
		overflow: visible;
		transform-origin: 50% 60%;
		filter: drop-shadow(0 3px 6px rgba(214, 84, 143, 0.35));
	}

	.heart .shine {
		fill: #fff;
		stroke: none;
		opacity: 0.6;
	}

	.spark {
		position: absolute;
		color: var(--accent);
		opacity: 0.75;
	}

	.s1 {
		top: 22px;
		left: calc(50% - 84px);
		font-size: 14px;
	}

	.s2 {
		top: 12px;
		left: calc(50% + 66px);
		font-size: 10px;
	}

	.s3 {
		bottom: 20px;
		left: calc(50% - 76px);
		font-size: 11px;
	}

	.lead {
		font-size: 0.875rem;
		line-height: 1.75;
	}

	.ask {
		font-size: 0.9375rem;
		font-weight: 700;
		line-height: 1.6;
		color: var(--accent-strong);
	}

	.how {
		padding: 0.75rem 0.875rem;
		border: 1px dashed var(--petal);
		border-radius: 0.875rem;
		background: var(--bg-soft);
	}

	h3 {
		margin: 0 0 0.5rem;
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--accent-strong);
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		counter-reset: step;
	}

	.steps li {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		font-size: 0.8125rem;
		line-height: 1.5;
		counter-increment: step;
	}

	.steps li::before {
		content: counter(step);
		display: grid;
		flex: none;
		place-items: center;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		background: var(--accent-strong);
		color: var(--bg);
		font-size: 0.6875rem;
		font-weight: 700;
		line-height: 1;
		transform: translateY(-1px);
	}

	.kofi {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.125rem 0.75rem 0.75rem;
		border-radius: 9999px;
		background: linear-gradient(135deg, #b23a74, #9c2d63);
		color: #fff;
		box-shadow: 0 6px 16px rgba(178, 58, 116, 0.32);
	}

	.mark {
		display: grid;
		flex: none;
		place-items: center;
		width: 2.375rem;
		height: 2.375rem;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.22);
	}

	.mark svg {
		width: 20px;
		height: 20px;
	}

	.arrow {
		flex: none;
		width: 18px;
		height: 18px;
	}

	.copy {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 1px;
		min-width: 0;
	}

	.copy strong {
		font-size: 0.84375rem;
		font-weight: 700;
	}

	.copy small {
		font-size: 0.75rem;
		line-height: 1.45;
	}

	.kofi .copy strong {
		font-size: 0.9375rem;
	}

	.company {
		display: flex;
		align-items: flex-start;
		gap: 0.625rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.75rem;
		color: var(--ink-soft);
	}

	.company:hover {
		background: var(--bg-soft);
		color: var(--ink);
	}

	.company svg {
		flex: none;
		width: 16px;
		height: 16px;
		margin-top: 2px;
	}

	.company .copy strong {
		font-size: 0.78125rem;
		color: var(--ink);
	}

	.thanks {
		font-size: 0.78125rem;
		line-height: 1.6;
		color: var(--ink-soft);
		text-align: center;
	}

	@media (prefers-reduced-motion: no-preference) {
		.sponsor {
			transition:
				transform 180ms ease,
				box-shadow 180ms ease;
		}

		.sponsor:hover {
			transform: translateY(-1px);
			box-shadow: 0 4px 12px rgba(214, 84, 143, 0.3);
		}

		.face-heart {
			animation: beat 2.8s ease-in-out infinite;
		}

		.sponsor:hover .face-heart,
		.sponsor:focus-visible .face-heart {
			animation: bounce 0.6s ease-in-out infinite;
		}

		.sponsor-dialog[open] {
			animation: arrive 0.32s cubic-bezier(0.2, 0.8, 0.2, 1);
		}

		.heart {
			animation: beat 2.8s ease-in-out infinite;
		}

		.spark {
			animation: twinkle 2.4s ease-in-out infinite;
		}

		.s2 {
			animation-delay: 0.8s;
		}

		.s3 {
			animation-delay: 1.6s;
		}

		.kofi {
			transition:
				transform 180ms ease,
				box-shadow 180ms ease;
		}

		.kofi:hover {
			transform: translateY(-1px);
			box-shadow: 0 8px 22px rgba(178, 58, 116, 0.42);
		}
	}

	@keyframes beat {
		0%,
		70%,
		100% {
			transform: scale(1);
		}
		78% {
			transform: scale(1.18);
		}
		86% {
			transform: scale(0.96);
		}
		93% {
			transform: scale(1.1);
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0) scale(1);
		}
		40% {
			transform: translateY(-2px) scale(1.18) rotate(-8deg);
		}
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.2;
			transform: scale(0.7);
		}
		50% {
			opacity: 0.9;
			transform: scale(1);
		}
	}

	@keyframes arrive {
		from {
			opacity: 0;
			transform: translateY(14px) scale(0.98);
		}
	}
</style>
