<script lang="ts">
	import { m } from '$lib/i18n.svelte';
	import { LINKS, type LinkIcon } from '$lib/content';
	import Reveal from './Reveal.svelte';
</script>

{#snippet icon(kind: LinkIcon)}
	{#if kind === 'github'}
		<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
			<path
				d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
			/>
		</svg>
	{:else if kind === 'x'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			aria-hidden="true"
		>
			<path d="M5 5 19 19 M19 5 5 19" />
		</svg>
	{:else if kind === 'note'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<rect x="3" y="3" width="18" height="18" rx="6" />
			<path d="M9 16.5v-8M9 11c0-1.5 1.2-2.5 2.7-2.5S14.5 9.5 14.5 11v5.5" />
		</svg>
	{:else if kind === 'zenn'}
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M4 19 13.6 5h4.9L9 19H4Z" />
			<path d="M14.7 19 20 11.3h-4.8L10 19h4.7Z" />
		</svg>
	{:else if kind === 'qiita'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			aria-hidden="true"
		>
			<circle cx="11.5" cy="11.5" r="7.5" />
			<path d="M16.5 17 20.5 21" />
		</svg>
	{:else if kind === 'pixiv'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<rect x="3" y="3" width="18" height="18" rx="6" />
			<path d="M8.5 17.5v-11h3.4c2.1 0 3.6 1.3 3.6 3.3s-1.5 3.3-3.6 3.3H8.5" />
		</svg>
	{:else if kind === 'zhihu'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			aria-hidden="true"
		>
			<text
				x="12"
				y="17"
				text-anchor="middle"
				font-size="17"
				font-family="var(--font-display)"
				stroke="none"
				fill="currentColor">知</text
			>
		</svg>
	{:else if kind === 'blog'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M4 20 15 4l3.5 2.5L7.5 22.5Z" />
			<path d="M13 6.5 17 9.5" />
			<circle cx="5.5" cy="18.5" r="1.1" fill="currentColor" stroke="none" />
		</svg>
	{:else if kind === 'kofi'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
			<path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
			<path d="M9 4.5c-.6.6-.6 1.4 0 2M12.5 4.5c-.6.6-.6 1.4 0 2" />
		</svg>
	{:else if kind === 'wikimedia'}
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="6.25" />
			<circle cx="12" cy="2.75" r="1.1" fill="currentColor" stroke="none" />
			<circle cx="20.2" cy="8" r="1.1" fill="currentColor" stroke="none" />
			<circle cx="20.2" cy="16" r="1.1" fill="currentColor" stroke="none" />
			<circle cx="12" cy="21.25" r="1.1" fill="currentColor" stroke="none" />
			<circle cx="3.8" cy="16" r="1.1" fill="currentColor" stroke="none" />
			<circle cx="3.8" cy="8" r="1.1" fill="currentColor" stroke="none" />
		</svg>
	{/if}
{/snippet}

<footer class="relative mx-auto max-w-5xl px-6 pt-4 pb-16">
	<Reveal>
		<h2 class="sr-only">{m().sections.links.title}</h2>

		<nav class="footer-links" aria-label={m().sections.links.title}>
			{#each LINKS as link (link.icon)}
				<a class="chip link-chip" href={link.href} target="_blank" rel="me noopener">
					<span class="link-icon">{@render icon(link.icon)}</span>
					<span>{link.label}</span>
					<span class="sr-only">({m().a11y.externalLink})</span>
				</a>
			{/each}
		</nav>

		<p class="colophon mt-12 text-center" style="color: var(--ink-soft)">© mkpoli</p>
	</Reveal>
</footer>

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

	.link-chip {
		min-height: 2.75rem;
		min-width: 2.75rem;
		padding: 0.625rem 1.125rem;
		gap: 0.5rem;
		font-size: 0.9375rem;
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(2, max-content);
		justify-content: center;
		gap: 0.75rem;
	}

	@media (min-width: 48rem) {
		.footer-links {
			grid-template-columns: repeat(5, max-content);
		}
	}

	.link-icon {
		display: inline-flex;
		flex: none;
		width: 1.125rem;
		height: 1.125rem;
	}

	.link-icon svg {
		width: 100%;
		height: 100%;
	}

	.colophon {
		font-size: 0.75rem;
		letter-spacing: 0.02em;
	}
</style>
