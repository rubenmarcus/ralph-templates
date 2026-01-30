# Spec File Format

This document defines the standard format for ralph template spec files. All specs should follow this structure for consistency and compatibility with ralph tooling.

## File Structure

Spec files are standard markdown documents (`.md`) with a specific section structure. The format is inspired by GitHub issues and provides a clear, scannable layout.

## Required Sections

### 1. Title (H1)

The document must start with an H1 heading containing the project/template name.

```markdown
# Project Name
```

A brief one-line description should immediately follow the title.

```markdown
# Next.js SaaS Starter

Build a full-featured SaaS application with authentication, subscription billing, and a dashboard.
```

### 2. Overview

A detailed description of what the template creates. Should include:
- What the project does
- Key technologies used
- Target use case
- Any important architectural decisions

```markdown
## Overview

A production-ready SaaS boilerplate using Next.js 14+ App Router. Includes user authentication with NextAuth.js, Stripe subscription billing, a user dashboard, and admin panel. Designed for rapid SaaS development with best practices baked in.
```

### 3. Features

A bulleted list of the main features/capabilities included in the template.

```markdown
## Features

- Next.js 14+ App Router with TypeScript
- Authentication (NextAuth.js) with email/password and OAuth
- Stripe subscription billing with multiple tiers
- User dashboard with analytics
- Dark mode support
```

### 4. Tasks

The main work breakdown structure. Each task should be a logical grouping of related subtasks. ralph uses these checkboxes to track progress.

**Format:**
- Use `### Task N: Task Name` for task headings
- Use `- [ ]` for incomplete subtasks (ralph will check these as it works)
- Use `- [x]` for completed subtasks
- Tasks should be ordered logically (setup first, then core features, then polish)

```markdown
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
- [ ] Set up database migrations
```

**Task Guidelines:**
- Keep subtasks atomic and actionable
- Each subtask should be completable in one step
- Order subtasks within a task by dependency
- Aim for 3-8 subtasks per task
- Aim for 5-15 tasks total per spec

### 5. Tech Stack

A list of the main technologies, frameworks, and libraries used.

```markdown
## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
```

### 6. Files to Create

A list of files that ralph should create. This helps ralph understand the target project structure. Can also include "Files to Modify" if the spec modifies existing files.

```markdown
## Files to Create

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/(auth)/login/page.tsx`
- `src/lib/auth.ts`
- `prisma/schema.prisma`
- `.env.example`
```

For modifications to existing files:

```markdown
## Files to Modify

- `package.json` - Add dependencies
- `tsconfig.json` - Configure paths
```

## Optional Sections

These sections can be added when relevant:

### Usage

Instructions for how to use the template after generation.

```markdown
## Usage

1. Copy `.env.example` to `.env` and fill in values
2. Run `npm install`
3. Run `npx prisma db push`
4. Run `npm run dev`
```

### Configuration

Details about configuration options and environment variables.

```markdown
## Configuration

### Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Random string for session encryption
- `STRIPE_SECRET_KEY` - Stripe API secret key
```

### Notes

Any additional context, warnings, or important information.

```markdown
## Notes

- Requires Node.js 18+
- Stripe test mode is used by default
- Run migrations before starting the app
```

## Example Spec

See any spec in the `/specs` directory for complete examples. The `/specs/web-dev/nextjs-saas.md` spec is a good reference for a comprehensive template.

## Validation

Specs are validated against this format. Required elements:
- H1 title
- `## Overview` section
- `## Features` section
- `## Tasks` section with at least one task containing checkboxes
- `## Tech Stack` section
- `## Files to Create` or `## Files to Modify` section

## Task Checkbox Tracking

ralph tracks progress by checking off task checkboxes:

```markdown
### Task 1: Project Setup
- [x] Initialize project           <- Completed
- [x] Configure TypeScript         <- Completed
- [ ] Set up linting               <- In progress or pending
- [ ] Create folder structure      <- Pending
```

When ralph completes a subtask, it updates the spec file to mark it as done. This allows:
- Progress persistence across sessions
- Visual progress tracking
- Easy resumption of partially completed specs
