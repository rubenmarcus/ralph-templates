# AEO Toolkit — Answer Engine Optimization

Build Answer Engine Optimization into an existing project so AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can discover, parse, and cite the site's content.

## Overview

An AEO (Answer Engine Optimization) implementation that ralph drops into the user's existing project. Ralph first reads `package.json` to detect the framework (Next.js, Nuxt, Astro, Remix, Express, or static), then generates only the files that match that stack. The toolkit covers the core AEO primitives: `robots.txt` with AI crawler directives, `llms.txt` / `llms-full.txt` per the llmstxt.org spec, AI-optimized sitemaps, structured data (JSON-LD) tuned for answer extraction, and a CLI auditor that scores the site's AEO readiness.

AI crawlers do not execute JavaScript — all critical content must be in the initial HTML response. This is the fundamental constraint the toolkit addresses.

## Features

- Framework auto-detection from `package.json`
- `robots.txt` with AI crawler directives (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot)
- `llms.txt` and `llms-full.txt` generation per llmstxt.org spec
- AI-optimized XML sitemap with priority scoring
- JSON-LD structured data (Article, FAQ, HowTo, Product, Organization)
- Bot detection middleware (identifies AI crawlers by user-agent)
- Markdown endpoint support (`.md` versions of pages for LLM consumption)
- AEO audit CLI that scores a site 0-100
- Entity consistency checker

## Tasks

### Task 1: Detect Framework and Setup

- [ ] Read `package.json` to detect framework (next, nuxt, astro, remix, express)
- [ ] Create `aeo.config.ts` with Zod-validated schema (site name, URL, crawler policies)
- [ ] Create `src/lib/aeo/` directory for core utilities
- [ ] Install dependencies (zod, unified/remark, xml2js)

### Task 2: robots.txt with AI Crawler Directives

- [ ] Generate `robots.txt` using the detected framework's routing pattern
- [ ] Include directives for: GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, CCBot, Meta-ExternalAgent, Bytespider, Applebot-Extended
- [ ] Support three policies via config: `allow-all`, `block-training`, `selective`
- [ ] Add Sitemap and Crawl-delay directives
- [ ] Write tests

### Task 3: llms.txt and llms-full.txt

- [ ] Generate `llms.txt` from config content map (H1 title, blockquote summary, H2 link sections)
- [ ] Generate `llms-full.txt` with full site documentation (company overview, products, audience)
- [ ] Serve both files via the framework's routing system
- [ ] Add `lastUpdated` timestamp
- [ ] Write tests

### Task 4: AI-Optimized Sitemap

- [ ] Generate XML sitemap with priority scoring (landing pages > docs > blog > archives)
- [ ] Add `lastmod` timestamps and `changefreq` hints
- [ ] Reference sitemap in robots.txt
- [ ] Write tests

### Task 5: Structured Data (JSON-LD)

- [ ] Create JSON-LD generator functions: Article, FAQ, HowTo, Product, Organization, BreadcrumbList
- [ ] Create component/helper to inject `<script type="application/ld+json">` into pages
- [ ] Add schema validator utility
- [ ] Write tests for each schema type

### Task 6: Bot Detection Middleware

- [ ] Create `isAIBot(userAgent)` utility with patterns for all known AI crawlers
- [ ] Create middleware that tags AI bot requests (sets header or context flag)
- [ ] Add HTML meta tags: `<meta name="robots" content="max-snippet:-1, max-image-preview:large">`
- [ ] Add canonical URL helper
- [ ] Write tests

### Task 7: Markdown Endpoints

- [ ] Create middleware/route to serve `.md` versions of pages
- [ ] Convert HTML to clean markdown (strip nav, footer, boilerplate)
- [ ] Add front-matter metadata (title, description, date)
- [ ] Write tests

### Task 8: AEO Audit CLI

- [ ] Create `scripts/aeo-audit.ts` runnable via `npx tsx scripts/aeo-audit.ts`
- [ ] Check: robots.txt has AI bot directives, llms.txt exists and is valid, structured data present, critical content is in static HTML
- [ ] Score 0-100 with actionable recommendations
- [ ] Output as terminal table
- [ ] Write tests

### Task 9: Entity Consistency Checker

- [ ] Define entity registry in config (brand names with canonical forms and variants)
- [ ] Scan source files for inconsistent naming
- [ ] Report with file locations and suggested fixes
- [ ] Write tests

## Tech Stack

- TypeScript
- Zod (config validation)
- Unified / Remark (markdown processing)
- xml2js (XML generation)
- Vitest (testing)
- Framework detected at generation time from `package.json`

## Files to Create

- `aeo.config.ts`
- `src/lib/aeo/config.ts`
- `src/lib/aeo/robots.ts`
- `src/lib/aeo/llms-txt.ts`
- `src/lib/aeo/sitemap.ts`
- `src/lib/aeo/structured-data.ts`
- `src/lib/aeo/bot-detector.ts`
- `src/lib/aeo/markdown-endpoints.ts`
- `src/lib/aeo/entity-checker.ts`
- `scripts/aeo-audit.ts`
- `tests/aeo/robots.test.ts`
- `tests/aeo/llms-txt.test.ts`
- `tests/aeo/structured-data.test.ts`
- `tests/aeo/bot-detector.test.ts`
- `tests/aeo/audit.test.ts`

## Files to Modify

- `package.json` — Add dependencies
- Framework-specific routing files (detected at generation time) — Wire robots.txt, llms.txt, sitemap routes

## Configuration

### aeo.config.ts

```typescript
import { defineAEOConfig } from './src/lib/aeo/config';

export default defineAEOConfig({
  site: {
    name: 'My Company',
    url: 'https://example.com',
    description: 'Short description for llms.txt blockquote',
  },
  robots: {
    policy: 'allow-all', // 'allow-all' | 'block-training' | 'selective'
  },
  llmsTxt: {
    sections: [
      { title: 'Documentation', pages: ['/docs', '/guides'] },
      { title: 'Blog', pages: ['/blog'] },
    ],
  },
  entities: {
    'Next.js': ['NextJS', 'Next JS', 'Nextjs'],
  },
});
```

## Notes

- Ralph reads `package.json` to detect the framework and generates routes/middleware using that framework's patterns
- AI crawlers do NOT execute JavaScript — all critical content must be in the initial HTML
- `llms.txt` is an emerging standard (not yet formally adopted by major AI companies) but is low-risk to implement
- `robots.txt` remains the primary mechanism for AI crawler control
- ChatGPT crawls ~8x more than Googlebot; Perplexity ~3x (Conductor research)
- Requires Node.js 18+
