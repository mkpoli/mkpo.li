<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reducedMotion } from '$lib/theme.svelte';

	let { delay = 0, children }: { delay?: number; children: Snippet } = $props();

	let el: HTMLDivElement;
	let mounted = $state(false);
	let visible = $state(false);

	$effect(() => {
		if (reducedMotion()) {
			visible = true;
			return;
		}
		mounted = true;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					io.disconnect();
				}
			},
			{ threshold: 0.01 }
		);
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<div
	bind:this={el}
	class="reveal"
	class:hidden-state={mounted && !visible}
	style="transition-delay: {delay}ms"
>
	{@render children()}
</div>

<style>
	@media (prefers-reduced-motion: no-preference) {
		.reveal {
			transition:
				opacity 600ms ease,
				transform 600ms ease;
		}
	}

	.hidden-state {
		opacity: 0;
		transform: translateY(12px);
	}
</style>
