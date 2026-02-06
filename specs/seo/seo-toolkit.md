# SEO Toolkit — Technical SEO

Build technical SEO into an existing project covering metadata, structured data, sitemaps, performance monitoring, and on-page optimization.

## Overview

A Technical SEO implementation that ralph drops into the user's existing project. Ralph first reads `package.json` to detect the framework (Next.js, Nuxt, Astro, Remix, Express, or static), then generates only the files that match that stack. Covers every pillar of modern SEO: metadata management, Open Graph / Twitter Cards, canonical URLs, structured data (JSON-LD), XML sitemaps, RSS feeds, robots.txt, and an SEO audit CLI that scores the site.

While the AEO Toolkit focuses on AI answer engines, this toolkit targets traditional search engines (Google, Bing) and social platforms (Facebook, Twitter/X, LinkedIn).

## Features

- Framework auto-detection from `package.json`
- Metadata helpers (title templates, OG tags, Twitter Cards, canonical URLs, hreflang)
- JSON-LD structured data (Article, Product, Organization, BreadcrumbList, LocalBusiness, FAQPage, WebSite with SearchAction)
- XML sitemap generation
- RSS / Atom feed generation
- Dynamic `robots.txt`
- Heading hierarchy validator
- Image alt text auditor
- Internal linking analyzer with orphan page detection
- SEO audit CLI that scores a site 0-100

## Tasks

### Task 1: Detect Framework and Setup

- [ ] Read `package.json` to detect framework (next, nuxt, astro, remix, express)
- [ ] Create `seo.config.ts` with Zod-validated schema (site name, URL, social accounts, defaults)
- [ ] Create `src/lib/seo/` directory for core utilities
- [ ] Install dependencies (zod, xml2js, feed, cheerio)

### Task 2: Metadata Helpers

- [ ] Create `generateMetaTags(page, config)` that returns title, description, OG, and Twitter Card tags
- [ ] Support title templates (`%s | Site Name`)
- [ ] Add canonical URL generation with trailing slash normalization
- [ ] Add hreflang generation for multi-language pages
- [ ] Create framework-specific integration (Next.js Metadata API, Nuxt useHead, etc.)
- [ ] Write tests

### Task 3: Structured Data (JSON-LD)

- [ ] Create JSON-LD generator functions: WebSite, Organization, Article, Product, BreadcrumbList, LocalBusiness, FAQPage
- [ ] Create component/helper to inject `<script type="application/ld+json">` into pages
- [ ] Add JSON-LD validator utility
- [ ] Write tests for each schema type

### Task 4: XML Sitemap and RSS Feed

- [ ] Generate XML sitemap with `lastmod`, `priority`, and `changefreq`
- [ ] Support sitemap index for large sites (>50,000 URLs)
- [ ] Generate RSS feed and Atom feed for content pages
- [ ] Serve via the framework's routing system
- [ ] Write tests

### Task 5: robots.txt and Crawl Control

- [ ] Generate `robots.txt` with per-section Allow/Disallow rules
- [ ] Support per-environment rules (block crawlers on staging)
- [ ] Add `Sitemap` directive
- [ ] Add `noindex` meta tag helper for excluded pages
- [ ] Write tests

### Task 6: Heading Hierarchy Validator

- [ ] Create `validateHeadings(html)` — checks single H1, proper nesting, empty headings
- [ ] Return structured report with issues and locations
- [ ] Write tests

### Task 7: Image Alt Text Auditor

- [ ] Create `auditImages(html)` — detects missing or generic alt text
- [ ] Flag missing `width`/`height` attributes (CLS risk)
- [ ] Generate image sitemap entries
- [ ] Write tests

### Task 8: Internal Linking Analyzer

- [ ] Create `analyzeLinkGraph(pages)` — build link graph from page list
- [ ] Detect orphan pages (no internal links pointing to them)
- [ ] Calculate link depth from homepage
- [ ] Flag broken internal links (404s)
- [ ] Write tests

### Task 9: SEO Audit CLI

- [ ] Create `scripts/seo-audit.ts` runnable via `npx tsx scripts/seo-audit.ts`
- [ ] Check: meta tags, OG tags, canonical URLs, structured data, headings, images, robots.txt
- [ ] Category scores: Metadata, Structured Data, Content, Crawlability
- [ ] Score 0-100 with prioritized recommendations (critical, warning, info)
- [ ] Output as terminal table and optional JSON
- [ ] Write tests

## Tech Stack

- TypeScript
- Zod (config validation)
- Cheerio (HTML parsing)
- xml2js (XML generation)
- feed (RSS/Atom)
- Vitest (testing)
- Framework detected at generation time from `package.json`

## Files to Create

- `seo.config.ts`
- `src/lib/seo/config.ts`
- `src/lib/seo/metadata.ts`
- `src/lib/seo/structured-data.ts`
- `src/lib/seo/sitemap.ts`
- `src/lib/seo/feed.ts`
- `src/lib/seo/robots.ts`
- `src/lib/seo/heading-validator.ts`
- `src/lib/seo/image-audit.ts`
- `src/lib/seo/link-analyzer.ts`
- `scripts/seo-audit.ts`
- `tests/seo/metadata.test.ts`
- `tests/seo/structured-data.test.ts`
- `tests/seo/sitemap.test.ts`
- `tests/seo/robots.test.ts`
- `tests/seo/heading-validator.test.ts`
- `tests/seo/audit.test.ts`

## Files to Modify

- `package.json` — Add dependencies
- Framework-specific routing files (detected at generation time) — Wire sitemap, robots.txt, feed routes
- Framework-specific layout/head (detected at generation time) — Integrate metadata helpers

## Configuration

### seo.config.ts

```typescript
import { defineSEOConfig } from './src/lib/seo/config';

export default defineSEOConfig({
  site: {
    name: 'My Company',
    url: 'https://example.com',
    description: 'We build great software.',
    locale: 'en_US',
    twitter: '@mycompany',
  },
  metadata: {
    titleTemplate: '%s | My Company',
    defaultOgImage: '/og-default.png',
  },
  structuredData: {
    organization: {
      name: 'My Company',
      logo: 'https://example.com/logo.png',
      sameAs: ['https://twitter.com/mycompany', 'https://github.com/mycompany'],
    },
  },
  sitemap: {
    exclude: ['/admin/*', '/api/*'],
  },
  redirects: [
    { source: '/old-page', destination: '/new-page', permanent: true },
  ],
});
```

## Notes

- Ralph reads `package.json` to detect the framework and generates routes/components using that framework's patterns
- Core Web Vitals thresholds: LCP < 2.5s, CLS < 0.1, INP < 200ms
- The internal link analyzer runs on-demand via CLI — not in production
- Structured data is validated against schema.org specs
- Requires Node.js 18+
