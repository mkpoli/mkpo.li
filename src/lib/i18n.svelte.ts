export type Locale = 'ja' | 'en' | 'zh';
export type L10n = { ja: string; en: string; zh: string };

/* Copy policy: as little text as possible. No slogans, no lead sentences,
 * no rhetorical「、」pauses. Data speaks for itself. The only catchcopy on
 * the site is mkpoli's own 言葉は、世界をつなぐ。 from her profile card. */
export interface Messages {
	hero: {
		catch: string;
		tagline: string;
		location: string;
		langs: string;
		scroll: string;
	};
	sections: {
		tsukuru: { filterAll: string; archived: string };
		hiraku: { metaLink: string };
		links: { title: string };
	};
	a11y: {
		skip: string;
		themeToggle: string;
		langLabel: string;
		menu: string;
		externalLink: string;
		portraitAlt: string;
	};
}

const ja: Messages = {
	hero: {
		catch: '言葉は、世界をつなぐ。',
		tagline: '言語好き / 開発者 / デザイナー',
		location: '日本在住 · she/her',
		langs: '日本語 · English · 中文',
		scroll: 'スクロール'
	},
	sections: {
		tsukuru: { filterAll: 'すべて', archived: 'アーカイブ' },
		hiraku: { metaLink: 'ウィキメディア利用者ページ' },
		links: { title: 'リンク' }
	},
	a11y: {
		skip: '本文へ',
		themeToggle: 'テーマ切り替え（昼桜／夜桜）',
		langLabel: '言語',
		menu: 'メニュー',
		externalLink: '外部リンク',
		portraitAlt: 'まくぽりのイラスト'
	}
};

const en: Messages = {
	hero: {
		catch: 'Words connect the world.',
		tagline: 'language nerd / developer / designer',
		location: 'Based in Japan · she/her',
		langs: '日本語 · English · 中文',
		scroll: 'scroll'
	},
	sections: {
		tsukuru: { filterAll: 'All', archived: 'archived' },
		hiraku: { metaLink: 'Wikimedia user page' },
		links: { title: 'Links' }
	},
	a11y: {
		skip: 'Skip to content',
		themeToggle: 'Toggle theme (day / night sakura)',
		langLabel: 'Language',
		menu: 'Menu',
		externalLink: 'external link',
		portraitAlt: 'Illustration of mkpoli'
	}
};

const zh: Messages = {
	hero: {
		catch: '语言，连接世界。',
		tagline: '语言爱好者 / 开发者 / 设计师',
		location: '现居日本 · she/her',
		langs: '日本語 · English · 中文',
		scroll: '往下滑'
	},
	sections: {
		tsukuru: { filterAll: '全部', archived: '已归档' },
		hiraku: { metaLink: '维基媒体用户页' },
		links: { title: '链接' }
	},
	a11y: {
		skip: '跳到正文',
		themeToggle: '切换主题（昼樱／夜樱）',
		langLabel: '语言',
		menu: '菜单',
		externalLink: '外部链接',
		portraitAlt: 'mkpoli 的插画'
	}
};

const messages: Record<Locale, Messages> = { ja, en, zh };

const state = $state({ locale: 'ja' as Locale });

/** Read the locale the FOUC-guard script in app.html already applied. */
export function initLocale(): void {
	const lang = document.documentElement.lang;
	if (lang === 'en' || lang === 'zh') state.locale = lang;
}

export function getLocale(): Locale {
	return state.locale;
}

export function setLocale(l: Locale): void {
	state.locale = l;
	document.documentElement.lang = l;
	try {
		localStorage.setItem('locale', l);
	} catch {
		/* private mode */
	}
}

export function m(): Messages {
	return messages[state.locale];
}

export function pick(l: L10n): string {
	return l[state.locale];
}
