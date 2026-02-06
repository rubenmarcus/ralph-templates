# SEO Toolkit — Technical SEO for Any Framework

Build a framework-agnostic technical SEO toolkit covering metadata, structured data, sitemaps, performance monitoring, and on-page optimization with adapters for Next.js, Nuxt, Astro, Remix, and Express.

## Overview

A production-ready Technical SEO toolkit shipped as a standalone Node.js package with framework adapters. Covers every pillar of modern SEO: metadata management, Open Graph / Twitter Cards, canonical URLs, structured data (JSON-LD), XML sitemaps, RSS feeds, robots.txt, Core Web Vitals monitoring, image optimization auditing, internal linking analysis, and an SEO audit dashboard. The core library generates plain strings and objects with zero framework dependencies — adapters wire it into Next.js, Nuxt, Astro, Remix, or Express.

While the AEO Toolkit focuses on AI answer engines, this toolkit targets traditional search engines (Google, Bing) and social platforms (Facebook, Twitter/X, LinkedIn) — though many optimizations benefit both.

## Features

- Dynamic metadata generation (title, description, OG, Twitter Cards, canonical, hreflang)
- Open Graph and Twitter Card meta tag builders for every page
- Canonical URL management and duplicate content prevention
- XML sitemap generation with automatic page discovery
- RSS / Atom feed generation for content pages
- Dynamic `robots.txt` with per-section control
- JSON-LD structured data (Article, Product, Organization, BreadcrumbList, LocalBusiness, WebSite with SearchAction)
- Heading hierarchy validator (ensures proper H1 > H2 > H3 nesting)
- Internal linking analyzer with orphan page detection
- Image alt text auditor and optimization recommendations
- Core Web Vitals tracker (LCP, INP, CLS) with web-vitals library
- SEO audit dashboard with scoring and recommendations
- Meta tag preview (Google SERP, Facebook, Twitter/X)
- Redirect manager (301/302)
- Hreflang tag generator for multi-language sites
- Framework adapters: Next.js, Nuxt, Astro, Remix, Express
- CLI for running audits, generating sitemaps, and checking broken links

## Tasks

### Task 1: Core Library Setup

- [ ] Initialize TypeScript monorepo with `packages/core`, `packages/cli`, and `packages/adapters/*`
- [ ] Configure Turborepo or npm workspaces for package management
- [ ] Set up `packages/core` with zero framework dependencies
- [ ] Create `seo.config.ts` schema with Zod (site metadata, defaults, social accounts)
- [ ] Implement config loader that reads from project root
- [ ] Install core dependencies (xml2js, feed, cheerio)
- [ ] Set up ESLint, Prettier, and Vitest

### Task 2: Metadata Engine

- [ ] Create `generateMetaTags(page, config)` in `packages/core/src/metadata.ts`
- [ ] Implement default metadata fallbacks from config
- [ ] Add per-page title template support (`%s | Site Name`)
- [ ] Generate Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- [ ] Generate Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] Add canonical URL generation with automatic trailing slash normalization
- [ ] Implement hreflang tag generation for multi-language pages
- [ ] Return plain HTML string or structured object (adapter-agnostic)
- [ ] Write tests for metadata output

### Task 3: OG Image Generation

- [ ] Create `generateOGImage(options)` in `packages/core/src/og-image.ts`
- [ ] Use Satori for SVG-to-image rendering (framework-agnostic)
- [ ] Create default OG image template with site branding
- [ ] Support per-page customization (title, description, author, category)
- [ ] Add blog post template with author avatar and reading time
- [ ] Add product template with price and rating
- [ ] Return PNG buffer for any HTTP framework to serve
- [ ] Write tests for image generation

### Task 4: Structured Data Engine (JSON-LD)

- [ ] Create `generateJsonLd(type, data)` in `packages/core/src/structured-data.ts`
- [ ] Implement WebSite schema with SearchAction (enables Google sitelinks search box)
- [ ] Implement Organization schema (name, logo, sameAs, contactPoint)
- [ ] Implement Article schema (headline, author, datePublished, dateModified, image)
- [ ] Implement Product schema (name, description, offers, aggregateRating, review)
- [ ] Implement BreadcrumbList schema from URL path segments
- [ ] Implement LocalBusiness schema (address, geo, openingHours, telephone)
- [ ] Implement FAQPage schema for FAQ sections
- [ ] Add JSON-LD validator utility
- [ ] Export `<script type="application/ld+json">` string builder
- [ ] Write tests for each schema type

### Task 5: XML Sitemap and RSS Feed

- [ ] Create `generateSitemap(pages, config)` in `packages/core/src/sitemap.ts`
- [ ] Support page list input (URL, lastmod, priority, changefreq)
- [ ] Add `priority` and `changefreq` based on page depth and type
- [ ] Create sitemap index generator for large sites (>50,000 URLs)
- [ ] Create `generateRSSFeed(items, config)` in `packages/core/src/feed.ts`
- [ ] Create `generateAtomFeed(items, config)` alongside RSS
- [ ] Return XML strings for any HTTP framework to serve
- [ ] Write tests for XML and feed validity

### Task 6: robots.txt and Crawl Control

- [ ] Create `generateRobotsTxt(config)` in `packages/core/src/robots.ts`
- [ ] Support per-environment rules (block crawlers on staging/preview)
- [ ] Add `Sitemap` directive
- [ ] Create `createRedirectRules(redirects)` utility for 301/302 redirects
- [ ] Add `noindex` meta tag helper for excluded pages
- [ ] Implement `X-Robots-Tag` HTTP header helper
- [ ] Write tests for robots output and redirect rules

### Task 7: Core Web Vitals Collection

- [ ] Create browser-side `collectVitals(callback)` in `packages/core/src/vitals.ts`
- [ ] Integrate `web-vitals` library to capture LCP, INP, CLS, TTFB, FCP
- [ ] Create `scoreVitals(data)` that grades against Google's thresholds
- [ ] Define storage adapter interface (in-memory, PostgreSQL, analytics service)
- [ ] Implement in-memory adapter for demo/development
- [ ] Write tests for vitals scoring

### Task 8: Image Audit

- [ ] Create `auditImages(html)` in `packages/core/src/image-audit.ts`
- [ ] Detect missing alt text on `<img>` tags
- [ ] Flag generic alt text ("image", "photo", "screenshot", "untitled")
- [ ] Check for missing `width`/`height` attributes (CLS risk)
- [ ] Check for missing lazy loading on below-fold images
- [ ] Generate image sitemap entries for pages with images
- [ ] Write tests for detection accuracy

### Task 9: Internal Linking Analyzer

- [ ] Create `analyzeLinkGraph(pages)` in `packages/core/src/link-analyzer.ts`
- [ ] Accept page list with extracted internal links
- [ ] Build link graph (which pages link to which)
- [ ] Detect orphan pages (no internal links pointing to them)
- [ ] Calculate link depth (clicks from homepage)
- [ ] Flag broken internal links (404s)
- [ ] Generate report with recommendations
- [ ] Write tests for graph analysis

### Task 10: Heading Hierarchy Validator

- [ ] Create `validateHeadings(html)` in `packages/core/src/heading-validator.ts`
- [ ] Validate single H1 per page
- [ ] Check for proper nesting (no H3 without preceding H2)
- [ ] Flag empty headings and headings used only for styling
- [ ] Return structured report with line numbers
- [ ] Write tests for hierarchy validation

### Task 11: Framework Adapters

- [ ] Create Next.js adapter in `packages/adapters/nextjs/` (Metadata API helper, route handlers, React `<JsonLd>` component, middleware)
- [ ] Create Nuxt adapter in `packages/adapters/nuxt/` (useHead composable, server routes, Vue `<JsonLd>` component)
- [ ] Create Astro adapter in `packages/adapters/astro/` (API endpoints, Astro `<JsonLd>` component, integration)
- [ ] Create Remix adapter in `packages/adapters/remix/` (meta function helper, resource routes, React `<JsonLd>` component)
- [ ] Create Express adapter in `packages/adapters/express/` (middleware that serves robots.txt, sitemap, feeds, OG images)
- [ ] Each adapter wraps core generators into framework-native patterns
- [ ] Write integration tests for each adapter

### Task 12: Dashboard and SERP Preview

- [ ] Build standalone dashboard as SPA in `packages/dashboard/`
- [ ] SEO score overview page (0-100 with category breakdown)
- [ ] Core Web Vitals page with trend charts
- [ ] Internal linking visualization
- [ ] SERP preview page (Google, Facebook, Twitter/X with character warnings)
- [ ] Use Recharts for charts and Tailwind CSS for styling
- [ ] Export as embeddable component and standalone server
- [ ] Write tests for dashboard rendering

### Task 13: SEO Audit CLI

- [ ] Create CLI entry point in `packages/cli/` with Commander.js
- [ ] Implement `npx seo-toolkit audit <url>` — runs full audit against any URL
- [ ] Check: meta tags, OG tags, canonical URLs, structured data, headings, images, links, robots.txt
- [ ] Category scores: Metadata, Structured Data, Performance, Content, Crawlability
- [ ] Implement `npx seo-toolkit check-links <url>` — broken link checker
- [ ] Implement `npx seo-toolkit check-images <url>` — alt text auditor
- [ ] Score site 0-100 with prioritized recommendations (critical, warning, info)
- [ ] Output results as terminal table and optional JSON/HTML report
- [ ] Write tests for scoring logic

## Tech Stack

- TypeScript
- Node.js 18+
- Turborepo (monorepo management)
- Zod (config validation)
- Satori (OG image generation)
- web-vitals (Core Web Vitals)
- Commander.js (CLI)
- Cheerio (HTML parsing for audits)
- xml2js (XML generation)
- feed (RSS/Atom generation)
- Recharts (dashboard charts)
- Tailwind CSS (dashboard styling)
- Vitest (testing)

### Framework Adapters Support

- Next.js 14+ (App Router)
- Nuxt 3+
- Astro 4+
- Remix 2+
- Express 4+

## Files to Create

- `seo.config.ts`
- `packages/core/src/index.ts`
- `packages/core/src/metadata.ts`
- `packages/core/src/structured-data.ts`
- `packages/core/src/sitemap.ts`
- `packages/core/src/feed.ts`
- `packages/core/src/robots.ts`
- `packages/core/src/redirects.ts`
- `packages/core/src/og-image.ts`
- `packages/core/src/vitals.ts`
- `packages/core/src/image-audit.ts`
- `packages/core/src/link-analyzer.ts`
- `packages/core/src/heading-validator.ts`
- `packages/core/src/config.ts`
- `packages/core/package.json`
- `packages/cli/src/index.ts`
- `packages/cli/src/audit.ts`
- `packages/cli/src/check-links.ts`
- `packages/cli/src/check-images.ts`
- `packages/cli/package.json`
- `packages/adapters/nextjs/src/index.ts`
- `packages/adapters/nextjs/src/metadata.ts`
- `packages/adapters/nextjs/src/routes.ts`
- `packages/adapters/nextjs/src/components.tsx`
- `packages/adapters/nextjs/src/middleware.ts`
- `packages/adapters/nextjs/package.json`
- `packages/adapters/nuxt/src/index.ts`
- `packages/adapters/nuxt/src/module.ts`
- `packages/adapters/nuxt/src/composables.ts`
- `packages/adapters/nuxt/package.json`
- `packages/adapters/astro/src/index.ts`
- `packages/adapters/astro/src/integration.ts`
- `packages/adapters/astro/src/components.ts`
- `packages/adapters/astro/package.json`
- `packages/adapters/remix/src/index.ts`
- `packages/adapters/remix/src/routes.ts`
- `packages/adapters/remix/src/meta.ts`
- `packages/adapters/remix/package.json`
- `packages/adapters/express/src/index.ts`
- `packages/adapters/express/src/middleware.ts`
- `packages/adapters/express/package.json`
- `packages/dashboard/src/App.tsx`
- `packages/dashboard/src/pages/overview.tsx`
- `packages/dashboard/src/pages/vitals.tsx`
- `packages/dashboard/src/pages/links.tsx`
- `packages/dashboard/src/pages/preview.tsx`
- `packages/dashboard/package.json`
- `tests/core/metadata.test.ts`
- `tests/core/structured-data.test.ts`
- `tests/core/sitemap.test.ts`
- `tests/core/robots.test.ts`
- `tests/core/vitals.test.ts`
- `tests/core/link-analyzer.test.ts`
- `tests/core/heading-validator.test.ts`
- `tests/core/image-audit.test.ts`
- `tests/cli/audit.test.ts`
- `tests/adapters/nextjs.test.ts`
- `tests/adapters/express.test.ts`
- `turbo.json`
- `package.json`
- `.env.example`

## Configuration

### Environment Variables

- `SITE_URL` — Canonical site URL (e.g., `https://example.com`)
- `SITE_NAME` — Site name for metadata and structured data
- `SITE_DESCRIPTION` — Default meta description
- `SITE_LOCALE` — Default locale (e.g., `en_US`)
- `TWITTER_HANDLE` — Twitter/X handle for card attribution (e.g., `@mysite`)
- `GA_MEASUREMENT_ID` — (Optional) Google Analytics ID for vitals reporting

### seo.config.ts Example

```typescript
import { defineSEOConfig } from '@seo-toolkit/core';

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
      sameAs: [
        'https://twitter.com/mycompany',
        'https://linkedin.com/company/mycompany',
        'https://github.com/mycompany',
      ],
    },
  },
  sitemap: {
    exclude: ['/admin/*', '/api/*'],
    priorities: {
      '/': 1.0,
      '/products/*': 0.9,
      '/blog/*': 0.7,
    },
  },
  redirects: [
    { source: '/old-page', destination: '/new-page', permanent: true },
  ],
});
```

### Framework Integration Examples

```typescript
// Next.js — app/layout.tsx
import { createMetadata } from '@seo-toolkit/nextjs';
export const generateMetadata = createMetadata({ title: 'Home' });

// Nuxt — nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@seo-toolkit/nuxt'],
});

// Express
import { seoMiddleware } from '@seo-toolkit/express';
app.use(seoMiddleware()); // serves /robots.txt, /sitemap.xml, /feed.xml

// Astro — astro.config.mjs
import seoToolkit from '@seo-toolkit/astro';
export default defineConfig({ integrations: [seoToolkit()] });
```

## Usage

1. Install: `npm install @seo-toolkit/core @seo-toolkit/<framework>`
2. Create `seo.config.ts` in your project root
3. Wire framework adapter into your routes (see examples above)
4. Run `npx seo-toolkit audit https://yoursite.com` for a full SEO health check
5. Visit `/admin/seo` for the audit dashboard (optional)

## Notes

- The OG image generator uses Satori (same engine as Vercel's `@vercel/og`) and works in any Node.js runtime
- Core Web Vitals thresholds follow Google's 2024+ standards: LCP < 2.5s, CLS < 0.1, INP < 200ms
- The internal link analyzer crawls pages at build time or on-demand — it does not run in production
- For multi-language sites, configure `hreflang` mappings in `seo.config.ts`
- Structured data is validated against schema.org specifications
- The core package has zero framework dependencies — adapters are optional
- Requires Node.js 18+
