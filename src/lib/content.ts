import type { L10n } from '$lib/i18n.svelte';

/* Everything the site says about mkpoli lives here.
 * Privacy contract: identity is mkpoli / まくぽり only; queer/transgender
 * information work is described as work. See prompts/ORCHESTRATOR.md.
 * Copy policy: no slogans, no invented prose — names, data and links only. */

/* Keyword labels stay in Japanese in every locale — they are brand marks
 * (mirroring the reference card), with the localized gloss as ruby text.
 * Glosses are deliberately free renderings per locale, not translations. */
export interface Keyword {
	id: string;
	label: string;
	gloss: L10n;
}

export const KEYWORDS: Keyword[] = [
	{ id: 'kotoba', label: 'ことば', gloss: { ja: '言語', en: 'words', zh: '语言' } },
	{ id: 'shiraberu', label: 'しらべる', gloss: { ja: '研究', en: 'research', zh: '研究' } },
	{ id: 'tsukuru', label: 'つくる', gloss: { ja: '開発・デザイン', en: 'build', zh: '创作' } },
	{ id: 'hiraku', label: 'ひらく', gloss: { ja: 'オープンナレッジ', en: 'open', zh: '开放' } },
	{ id: 'tsunagu', label: 'つなぐ', gloss: { ja: 'コミュニティ', en: 'connect', zh: '连结' } },
	{ id: 'queer', label: 'クィア', gloss: { ja: '情報アクセス', en: 'queer', zh: '酷儿' } }
];

/* Human languages by proficiency, from the public GitHub profile README */
export const LANGUAGE_TIERS: { tier: string; langs: string[] }[] = [
	{ tier: 'C+', langs: ['中文', '日本語', 'English', 'français'] },
	{
		tier: 'B+',
		langs: [
			'Deutsch',
			'한국어',
			'aynu itak',
			'廣東話',
			'русский',
			'文言・中古音',
			'古典日本語',
			'Latina'
		]
	}
];

export type FocusIcon =
	'ainu' | 'sign' | 'kanbun' | 'classical' | 'phonetics' | 'etymology' | 'typology' | 'script';

export interface FocusArea {
	icon: FocusIcon;
	name: L10n;
	note: L10n;
}

export const FOCUS_AREAS: FocusArea[] = [
	{
		icon: 'ainu',
		name: { ja: 'アイヌ語', en: 'Ainu', zh: '阿伊努语' },
		note: {
			ja: '辞書・コーパス・IME・NLP',
			en: 'dictionaries, corpora, IME & NLP',
			zh: '词典・语料库・输入法・NLP'
		}
	},
	{
		icon: 'sign',
		name: { ja: '日本手話', en: 'Japanese Sign Language', zh: '日本手语' },
		note: {
			ja: 'もうひとつの日本のことば',
			en: 'another language of Japan',
			zh: '日本的另一种语言'
		}
	},
	{
		icon: 'kanbun',
		name: { ja: '漢文・音韻学', en: 'Classical Chinese & phonology', zh: '文言・音韵学' },
		note: {
			ja: '中古音・漢字音・訓読',
			en: 'historical phonology & kundoku',
			zh: '中古音・汉字音・训读'
		}
	},
	{
		icon: 'classical',
		name: { ja: '古典・文献学', en: 'Classics & philology', zh: '古典・文献学' },
		note: {
			ja: '翻刻・校訂・くずし字',
			en: 'transcription, editing & kuzushiji',
			zh: '翻刻・校订・变体假名'
		}
	},
	{
		icon: 'phonetics',
		name: { ja: '音声学・音韻論', en: 'Phonetics & phonology', zh: '语音学・音系学' },
		note: { ja: '音のしくみを測る', en: 'measuring how sounds work', zh: '测量声音的结构' }
	},
	{
		icon: 'etymology',
		name: { ja: '語源・語彙史', en: 'Etymology', zh: '语源・词汇史' },
		note: { ja: '語はどう旅するか', en: 'how words travel', zh: '词语如何旅行' }
	},
	{
		icon: 'typology',
		name: { ja: '言語類型論', en: 'Typology', zh: '语言类型学' },
		note: { ja: '世界の文法を比べる', en: 'comparing the world’s grammars', zh: '比较世界的语法' }
	},
	{
		icon: 'script',
		name: { ja: '文字・表記', en: 'Scripts & orthography', zh: '文字・书写系统' },
		note: { ja: '文字体系と変換', en: 'writing systems & conversion', zh: '文字体系与转换' }
	}
];

export interface ResearchItem {
	title: L10n;
	desc: L10n;
	href?: string;
}

export const RESEARCH_ITEMS: ResearchItem[] = [
	{
		title: {
			ja: 'アイヌ語文献資料データベース',
			en: 'Ainu source database',
			zh: '阿伊努语文献资料数据库'
		},
		desc: {
			ja: '一次資料・翻刻・研究文献・コーパスを横断する索引サイト。',
			en: 'An index across primary sources, transcriptions, studies and corpora.',
			zh: '汇集一次资料、翻刻、研究文献与语料库的索引网站。'
		},
		href: 'https://aynu.org'
	},
	{
		title: { ja: 'アイヌ語コーパスとNLP', en: 'Ainu corpora & NLP', zh: '阿伊努语语料库与NLP' },
		desc: {
			ja: '形態素データベース・品詞タガー・コーパス処理パイプライン。',
			en: 'A morpheme database, POS tagger and corpus pipelines.',
			zh: '形态素数据库、词性标注器与语料处理流水线。'
		},
		href: 'https://github.com/mkpoli/ainu-corpora-process'
	},
	{
		title: { ja: '語順の大規模比較', en: 'Word order at scale', zh: '大规模语序比较' },
		desc: {
			ja: 'コーパスによる語順研究と、並べて比べるインタラクティブツール。',
			en: 'Corpus-based word-order research with an interactive comparison tool.',
			zh: '基于语料库的语序研究与交互式比较工具。'
		},
		href: 'https://github.com/mkpoli/word-order'
	},
	{
		title: { ja: '翻刻とくずし字', en: 'Kuzushiji & transcription', zh: '变体假名与翻刻' },
		desc: {
			ja: '日本古典籍の翻刻を支える道具づくり。',
			en: 'Tools that support transcribing classical Japanese texts.',
			zh: '为日本古籍翻刻制作工具。'
		},
		href: 'https://github.com/mkpoli/honkoku-toolbox'
	}
];

export type ProjectCategory = 'language' | 'typesetting' | 'research' | 'play' | 'writing' | 'life';

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: L10n }[] = [
	{ id: 'language', label: { ja: 'ことば', en: 'Language', zh: '语言' } },
	{ id: 'typesetting', label: { ja: '組版', en: 'Typesetting', zh: '排版' } },
	{ id: 'research', label: { ja: '研究', en: 'Research', zh: '研究' } },
	{ id: 'play', label: { ja: 'あそび', en: 'Play', zh: '游戏' } },
	{ id: 'writing', label: { ja: '記事', en: 'Writing', zh: '文章' } },
	{ id: 'life', label: { ja: 'くらし', en: 'Life', zh: '生活' } }
];

export interface Project {
	name: string;
	desc: L10n;
	category: ProjectCategory;
	tags: string[];
	url?: string;
	repo?: string;
	/** anchor id, when a hero keyword points at this card */
	anchor?: string;
	/** optional role chip, e.g. founder */
	role?: L10n;
	/** rainbow-accented card */
	rainbow?: boolean;
	/** project or link kept for historical reference */
	archived?: boolean;
}

export const PROJECTS: Project[] = [
	{
		name: 'aynu.org',
		desc: {
			ja: 'アイヌ語の総合ポータルサイト。',
			en: 'A portal site for the Ainu language.',
			zh: '阿伊努语综合门户网站。'
		},
		category: 'language',
		tags: ['Svelte', 'Cloudflare'],
		url: 'https://aynu.org'
	},
	{
		name: 'Itak-uoeroskip',
		desc: {
			ja: '現代アイヌ語翻訳用語集のウェブ版。',
			en: 'The modern Ainu translation glossary on the web.',
			zh: '现代阿伊努语翻译用语集网页版。'
		},
		category: 'language',
		tags: ['Svelte', 'i18n'],
		url: 'https://itak.aynu.org',
		repo: 'https://github.com/mkpoli/ainu-glossary'
	},
	{
		name: 'ainconv',
		desc: {
			ja: 'アイヌ語の表記変換ライブラリ（JS・Python・Rust）。',
			en: 'Ainu script conversion libraries in JS, Python and Rust.',
			zh: '阿伊努语文字转换库（JS・Python・Rust）。'
		},
		category: 'language',
		tags: ['TypeScript', 'Python', 'Rust'],
		repo: 'https://github.com/mkpoli/ainconv'
	},
	{
		name: 'ainuKey',
		desc: {
			ja: 'Windows向けアイヌ語IME。',
			en: 'An Ainu input method editor for Windows.',
			zh: '面向 Windows 的阿伊努语输入法。'
		},
		category: 'language',
		tags: ['Rust', 'Windows'],
		repo: 'https://github.com/mkpoli/ainuKey'
	},
	{
		name: 'word-order',
		desc: {
			ja: '語順を並べて比べるインタラクティブツール。',
			en: 'An interactive tool for comparing word order across languages.',
			zh: '交互式语序比较工具。'
		},
		category: 'research',
		tags: ['Svelte', 'Visualization'],
		repo: 'https://github.com/mkpoli/word-order'
	},
	{
		name: 'Kureedo クレード',
		desc: {
			ja: 'Klee Oneに江戸・明治の版本の片仮名字形とアイヌ語の拡張仮名を加えたフリーフォント。',
			en: 'A free font: Klee One with Edo–Meiji printed katakana and the Ainu extended kana.',
			zh: '在 Klee One 上加入江户・明治版本片假名字形与阿伊努语扩展假名的免费字体。'
		},
		category: 'typesetting',
		tags: ['OpenType', 'Python', 'Klee One'],
		url: 'https://kureedo.mkpo.li',
		repo: 'https://github.com/mkpoli/kureedo'
	},
	{
		name: 'tyler',
		desc: {
			ja: 'Typstパッケージ公開用のCLIツール。',
			en: 'A CLI for publishing Typst packages.',
			zh: '发布 Typst 包的 CLI 工具。'
		},
		category: 'typesetting',
		tags: ['TypeScript', 'Typst'],
		repo: 'https://github.com/mkpoli/tyler'
	},
	{
		name: 'hundouk 訓読',
		desc: {
			ja: 'Typstで漢文訓読を組むためのパッケージ。',
			en: 'Kanbun kundoku rendering for Typst.',
			zh: '用 Typst 排版汉文训读的包。'
		},
		category: 'typesetting',
		tags: ['Typst'],
		repo: 'https://github.com/mkpoli/hundouk'
	},
	{
		name: 'ipsj-typst-template',
		desc: {
			ja: '情報処理学会研究報告のTypstテンプレート。',
			en: 'An IPSJ technical report template for Typst.',
			zh: '信息处理学会研究报告的 Typst 模板。'
		},
		category: 'typesetting',
		tags: ['Typst'],
		repo: 'https://github.com/mkpoli/ipsj-typst-template'
	},
	{
		name: 'PaletteWorks Editor',
		desc: {
			ja: 'プロセカ創作譜面のエディタ。',
			en: 'A chart editor for Project Sekai fan charts.',
			zh: 'Project Sekai 创作谱面编辑器。'
		},
		category: 'play',
		tags: ['Svelte', 'PixiJS'],
		url: 'https://paletteworks.mkpo.li',
		repo: 'https://github.com/mkpoli/paletteworks-editor',
		archived: true
	},
	{
		name: 'LemonTV',
		desc: {
			ja: 'Strinova eスポーツの情報サイト。',
			en: 'An esports information hub for Strinova.',
			zh: 'Strinova 电竞资讯站。'
		},
		category: 'play',
		tags: ['Svelte', 'Drizzle'],
		url: 'https://lemontv.win',
		role: { ja: '創設者', en: 'founder', zh: '创始人' }
	},
	{
		name: 'phonia',
		desc: {
			ja: '新世代の音声分析ソフトウェア。',
			en: 'Next-generation phonetic analysis software.',
			zh: '新一代语音分析软件。'
		},
		category: 'research',
		tags: ['Rust', 'Svelte', 'Audio'],
		url: 'https://phonia.app',
		repo: 'https://github.com/mkpoli/phonia'
	},
	{
		name: 'honkoku-toolbox',
		desc: {
			ja: '日本古典籍を翻刻するときの便利ツール集。',
			en: 'Handy tools for transcribing classical Japanese books.',
			zh: '日本古籍翻刻的便利工具箱。'
		},
		category: 'research',
		tags: ['Svelte'],
		repo: 'https://github.com/mkpoli/honkoku-toolbox'
	},
	{
		name: 'TransNavi',
		desc: {
			ja: '日本語圏のトランスジェンダー情報ナビゲーション。',
			en: 'Transgender information navigation for Japanese speakers.',
			zh: '日语圈跨性别信息导航。'
		},
		category: 'life',
		tags: ['2345.LGBT'],
		url: 'https://transnavi.jp',
		anchor: 'queer',
		role: { ja: '創設者', en: 'founder', zh: '创始人' },
		rainbow: true
	},
	{
		name: 'sus-io',
		desc: {
			ja: 'SUS譜面のパーサ・ジェネレータ（Python・npm）。',
			en: 'A parser and generator for SUS rhythm-game charts.',
			zh: 'SUS 谱面解析与生成库（Python・npm）。'
		},
		category: 'play',
		tags: ['Python', 'TypeScript'],
		url: 'https://pypi.org/project/sus-io/',
		repo: 'https://github.com/mkpoli/sus-io'
	}
];

/* Smaller tools, pages and articles, carried over from the previous mkpo.li */
export interface MiniWork {
	name: string;
	href: string;
	category: ProjectCategory;
	archived?: boolean;
}

const PUBLIC_REPO_WORKS: MiniWork[] = [
	{ name: 'language-patterns', href: 'https://languagepatterns.org', category: 'research' },
	{ name: 'p-graveyard', href: 'https://p.languagepatterns.org', category: 'research' },
	{
		name: 'cormorant-zen-antique',
		href: 'https://github.com/mkpoli/cormorant-zen-antique',
		category: 'typesetting'
	},
	{
		name: 'typst-keyless',
		href: 'https://typst.app/universe/package/keyless',
		category: 'typesetting'
	},
	{
		name: 'typst-inboisu',
		href: 'https://typst.app/universe/package/inboisu/',
		category: 'typesetting'
	},
	{ name: 'kanbun-req', href: 'https://kanbun-req.mkpo.li', category: 'typesetting' },
	{ name: 'roremu', href: 'https://github.com/mkpoli/roremu', category: 'typesetting' },
	{ name: 'contexto-multilang', href: 'https://contexto.mkpo.li/', category: 'play' },
	{
		name: 'mediawiki-template-usage',
		href: 'https://github.com/mkpoli/mediawiki-template-usage',
		category: 'research'
	},
	{
		name: 'classical-chinese-word-freq',
		href: 'https://github.com/mkpoli/classical-chinese-word-freq',
		category: 'research'
	},
	{ name: 'minecraft-lang-api', href: 'https://mc-lang.mkpo.li', category: 'language' },
	{ name: 'canisubmit', href: 'https://canisubmit.mkpo.li/', category: 'research' },
	{ name: 'ainu-wiktionary', href: 'https://wikt.aynu.org', category: 'language' },
	{ name: 'kuzushiji', href: 'https://github.com/mkpoli/kuzushiji', category: 'research' },
	{
		name: 'wenyan-book-video',
		href: 'https://github.com/mkpoli/wenyan-book-video',
		category: 'typesetting'
	},
	{
		name: 'whisper-rt-aivis',
		href: 'https://github.com/mkpoli/whisper-rt-aivis',
		category: 'research'
	},
	{ name: 'wiktionary-ja', href: 'https://github.com/mkpoli/wiktionary-ja', category: 'language' },
	{
		name: 'ainconv unified tests',
		href: 'https://github.com/mkpoli/ainconv-tests',
		category: 'language'
	},
	{ name: 'java-is-to-javascript', href: 'https://js.mkpo.li/', category: 'play' },
	{ name: 'variant-selector', href: 'https://vs.mkpo.li/', category: 'language' },
	{
		name: 'honkoku-toolbox UserScript',
		href: 'https://greasyfork.org/ja/scripts/512368-honkoku-toolbox',
		category: 'research'
	},
	{
		name: 'vocaloid-shiritori',
		href: 'https://github.com/mkpoli/vocaloid-shiritori',
		category: 'play'
	},
	{ name: 'XCompose.d', href: 'https://github.com/mkpoli/XCompose.d', category: 'language' },
	{ name: 'koconv', href: 'https://korean.mkpo.li', category: 'language' },
	{
		name: 'korean-convert',
		href: 'https://github.com/mkpoli/korean-convert',
		category: 'language'
	},
	{
		name: 'VTuber-Styled-Logos',
		href: 'https://github.com/mkpoli/VTuber-Styled-Logos',
		category: 'play'
	},
	{
		name: 'monkey-example',
		href: 'https://github.com/mkpoli/monkey-example',
		category: 'research'
	},
	{
		name: 'zig-rust-interop',
		href: 'https://github.com/mkpoli/zig-rust-interop',
		category: 'research'
	},
	{
		name: 'ai-pronounceable-ainu',
		href: 'https://github.com/mkpoli/ai-pronounceable-ainu',
		category: 'language'
	},
	{ name: 'site.aynu.org', href: 'https://site.aynu.org', category: 'language' },
	{ name: 'identify-syntax', href: 'https://identify-syntax.vercel.app', category: 'language' },
	{ name: 'han-reassemble', href: 'https://han-reassemble.vercel.app', category: 'language' },
	{ name: 'unicode-font-converter', href: 'https://ufont.mkpo.li/', category: 'language' },
	{
		name: 'FriedPotato',
		href: 'https://github.com/mkpoli/FriedPotato',
		category: 'play',
		archived: true
	},
	{ name: 'sweet-potato', href: 'https://sweet-potato.dev', category: 'play', archived: true },
	{
		name: 'eslint-plugin-no-array-concat',
		href: 'https://github.com/mkpoli/eslint-plugin-no-array-concat',
		category: 'research'
	},
	{
		name: 'monorepo-example',
		href: 'https://github.com/mkpoli/monorepo-example',
		category: 'research'
	},
	{ name: 'sus-js', href: 'https://github.com/mkpoli/sus-js', category: 'play' },
	{ name: 'ids-visualiser', href: 'https://mkpoli.github.io/ids-visualiser', category: 'language' },
	{
		name: 'pjsekai-exo',
		href: 'https://github.com/mkpoli/pjsekai-exo',
		category: 'play',
		archived: true
	},
	{
		name: 'pjsekai-background-generator-pixi',
		href: 'https://github.com/mkpoli/pjsekai-background-generator-pixi',
		category: 'play',
		archived: true
	},
	{
		name: 'pjsekai-content-creators',
		href: 'https://pjsekai-content-creators.vercel.app',
		category: 'play',
		archived: true
	},
	{ name: 'toki-pona-munjan', href: 'https://toki-pona-munjan.vercel.app', category: 'language' },
	{
		name: 'rime-toki-pona-munjan',
		href: 'https://github.com/mkpoli/rime-toki-pona-munjan',
		category: 'language'
	},
	{
		name: 'unit-price-calculator',
		href: 'https://github.com/mkpoli/unit-price-calculator',
		category: 'life'
	},
	{ name: 'pdfxopen', href: 'https://github.com/mkpoli/pdfxopen', category: 'typesetting' },
	{
		name: 'telegram-jadicts-bot',
		href: 'https://github.com/mkpoli/telegram-jadicts-bot',
		category: 'language'
	},
	{
		name: 'rime-kana-trad',
		href: 'https://github.com/mkpoli/rime-kana-trad',
		category: 'language'
	},
	{
		name: 'MiniCoal',
		href: 'https://github.com/mkpoli/MiniCoal',
		category: 'play',
		archived: true
	},
	{ name: 'KoxQim', href: 'https://github.com/mkpoli/KoxQim', category: 'language' },
	{
		name: '5e-demo-downloader',
		href: 'https://github.com/mkpoli/5e-demo-downloader',
		category: 'play',
		archived: true
	},
	{
		name: 'rime-customization',
		href: 'https://github.com/mkpoli/rime-customization',
		category: 'language'
	},
	{ name: 'SIPA4RIME', href: 'https://github.com/mkpoli/SIPA4RIME', category: 'language' },
	{ name: 'phonpy', href: 'https://github.com/mkpoli/phonpy', category: 'research' },
	{
		name: 'AnkiForceCustomFontExtended',
		href: 'https://github.com/mkpoli/AnkiForceCustomFontExtended',
		category: 'language',
		archived: true
	},
	{
		name: 'CSGOSpraysAutoGenerator',
		href: 'https://github.com/mkpoli/CSGOSpraysAutoGenerator',
		category: 'play',
		archived: true
	},
	{
		name: 'PEAnalyzer',
		href: 'https://github.com/mkpoli/PEAnalyzer',
		category: 'research',
		archived: true
	},
	{
		name: 'JumpStatsHelper',
		href: 'https://github.com/mkpoli/JumpStatsHelper',
		category: 'play',
		archived: true
	},
	{
		name: 'PlayerTrail',
		href: 'https://github.com/mkpoli/PlayerTrail',
		category: 'play',
		archived: true
	},
	{
		name: 'KZStrafeTrainingTool',
		href: 'https://github.com/mkpoli/KZStrafeTrainingTool',
		category: 'play',
		archived: true
	},
	{
		name: 'Jinrou-Game',
		href: 'https://github.com/mkpoli/Jinrou-Game',
		category: 'play',
		archived: true
	},
	{
		name: 'EasyPicker',
		href: 'https://github.com/mkpoli/EasyPicker',
		category: 'play',
		archived: true
	},
	{
		name: 'KekkaiMod',
		href: 'https://github.com/mkpoli/KekkaiMod',
		category: 'play',
		archived: true
	},
	{
		name: 'Spleef-Manager',
		href: 'https://github.com/mkpoli/Spleef-Manager',
		category: 'play',
		archived: true
	}
];

const PUBLIC_PACKAGE_WORKS: MiniWork[] = [
	{ name: 'ainconv npm', href: 'https://www.npmjs.com/package/ainconv', category: 'language' },
	{ name: 'ainconv PyPI', href: 'https://pypi.org/project/ainconv/', category: 'language' },
	{ name: 'ainconv crates.io', href: 'https://crates.io/crates/ainconv', category: 'language' },
	{
		name: '@mkpoli/tyler npm',
		href: 'https://www.npmjs.com/package/@mkpoli/tyler',
		category: 'typesetting'
	},
	{ name: 'koconv npm', href: 'https://www.npmjs.com/package/koconv', category: 'language' },
	{ name: 'sus-io npm', href: 'https://www.npmjs.com/package/sus-io', category: 'play' },
	{ name: 'sus-parse npm', href: 'https://www.npmjs.com/package/sus-parse', category: 'play' },
	{
		name: 'sus-stringify npm',
		href: 'https://www.npmjs.com/package/sus-stringify',
		category: 'play'
	},
	{ name: 'sus-io PyPI', href: 'https://pypi.org/project/sus-io/', category: 'play' },
	{
		name: 'eslint-plugin-no-array-concat npm',
		href: 'https://www.npmjs.com/package/eslint-plugin-no-array-concat',
		category: 'research'
	},
	{
		name: 'pjsekai-background-generator-pixi npm',
		href: 'https://www.npmjs.com/package/pjsekai-background-generator-pixi',
		category: 'play',
		archived: true
	},
	{
		name: '@mkpoli-arithmetic/plus npm',
		href: 'https://www.npmjs.com/package/@mkpoli-arithmetic/plus',
		category: 'research',
		archived: true
	},
	{
		name: '@mkpoli-arithmetic/minus npm',
		href: 'https://www.npmjs.com/package/@mkpoli-arithmetic/minus',
		category: 'research',
		archived: true
	}
];

const PUBLIC_WRITING_WORKS: MiniWork[] = [
	{
		name: 'Typstでヘッダーに章のタイトルを表示する',
		href: 'https://zenn.dev/mkpoli/articles/a41be0e265a3d2',
		category: 'writing'
	},
	{
		name: 'Typstのselectorで改ページする方法',
		href: 'https://zenn.dev/mkpoli/articles/1d271b8503578c',
		category: 'writing'
	},
	{
		name: 'Typstで現時刻を取得する方法',
		href: 'https://zenn.dev/mkpoli/articles/b0e60a6bc07b10',
		category: 'writing'
	},
	{
		name: '各言語の日本語文字変換ライブラリ一覧',
		href: 'https://zenn.dev/mkpoli/articles/07dd3a0d961058',
		category: 'writing'
	},
	{
		name: 'ViteでらくらくUserScript開発',
		href: 'https://zenn.dev/mkpoli/articles/10116a047cad1f',
		category: 'writing'
	},
	{
		name: 'Zigでビルド時にZig依存を作る',
		href: 'https://zenn.dev/mkpoli/articles/620223f8054b03',
		category: 'writing'
	},
	{
		name: 'Zigでライブラリを利用',
		href: 'https://zenn.dev/mkpoli/articles/a79d4cfe8f4846',
		category: 'writing'
	},
	{
		name: 'ZigでC文字列への変換のメモ',
		href: 'https://zenn.dev/mkpoli/articles/5047d203dbdecb',
		category: 'writing'
	},
	{
		name: 'ZigでEXEにアイコンを埋め込む',
		href: 'https://zenn.dev/mkpoli/articles/a85c186ca58d4a',
		category: 'writing'
	},
	{
		name: 'Rustで書いたDLLをZigで読み込む',
		href: 'https://zenn.dev/mkpoli/articles/4d8c1e28bdd05e',
		category: 'writing'
	},
	{
		name: 'Zigで書いたDLLをRustで読み込む',
		href: 'https://zenn.dev/mkpoli/articles/591756f1af6ca8',
		category: 'writing'
	},
	{
		name: 'AIでもわかる、Nimで作るアイヌ語変換アプリ',
		href: 'https://zenn.dev/mkpoli/articles/6ecddd6c185ef1',
		category: 'writing'
	},
	{
		name: 'Typstの日本語Lipsumパッケージを作ってみた件',
		href: 'https://zenn.dev/mkpoli/articles/7e54c1c780ff43',
		category: 'writing'
	},
	{
		name: 'Typst最初の段落の字下げの調整方法',
		href: 'https://zenn.dev/mkpoli/articles/34a5ea47468979',
		category: 'writing'
	},
	{
		name: 'Typstにおける番号付け指南',
		href: 'https://zenn.dev/mkpoli/articles/eff001d9e691cb',
		category: 'writing'
	},
	{
		name: 'Typstで日本語文字と英数字のフォントを別々に指定する',
		href: 'https://zenn.dev/mkpoli/articles/6234c1d2a595bd',
		category: 'writing'
	},
	{
		name: 'JavaScriptで数字を桁の配列に変換するベンチマーク',
		href: 'https://zenn.dev/mkpoli/articles/75fa97afd77d59',
		category: 'writing'
	},
	{
		name: 'ルビ付けの連鎖正規表現による送り仮名の落とし方',
		href: 'https://zenn.dev/mkpoli/articles/8269f2f3ce71c9',
		category: 'writing'
	},
	{
		name: '自分で ESLint のルールを作ってみた件',
		href: 'https://zenn.dev/mkpoli/articles/fce02f0f4d45fa',
		category: 'writing'
	},
	{
		name: 'VSCode の JSON の整形設定を直そうとした話',
		href: 'https://zenn.dev/mkpoli/articles/b420a59f48c556',
		category: 'writing'
	},
	{
		name: '『桯史・猫牛盗』読み下し文・日本語訳',
		href: 'https://note.com/mkpoli/n/n08b34e24e0f3',
		category: 'writing'
	},
	{ name: '山火傳', href: 'https://note.com/mkpoli/n/nbf9a7ff1317b', category: 'writing' },
	{
		name: '〔漢〕張平子『四愁詩』漢文訓讀＋現代語譯',
		href: 'https://note.com/mkpoli/n/nbd06a3cb7bcd',
		category: 'writing'
	},
	{
		name: '水科七三郎が記録した千島アイヌ語',
		href: 'https://note.com/mkpoli/n/ncdcdcec22d7c',
		category: 'writing'
	},
	{
		name: '【略称だと読みが変わるパターン】',
		href: 'https://note.com/mkpoli/n/n9a0201287885',
		category: 'writing'
	},
	{
		name: '「친근한 어버이」グロス付き歌詞訳',
		href: 'https://note.com/mkpoli/n/n7ac56439ef5d',
		category: 'writing'
	},
	{
		name: '「攻撃戦だ」（コンギョ）ローマ字・グロス付き歌詞訳',
		href: 'https://note.com/mkpoli/n/nc6bac109178a',
		category: 'writing'
	},
	{
		name: '様々な言語の副詞の言い方',
		href: 'https://note.com/mkpoli/n/n62632d919d76',
		category: 'writing'
	},
	{
		name: '『諸言語における福音書』アイヌ語選段の訳',
		href: 'https://note.com/mkpoli/n/n3de19ddf03d9',
		category: 'writing'
	},
	{
		name: 'アイヌ神謡集①【アイヌ語漢字表記実験】',
		href: 'https://note.com/mkpoli/n/nc15000504117',
		category: 'writing'
	},
	{
		name: 'NovelAI Diffusion 髪型研究その① 短髪',
		href: 'https://note.com/mkpoli/n/n4accf6cec905',
		category: 'writing',
		archived: true
	},
	{
		name: '「AI絵作り研究会」コミュニティを設立しました',
		href: 'https://note.com/mkpoli/n/n0830f0026fa1',
		category: 'writing',
		archived: true
	},
	{
		name: '山東京傳『新造圖彙』 「魚蟲」飜刻・句讀',
		href: 'https://note.com/mkpoli/n/n8bb41cf86358',
		category: 'writing'
	},
	{
		name: '漢籍由來大學名一覧',
		href: 'https://note.com/mkpoli/n/n9c8c1a5eaa45',
		category: 'writing'
	},
	{
		name: '『聊斎志異』「耿十八」原文・書き下し文・日本語訳',
		href: 'https://note.com/mkpoli/n/nb4999894338f',
		category: 'writing'
	},
	{
		name: '「魔女の旅々」文字解読史❶―カーシヴ篇―',
		href: 'https://note.com/mkpoli/n/n603948da96a5',
		category: 'writing'
	},
	{
		name: 'いろんな言語の中の日付表現',
		href: 'https://note.com/mkpoli/n/n06168f51bb2b',
		category: 'writing'
	},
	{
		name: '『ようこそ実力至上主義の教室へ』 OP 格言集成',
		href: 'https://note.com/mkpoli/n/n1c03d5faca45',
		category: 'writing'
	},
	{
		name: '源氏物語・帖名（正字正假名）',
		href: 'https://note.com/mkpoli/n/n3b0af8505f1c',
		category: 'writing'
	}
];

const PUBLIC_GIST_WORKS: MiniWork[] = [
	{
		name: 'Typst blue screen',
		href: 'https://gist.github.com/mkpoli/c421e68a1acdb6beb0e2c42d2966d436',
		category: 'typesetting'
	},
	{
		name: 'アイヌ語単語⇆品詞対応表',
		href: 'https://gist.github.com/mkpoli/a8f01221a3e4c865e4126e4784f0863f',
		category: 'language'
	},
	{
		name: 'CHANGELOG updater',
		href: 'https://gist.github.com/mkpoli/e4811538a17dee96df0e056e55f699d9',
		category: 'research'
	},
	{
		name: 'VTuber logo for Svelte',
		href: 'https://gist.github.com/mkpoli/dff0cad3a14876eeb044c1f71172ddda',
		category: 'play'
	},
	{
		name: 'Split ASS subtitle file by style',
		href: 'https://gist.github.com/mkpoli/d75de5bb454bd00257b48192a6e14785',
		category: 'typesetting'
	},
	{
		name: '漢字音二字対義語の声調順序',
		href: 'https://gist.github.com/mkpoli/3c7c141557cd3da9b0d869d27fa6f421',
		category: 'research'
	},
	{
		name: 'Discord sticker usage UserScript',
		href: 'https://gist.github.com/mkpoli/3c300b4973d2090c778b72d10106349f',
		category: 'play'
	},
	{
		name: 'MeCab parseToNode wrapper',
		href: 'https://gist.github.com/mkpoli/1de472d7ca7595e46427c2c1b4c098a0',
		category: 'language'
	},
	{
		name: '2D subset-sum vector snippet',
		href: 'https://gist.github.com/mkpoli/e85aa3d09d79e8b4c9da0019c04de7bc',
		category: 'research'
	},
	{
		name: 'Word Order Illustrator examples',
		href: 'https://gist.github.com/mkpoli/1b14b6c1c7c9ba0674c1629a58b81cd6',
		category: 'research'
	},
	{
		name: 'integer segmentation snippet',
		href: 'https://gist.github.com/mkpoli/d8d21117b85f93f7c81bf6185ee6488d',
		category: 'research'
	},
	{
		name: 'Sieve of Eratosthenes snippet',
		href: 'https://gist.github.com/mkpoli/4811f795270cdbb66bb74c8b1771cb43',
		category: 'research'
	},
	{
		name: '00-to-zz generator',
		href: 'https://gist.github.com/mkpoli/d2df5add0b382a913adf559d90f7d67d',
		category: 'research'
	},
	{
		name: 'Python deployment environment snippet',
		href: 'https://gist.github.com/mkpoli/d1b4e9710e763d52e00261d009108cd7',
		category: 'research'
	},
	{
		name: '字母ルビー',
		href: 'https://gist.github.com/mkpoli/620ea65bb2403c98ad4913e37cd17d06',
		category: 'typesetting'
	},
	{
		name: 'ou/uo 入聲字 list',
		href: 'https://gist.github.com/mkpoli/1b572140b37e3b10eab65fda46704568',
		category: 'language'
	},
	{
		name: 'Telegram delete-message decorator',
		href: 'https://gist.github.com/mkpoli/19791fc286959e6929be12a88c7fe962',
		category: 'research'
	},
	{
		name: 'mdi SVG webpack replacement snippet',
		href: 'https://gist.github.com/mkpoli/8ae86a7a16191bde608cc27ebb33f2ee',
		category: 'research'
	},
	{
		name: 'dynamic Enum property methods',
		href: 'https://gist.github.com/mkpoli/861038f440a924506bee5ad22b1df1a2',
		category: 'research'
	},
	{
		name: 'East-Asian mojibake detection manual',
		href: 'https://gist.github.com/mkpoli/8effa9275182556abf953ebcd4639267',
		category: 'language'
	},
	{
		name: 'Python config-map attributes snippet',
		href: 'https://gist.github.com/mkpoli/8ff5447880333d6a9e3ad177d86b9540',
		category: 'research'
	},
	{
		name: 'Minecraft mod jar filename renamer',
		href: 'https://gist.github.com/mkpoli/79a95c399c47049e19ad6dc1d780e49b',
		category: 'play'
	}
];

export const MINI_WORKS: MiniWork[] = [
	{ name: 'Old Hangul Note', href: 'https://hangul.mkpo.li', category: 'language', archived: true },
	{ name: '言善 sitelen munjan', href: 'https://munjan.mkpo.li', category: 'language' },
	{ name: 'Ainu source database', href: 'https://db.aynu.org', category: 'language' },
	{ name: 'Ainu corpus search', href: 'https://corpus.aynu.org', category: 'language' },
	{ name: 'Sakhalin Ainu site', href: 'https://itah.aynu.org', category: 'language' },
	{ name: 'aintools Discord bot', href: 'https://bot.aynu.org', category: 'language' },
	{ name: 'tu itak Ainu quiz', href: 'https://quiz.aynu.org', category: 'language' },
	{ name: 'tunci Ainu translator', href: 'https://tunci.aynu.io/ja', category: 'language' },
	{
		name: '潘悟雲《漢語歷史音韻學》擬音總結',
		href: 'https://blog.mkpo.li/panwuyun_2000.html',
		category: 'writing'
	},
	{
		name: 'Typstで用語表をつくる',
		href: 'https://zenn.dev/mkpoli/articles/8cea1855ce6461',
		category: 'writing'
	},
	{
		name: 'Typstの段組み徹底攻略',
		href: 'https://zenn.dev/mkpoli/articles/aed15acf334236',
		category: 'writing'
	},
	{
		name: 'Tylerを作った件',
		href: 'https://zenn.dev/mkpoli/articles/99c52202a1d1a8',
		category: 'writing'
	},
	{
		name: 'アイヌ語仮名「ㇷ゚」に対する正規表現の罠',
		href: 'https://zenn.dev/mkpoli/articles/ff01135f91d7ee',
		category: 'writing'
	},
	{
		name: 'ルビ付けにおける正規表現による送り仮名の処理',
		href: 'https://qiita.com/mkpoli/items/7db6a7ba78cd7dc697d1',
		category: 'writing'
	},
	{
		name: '①中和されるmとnについて【アイヌ語表記の諸問題】',
		href: 'https://note.com/mkpoli/n/n15f4d94ff80f',
		category: 'writing'
	},
	{
		name: '千徳太郎治『樺太アイヌ叢話』アイヌ語解読',
		href: 'https://note.com/mkpoli/n/n4dcd26aa814b',
		category: 'writing'
	},
	{
		name: '日本語からアイヌ語に入った借用語',
		href: 'https://note.com/mkpoli/n/n65214d13bec8',
		category: 'writing'
	},
	{
		name: '鳥居龍藏『千島アイヌ』単語集',
		href: 'https://gist.github.com/mkpoli/eafd7fb19271a8cf1ec1d652e012f7ce',
		category: 'research'
	},
	{
		name: '水科七三郎「北海氣象瑣談」解読データ',
		href: 'https://gist.github.com/mkpoli/eea296bbc85e539c7bfdaf89d633cea7',
		category: 'research'
	},
	{
		name: 'アイヌ語基本形態変化一覧表',
		href: 'https://gist.github.com/mkpoli/8205c1581684c91ab9006c0020bdef11',
		category: 'research'
	},
	{
		name: 'Typst linguistics example sentence',
		href: 'https://gist.github.com/mkpoli/da80878e775c62b05eff0cc916d730e5',
		category: 'typesetting'
	},
	{
		name: 'LaTeXの言語学例文表示',
		href: 'https://zenn.dev/mkpoli/articles/26d3b40a652dd6',
		category: 'writing'
	},
	{
		name: 'ESM+TS+Jestのmonorepo構築',
		href: 'https://zenn.dev/mkpoli/articles/1d11ee2edd5bee',
		category: 'writing'
	},
	{
		name: 'Pythonの環境変数デプロイ管理',
		href: 'https://zenn.dev/mkpoli/articles/a86fa78798fbaf',
		category: 'writing'
	},
	{ name: 'しりとりヘルパー', href: 'https://shiritori.mkpo.li', category: 'play' },
	{ name: 'みんなでしりとり', href: 'https://t.me/genkai_shiritori', category: 'play' },
	{ name: 'Sudoku', href: 'https://sudoku.mkpo.li', category: 'play' },
	{ name: 'プロセカCh一覧', href: 'https://pjsekai.mkpo.li', category: 'play', archived: true },
	{ name: '単価計算', href: 'https://unit-calc.mkpo.li', category: 'life' },
	...PUBLIC_REPO_WORKS,
	...PUBLIC_PACKAGE_WORKS,
	...PUBLIC_WRITING_WORKS,
	...PUBLIC_GIST_WORKS
];

export interface Community {
	name: string;
	role: L10n;
	desc: L10n;
	href?: string;
}

export const COMMUNITIES: Community[] = [
	{
		name: 'アイヌ語サーバー',
		role: { ja: '共同創設者', en: 'Co-founder', zh: '共同创立者' },
		desc: {
			ja: 'アイヌ語・アイヌ文化をテーマにしたDiscordコミュニティ。',
			en: 'A Discord community around the Ainu language and culture.',
			zh: '以阿伊努语与阿伊努文化为主题的 Discord 社区。'
		},
		href: 'https://note.com/mkpoli/n/nf2bc75f3f3af'
	},
	{
		name: 'くみはんクラブ',
		role: { ja: '主宰', en: 'Founder', zh: '主理人' },
		desc: {
			ja: 'TeX・Typst・SATySFi、組版と書体のDiscord。',
			en: 'A Discord for TeX, Typst, SATySFi, typesetting and type.',
			zh: '关于 TeX・Typst・SATySFi、排版与字体的 Discord。'
		}
	},
	{
		name: '言語史好きの溜まり場',
		role: { ja: '主宰', en: 'Founder', zh: '主理人' },
		desc: {
			ja: '言語史・比較言語学を平和に語るDiscord。',
			en: 'A Discord for calm talk on historical and comparative linguistics.',
			zh: '和平讨论语言史与历史比较语言学的 Discord。'
		}
	},
	{
		name: 'LemonTV',
		role: { ja: '運営', en: 'Organizer', zh: '运营' },
		desc: {
			ja: 'Strinova のeスポーツコミュニティ。',
			en: 'The Strinova esports community.',
			zh: 'Strinova 电竞社区。'
		},
		href: 'https://lemontv.win'
	},
	{
		name: 'nk2028',
		role: { ja: 'メンバー', en: 'Member', zh: '成员' },
		desc: {
			ja: '歴史中国語音韻学の計算的研究グループ。',
			en: 'A computational research group for historical Chinese phonology.',
			zh: '历史汉语音韵学的计算研究小组。'
		},
		href: 'https://github.com/nk2028'
	},
	{
		name: 'aynumosir',
		role: { ja: 'メンバー', en: 'Member', zh: '成员' },
		desc: {
			ja: 'アイヌ語NLPのGitHubオーガニゼーション。',
			en: 'A GitHub organization for Ainu NLP.',
			zh: '阿伊努语 NLP 的 GitHub 组织。'
		},
		href: 'https://github.com/aynumosir'
	}
];

export const WIKI_PROJECTS = [
	'Wikipedia',
	'Wiktionary',
	'Wikidata',
	'Wikisource',
	'Commons',
	'MediaWiki'
] as const;

export type LinkIcon =
	'github' | 'x' | 'zenn' | 'qiita' | 'note' | 'pixiv' | 'zhihu' | 'blog' | 'kofi' | 'wikimedia';

export interface SocialLink {
	icon: LinkIcon;
	label: string;
	href: string;
}

export const LINKS: SocialLink[] = [
	{ icon: 'github', label: 'GitHub', href: 'https://github.com/mkpoli' },
	{ icon: 'x', label: 'X', href: 'https://x.com/mkpoli' },
	{ icon: 'zenn', label: 'Zenn', href: 'https://zenn.dev/mkpoli' },
	{ icon: 'qiita', label: 'Qiita', href: 'https://qiita.com/mkpoli' },
	{ icon: 'note', label: 'note', href: 'https://note.com/mkpoli' },
	{ icon: 'pixiv', label: 'pixiv', href: 'https://www.pixiv.net/users/5992170' },
	{ icon: 'zhihu', label: '知乎', href: 'https://www.zhihu.com/people/23333333333' },
	{ icon: 'blog', label: 'Blog', href: 'https://blog.mkpo.li' },
	{ icon: 'kofi', label: 'Ko-fi', href: 'https://ko-fi.com/mkpoli' },
	{ icon: 'wikimedia', label: 'Wikimedia', href: 'https://meta.wikimedia.org/wiki/User:Mkpoli' }
];

export const META_WIKI_URL = 'https://meta.wikimedia.org/wiki/User:Mkpoli';
export const TRANSNAVI_URL = 'https://transnavi.jp';
