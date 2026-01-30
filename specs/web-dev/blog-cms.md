# Blog with CMS

Build a blog platform with a built-in content management system.

## Overview

A modern blog platform with a headless CMS approach. Features a rich text editor, media management, categories and tags, SEO tools, and a clean reading experience. Includes an admin dashboard for content management and analytics.

## Features

- Rich text editor (Tiptap/Editor.js)
- Media library with image optimization
- Categories and tags
- Author profiles
- Draft/publish workflow
- Scheduled publishing
- SEO meta management
- Reading time calculation
- Social sharing
- Comments system
- Newsletter integration
- RSS feed
- Sitemap generation

## Tasks

### Task 1: Project Setup
- [ ] Initialize Next.js 14 project
- [ ] Configure Tailwind CSS with typography plugin
- [ ] Set up Prisma with PostgreSQL
- [ ] Configure environment variables
- [ ] Install editor dependencies

### Task 2: Database Schema
- [ ] Create Post model (title, slug, content, excerpt, status)
- [ ] Create Category model
- [ ] Create Tag model
- [ ] Create User/Author model
- [ ] Create Comment model
- [ ] Create Media model
- [ ] Set up relationships and migrations

### Task 3: Public Blog Pages
- [ ] Create blog homepage with post list
- [ ] Build individual post page
- [ ] Create category archive page
- [ ] Create tag archive page
- [ ] Build author profile page
- [ ] Add search functionality

### Task 4: Rich Text Editor
- [ ] Set up Tiptap editor
- [ ] Configure text formatting (bold, italic, headings)
- [ ] Add code blocks with syntax highlighting
- [ ] Enable image embedding
- [ ] Add link insertion
- [ ] Create custom extensions if needed

### Task 5: Media Management
- [ ] Set up file upload (S3 or local)
- [ ] Create media library UI
- [ ] Implement image optimization
- [ ] Add drag-and-drop upload
- [ ] Create image picker for editor

### Task 6: Admin Dashboard
- [ ] Create admin layout
- [ ] Build post list with filters
- [ ] Create post editor page
- [ ] Add category management
- [ ] Add tag management
- [ ] Build media library page

### Task 7: Publishing Workflow
- [ ] Implement draft/published states
- [ ] Add scheduled publishing
- [ ] Create preview functionality
- [ ] Add revision history
- [ ] Implement autosave

### Task 8: SEO & Meta
- [ ] Add meta fields to posts
- [ ] Generate dynamic OG images
- [ ] Create sitemap.xml
- [ ] Add RSS feed
- [ ] Implement structured data (JSON-LD)

### Task 9: Comments System
- [ ] Create comment form
- [ ] Display comments on posts
- [ ] Add comment moderation
- [ ] Implement nested replies
- [ ] Add spam protection

### Task 10: Analytics & Newsletter
- [ ] Track post views
- [ ] Create analytics dashboard
- [ ] Integrate newsletter signup
- [ ] Add email notifications for comments

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Tiptap (editor)
- NextAuth.js
- AWS S3 or Cloudflare R2
- React Query
- Resend (email)

## Files to Create

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/category/[slug]/page.tsx`
- `src/app/tag/[slug]/page.tsx`
- `src/app/author/[slug]/page.tsx`
- `src/app/admin/page.tsx`
- `src/app/admin/posts/page.tsx`
- `src/app/admin/posts/[id]/page.tsx`
- `src/app/admin/posts/new/page.tsx`
- `src/app/admin/media/page.tsx`
- `src/app/api/posts/route.ts`
- `src/app/api/upload/route.ts`
- `src/app/rss.xml/route.ts`
- `src/app/sitemap.xml/route.ts`
- `src/components/editor/index.tsx`
- `src/components/editor/toolbar.tsx`
- `src/components/post-card.tsx`
- `src/components/comments.tsx`
- `src/components/share-buttons.tsx`
- `src/lib/prisma.ts`
- `src/lib/storage.ts`
- `prisma/schema.prisma`
- `.env.example`
