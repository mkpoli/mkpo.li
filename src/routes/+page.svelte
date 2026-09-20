<script lang="ts">
	import PetalCanvas from '$lib/components/PetalCanvas.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import KotobaSection from '$lib/components/KotobaSection.svelte';
	import ShirabeSection from '$lib/components/ShirabeSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import HirakuSection from '$lib/components/HirakuSection.svelte';
	import TsunaguSection from '$lib/components/TsunaguSection.svelte';
	import LinksFooter from '$lib/components/LinksFooter.svelte';
	import { m } from '$lib/i18n.svelte';

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'mkpoli',
		alternateName: 'まくぽり',
		url: 'https://mkpo.li',
		sameAs: [
			'https://github.com/mkpoli',
			'https://x.com/mkpoli',
			'https://note.com/mkpoli',
			'https://meta.wikimedia.org/wiki/User:Mkpoli'
		]
	});
</script>

<svelte:head>
	<title>まくぽり mkpoli — 言葉は、世界をつなぐ。</title>
	<meta name="description" content={m().hero.tagline} />
	<meta property="og:title" content="まくぽり mkpoli" />
	<meta property="og:description" content={m().hero.catch} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mkpo.li" />
	<meta property="og:image" content="https://mkpo.li/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#fdf3f7" />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<PetalCanvas />
<TopBar />

<main id="main" class="relative z-10">
	<Hero />
	<KotobaSection />
	<ShirabeSection />
	<ProjectsSection />
	<HirakuSection />
	<TsunaguSection />
	<LinksFooter />
</main>
