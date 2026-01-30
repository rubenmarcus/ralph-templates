# Next.js SaaS Starter

Build a full-featured SaaS application with authentication, subscription billing, and a dashboard.

## Overview

A production-ready SaaS boilerplate using Next.js 14+ App Router. Includes user authentication with NextAuth.js, Stripe subscription billing, a user dashboard, and admin panel. Designed for rapid SaaS development with best practices baked in.

## Features

- Next.js 14+ App Router with TypeScript
- Authentication (NextAuth.js) with email/password and OAuth
- Stripe subscription billing with multiple tiers
- User dashboard with analytics
- Admin panel for user management
- Dark mode support
- Responsive design with Tailwind CSS
- Database with Prisma ORM
- Email notifications
- API rate limiting

## Tasks

### Task 1: Project Setup
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up ESLint and Prettier
- [ ] Configure path aliases
- [ ] Create folder structure

### Task 2: Database Setup
- [ ] Install and configure Prisma
- [ ] Create User, Account, Session models
- [ ] Create Subscription and Plan models
- [ ] Set up database migrations
- [ ] Add seed data

### Task 3: Authentication
- [ ] Install NextAuth.js
- [ ] Configure authentication providers (credentials, Google, GitHub)
- [ ] Create login page
- [ ] Create registration page
- [ ] Create forgot password flow
- [ ] Add protected route middleware

### Task 4: Stripe Integration
- [ ] Set up Stripe SDK
- [ ] Create pricing plans
- [ ] Implement checkout session
- [ ] Handle webhooks for subscription events
- [ ] Create billing portal integration
- [ ] Add subscription status to user model

### Task 5: Dashboard
- [ ] Create dashboard layout
- [ ] Build overview page with stats
- [ ] Create settings page
- [ ] Build billing management page
- [ ] Add usage analytics charts

### Task 6: Admin Panel
- [ ] Create admin layout
- [ ] Build user management table
- [ ] Add subscription management
- [ ] Create analytics dashboard

### Task 7: UI Components
- [ ] Build navigation component
- [ ] Create reusable card components
- [ ] Build form components
- [ ] Create modal components
- [ ] Add toast notifications

### Task 8: API Routes
- [ ] Create user API endpoints
- [ ] Build subscription API endpoints
- [ ] Add webhook handlers
- [ ] Implement rate limiting

### Task 9: Testing & Polish
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add SEO meta tags
- [ ] Create 404 and error pages
- [ ] Test all user flows

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- NextAuth.js
- Prisma
- PostgreSQL
- Stripe
- React Query
- Zod (validation)
- Resend (email)

## Files to Create

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/(auth)/login/page.tsx`
- `src/app/(auth)/register/page.tsx`
- `src/app/(dashboard)/dashboard/page.tsx`
- `src/app/(dashboard)/dashboard/settings/page.tsx`
- `src/app/(dashboard)/dashboard/billing/page.tsx`
- `src/app/api/auth/[...nextauth]/route.ts`
- `src/app/api/webhooks/stripe/route.ts`
- `src/lib/auth.ts`
- `src/lib/stripe.ts`
- `src/lib/prisma.ts`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/input.tsx`
- `src/components/navigation.tsx`
- `src/components/dashboard-nav.tsx`
- `prisma/schema.prisma`
- `.env.example`
- `tailwind.config.ts`
