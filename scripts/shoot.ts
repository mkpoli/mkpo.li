/* Screenshot helper: bun scripts/shoot.ts <url> <outdir> */
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://127.0.0.1:5175/';
const outdir = process.argv[3] ?? 'shots';

const executablePath = `${process.env.HOME}/.cache/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell`;

const browser = await chromium.launch({ executablePath });

const shots: { name: string; width: number; height: number; theme: 'day' | 'night' }[] = [
	{ name: 'day-desktop', width: 1440, height: 900, theme: 'day' },
	{ name: 'night-desktop', width: 1440, height: 900, theme: 'night' },
	{ name: 'day-mobile', width: 390, height: 844, theme: 'day' },
	{ name: 'night-mobile', width: 390, height: 844, theme: 'night' }
];

for (const s of shots) {
	const ctx = await browser.newContext({
		viewport: { width: s.width, height: s.height },
		deviceScaleFactor: 2,
		reducedMotion: 'no-preference'
	});
	const page = await ctx.newPage();
	await page.addInitScript((theme) => {
		localStorage.setItem('theme', theme);
	}, s.theme);
	await page.goto(url, { waitUntil: 'networkidle' });
	await page.waitForTimeout(2200); // let entrance animations finish
	// scroll through the page to trigger reveal-on-scroll, then return to top
	await page.evaluate(async () => {
		const step = window.innerHeight / 2;
		for (let y = 0; y <= document.body.scrollHeight; y += step) {
			window.scrollTo(0, y);
			await new Promise((r) => setTimeout(r, 260));
		}
		window.scrollTo(0, 0);
	});
	await page.waitForTimeout(900);
	await page.screenshot({ path: `${outdir}/${s.name}.png` });
	const full = process.argv.includes('--full');
	if (full && s.name.endsWith('desktop')) {
		await page.screenshot({ path: `${outdir}/${s.name}-full.png`, fullPage: true });
	}
	await ctx.close();
}

await browser.close();
console.log(`saved to ${outdir}/`);
