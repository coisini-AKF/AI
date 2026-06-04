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
- `ai-writing-tools.html`、`ai-ppt-tools.html`、`ai-video-tools.html`：高意图搜索专题页。
- `deploy.html`：GitHub 到 Netlify 自动部署说明页。
- `styles.css`：响应式布局和工具目录样式。
- `script.js`：联盟链接配置、点击统计、完整工具目录和搜索逻辑。
- `assets/`：页面图片资源。
- `netlify.toml`：Netlify 连接 GitHub 后直接部署根目录。
- `robots.txt`、`sitemap.xml`、`llms.txt`：公开索引和 AI 可读说明文件。

## 后续自动部署

把这个项目推到 GitHub 后，在 Netlify 里选择 Import from Git，连接这个仓库。以后只要修改文件并推送到 GitHub，Netlify 会自动部署，不需要再手动上传 zip。

## GitHub 开源 Skills 变现边界

可以收录、介绍、跳转、写教程和提供部署服务；不要把别人的开源项目伪装成自己的闭源付费产品。变现优先走广告、赞助位、联盟链接、云服务器/API 推荐、代部署和工作流搭建服务。

## 为什么不是直接放 AdSense

展示广告通常需要网站审核、内容质量、政策合规和付款门槛；新站当天靠展示广告赚 100 元不现实。联盟跳转只要链接有效、流量精准，今天就有可能产生可追踪点击和成交，但不保证收益。
