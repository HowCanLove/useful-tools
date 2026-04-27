// 免费在线工具集合 —— 打开浏览器就能用，不用装软件
//
// os 字段在这个仓库里被复用为"隐私级别"：
//   'windows'  →  🔒 本地处理：数据完全在浏览器里跑，不上传到服务器
//   'cross'    →  ☁️ 云端处理：需要上传文件 / 数据到服务器
//
// category:
//   system    → 🔧 开发者工具（JSON / Regex / Base64 / JWT / Hash / 编码转换）
//   disk      → 🖼️ 图像处理
//   files     → 📄 PDF / 文档
//   productivity → ⚡ 效率（白板 / 计时器 / 二维码 ...）
//   dev       → 💻 在线编程沙盒
//   media     → 🎬 视频 / 音频
//   network   → 🌐 网络 / 域名 / 速度测试
//   security  → 🔒 隐私 / 安全 / 检测
//   browser   → 📝 文本 / 写作
//
// price: free | freemium | paid

const CATALOG = [
  // ========== 🔒 本地处理（os: 'windows'）==========
  // —— 开发者工具
  {
    name: 'JSON Formatter & Validator',
    desc: {
      zh: '把一坨压缩 / 凌乱的 JSON 粘进去，立刻得到格式化、缩进、错误高亮的版本。完全在浏览器里跑，敏感数据不会上云。',
      en: 'Paste messy or minified JSON, get pretty-printed output with error highlighting — runs entirely in your browser, sensitive data stays local.',
      ja: '乱雑/圧縮されたJSONを貼ると整形・インデント・エラーハイライト表示。ブラウザ内完結で機密データは送信されない。',
    },
    url: 'https://jsonformatter.org/',
    os: 'windows', category: 'system', price: 'free',
  },
  {
    name: 'regex101',
    desc: {
      zh: '最强的在线正则测试工具，实时高亮匹配、解释每一段语法、支持 PCRE / JS / Python / Go 多种方言。再也不用 print 调试正则。',
      en: 'The best online regex tester. Live match highlighting, per-token explanation, supports PCRE / JS / Python / Go flavours. Stop debugging regex by trial and error.',
      ja: '最強のオンライン正規表現テスター。リアルタイムマッチハイライト・トークン解説・PCRE/JS/Python/Go方言対応。',
    },
    url: 'https://regex101.com/',
    os: 'windows', category: 'system', price: 'free',
  },
  {
    name: 'jwt.io',
    desc: {
      zh: '把 JWT token 粘上去，立刻看到 Header / Payload / Signature 三段解码。解码完全在前端进行，不会泄漏你的 token。Auth0 出品。',
      en: 'Paste a JWT, see Header / Payload / Signature decoded instantly. Decoding happens client-side — your tokens are never sent anywhere. By Auth0.',
      ja: 'JWTトークンを貼ると、Header/Payload/Signatureの3部を即座にデコード表示。クライアント側処理でトークンは外部送信されない。Auth0製。',
    },
    url: 'https://jwt.io/',
    os: 'windows', category: 'system', price: 'free',
  },
  {
    name: 'Crontab Guru',
    desc: {
      zh: '把 cron 表达式写进去，告诉你"这条会在什么时间执行"和"下一次执行是什么时候"。再也不用查 cron 语法表。',
      en: 'Drop in a cron expression, see "this runs at..." in plain English and the next firing time. Never look up cron syntax again.',
      ja: 'cron式を入力すると、「いつ実行されるか」と次回実行時刻を表示。cron文法表を引く必要なし。',
    },
    url: 'https://crontab.guru/',
    os: 'windows', category: 'system', price: 'free',
  },
  {
    name: 'Carbon — 代码截图美化',
    desc: {
      zh: '把代码粘进去，导出漂亮的截图（带语法高亮、阴影、主题色）。发推 / 写文章 / 做 PPT 时用，比直接截屏好看十倍。',
      en: 'Paste code, export a beautiful screenshot with syntax highlighting, shadows and theming. For tweets / articles / slides — way better than raw screenshots.',
      ja: 'コードを貼ると、構文ハイライト・影・テーマ色付きの美しいスクショを生成。ツイート/記事/スライドに最適。',
    },
    url: 'https://carbon.now.sh/',
    os: 'windows', category: 'system', price: 'free',
  },
  {
    name: 'Diff Checker（在线对比）',
    desc: {
      zh: '把两段文本贴左右两边，立刻看到字符级别的差异。免费版限制 5000 字符，但日常用够了。code review 不方便用 git diff 时救命。',
      en: 'Paste two texts side-by-side and see character-level differences instantly. Free tier caps at 5000 chars, plenty for everyday use. A lifesaver for code review when git diff isn\'t handy.',
      ja: '2つのテキストを左右に貼ると、文字レベルの差分を即座に表示。無料版は5000文字まで、日常使用には十分。',
    },
    url: 'https://www.diffchecker.com/',
    os: 'windows', category: 'system', price: 'freemium',
  },

  // —— 图像（本地）
  {
    name: 'Squoosh',
    desc: {
      zh: 'Google Chrome 团队出品的图像压缩 / 格式转换工具。MozJPEG / WebP / AVIF 全支持，左右拖动对比压缩前后画质。完全在浏览器跑，图片不上传。',
      en: 'Google Chrome team\'s image compression and format-conversion tool. MozJPEG / WebP / AVIF all supported, with side-by-side quality comparison. 100% client-side, images never leave your browser.',
      ja: 'Google Chromeチーム製の画像圧縮・形式変換ツール。MozJPEG/WebP/AVIF対応、ビフォーアフター比較可能。完全クライアント処理で画像非送信。',
    },
    url: 'https://squoosh.app/',
    os: 'windows', category: 'disk', price: 'free',
  },
  {
    name: 'Photopea — 浏览器版 Photoshop',
    desc: {
      zh: '完全免费的在线 Photoshop 替代品，支持 PSD / AI / Sketch / XD 文件直接打开编辑。所有处理在你电脑本地完成，不用注册不用上传。',
      en: 'Free in-browser Photoshop alternative. Opens and edits PSD / AI / Sketch / XD files directly. All processing happens locally — no signup, no uploads.',
      ja: '完全無料のオンラインPhotoshop代替。PSD/AI/Sketch/XDファイルを直接編集可能。ローカル処理で登録・アップロード不要。',
    },
    url: 'https://www.photopea.com/',
    os: 'windows', category: 'disk', price: 'freemium',
  },
  {
    name: 'SVGOMG',
    desc: {
      zh: 'Jake Archibald 出的 SVG 优化器。把图标 SVG 拖进去，自动删掉冗余属性、压缩节点，文件能瘦 30-70%。设计师必备。',
      en: 'Jake Archibald\'s SVG optimiser. Drop in icon SVGs, get them stripped of redundancy and compressed by 30-70%. A designer staple.',
      ja: 'Jake Archibald製のSVG最適化ツール。アイコンSVGをドロップすると不要属性除去・ノード圧縮で30-70%削減。デザイナー必携。',
    },
    url: 'https://jakearchibald.github.io/svgomg/',
    os: 'windows', category: 'disk', price: 'free',
  },

  // —— 效率（本地）
  {
    name: 'Excalidraw',
    desc: {
      zh: '手绘风格的在线白板，画架构图 / 流程图 / 快速草图都好用。所有数据存在你浏览器 localStorage，可导出 PNG / SVG。开源、不用注册。',
      en: 'Hand-drawn-style online whiteboard. Architecture diagrams, flowcharts, sketches — exports as PNG / SVG. Data lives in your browser localStorage. Open source, no signup.',
      ja: '手書き風オンラインホワイトボード。アーキテクチャ図・フローチャート・ラフスケッチに最適。データはブラウザlocalStorage保存、PNG/SVGエクスポート可。OSS、登録不要。',
    },
    url: 'https://excalidraw.com/',
    os: 'windows', category: 'productivity', price: 'free',
  },
  {
    name: 'tldraw',
    desc: {
      zh: 'Excalidraw 之外的另一个白板神器，UI 更现代、内置形状库更丰富。本地处理，可导出 SVG / PNG / JSON。',
      en: 'Modern alternative to Excalidraw. Slicker UI, richer shape library. Local processing, exports to SVG / PNG / JSON.',
      ja: 'Excalidrawとは別系統のホワイトボード。UIがモダンで形状ライブラリが豊富。ローカル処理、SVG/PNG/JSONエクスポート対応。',
    },
    url: 'https://tldraw.com/',
    os: 'windows', category: 'productivity', price: 'free',
  },
  {
    name: 'Pomofocus — 番茄钟',
    desc: {
      zh: '极简番茄钟，支持自定义工作 / 休息时长、任务清单、统计图表。本地存储，可标签页打开当成"专注沙漏"。',
      en: 'Minimalist Pomodoro timer. Customisable work / break durations, task list, stats. Stores locally, run it in a pinned tab as a focus tool.',
      ja: '極シンプルなポモドーロタイマー。作業/休憩時間カスタマイズ・タスクリスト・統計対応。ローカル保存、ピン留めタブで集中ツールとして使用可。',
    },
    url: 'https://pomofocus.io/',
    os: 'windows', category: 'productivity', price: 'free',
  },
  {
    name: 'QR Code Generator（in-browser）',
    desc: {
      zh: '生成 QR 码完全在前端进行，文字 / URL / WiFi 配置都能编。可导出 SVG / PNG，支持自定义颜色和 logo。',
      en: 'QR generation runs entirely in your browser — encode text / URLs / WiFi configs. Export as SVG / PNG with custom colours and logos.',
      ja: 'QRコード生成は完全にブラウザ内で実行。テキスト/URL/WiFi設定をエンコード、色とロゴをカスタマイズしてSVG/PNGエクスポート可。',
    },
    url: 'https://qr.io/',
    os: 'windows', category: 'productivity', price: 'free',
  },

  // —— 文本 / 写作（本地）
  {
    name: 'StackEdit — Markdown 编辑器',
    desc: {
      zh: '在线 Markdown 编辑器，左写右预览，支持数学公式、UML、流程图。可同步到 Google Drive / Dropbox / GitHub，所有处理在浏览器内。',
      en: 'In-browser Markdown editor with split-pane preview. Supports math, UML, flowcharts. Syncs to Google Drive / Dropbox / GitHub. All processing client-side.',
      ja: 'オンラインMarkdownエディタ。左右ペイン編集、数式・UML・フローチャート対応。Google Drive/Dropbox/GitHub同期、ブラウザ内処理。',
    },
    url: 'https://stackedit.io/',
    os: 'windows', category: 'browser', price: 'free',
  },
  {
    name: '字数统计 wordcounter',
    desc: {
      zh: '粘贴文字立刻看字数 / 字符数 / 段落数 / 阅读时间。还能查最常出现的关键词、可读性评分。写文章 / 微博 / 简历不超字数神器。',
      en: 'Paste text, see word / character / paragraph counts and reading time. Also shows top keywords and readability score. Indispensable when fitting articles, tweets, or resumes to a limit.',
      ja: 'テキストを貼ると単語数・文字数・段落数・読了時間を表示。頻出キーワードと可読性スコアも確認可能。記事/SNS投稿/履歴書の文字数調整に必須。',
    },
    url: 'https://wordcounter.net/',
    os: 'windows', category: 'browser', price: 'free',
  },

  // ========== ☁️ 云端处理（os: 'cross'）==========
  // —— 图像（云端）
  {
    name: 'TinyPNG',
    desc: {
      zh: '老牌图片压缩神器。一次拖进 20 张以内，PNG / JPG 都能瘦身 50-80%，画质几乎无损。免费版每月 500 张。',
      en: 'The classic image compressor. Drop in up to 20 images at a time — PNGs and JPGs shrink 50-80% with near-zero visible quality loss. Free tier: 500 images / month.',
      ja: '老舗の画像圧縮ツール。一度に20枚までアップ可能、PNG/JPGを50-80%削減、画質ほぼ劣化なし。無料版月500枚まで。',
    },
    url: 'https://tinypng.com/',
    os: 'cross', category: 'disk', price: 'freemium',
  },
  {
    name: 'remove.bg — 一键扣图',
    desc: {
      zh: 'AI 自动抠出主体，背景秒变透明。10 秒处理一张人物 / 商品图，质量比手动用 PS 快很多。免费版 0.25 MP 输出，付费版高清。',
      en: 'AI auto-removes backgrounds in 10 seconds. Quality often beats manual Photoshop work, especially for people and products. Free output is 0.25 MP, paid for HD.',
      ja: 'AIが自動で背景除去、10秒で完了。人物/商品写真は手作業Photoshopより高品質なことが多い。無料は0.25MP出力、有料で高解像度。',
    },
    url: 'https://www.remove.bg/',
    os: 'cross', category: 'disk', price: 'freemium',
  },
  {
    name: 'iLoveIMG — 图像全家桶',
    desc: {
      zh: 'iLovePDF 同公司出的图像处理网站：压缩 / 调尺寸 / 裁剪 / 转格式（JPG↔PNG↔WebP↔HEIC↔GIF）/ 加水印 / 旋转 / 抠图 / Meme 编辑器全都有。中文 UI 顺滑，免费版日常用够，文件 1 小时后自动清除。',
      en: 'Sister site of iLovePDF for images. Compress / resize / crop / convert formats (JPG↔PNG↔WebP↔HEIC↔GIF) / watermark / rotate / remove background / meme editor — all in one place. Multilingual UI, free tier fits daily use, files auto-deleted after 1 hour.',
      ja: 'iLovePDFと同社の画像処理サイト。圧縮/リサイズ/トリミング/形式変換（JPG↔PNG↔WebP↔HEIC↔GIF）/透かし/回転/背景除去/Meme編集が一箇所に。多言語UI、無料版で日常用途に十分、1時間後に自動削除。',
    },
    url: 'https://www.iloveimg.com/zh-cn',
    os: 'cross', category: 'disk', price: 'freemium',
  },
  {
    name: 'Pinetools Split Image — 图片切九宫格',
    desc: {
      zh: '把一张图按 N×M 切成多块——小红书/Instagram 九宫格、长图发朋友圈、拼图素材都靠它。Pinetools 全站还有上百个小工具（颜色反转 / 数字进制转 / 文本对比 / 图片转字符画 等），值得当工具书翻一翻。',
      en: 'Split one image into an N×M grid — perfect for Instagram / Xiaohongshu mosaics, sliced long screenshots, jigsaw assets. The full Pinetools site has hundreds of similar utilities (colour invert / base converter / text diff / image-to-ASCII...) worth bookmarking.',
      ja: '1枚の画像をN×Mグリッドに分割——Instagram/小紅書のグリッド投稿、長いスクショの分割、ジグソー素材作成に最適。Pinetools全体には他にも数百のユーティリティ（色反転/進数変換/テキスト比較/画像→ASCII等）あり。',
    },
    url: 'https://pinetools.com/split-image',
    os: 'cross', category: 'disk', price: 'free',
  },

  // —— PDF（云端）
  {
    name: 'iLovePDF — PDF 全家桶',
    desc: {
      zh: 'PDF 合并 / 拆分 / 压缩 / 转 Word / 加水印 / 加密 / 解密……一个站全搞定。免费版每天若干次操作够日常用，文件 1 小时后自动删除。',
      en: 'PDF merge / split / compress / to Word / watermark / encrypt / decrypt — every PDF chore in one place. Free tier handles daily use; uploaded files auto-deleted after 1 hour.',
      ja: 'PDF結合/分割/圧縮/Word変換/透かし/暗号化/復号化が一つのサイトで完結。無料版で日常用途は十分、アップロード後1時間で自動削除。',
    },
    url: 'https://www.ilovepdf.com/',
    os: 'cross', category: 'files', price: 'freemium',
  },
  {
    name: 'Smallpdf',
    desc: {
      zh: 'iLovePDF 的强力对手。UI 更精致，转换质量略胜（特别是 PDF 转 Word 的格式还原）。免费版每天 2 次。',
      en: 'iLovePDF\'s polished competitor. Slicker UI, slightly better PDF→Word fidelity. Free tier: 2 conversions / day.',
      ja: 'iLovePDFの強力なライバル。UI洗練、PDF→Word変換の精度がやや上。無料版1日2回まで。',
    },
    url: 'https://smallpdf.com/',
    os: 'cross', category: 'files', price: 'freemium',
  },
  {
    name: 'CloudConvert — 万能格式转换',
    desc: {
      zh: '支持 200+ 文件格式互转：图像 / 文档 / 视频 / 音频 / 字体 / 电子书。免费版每天 25 次转换，免登录可用。',
      en: '200+ format conversions — images / docs / video / audio / fonts / ebooks. Free tier: 25 conversions / day, no signup needed.',
      ja: '200種以上のファイル形式相互変換に対応：画像/文書/動画/音声/フォント/電子書籍。無料版1日25回、登録不要。',
    },
    url: 'https://cloudconvert.com/',
    os: 'cross', category: 'files', price: 'freemium',
  },

  // —— 视频 / 音频（云端）
  {
    name: 'Vocaroo — 录音并分享链接',
    desc: {
      zh: '点录音、说完点保存，得到一个分享链接发给别人。不用注册不用装软件，留个语音口信特别方便。',
      en: 'Click record, talk, save — get a sharable link. No signup, no install, perfect for quick voice notes.',
      ja: '録音→保存でシェア用リンク取得。登録・インストール不要、音声メッセージ送信に最適。',
    },
    url: 'https://vocaroo.com/',
    os: 'cross', category: 'media', price: 'free',
  },

  // —— 在线编程（云端）
  {
    name: 'CodePen',
    desc: {
      zh: '前端在线 IDE，写完即时预览。社区作品丰富，找设计灵感 / CSS 技巧 / JS 动效首选。免费版可创建无限公开 pen。',
      en: 'Frontend online IDE with live preview. Rich community for design inspiration / CSS tricks / JS effects. Free tier allows unlimited public pens.',
      ja: 'フロントエンドオンラインIDE、即時プレビュー。デザイン参考/CSSテク/JSエフェクト探しに最適。無料版で公開pen無制限。',
    },
    url: 'https://codepen.io/',
    os: 'cross', category: 'dev', price: 'freemium',
  },
  {
    name: 'StackBlitz',
    desc: {
      zh: '浏览器里跑 Node.js / npm 的奇迹（用 WebContainer 技术）。一键开 React / Vue / Next 项目，跟本地体验几乎一样，启动还更快。',
      en: 'Run Node.js / npm right inside the browser (via WebContainer). One-click React / Vue / Next sandbox, near-local DX with faster startup.',
      ja: 'ブラウザ内でNode.js/npmが動く魔法（WebContainer技術）。React/Vue/Nextプロジェクトをワンクリック起動、ローカル並みの開発体験で起動はより速い。',
    },
    url: 'https://stackblitz.com/',
    os: 'cross', category: 'dev', price: 'freemium',
  },
  {
    name: 'JSFiddle',
    desc: {
      zh: '老牌前端 fiddle，比 CodePen 简洁。适合快速验证一个 JS 想法、给同事发可运行示例。',
      en: 'Veteran frontend fiddle, simpler than CodePen. Great for quick JS proofs of concept and sharing runnable examples with colleagues.',
      ja: '老舗フロントエンドfiddle、CodePenよりシンプル。JSアイデアの素早い検証や同僚へのデモ共有に最適。',
    },
    url: 'https://jsfiddle.net/',
    os: 'cross', category: 'dev', price: 'free',
  },

  // —— 网络（云端）
  {
    name: 'fast.com',
    desc: {
      zh: 'Netflix 出品的网速测试，一打开就开始测下行速度。比 speedtest 更轻量、无广告，专测家宽是否够看 4K Netflix。',
      en: 'Netflix\'s speed test — measures download speed on page load. Lighter than speedtest.net with zero ads. Designed to verify your connection can stream 4K Netflix.',
      ja: 'Netflix製のスピードテスト。ページを開くと即座に下り測定開始。speedtestより軽量で広告なし、4K Netflixが見られるかを検証する用途。',
    },
    url: 'https://fast.com/',
    os: 'cross', category: 'network', price: 'free',
  },
  {
    name: 'DNSChecker',
    desc: {
      zh: '从全球 30+ 个节点查 DNS 解析结果，看你刚改的 DNS 记录有没有传播到位。换 NS 后必看。',
      en: 'Queries DNS from 30+ global nodes. Check whether your recent DNS change has propagated. Essential after switching nameservers.',
      ja: '世界30以上のノードからDNS解決結果を取得。DNS変更が伝播したか確認。NS切替後の必須ツール。',
    },
    url: 'https://dnschecker.org/',
    os: 'cross', category: 'network', price: 'free',
  },
  {
    name: 'SSL Labs Test',
    desc: {
      zh: 'Qualys 出品的 SSL / TLS 配置评级工具。给你的 HTTPS 站打分（A+ 到 F），列出每个潜在问题：弱密码套件、证书链、HSTS、协议版本等。运维必备。',
      en: 'Qualys\'s SSL / TLS grading tool. Scores your HTTPS site A+ to F and lists every issue: weak ciphers, cert chain, HSTS, protocols. Indispensable for ops.',
      ja: 'Qualys製のSSL/TLS評価ツール。HTTPSサイトをA+～Fでスコア化、弱い暗号スイート・証明書チェーン・HSTS・プロトコルなど問題を列挙。運用必携。',
    },
    url: 'https://www.ssllabs.com/ssltest/',
    os: 'cross', category: 'network', price: 'free',
  },
  {
    name: 'Wayback Machine',
    desc: {
      zh: 'Internet Archive 的网页时光机，能看到任意网站任意日期的历史快照。文章被删了？站点 404？先到这查一下。',
      en: 'Internet Archive\'s time machine — historic snapshots of any site on any date. Article deleted? 404? Check here first.',
      ja: 'Internet Archiveのウェブタイムマシン、任意サイトの任意日付のスナップショットを閲覧可。記事削除/404に出くわしたらまずここへ。',
    },
    url: 'https://web.archive.org/',
    os: 'cross', category: 'network', price: 'free',
  },

  // —— 安全 / 隐私（云端，因为查询服务器）
  {
    name: 'HaveIBeenPwned',
    desc: {
      zh: '查你的邮箱 / 密码 / 手机号有没有出现在历次数据泄露事件里。Troy Hunt 维护，全网最权威的"我被脱裤了吗"查询。',
      en: 'Check whether your email / password / phone shows up in known data breaches. Maintained by Troy Hunt, the most authoritative "have I been compromised" lookup.',
      ja: 'メール/パスワード/電話番号が過去の情報漏洩事件に含まれていないか検索。Troy Hunt運営、「自分の情報が流出したか」を調べる最も権威ある検索サービス。',
    },
    url: 'https://haveibeenpwned.com/',
    os: 'cross', category: 'security', price: 'free',
  },
  {
    name: 'VirusTotal',
    desc: {
      zh: '上传可疑文件 / URL，VirusTotal 用 70+ 个杀毒引擎并行扫描，给出综合报告。下载来源不明的安装包前先扔这查一下。',
      en: 'Upload a suspicious file or URL — VirusTotal scans it with 70+ AV engines in parallel and aggregates the results. Run anything from unknown sources through this first.',
      ja: '不審なファイル/URLをアップロードすると、70以上のセキュリティエンジンが並行スキャンして総合レポートを生成。不明な入手元のインストーラーは事前に検査推奨。',
    },
    url: 'https://www.virustotal.com/',
    os: 'cross', category: 'security', price: 'free',
  },

  // —— 计算 / 学习（云端）
  {
    name: 'Wolfram Alpha',
    desc: {
      zh: '"计算知识引擎"——直接用自然语言提问数学 / 物理 / 化学 / 历史 / 经济 / 营养问题，得到结构化答案 + 推导过程。比 Google + ChatGPT 更适合精确计算。',
      en: 'The "computational knowledge engine". Ask natural-language questions about math / physics / chemistry / history / economics / nutrition, get structured answers with derivations. Beats Google + ChatGPT for precise calculations.',
      ja: '「計算知識エンジン」。数学/物理/化学/歴史/経済/栄養に関する質問を自然言語で投げると、導出過程付きの構造化回答が得られる。精密計算ではGoogle+ChatGPTを凌ぐ。',
    },
    url: 'https://www.wolframalpha.com/',
    os: 'cross', category: 'productivity', price: 'freemium',
  },
];
