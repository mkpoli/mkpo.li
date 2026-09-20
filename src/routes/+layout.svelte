<script lang="ts">
	import '@fontsource/cormorant-garamond/500.css';
	import '@fontsource/cormorant-garamond/600.css';
	import '@fontsource/cormorant-garamond/500-italic.css';
	import '@fontsource/zen-antique/japanese-400.css';
	import '@fontsource/zen-antique/latin-400.css';
	import '@fontsource/zen-maru-gothic/japanese-400.css';
	import '@fontsource/zen-maru-gothic/japanese-500.css';
	import '@fontsource/zen-maru-gothic/japanese-700.css';
	import '@fontsource/zen-maru-gothic/latin-400.css';
	import '@fontsource/zen-maru-gothic/latin-500.css';
	import '@fontsource/zen-maru-gothic/latin-700.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { initTheme } from '$lib/theme.svelte';
	import { initLocale, m } from '$lib/i18n.svelte';

	let { children } = $props();

	$effect(() => {
		initTheme();
		initLocale();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<a
	href="#main"
	class="chip fixed top-2 left-2 z-50 -translate-y-16 opacity-0 transition focus-visible:translate-y-0 focus-visible:opacity-100"
>
	{m().a11y.skip}
</a>

{@render children()}
