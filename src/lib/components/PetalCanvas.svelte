<script lang="ts">
	import { reducedMotion } from '$lib/theme.svelte';

	let canvas: HTMLCanvasElement;

	interface Petal {
		x: number;
		y: number;
		z: number; // depth 0.4–1
		size: number;
		vy: number;
		phase: number;
		rot: number;
		spin: number;
		fs: number; // flutter speed
		fp: number; // flutter phase
	}

	interface Burst {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		rot: number;
		spin: number;
		life: number; // 1 → 0
	}

	$effect(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let raf = 0;
		let w = 0;
		let h = 0;
		let dpr = 1;
		let petalColor = '#f6bfd6';
		let night = false;
		let petals: Petal[] = [];
		let bursts: Burst[] = [];
		const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

		const readTheme = () => {
			petalColor = getComputedStyle(document.documentElement).getPropertyValue('--petal').trim();
			night = document.documentElement.dataset.theme === 'night';
		};

		const spawn = (randomY: boolean): Petal => {
			const z = 0.4 + Math.random() * 0.6;
			return {
				x: Math.random() * w,
				y: randomY ? Math.random() * h : -24,
				z,
				size: (8 + Math.random() * 8) * z,
				vy: (18 + Math.random() * 22) * z,
				phase: Math.random() * Math.PI * 2,
				rot: Math.random() * Math.PI * 2,
				spin: (Math.random() - 0.5) * 1.2,
				fs: 0.8 + Math.random() * 1.6,
				fp: Math.random() * Math.PI * 2
			};
		};

		const populate = () => {
			const target = Math.round(Math.min(42, Math.max(14, (w * h) / 36000)) * (night ? 0.75 : 1));
			petals = Array.from({ length: target }, () => spawn(true));
		};

		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			populate();
		};

		const drawShape = (
			x: number,
			y: number,
			rot: number,
			size: number,
			alpha: number,
			squish = 1
		) => {
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rot);
			ctx.scale(1, squish);
			ctx.globalAlpha = alpha;
			ctx.fillStyle = petalColor;
			if (night) {
				ctx.shadowBlur = 12;
				ctx.shadowColor = petalColor;
			}
			ctx.beginPath();
			ctx.moveTo(0, size * 0.6);
			ctx.quadraticCurveTo(-size * 0.7, 0, -size * 0.25, -size * 0.55);
			ctx.quadraticCurveTo(0, -size * 0.35, size * 0.25, -size * 0.55);
			ctx.quadraticCurveTo(size * 0.7, 0, 0, size * 0.6);
			ctx.fill();
			ctx.restore();
		};

		let last = performance.now();
		const loop = (t: number) => {
			const dt = Math.min((t - last) / 1000, 0.05);
			last = t;
			ctx.clearRect(0, 0, w, h);

			// pointer parallax eases toward the cursor
			pointer.x += (pointer.tx - pointer.x) * Math.min(dt * 3, 1);
			pointer.y += (pointer.ty - pointer.y) * Math.min(dt * 3, 1);

			for (let i = 0; i < petals.length; i++) {
				const p = petals[i];
				p.y += p.vy * dt;
				p.x += Math.sin(t / 1000 + p.phase) * 24 * p.z * dt;
				p.rot += p.spin * dt;
				if (p.y > h + 24) petals[i] = spawn(false);
				const ox = -pointer.x * 18 * p.z;
				const oy = -pointer.y * 12 * p.z;
				// 3D-ish flutter: petals tumble by squashing on their own axis
				const squish = 0.3 + 0.7 * Math.abs(Math.sin((t / 1000) * p.fs + p.fp));
				drawShape(p.x + ox, p.y + oy, p.rot, p.size, (night ? 0.55 : 0.85) * p.z, squish);
			}

			for (let i = bursts.length - 1; i >= 0; i--) {
				const b = bursts[i];
				b.vy += 240 * dt;
				b.x += b.vx * dt;
				b.y += b.vy * dt;
				b.rot += b.spin * dt;
				b.life -= dt / 1.1;
				if (b.life <= 0) {
					bursts.splice(i, 1);
					continue;
				}
				drawShape(b.x, b.y, b.rot, b.size, b.life * (night ? 0.7 : 0.9));
			}

			raf = requestAnimationFrame(loop);
		};

		const staticFrame = () => {
			ctx.clearRect(0, 0, w, h);
			for (const p of petals) drawShape(p.x, p.y, p.rot, p.size, (night ? 0.5 : 0.8) * p.z);
		};

		const start = () => {
			cancelAnimationFrame(raf);
			if (reducedMotion()) {
				bursts = [];
				staticFrame();
			} else {
				last = performance.now();
				raf = requestAnimationFrame(loop);
			}
		};

		const onVisibility = () => {
			if (document.hidden) cancelAnimationFrame(raf);
			else start();
		};

		const onPointerMove = (e: PointerEvent) => {
			pointer.tx = (e.clientX / w - 0.5) * 2;
			pointer.ty = (e.clientY / h - 0.5) * 2;
		};

		// a small petal burst wherever you tap, except on controls
		const onPointerDown = (e: PointerEvent) => {
			if (reducedMotion()) return;
			if ((e.target as Element | null)?.closest?.('a, button, input, textarea, select')) return;
			for (let i = 0; i < 12; i++) {
				const ang = Math.random() * Math.PI * 2;
				const speed = 60 + Math.random() * 120;
				bursts.push({
					x: e.clientX,
					y: e.clientY,
					vx: Math.cos(ang) * speed,
					vy: Math.sin(ang) * speed - 40,
					size: 5 + Math.random() * 5,
					rot: Math.random() * Math.PI * 2,
					spin: (Math.random() - 0.5) * 6,
					life: 1
				});
			}
		};

		readTheme();
		resize();
		start();

		const observer = new MutationObserver(() => {
			readTheme();
			populate();
			if (reducedMotion()) staticFrame();
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

		window.addEventListener('resize', resize);
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('pointerdown', onPointerDown, { passive: true });
		document.addEventListener('visibilitychange', onVisibility);

		// honor OS-level reduced-motion changes mid-session
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const onMotionChange = () => start();
		motionQuery.addEventListener('change', onMotionChange);

		return () => {
			cancelAnimationFrame(raf);
			observer.disconnect();
			window.removeEventListener('resize', resize);
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerdown', onPointerDown);
			document.removeEventListener('visibilitychange', onVisibility);
			motionQuery.removeEventListener('change', onMotionChange);
		};
	});
</script>

<canvas bind:this={canvas} class="pointer-events-none fixed inset-0 z-0" aria-hidden="true"
></canvas>
