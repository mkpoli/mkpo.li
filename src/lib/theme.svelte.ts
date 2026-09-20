export type Theme = 'day' | 'night';

const state = $state({ theme: 'day' as Theme });

/** Read the theme the FOUC-guard script in app.html already applied. */
export function initTheme(): void {
	state.theme = document.documentElement.dataset.theme === 'night' ? 'night' : 'day';
}

export function getTheme(): Theme {
	return state.theme;
}

export function toggleTheme(): void {
	const next: Theme = state.theme === 'day' ? 'night' : 'day';
	state.theme = next;
	document.documentElement.dataset.theme = next;
	try {
		localStorage.setItem('theme', next);
	} catch {
		/* private mode */
	}
}

export function reducedMotion(): boolean {
	return (
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);
}
