# 期货分析工具怎么选？5类常用经典工具一篇讲明白

竖版 9:16（1080×1920）图文素材，共 11 页，配套文案、口播字幕与分镜表。

## 目录结构

```
futures-tools-9x16/
├── slides/                      11 张竖版图（发布顺序）
│   ├── 01-cover.png             封面
│   ├── 02-painpoint.png         痛点：5种活≠1个软件
│   ├── 03-overview.png          五类工具全景
│   ├── 04-terminal.png          01 综合看盘交易终端
│   ├── 05-orderflow.png         02 盘口与交易执行工具
│   ├── 06-fundamental.png       03 产业基本面数据工具
│   ├── 07-quant.png             04 量化研究与策略平台
│   ├── 08-option.png            05 期权波动率分析工具
│   ├── 09-checklist.png         5秒自查清单
│   ├── 10-caveat.png            以官方说明为准 + 核对方式
│   └── 11-ending.png            结尾金句 + 免责声明
├── 长图-全篇-1080x21120.png      单张纵向长图（公众号/长图分发）
├── 发布文案.md                    标题、简介、标签、分镜表、评论区引导
├── 口播字幕.srt                   25 条字幕，总时长 1:46
└── src/                          出图源文件
    ├── slides.mjs                全部文案与结构
    ├── style.css                 视觉样式
    ├── build.mjs                 渲染脚本
    ├── verify.mjs                排版溢出校验
    └── all-slides.html          生成的整页 HTML（可浏览器预览）
```

## 重新出图

```bash
cd futures-tools-9x16
npm i playwright && npx playwright install chromium
node src/build.mjs     # 生成 slides/*.png 与长图
node src/verify.mjs    # 校验每页是否有溢出/压住页脚
```

改文案只动 `src/slides.mjs`，改配色字号只动 `src/style.css`。

## 风格说明

深色金融风（深蓝底 + 金色强调 + 绿色重点框），大字大间距适配手机竖屏；每页固定 01/11 进度条与页码，便于做成连续滑动图集。中文字体使用 Noto Sans CJK。
