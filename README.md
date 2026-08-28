# pratikvanol.com.au

Consulting website for Pratik Vanol — Australian-based senior software engineer and
solution architect.

Next.js 16 (App Router) · TypeScript · Tailwind v4 · statically generated · deploys to Vercel.

```bash
nvm use         # Node version from .nvmrc
npm ci          # first time on a machine, or after switching OS
npm run dev     # http://localhost:3000
npm run build   # production build — must pass before deploying
npm run lint
```

Works on Linux, macOS and Windows. `node_modules` is **not** portable between
them — Next, Tailwind and Lightning CSS each ship a compiled native binary per
platform. Copying a checkout across OSes means deleting `node_modules` and
`.next`, then running `npm ci` again.

---

## Before this goes live

These are the outstanding items. Nothing is blocked — the site builds and runs today
with sensible placeholders — but each of these makes it materially better.

| # | Item | Where it goes |
|---|------|---------------|
| 1 | **Review the four articles.** They were drafted from your real project experience but are not yet in your voice. Read and edit them before deploying. | `content/insights/*.md` |
| 2 | **Add your headshot.** A `PV` monogram placeholder shows until you do. | `public/images/pratik/pratik-vanol.jpg` |
| 3 | **Add PotatoAIHub screenshots.** The case study hides its image block until the file exists. | `public/images/case-studies/potatoaihub.png` |
| 4 | **Contact form credentials.** A Gmail address plus a 16-character [app password](https://support.google.com/accounts/answer/185833) (needs 2-Step Verification on). Without them the form shows a "call instead" message. | `.env.local` → `GMAIL_USER`, `GMAIL_APP_PASSWORD` |
| 5 | **Confirm your city/region.** Currently set to Geelong, VIC. This feeds the footer and the LocalBusiness structured data that helps Australian local search. | `lib/data/site.ts` → `site.location` |
| 6 | **Confirm your LinkedIn URL.** Currently a guess. | `lib/data/site.ts` → `site.linkedin` |
| 7 | **Buy the domain** and connect it in Vercel. | — |
| 8 | **Add real testimonials** if you want them. See below. | `lib/data/testimonials.ts` |

Search the codebase for `TODO(pratik)` to find these in place.

---

## How the content is organised

Almost all the words live in `lib/data/` as typed objects, not scattered through JSX.
Editing content means editing one file, and it updates everywhere it appears.

```
lib/data/
  site.ts               name, phone, LinkedIn, location, navigation
  home.ts               homepage stats, problems, differentiators, delivery model
  services.ts           all five service pages
  case-studies.ts       all case studies + the in-development projects
  engagement-models.ts  how you work (deliberately no prices)
  testimonials.ts       ships empty — see below
  about.ts              about page narrative, principles, career
content/insights/       articles, one Markdown file each
```

### Adding an article

Create `content/insights/your-slug.md`. Nothing else to register — it appears in the
listing, gets its own page, and is added to the sitemap automatically.

```markdown
---
title: "How to do the thing"
description: "One sentence, used in search results and on the listing card."
date: "2026-09-01"
readingTime: "6 min read"
topics: ["Laravel", "Performance"]
draft: false
---

Your article in Markdown. Code blocks, tables and lists are all styled.
```

Set `draft: true` to keep a file out of the build entirely while you work on it.

### Adding a case study

Add an entry to the `caseStudies` array in `lib/data/case-studies.ts`. It follows
**Problem → Investigation → Solution → Result**, each an array of paragraphs. Set
`featured: true` to surface it on the homepage.

When PotatoChat or Poise ship, move them from `inProgress` into `caseStudies` and give
them real results.

### Adding a service

Add an entry to `services` in `lib/data/services.ts`, then add it to the `Services`
dropdown in `lib/data/site.ts`. The page, its metadata, its FAQ structured data and its
sitemap entry are all generated from that one object.

---

## Two deliberate decisions worth knowing about

**Testimonials ship empty.** `lib/data/testimonials.ts` is an empty array on purpose —
nothing was written on your behalf. The section renders nothing until you paste in real
LinkedIn recommendations, so the site stays credible in the meantime. The expected shape
is documented in the file.

**"Worked with" uses text, not logos.** `home.ts` lists company names as text wordmarks
rather than logo images. Reproducing a client's trademark — PepsiCo especially, where the
work came through Bacancy — implies an endorsement they have not given. It also suits the
editorial design better. Change it if you decide otherwise.

---

## Design system

Light-committed (no dark mode). Tokens are defined once in `app/globals.css` under
`@theme` — change a colour there and it updates site-wide.

- **Paper** `#FDFCFA` background · **Surface** `#F4F1EC` · **Ink** `#1A1917` · **Clay** `#A94D2E` accent
- **Instrument Serif** for display headings, **Inter** for everything else
- `components/ui.tsx` holds the shared primitives — `Container`, `Section`, `SectionHeading`,
  `ButtonLink`, `ArrowLink`, `Prose`, `Pill`, `NumberedList`
- `<Reveal>` does the quiet scroll-in. The hidden starting state is scoped to
  `@media (scripting: enabled)`, so with JavaScript off every element renders visible
  rather than staying invisible forever.

---

## SEO

Handled in `app/layout.tsx` and per-page `metadata` exports:

- Per-page titles and descriptions, canonical URLs, Open Graph
- `Person` + `ProfessionalService` JSON-LD with `areaServed: Australia`
- `FAQPage` JSON-LD on every service page, `Article` on every insight
- `app/sitemap.ts` and `app/robots.ts` generate from the same data as the pages

After deploying: submit the sitemap in Google Search Console.

---

## Deploying

1. Push to GitHub.
2. Import the repo in Vercel — it detects Next.js with no configuration needed.
3. Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` as environment variables (plus `CONTACT_TO_EMAIL` if enquiries should land somewhere other than `GMAIL_USER`). Redeploy afterwards — saving a variable does not rebuild on its own.
4. Add the domain in Vercel and point your DNS at it.
5. Update `site.url` in `lib/data/site.ts` if the final domain differs.
