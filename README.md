# mkpo.li

まくぽり (mkpoli) の自己紹介ポートフォリオサイト。桜色。

**Stack:** SvelteKit 2 (Svelte 5 runes) · Tailwind CSS 4 · Cloudflare Workers (static assets via `@sveltejs/adapter-cloudflare`) · Bun

**Design:** 昼桜 (light) / 夜桜 (dark) themes via `data-theme` + CSS custom properties in `src/routes/layout.css`. Display type: Cormorant Garamond + Zen Antique; body: Zen Maru Gothic (all self-hosted via Fontsource). Trilingual ja/en/zh — dictionaries in `src/lib/i18n.svelte.ts`, all site content in `src/lib/content.ts`.

## Develop

```sh
bun install
bun run dev
```

## Screenshot QA

```sh
bun scripts/shoot.ts http://127.0.0.1:5173/ shots --full
```

Captures day/night × desktop/mobile (scrolls through the page first so reveal-on-scroll content is visible).

## Build & deploy

```sh
bun run build          # prerenders the site into .svelte-kit/cloudflare
bunx wrangler deploy   # deploys the "mkpo-li" Worker
```

## Sponsor

I make this site alone. I don't have a job, and my small TA pay doesn't cover rent and food. Even one dollar on [Ko-fi](https://ko-fi.com/mkpoli) helps me eat today. Companies interested in sponsoring can write to mkpoli@mkpo.li.

[![Support me on Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/mkpoli)
