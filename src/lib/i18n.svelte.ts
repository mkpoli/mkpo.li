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
		supporters: string;
		anonymous: string;
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
		lead: '言語と文字のための無料ツールやサイトを、大好きな気持ちで、ぜんぶ自費で作っています。仕事はなく、わずかなTAのお給料では家賃や食費すらまかないきれません。日によっては、ご飯を食べるのもやっとです……',
		ask: '開発を続けられるよう、どうか力を貸してください🥺 たった1⁠ドルでも、今日の私のごはん代として本当に助かります。',
		howTo: '応援の方法',
		steps: [
			'下のKo-fiをタップしてください。',
			'お好きな金額を選んでください。少額でもすごく嬉しいです。',
			'PayPalまたはカードでお支払いいただけます。会員登録は不要です。'
		],
		kofi: '1回だけでも、毎月でも',
		company: '企業スポンサー',
		companyHint: 'このサイトへの広告掲載も大歓迎です。mkpoli@mkpo.liまでぜひご連絡ください。',
		thanks:
			'ここまで読んでくださって本当にありがとうございます。あたたかいご支援のおかげで、今日のご飯が食べられて、プロジェクトを続けていくことができます💗',
		supporters: '最近のサポーター',
		anonymous: '匿名'
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
		lead: "I make free tools and sites for languages and writing, out of love, and I pay for them myself. I don't have a job, and my small TA pay doesn't cover rent and food. Some days I can barely afford to eat.",
		ask: 'Please help me keep going 🥺 Even one dollar helps me eat today.',
		howTo: 'How to help',
		steps: [
			'Tap Ko-fi below.',
			'Pick any amount. Small is fine.',
			'Pay with PayPal or a card. No sign-up needed.'
		],
		kofi: 'One-time or monthly',
		company: 'Company sponsorship',
		companyHint: "I'd love to put your ad on this site. Please write to mkpoli@mkpo.li.",
		thanks: 'Thank you for reading this far. Your help keeps me fed and keeps my projects going 💗',
		supporters: 'Recent supporters',
		anonymous: 'Someone'
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
		lead: '出于一腔热爱，我一直在自费制作面向语言和文字的免费小工具与网站。我目前没有工作，微薄的助教补贴连房租和饭钱都不够，有些日子甚至快要吃不起饭了……',
		ask: '求求大家帮帮我，让我能继续坚持下去🥺 哪怕只有1⁠美元，也能帮我解决今天的饭钱。',
		howTo: '如何支持我',
		steps: [
			'点击下方的Ko-fi。',
			'随心选择金额，哪怕一点点也超级感激。',
			'使用PayPal或银行卡支付，无需注册账号。'
		],
		kofi: '单次或按月赞助',
		company: '企业赞助',
		companyHint: '我很乐意在网站上展示你的广告，欢迎发邮件至mkpoli@mkpo.li联系我。',
		thanks: '谢谢你愿意看到这里。你的支持不仅能让我填饱肚子，也能让这些小项目继续走下去💗',
		supporters: '最近支持者',
		anonymous: '某人'
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
