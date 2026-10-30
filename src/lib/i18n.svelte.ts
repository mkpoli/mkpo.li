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
	sponsor: {
		label: string;
		close: string;
		lead: string;
		ask: string;
		howTo: string;
		steps: [string, string, string];
		kofi: string;
		company: string;
		companyHint: string;
		thanks: string;
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
	},
	sponsor: {
		label: 'スポンサー',
		close: '閉じる',
		lead: 'これらのプロジェクトは外部からの資金援助を受けず、すべて個人で開発しています。どなたでも無料で利用できるようにしており、これからもずっと無料で続けていきたいと思っています。',
		ask: 'もし制作物が少しでもお役に立っていましたら、Ko-fiでチップをいただけると、改善を続けていく時間を確保できます。',
		howTo: 'チップの贈り方',
		steps: [
			'下のKo-fiをタップします。',
			'1回のみ、または毎月からお好きな金額を選びます。',
			'PayPalまたはカードで支払います。アカウント登録は不要です。'
		],
		kofi: '1回のみ、または毎月',
		company: '企業様からのスポンサーも受け付けています',
		companyHint: '当サイトへの広告掲載が可能です。mkpoli@mkpo.liまでお気軽にご連絡ください。',
		thanks: '見に来てくださりありがとうございます💗'
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
	},
	sponsor: {
		label: 'Sponsor',
		close: 'Close',
		lead: "I build these projects on my own, with no funding behind them. They're free for everyone, and I'd like to keep it that way.",
		ask: 'If my work is useful to you, a tip on Ko-fi gives me time to keep improving it.',
		howTo: 'How to tip',
		steps: [
			'Tap Ko-fi below.',
			'Pick any amount, one-time or monthly.',
			'Pay with PayPal or a card. No sign-up needed.'
		],
		kofi: 'One-time or monthly',
		company: 'Companies can sponsor too',
		companyHint: 'With an ad on this site. Write to mkpoli@mkpo.li.',
		thanks: 'Thank you for stopping by 💗'
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
	},
	sponsor: {
		label: '赞助',
		close: '关闭',
		lead: '这些项目都是我独立开发的，没有外部资金支持。大家都可以免费使用，我也希望一直这样做下去。',
		ask: '如果我的作品对你有帮助，欢迎在Ko-fi上打赏，让我有更多时间继续完善它们。',
		howTo: '如何打赏',
		steps: [
			'点击下方的Ko-fi。',
			'金额随心，可以一次性打赏，也可以每月支持。',
			'使用PayPal或银行卡付款，无需注册。'
		],
		kofi: '一次性打赏或每月支持',
		company: '也欢迎企业赞助',
		companyHint: '可以通过在本站投放广告来支持我。欢迎来信：mkpoli@mkpo.li。',
		thanks: '谢谢你来逛逛💗'
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
