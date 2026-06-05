# AI Tools Site Growth Crew

## Crew Goal

Grow the AI tools directory into a search-friendly, monetizable static site while keeping every change compliant, verifiable, and deployable through GitHub to Netlify.

## Inputs

- Repo: `coisini-AKF/AI`
- Live site: `https://shiny-belekoy-d2b680.netlify.app/`
- Main files: `index.html`, `styles.css`, `script.js`, `sitemap.xml`, `llms.txt`
- Constraints: no hidden keyword stuffing, no fake clicks, no password/API key handling in chat

## Agents

- Researcher: identifies high-intent topics, useful tools, GitHub projects, and monetization candidates.
- Strategist: chooses which pages and links matter most for traffic and conversion.
- Builder: creates pages, edits code, improves UI, and wires internal links.
- Reviewer: checks policy, UX, SEO basics, broken links, and mobile layout risk.
- Publisher: commits changes, pushes to GitHub, verifies Netlify deployment, and reports live URLs.

## Task Sequence

1. Researcher verifies platform requirements before any login or form filling: ICP/domain rules, account/media requirements, tracking-link support, payout model, prohibited behavior, and review documents.
2. Researcher proposes 3-5 high-intent page ideas or link categories with source notes.
3. Strategist selects the smallest set that improves traffic or monetization and rejects paths blocked by hard requirements.
4. Builder implements pages, navigation, sitemap, llms.txt, and any UI changes.
5. Reviewer runs local HTTP checks, search checks, link checks, compliance checks, and source inspections.
6. Publisher commits, pushes to `main`, waits for Netlify, and verifies live URLs.

## Validation Plan

- Local page returns HTTP 200 before commit.
- New pages are included in `sitemap.xml` and `llms.txt`.
- Homepage navigation or topic hub links to important new pages.
- If search is visible, search behavior must work; if it is not reliable, remove it from the primary UI.
- Monetization pages do not claim earnings, hide keywords, induce fake clicks, or present unapproved links as affiliate links.
- Third-party forms are not submitted unless the site meets the platform's hard requirements.
- Netlify live URL returns HTTP 200 after push.

## User Handoff

User action is needed only for:

- Account logins, OAuth consent, passwords, OTPs, payment, or API keys.
- Final approval before submitting forms that change third-party account state.
- Supplying real affiliate links or deciding paid service accounts.

## Current Next Best Actions

1. Use non-ICP-dependent monetization first: official SaaS affiliate programs, social-media promotion positions, or service/consulting pages.
2. Replace placeholder affiliate URLs in `script.js` only after real tracked links are approved.
3. Submit `sitemap.xml` to search engines.
4. Add analytics such as GA4, Umami, or Baidu Tongji after account setup.
5. Add 5-10 content snippets for social posting and link sharing.

## Monetization Preflight Rule

Do not start account configuration until the Researcher can answer all of these:

- Does the platform require ICP, custom domain, company registration, minimum traffic, or original-content review?
- Can this site generate a tracked website link today?
- Is the recommended product directly related to AI tools, PPT, design, office, automation, coding, learning, or open-source agent workflows?
- Is the promotion allowed without hidden text, fake clicks, forced redirects, or exaggerated earnings claims?
- What exact page and link will be changed after approval?
