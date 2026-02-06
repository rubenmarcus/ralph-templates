# AEO Toolkit — Answer Engine Optimization

Build a framework-agnostic Answer Engine Optimization toolkit that makes any website fully discoverable by AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and optimized for citation in AI-generated answers.

## Overview

A production-ready AEO (Answer Engine Optimization) toolkit shipped as a standalone Node.js package with framework adapters for Next.js, Nuxt, Astro, Remix, and Express. As AI-powered answer engines like ChatGPT, Perplexity, and Claude increasingly replace traditional search, websites need a new layer of optimization beyond classic SEO. This toolkit generates `llms.txt` / `llms-full.txt`, configures `robots.txt` with AI crawler directives, produces structured data (JSON-LD) tuned for answer extraction, ensures all critical content is server-rendered in HTML (AI crawlers don't execute JavaScript), and provides a monitoring dashboard to track AI bot traffic and citation performance.

The core library is framework-agnostic — it generates plain text, markdown, XML, and JSON-LD strings. Framework adapters wire these generators into each framework's routing and middleware system. Inspired by the `llms.txt` standard (llmstxt.org), Firecrawl's crawling patterns, and Conductor's AI crawlability research.

## Features

- `llms.txt` and `llms-full.txt` auto-generation from site content map
- `robots.txt` with granular AI crawler directives (GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, CCBot)
- AI-optimized XML sitemap with priority scoring and `lastmod` timestamps
- Server-side rendered (SSR) content layer — ensures critical content is in raw HTML, not behind JavaScript
- Structured data engine: FAQ, Article, HowTo, Product, Organization, and BreadcrumbList schemas (JSON-LD)
- Answer-first content formatting helpers (concise answer block above the fold, then detail)
- Entity consistency checker — validates that brand names, product names, and key entities are consistent across pages
- Authorship and freshness signals (author schema, datePublished, dateModified)
- Markdown endpoint generator — serves `.md` versions of pages for LLM consumption (per llms.txt spec)
- AI bot traffic monitoring dashboard — parses server/access logs to track GPTBot, ClaudeBot, PerplexityBot visits
- Citation tracker — monitors when your content appears in AI answer engine results
- Core Web Vitals monitoring integration
- Framework adapters: Next.js, Nuxt, Astro, Remix, Express
- CLI commands for auditing, generating, and validating all AEO artifacts

## Tasks

### Task 1: Core Library Setup

- [ ] Initialize TypeScript monorepo with `packages/core`, `packages/cli`, and `packages/adapters/*`
- [ ] Configure Turborepo or npm workspaces for package management
- [ ] Set up `packages/core` with zero framework dependencies
- [ ] Create `aeo.config.ts` schema with Zod (site metadata, crawler policies, content map)
- [ ] Implement config loader that reads from project root
- [ ] Install core dependencies (unified/remark for markdown, xml2js for XML)
- [ ] Set up ESLint, Prettier, and Vitest

### Task 2: robots.txt Generator

- [ ] Create `generateRobotsTxt(config)` function in `packages/core/src/robots.ts`
- [ ] Implement AI crawler directive builder with per-bot Allow/Disallow rules
- [ ] Support configurable policies: allow-all, block-training-only, selective-access
- [ ] Add known AI bot user-agents: GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, CCBot, Meta-ExternalAgent, Bytespider, Applebot-Extended
- [ ] Include Sitemap directives pointing to both standard and AI sitemaps
- [ ] Add Crawl-delay directives for aggressive bots
- [ ] Write unit tests for all policy modes

### Task 3: llms.txt and llms-full.txt Generator

- [ ] Create `generateLlmsTxt(config)` function in `packages/core/src/llms-txt.ts`
- [ ] Implement auto-generation from config site content map
- [ ] Structure output per llmstxt.org spec: H1 title, blockquote summary, H2 sections with link lists
- [ ] Create `generateLlmsFullTxt(config)` with comprehensive site documentation
- [ ] Include company overview, product descriptions, target audience, competitive advantages
- [ ] Add "Optional" section for secondary/supplementary pages
- [ ] Add `lastUpdated` timestamp to both files
- [ ] Write unit tests for output format validation

### Task 4: AI-Optimized Sitemap

- [ ] Create `generateSitemap(pages, config)` function in `packages/core/src/sitemap.ts`
- [ ] Create `generateAISitemap(pages, config)` with AI-specific priority scoring
- [ ] Implement priority calculation based on content type (landing pages > blog > archives)
- [ ] Add `lastmod` timestamps from content metadata or git history
- [ ] Add `changefreq` hints based on content volatility
- [ ] Reference both sitemaps in robots.txt output
- [ ] Write tests for XML output validity

### Task 5: Structured Data Engine (JSON-LD)

- [ ] Create `generateJsonLd(type, data)` function in `packages/core/src/structured-data.ts`
- [ ] Implement Article schema (headline, author, datePublished, dateModified, publisher)
- [ ] Implement FAQ schema (Question/Answer pairs for featured snippet targeting)
- [ ] Implement HowTo schema (step-by-step content)
- [ ] Implement Product schema (name, description, price, availability, reviews)
- [ ] Implement Organization schema (name, logo, sameAs social profiles, contactPoint)
- [ ] Implement BreadcrumbList schema for navigation hierarchy
- [ ] Add schema validator that checks output against schema.org specs
- [ ] Export framework-agnostic `<script type="application/ld+json">` string builder
- [ ] Write tests for each schema type

### Task 6: Bot Detection and SSR Middleware

- [ ] Create `isAIBot(userAgent)` detector in `packages/core/src/bot-detector.ts`
- [ ] Maintain user-agent pattern list for all known AI crawlers
- [ ] Create `aeoMiddleware(config)` factory that returns a generic request handler
- [ ] Middleware detects AI bots and sets `x-aeo-bot` header for downstream use
- [ ] Implement HTML meta tag helper: `<meta name="robots" content="max-snippet:-1, max-image-preview:large">`
- [ ] Add canonical URL generation utility
- [ ] Write tests for bot detection accuracy

### Task 7: Markdown Endpoint Generator

- [ ] Create `htmlToMarkdown(html)` converter in `packages/core/src/markdown-endpoints.ts`
- [ ] Strip navigation, footer, ads, and boilerplate — serve only core content
- [ ] Add front-matter metadata (title, description, author, date) to markdown output
- [ ] Create `markdownMiddleware(config)` that intercepts `.md` requests
- [ ] Cache generated markdown with configurable TTL
- [ ] Write tests for markdown output quality

### Task 8: Answer-First Content Helpers

- [ ] Create `formatAnswerBlock(answer, detail)` in `packages/core/src/content-helpers.ts`
- [ ] Create `formatKeyFacts(facts)` — structured key-value pairs for easy extraction
- [ ] Create `formatFAQ(items)` — FAQ with built-in JSON-LD generation
- [ ] Implement `formatForExtraction(content)` — structures content with clear heading hierarchy
- [ ] Export HTML string builders (framework-agnostic) for all helpers
- [ ] Write tests for output format

### Task 9: Entity Consistency Checker

- [ ] Create entity registry schema in config (brand names, product names, key terms with canonical forms)
- [ ] Build `checkEntities(files, config)` scanner in `packages/core/src/entity-checker.ts`
- [ ] Flag variations (e.g., "Next.js" vs "NextJS" vs "Next JS")
- [ ] Generate report with file locations and suggested fixes
- [ ] Add pre-commit hook integration option
- [ ] Write tests for detection accuracy

### Task 10: AI Bot Traffic Monitor

- [ ] Create log parser in `packages/core/src/bot-traffic.ts` that identifies AI bot user-agents
- [ ] Support common log formats (Apache, Nginx, JSON logs)
- [ ] Calculate bot visit frequency breakdown (GPTBot, ClaudeBot, PerplexityBot, etc.)
- [ ] Track pages most frequently crawled by AI bots
- [ ] Track crawl frequency trends over time (daily/weekly)
- [ ] Add comparison: AI bot traffic vs Googlebot traffic
- [ ] Implement alerting for crawl anomalies (sudden drops may indicate blocking issues)
- [ ] Write tests for log parsing

### Task 11: Citation Tracker

- [ ] Create citation service in `packages/core/src/citation-tracker.ts`
- [ ] Query Perplexity, ChatGPT search, and Google AI Overviews for brand mentions
- [ ] Track which pages are cited and in response to which queries
- [ ] Calculate "AI Share of Voice" metric
- [ ] Show citation sentiment analysis (positive/neutral/negative)
- [ ] Display citation trends over time
- [ ] Write tests for citation parsing

### Task 12: Framework Adapters

- [ ] Create Next.js adapter in `packages/adapters/nextjs/` (route handlers for robots.txt, llms.txt, sitemaps; React components for JSON-LD; middleware)
- [ ] Create Nuxt adapter in `packages/adapters/nuxt/` (server routes, Vue components, middleware)
- [ ] Create Astro adapter in `packages/adapters/astro/` (API endpoints, Astro components, middleware)
- [ ] Create Remix adapter in `packages/adapters/remix/` (resource routes, React components, middleware)
- [ ] Create Express adapter in `packages/adapters/express/` (Express middleware and route handlers)
- [ ] Each adapter wires core generators into the framework's routing system
- [ ] Write integration tests for each adapter

### Task 13: Dashboard UI

- [ ] Build standalone dashboard as a single-page app in `packages/dashboard/`
- [ ] Bot traffic overview page with visit frequency charts
- [ ] Citation tracking page with AI Share of Voice
- [ ] AEO health score page (robots.txt, llms.txt, structured data, SSR status)
- [ ] Use Recharts for charts and Tailwind CSS for styling
- [ ] Export as embeddable component and standalone server
- [ ] Write tests for dashboard data rendering

### Task 14: AEO Audit CLI

- [ ] Create CLI entry point in `packages/cli/` with Commander.js
- [ ] Implement `npx aeo audit <url>` — runs full AEO health check against any URL
- [ ] Check robots.txt accessibility and AI bot directives
- [ ] Validate llms.txt format against llmstxt.org spec
- [ ] Verify structured data on all pages (JSON-LD validity)
- [ ] Check that critical content is in static HTML (not JS-dependent)
- [ ] Verify markdown endpoints are functional
- [ ] Score site 0-100 with actionable recommendations
- [ ] Output results as terminal table and optional JSON report
- [ ] Write tests for audit logic

## Tech Stack

- TypeScript
- Node.js 18+
- Turborepo (monorepo management)
- Zod (config validation)
- Unified / Remark / Rehype (Markdown processing)
- gray-matter (front-matter parsing)
- xml2js (XML generation)
- Commander.js (CLI)
- Cheerio (HTML parsing for audits)
- Recharts (dashboard charts)
- Tailwind CSS (dashboard styling)
- Vitest (testing)
- Playwright (integration tests for SSR verification)

### Framework Adapters Support

- Next.js 14+ (App Router)
- Nuxt 3+
- Astro 4+
- Remix 2+
- Express 4+

## Files to Create

- `aeo.config.ts`
- `packages/core/src/index.ts`
- `packages/core/src/robots.ts`
- `packages/core/src/llms-txt.ts`
- `packages/core/src/sitemap.ts`
- `packages/core/src/structured-data.ts`
- `packages/core/src/bot-detector.ts`
- `packages/core/src/markdown-endpoints.ts`
- `packages/core/src/content-helpers.ts`
- `packages/core/src/entity-checker.ts`
- `packages/core/src/bot-traffic.ts`
- `packages/core/src/citation-tracker.ts`
- `packages/core/src/config.ts`
- `packages/core/package.json`
- `packages/cli/src/index.ts`
- `packages/cli/src/audit.ts`
- `packages/cli/package.json`
- `packages/adapters/nextjs/src/index.ts`
- `packages/adapters/nextjs/src/routes.ts`
- `packages/adapters/nextjs/src/components.tsx`
- `packages/adapters/nextjs/src/middleware.ts`
- `packages/adapters/nextjs/package.json`
- `packages/adapters/nuxt/src/index.ts`
- `packages/adapters/nuxt/src/module.ts`
- `packages/adapters/nuxt/package.json`
- `packages/adapters/astro/src/index.ts`
- `packages/adapters/astro/src/integration.ts`
- `packages/adapters/astro/package.json`
- `packages/adapters/remix/src/index.ts`
- `packages/adapters/remix/src/routes.ts`
- `packages/adapters/remix/package.json`
- `packages/adapters/express/src/index.ts`
- `packages/adapters/express/src/middleware.ts`
- `packages/adapters/express/package.json`
- `packages/dashboard/src/App.tsx`
- `packages/dashboard/src/pages/traffic.tsx`
- `packages/dashboard/src/pages/citations.tsx`
- `packages/dashboard/src/pages/health.tsx`
- `packages/dashboard/package.json`
- `tests/core/robots.test.ts`
- `tests/core/llms-txt.test.ts`
- `tests/core/sitemap.test.ts`
- `tests/core/structured-data.test.ts`
- `tests/core/entity-checker.test.ts`
- `tests/core/markdown-endpoints.test.ts`
- `tests/core/bot-detector.test.ts`
- `tests/cli/audit.test.ts`
- `tests/adapters/nextjs.test.ts`
- `tests/adapters/express.test.ts`
- `turbo.json`
- `package.json`
- `.env.example`

## Configuration

### Environment Variables

- `SITE_URL` — Canonical site URL (e.g., `https://example.com`)
- `SITE_NAME` — Brand name used in structured data and llms.txt
- `AEO_LOG_PATH` — Path to server access logs for bot traffic parsing
- `PERPLEXITY_API_KEY` — (Optional) For citation tracking via Perplexity API
- `OPENAI_API_KEY` — (Optional) For citation tracking via ChatGPT search

### aeo.config.ts Example

```typescript
import { defineAEOConfig } from '@aeo-toolkit/core';

export default defineAEOConfig({
  site: {
    name: 'My Company',
    url: 'https://example.com',
    description: 'Short description for llms.txt blockquote',
  },
  robots: {
    policy: 'allow-all', // 'allow-all' | 'block-training' | 'selective'
    customRules: [
      { userAgent: 'GPTBot', disallow: ['/admin/', '/api/'] },
    ],
  },
  llmsTxt: {
    sections: [
      { title: 'Documentation', pages: ['/docs', '/guides', '/api-reference'] },
      { title: 'Blog', pages: ['/blog'] },
    ],
    optional: ['/changelog', '/careers'],
  },
  entities: {
    'Next.js': ['NextJS', 'Next JS', 'Nextjs'],
    'TypeScript': ['Typescript', 'TS'],
  },
  sitemap: {
    priorities: {
      '/': 1.0,
      '/products/*': 0.9,
      '/blog/*': 0.7,
      '/docs/*': 0.8,
    },
  },
});
```

### Framework Integration Examples

```typescript
// Next.js — app/robots.txt/route.ts
import { createRobotsHandler } from '@aeo-toolkit/nextjs';
export const GET = createRobotsHandler();

// Express
import { aeoMiddleware } from '@aeo-toolkit/express';
app.use(aeoMiddleware()); // serves /robots.txt, /llms.txt, /sitemap.xml

// Astro — src/pages/robots.txt.ts
import { createRobotsEndpoint } from '@aeo-toolkit/astro';
export const GET = createRobotsEndpoint();
```

## Usage

1. Install: `npm install @aeo-toolkit/core @aeo-toolkit/<framework>`
2. Create `aeo.config.ts` in your project root
3. Wire framework adapter into your routes (see examples above)
4. Run `npx aeo audit https://yoursite.com` for a full AEO health check
5. Visit `/admin/aeo` for the monitoring dashboard (optional)

## Notes

- AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do NOT execute JavaScript — all critical content must be in the initial HTML response
- `llms.txt` is an emerging standard; no major AI company has formally adopted it yet, but implementing it is low-risk and future-proofs your site
- `robots.txt` directives remain the primary and most reliable mechanism for AI crawler control
- ChatGPT crawls ~8x more frequently than Googlebot; Perplexity ~3x more frequently (Conductor research)
- First impression matters: AI bots lack manual reindexing — content must be correct on first crawl
- The entity consistency checker helps avoid confusing AI models with inconsistent naming
- Citation tracking requires API access to answer engines and may have rate limits
- The core package has zero framework dependencies — adapters are optional
- Requires Node.js 18+
