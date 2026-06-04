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

1. Researcher proposes 3-5 high-intent page ideas or link categories.
2. Strategist selects the smallest set that improves traffic or monetization.
3. Builder implements pages, navigation, sitemap, llms.txt, and any UI changes.
4. Reviewer runs local HTTP checks, search checks, and source inspections.
5. Publisher commits, pushes to `main`, waits for Netlify, and verifies live URLs.

## Validation Plan

- Local page returns HTTP 200 before commit.
- New pages are included in `sitemap.xml` and `llms.txt`.
- Homepage navigation or topic hub links to important new pages.
- Search behavior remains functional after script changes.
- Netlify live URL returns HTTP 200 after push.

## User Handoff

User action is needed only for:

- Account logins, OAuth consent, passwords, OTPs, payment, or API keys.
- Final approval before submitting forms that change third-party account state.
- Supplying real affiliate links or deciding paid service accounts.

## Current Next Best Actions

1. Replace placeholder affiliate URLs in `script.js` with real tracked links.
2. Submit `sitemap.xml` to search engines.
3. Add analytics such as GA4, Umami, or Baidu Tongji after account setup.
4. Add 5-10 content snippets for social posting and link sharing.
