import type { L10n } from '$lib/i18n.svelte';

/* The writing-system projects on /scripts, by script. Copy policy as in content.ts. */
export interface ScriptWork {
	name: string;
	desc: L10n;
	/** Absent while the project has no public address. */
	href?: string;
	/** Base name of the screenshot in static/gallery. */
	shot?: string;
	/** The site has a dark theme, so a night screenshot exists as well. */
	night?: boolean;
	/** han-compose has no site: show a character it drew. */
	drawn?: boolean;
	/** Sample conversion, set under the description. */
	sample?: string;
}

export interface ScriptChapter {
	id: string;
	name: L10n;
	note: L10n;
	code: string;
	font: string;
	works: ScriptWork[];
}

export const SCRIPT_CHAPTERS: ScriptChapter[] = [
	{
		id: 'tangut',
		name: { ja: '西夏文字', en: 'Tangut', zh: '西夏文' },
		note: {
			ja: '「書く」（Open Tangutの語釈）',
			en: '“to write”, glossed in Open Tangut',
			zh: '“写”（Open Tangut释义）'
		},
		code: 'U+18164',
		font: 'Noto Serif Tangut',
		works: [
			{
				name: 'Tangut Input',
				desc: {
					ja: '倉頡コード、読み、部品、手書きから西夏文字を検索し、その字の情報を確認できます。',
					en: 'Find a Tangut character by Cangjie code, reading, parts or drawing, then read its record.',
					zh: '通过仓颉编码、读音、部件或手写查找西夏文字，并查看字条信息。'
				},
				href: 'https://tangut.mkpo.li/',
				shot: 'tangut',
				night: true
			}
		]
	},
	{
		id: 'jurchen',
		name: { ja: '女真文字', en: 'Jurchen', zh: '女真文' },
		note: {
			ja: 'tumən（10000）、Unicode 18.0のJurchenSourcesより',
			en: 'tumən, 10000, in Unicode 18.0 JurchenSources',
			zh: 'tumən（10000），出自Unicode 18.0的JurchenSources'
		},
		code: 'U+18E01',
		font: 'Alari Xuwasun Jurchen',
		works: [
			{
				name: 'Jurchen Input',
				desc: {
					ja: 'Unicode 18で追加された女真文字を、筆画コード、読み、部首、手書きで入力できます。',
					en: 'Enter Jurchen, new in Unicode 18, by stroke code, reading, radical or drawing.',
					zh: '通过笔画编码、读音、部首或手写输入Unicode 18新增的女真文字。'
				},
				href: 'https://jurchen.mkpo.li/',
				shot: 'jurchen',
				night: true
			}
		]
	},
	{
		id: 'han',
		name: { ja: '漢字', en: 'Han', zh: '汉字' },
		note: { ja: '文字', en: 'character', zh: '字' },
		code: 'U+5B57',
		font: 'GenZui Serif',
		works: [
			{
				name: 'Glyph Atlas 字形大圖譜',
				desc: {
					ja: '漢字文化圏の古典籍に見られる字形のデータセット。切り抜き画像、翻刻、コードポイント、異体字を収録。データはCC BY-SA 4.0で、画像と本文の権利は記録ごとに明記。',
					en: 'A dataset of character forms in pre-modern books of the Sinosphere: crops, transcriptions, code points and variants. Data under CC BY-SA 4.0, with image and text rights recorded per record.',
					zh: '收录汉字文化圈古籍字形的数据集，包含裁切图像、转写、码位及异体字。数据采用CC BY-SA 4.0，图像与文本的权利逐条记录。'
				},
				href: 'https://glyphatlas.org/',
				shot: 'atlas',
				night: true
			},
			{
				name: 'IDS Workshop',
				desc: {
					ja: '部品パレットと合成結果のプレビューを使って、IDS（Ideographic Description Sequence）を作成できます。漢字、チュノム、西夏文字に対応。',
					en: 'Write ideographic description sequences with a parts palette and a composed preview. Reads Han, Chữ Nôm and Tangut.',
					zh: '借助部件面板和组合预览编写表意文字描述序列（IDS），支持解析汉字、喃字和西夏文字。'
				},
				href: 'https://ids.mkpo.li/',
				shot: 'ids',
				night: true
			},
			{
				name: 'Han Input',
				desc: {
					ja: 'コード、読み、部品、画数、意味など、わかっていることを手がかりに漢字を検索できます。',
					en: 'Find a Chinese character from whatever you know about it: a code, a reading, a part, a stroke count or a meaning.',
					zh: '从编码、读音、部件、笔画数或字义等已知信息入手查找汉字。'
				},
				shot: 'han',
				night: true
			},
			{
				name: 'han-compose',
				desc: {
					ja: 'フォントに収録済みの文字から部品を取り出し、IDS（Ideographic Description Sequence）に従って文字のアウトラインを合成します。',
					en: 'Draws a character from its ideographic description sequence as font outlines, using parts of characters the font already has.',
					zh: '从字体已有的字符中提取部件，按照表意文字描述序列（IDS）合成字符轮廓。'
				},
				href: 'https://github.com/mkpoli/han-compose',
				drawn: true
			},
			{
				name: '漢字組直しクイズ',
				desc: {
					ja: '漢字の部品を組み直して単語を当てるクイズ。',
					en: 'A quiz: put the parts of Han characters back together to find the word.',
					zh: '重新拼合汉字部件，猜出词语的测验。'
				},
				href: 'https://han-reasm.mkpo.li/',
				shot: 'reasm'
			}
		]
	},
	{
		id: 'hangul',
		name: { ja: 'ハングル', en: 'Hangul', zh: '谚文' },
		note: {
			ja: '『訓民正音諺解』冒頭の一節より',
			en: 'from the opening line of the Hunminjeongeum Eonhae',
			zh: '取自《训民正音谚解》开篇'
		},
		code: 'U+110A U+119E',
		font: '나눔명조 옛한글',
		works: [
			{
				name: '釋讀 seokdok',
				desc: {
					ja: '漢字語は音に基づいて、固有語は意味に基づいて漢字で表記し、それ以外はハングルで書く朝鮮語入力方式。',
					en: 'A Korean input method that writes Sino-Korean words in Hanja by sound, native words in Hanja by meaning, and the rest in Hangul.',
					zh: '一种朝鲜语输入法：汉字词按读音写成汉字，固有词按词义写成汉字，其余用谚文书写。'
				},
				href: 'https://seokdok.mkpo.li/',
				shot: 'seokdok',
				night: true
			},
			{
				name: '옛한글 노트',
				desc: {
					ja: '古ハングルの入力・表示と、Unicode、Hanyang PUA、互換字母の間の変換。',
					en: 'Type, display and convert old Hangul between Unicode, Hanyang PUA and compatibility letters.',
					zh: '输入、显示古谚文，并在Unicode、Hanyang PUA和兼容字母之间转换。'
				},
				href: 'https://hangul.mkpo.li/',
				shot: 'hangul',
				night: true
			},
			{
				name: 'koconv',
				desc: {
					ja: 'ハングルを各種ローマ字表記や他の文字に変換するライブラリ。',
					en: 'A library that converts Hangul into romanizations and other scripts.',
					zh: '将谚文转换为各式罗马字转写及其他文字的库。'
				},
				href: 'https://www.npmjs.com/package/koconv'
			}
		]
	},
	{
		id: 'kana',
		name: { ja: '仮名', en: 'Kana', zh: '假名' },
		note: { ja: '「子」の形で書かれた「ネ」', en: 'ネ written like 子', zh: '写作“子”形的“ネ”' },
		code: 'U+1B127',
		font: 'Kureedo',
		works: [
			{
				name: 'Kureedo クレード',
				desc: {
					ja: '一般的な日本語フォントにはない歴史的仮名や、アイヌ語用の小書き仮名を収録したKlee Oneの派生フォント。',
					en: 'A Klee One derivative with historical kana that ordinary Japanese fonts leave out, plus Ainu small kana.',
					zh: '基于Klee One的衍生字体，收录普通日文字体缺少的历史假名及阿伊努语小写假名。'
				},
				href: 'https://kureedo.mkpo.li/',
				shot: 'kureedo',
				night: true
			},
			{
				name: '源萃 GenZui',
				desc: {
					ja: 'Noto Serif JPとNoto Sans JPをもとに、変体仮名、歴史的仮名、Unicode 18の追加文字を収録した明朝体とゴシック体。',
					en: 'A serif and a sans from Noto Serif and Sans JP, with hentaigana, historical kana and Unicode 18 additions.',
					zh: '基于Noto Serif JP和Noto Sans JP的明朝体与黑体，收录变体假名、历史假名及Unicode 18新增字符。'
				},
				href: 'https://genzui.mkpo.li/',
				shot: 'genzui'
			},
			{
				name: 'honkoku-toolbox',
				desc: {
					ja: '日本の古典籍の翻刻を支援する入力ツール。',
					en: 'Input helpers for transcribing classical Japanese books.',
					zh: '辅助日本古籍转写的输入工具。'
				},
				href: 'https://greasyfork.org/ja/scripts/512368-honkoku-toolbox'
			},
			{
				name: 'みんなで翻刻クライアント',
				desc: {
					ja: '日本の歴史資料を市民参加で翻刻するプラットフォーム「みんなで翻刻」のデスクトップクライアント。',
					en: 'A desktop client for Minna de Honkoku, the crowdsourced transcription platform for pre-modern Japanese documents.',
					zh: '日本历史文献众包转写平台“みんなで翻刻”的桌面客户端。'
				},
				href: 'https://github.com/mkpoli/honkoku-client'
			},
			{
				name: 'google-ime-kana-font',
				desc: {
					ja: 'Google日本語入力の候補ウィンドウに歴史的な仮名の合字を表示するWindhawkモジュール。',
					en: "A Windhawk mod that shows historical kana ligatures in Google Japanese Input's candidate window.",
					zh: '在Google日语输入法候选窗口中显示历史假名合字的Windhawk模组。'
				},
				href: 'https://github.com/mkpoli/google-ime-kana-font'
			}
		]
	},
	{
		id: 'ainu',
		name: { ja: 'アイヌ語', en: 'Ainu', zh: '阿伊努语' },
		note: {
			ja: '小書きのㇷに半濁点を付け、音節末のpを表す',
			en: 'small ㇷ with a semi-voiced mark, for final p',
			zh: '小写假名ㇷ加半浊点，表示音节末的p'
		},
		code: 'U+31F7 U+309A',
		font: 'Kureedo',
		works: [
			{
				name: 'ainconv',
				desc: {
					ja: 'アイヌ語の単語をラテン文字、カタカナ、キリル文字の間で変換します。JavaScript、Python、Rustに対応。',
					en: 'Converts Ainu words between Latin, katakana and Cyrillic. For JavaScript, Python and Rust.',
					zh: '在拉丁字母、片假名和西里尔字母之间转换阿伊努语词语。支持JavaScript、Python和Rust。'
				},
				href: 'https://www.npmjs.com/package/ainconv',
				sample: 'aynu → アイヌ · айну'
			},
			{
				name: 'ainuKey',
				desc: {
					ja: 'ローマ字からアイヌ語のカタカナ表記に変換するWindows用入力方式。初期ベータ版。',
					en: 'An Ainu input method for Windows: romaji to Ainu katakana. Early beta.',
					zh: 'Windows用阿伊努语输入法，将罗马字转换为阿伊努语片假名。早期测试版。'
				},
				href: 'https://github.com/mkpoli/ainuKey'
			}
		]
	},
	{
		id: 'munjan',
		name: { ja: '書文言', en: 'Sitelen Munjan', zh: '書文言' },
		note: {
			ja: 'Sitelen Munjanで書いた「トキポナ」',
			en: 'Toki Pona, written in Sitelen Munjan',
			zh: '用Sitelen Munjan书写的“道本语”'
		},
		code: 'U+8A00 U+5584',
		font: 'GenZui Serif',
		works: [
			{
				name: '書文言 sitelen munjan',
				desc: {
					ja: '漢文の様式を取り入れ、トキポナを漢字で書く表記体系。',
					en: 'A Classical-Chinese-styled script for writing Toki Pona with Han characters.',
					zh: '借鉴文言文形式、用汉字书写道本语的文字系统。'
				},
				href: 'https://munjan.mkpo.li/',
				shot: 'munjan'
			},
			{
				name: 'rime-toki-pona-munjan',
				desc: {
					ja: 'トキポナをSitelen Munjanで入力するためのRime入力スキーマ。',
					en: 'A Rime schema for typing Toki Pona in Sitelen Munjan.',
					zh: '用Sitelen Munjan输入道本语的Rime输入方案。'
				},
				href: 'https://github.com/mkpoli/rime-toki-pona-munjan'
			}
		]
	},
	{
		id: 'layout',
		name: { ja: '組版と書字方向', en: 'Layout and direction', zh: '排版与书写方向' },
		note: { ja: '「訓読」の「訓」', en: 'the 訓 of 訓読, kanbun kundoku', zh: '“训读”的“训”' },
		code: 'U+8A13',
		font: 'GenZui Serif',
		works: [
			{
				name: 'Writing fails',
				desc: {
					ja: '書字方向、配置、翻訳によって意図しない読み方が生まれた例を集めたギャラリー。',
					en: 'A gallery of accidental readings caused by writing direction, layout or translation.',
					zh: '汇集因书写方向、排版或翻译而产生意外读法的实例。'
				},
				href: 'https://writing-fails.mkpo.li/',
				shot: 'fails',
				night: true
			},
			{
				name: '訓点漢文組版要件',
				desc: {
					ja: 'W3Cの『日本語組版処理の要件』にならってまとめた、訓点付き漢文の組版要件。',
					en: "Requirements for laying out annotated kanbun text, written after the W3C's Japanese layout requirements.",
					zh: '参照W3C《日文排版需求》编写的带训点汉文排版需求。'
				},
				href: 'https://kanbun-req.mkpo.li/',
				shot: 'kanbun'
			},
			{
				name: 'hundouk 訓読',
				desc: {
					ja: '漢文訓読を組版するTypstパッケージ。',
					en: 'A Typst package that renders kanbun kundoku.',
					zh: '用于汉文训读排版的Typst包。'
				},
				href: 'https://typst.app/universe/package/hundouk'
			}
		]
	}
];

export const SCRIPT_PAGE = {
	title: { ja: '文字', en: 'Scripts', zh: '文字' },
	description: {
		ja: '文字体系に関するプロジェクト：入力方式、フォント、データセット、ツール。',
		en: 'Projects on writing systems: input methods, fonts, datasets and tools.',
		zh: '文字系统相关项目：输入法、字体、数据集和工具。'
	},
	back: { ja: 'ポートフォリオ', en: 'Portfolio', zh: '作品集' },
	pending: { ja: '未公開', en: 'Not public yet', zh: '尚未公开' },
	shotAlt: { ja: '{name}のスクリーンショット', en: 'Screenshot of {name}', zh: '{name}的截图' },
	colophon: { ja: '奥付', en: 'Colophon', zh: '制作说明' },
	shots: {
		ja: 'スクリーンショットは2026年11月5日に撮影。',
		en: 'Screenshots taken on 5 November 2026.',
		zh: '截图摄于2026年11月5日。'
	},
	fonts: {
		ja: '文字見本には、それぞれ併記したフォントを使用しています。いずれもSIL Open Font Licenseで公開されています。',
		en: 'Specimens are drawn from the fonts named beside them, all under the SIL Open Font License.',
		zh: '字样均采用旁边标注的字体，所有字体均以SIL Open Font License发布。'
	},
	link: {
		ja: '文字体系に関するプロジェクト',
		en: 'Writing-system projects',
		zh: '文字系统相关项目'
	},
	gloss: { ja: 'もじ', en: 'scripts', zh: '' } as L10n
};
