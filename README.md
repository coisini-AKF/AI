# AI智能工具导航

这是一个用于“流量跳转变现”的静态网站模板，不卖自有产品，核心变现方式是：

- 联盟链接：淘宝联盟、京东联盟、Amazon Associates、Impact、CJ、ShareASale、独立 CPA。
- 展示广告：AdSense、Adsterra、PropellerAds 等，通过审核后替换页面广告位。
- 内容引流：小红书、知乎、微信群、朋友圈、贴吧发布痛点标题，把访问导回本站。

## 今天优先做什么

1. 申请或登录一个联盟平台，拿到可追踪推广链接。
2. 替换 `script.js` 里的 `affiliateLinks`。
3. 把站点部署到 Cloudflare Pages、Netlify、Vercel 或 GitHub Pages。
4. 发 10 条引流内容，优先围绕“AI工具导航”“免费AI工具”“PPT模板”“简历模板”“AI写作”“AI视频工具”。
5. 提交 `sitemap.xml`，观察首页和专题页是否被收录。

## 目录结构

- `index.html`：页面结构、SEO 标题和广告位。
- `free-ai-tools.html`：免费 AI 工具专题页。
- `github-skills.html`：GitHub 开源 Skills 专题页。
- `ai-writing-tools.html`、`ai-ppt-tools.html`、`ai-video-tools.html`、`ai-image-tools.html`、`ai-coding-tools.html`、`ai-automation-tools.html`、`ai-resume-tools.html`、`ai-study-tools.html`、`ai-data-tools.html`：高意图搜索专题页。
- `deploy.html`：GitHub Pages 自动部署说明页。
- `share-copy.html`：小红书、知乎、朋友圈和社群发布文案。
- `disclosure.html`：公开链接与推荐说明页。
- `admin-growth.html`：内部增长、收益优先级、链接配置和点击统计管理页，设置为 noindex。
- `styles.css`：响应式布局和工具目录样式。
- `script.js`：联盟链接配置、点击统计、完整工具目录和搜索逻辑。
- `assets/`：页面图片资源。
- `.github/workflows/pages.yml`：GitHub Pages 自动部署工作流。
- `netlify.toml`：Netlify 备用部署配置；当前主发布走 GitHub Pages。
- `robots.txt`、`sitemap.xml`、`llms.txt`：公开索引和 AI 可读说明文件。

## 后续自动部署

当前主站部署在 GitHub Pages：`https://coisini-akf.github.io/AI/`。以后只要修改文件并推送到 GitHub `main` 分支，GitHub Actions 会自动部署，不需要本地电脑保持在线。Netlify 可在额度恢复后作为备用托管。

## GitHub 开源 Skills 变现边界

可以收录、介绍、跳转、写教程和提供部署服务；不要把别人的开源项目伪装成自己的闭源付费产品。变现优先走广告、赞助位、联盟链接、云服务器/API 推荐、代部署和工作流搭建服务。

## 为什么不是直接放 AdSense

展示广告通常需要网站审核、内容质量、政策合规和付款门槛；新站当天靠展示广告赚 100 元不现实。联盟跳转只要链接有效、流量精准，今天就有可能产生可追踪点击和成交，但不保证收益。
