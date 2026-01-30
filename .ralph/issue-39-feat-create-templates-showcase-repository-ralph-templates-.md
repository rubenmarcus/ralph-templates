# Issue #39: feat: Create templates showcase repository (ralph-templates)

**Repository:** rubenmarcus/ralph-ideas
**State:** OPEN
**Labels:** ideas, templates, P1

---

# Ralph Templates Repository (Spec Files)

Create a repository to host **spec files** (markdown specs) that ralph-starter can consume to build projects.

> **Note**: This repo contains SPEC FILES only, not full projects. For built project demos, see `ralph-showcase`.

## Overview
A collection of markdown spec files that ralph-starter can use as input to generate full projects autonomously.

## Repository Structure
```
ralph-templates/
├── README.md
├── specs/
│   ├── web-dev/
│   │   ├── nextjs-saas.md
│   │   ├── landing-page.md
│   │   ├── express-api.md
│   │   ├── graphql-api.md
│   │   ├── ecommerce.md
│   │   └── blog-cms.md
│   ├── blockchain/
│   │   ├── erc20-token.md
│   │   ├── nft-collection.md
│   │   ├── defi-staking.md
│   │   └── web3-dapp.md
│   ├── devops/
│   │   ├── docker-compose.md
│   │   ├── kubernetes.md
│   │   ├── github-actions.md
│   │   └── terraform.md
│   ├── mobile/
│   │   └── react-native-app.md
│   └── tools/
│       ├── cli-tool.md
│       ├── chrome-extension.md
│       └── vscode-extension.md
├── templates.json              # Registry of all specs
└── CONTRIBUTING.md
```

## Tasks

### Task 1: Create repository
- [ ] Clone and initialize structure
- [ ] Add README explaining the purpose

### Task 2: Define spec file format
- [ ] Standard markdown structure (like GitHub issues)
- [ ] Required sections: Overview, Features, Tasks, Tech Stack, Usage
- [ ] Task checkboxes for ralph to track progress
- [ ] Files to Create/Modify section

### Task 3: Create registry (templates.json)
- [ ] List all available specs
- [ ] Metadata: name, description, category, tags, difficulty
- [ ] File path to spec

### Task 4: Populate initial specs
- [ ] Copy spec content from GitHub issues rubenmarcus/ralph-ideas#36-#55
- [ ] Organize by category folders
- [ ] Ensure consistent formatting

### Task 5: Add validation
- [ ] Script to validate spec format
- [ ] CI workflow to check new specs
- [ ] Lint markdown files

### Task 6: Integration with ralph-starter
- [ ] `ralph-starter template list` - List available specs
- [ ] `ralph-starter template use <name>` - Fetch and run spec
- [ ] `ralph-starter template preview <name>` - Show spec content
- [ ] Cache specs locally

## templates.json Schema
```json
{
  "version": "1.0.0",
  "specs": [
    {
      "name": "nextjs-saas",
      "description": "Next.js SaaS starter with auth, billing, dashboard",
      "category": "web-dev",
      "tags": ["nextjs", "saas", "typescript", "stripe"],
      "difficulty": "intermediate",
      "file": "specs/web-dev/nextjs-saas.md"
    }
  ]
}
```

## Spec File Format (Example)
```markdown
# Next.js SaaS Starter

Build a full-featured SaaS application.

## Features
- Next.js 14+ App Router
- Authentication (NextAuth.js)
- Stripe billing
- Dashboard

## Tasks

### Task 1: Project setup
- [ ] Initialize Next.js project
- [ ] Configure TypeScript
- [ ] Set up Tailwind CSS

### Task 2: Authentication
- [ ] NextAuth.js setup
- [ ] Email/password login
...

## Tech Stack
- Next.js 14
- TypeScript
- Prisma
- Stripe

## Files to Create
- `src/app/page.tsx`
- `src/lib/auth.ts`
...
```

## Usage
```bash
# List available specs
ralph-starter template list

# Use a spec to build a project
ralph-starter template use nextjs-saas

# Preview spec content
ralph-starter template preview landing-page
```

## Files to Create
- New repository: `rubenmarcus/ralph-templates`
- `src/commands/template.ts` (in ralph-starter)
- `src/templates/registry.ts` (in ralph-starter)
- `src/templates/fetcher.ts` (in ralph-starter)