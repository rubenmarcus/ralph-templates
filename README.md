# Ralph Templates

A collection of markdown spec files that [ralph-starter](https://github.com/rubenmarcus/ralph-starter) can use as input to generate full projects autonomously.

> **Note**: This repo contains **spec files only**, not full projects. For built project demos, see [ralph-showcase](https://github.com/rubenmarcus/ralph-showcase).

## What are Spec Files?

Spec files are structured markdown documents that describe a project to build. They include:

- **Overview** - What the project does
- **Features** - Key functionality to implement
- **Tasks** - Step-by-step implementation checklist
- **Tech Stack** - Technologies to use
- **Files to Create** - Expected file structure

Ralph reads these specs and builds the entire project autonomously.

## Available Templates

### Web Development
| Template | Description | Difficulty |
|----------|-------------|------------|
| [nextjs-saas](specs/web-dev/nextjs-saas.md) | Next.js SaaS with auth, billing, dashboard | Intermediate |
| [landing-page](specs/web-dev/landing-page.md) | Modern landing page with animations | Beginner |
| [express-api](specs/web-dev/express-api.md) | RESTful API with Express.js | Beginner |
| [graphql-api](specs/web-dev/graphql-api.md) | GraphQL API with Apollo Server | Intermediate |
| [ecommerce](specs/web-dev/ecommerce.md) | Full e-commerce platform | Advanced |
| [blog-cms](specs/web-dev/blog-cms.md) | Blog with CMS capabilities | Intermediate |

### Blockchain
| Template | Description | Difficulty |
|----------|-------------|------------|
| [erc20-token](specs/blockchain/erc20-token.md) | ERC-20 token with tests | Beginner |
| [nft-collection](specs/blockchain/nft-collection.md) | NFT collection with minting | Intermediate |
| [defi-staking](specs/blockchain/defi-staking.md) | DeFi staking platform | Advanced |
| [web3-dapp](specs/blockchain/web3-dapp.md) | Web3 dApp with wallet connect | Intermediate |

### DevOps
| Template | Description | Difficulty |
|----------|-------------|------------|
| [docker-compose](specs/devops/docker-compose.md) | Multi-container Docker setup | Beginner |
| [kubernetes](specs/devops/kubernetes.md) | Kubernetes deployment configs | Intermediate |
| [github-actions](specs/devops/github-actions.md) | CI/CD with GitHub Actions | Beginner |
| [terraform](specs/devops/terraform.md) | Infrastructure as Code | Intermediate |

### Mobile
| Template | Description | Difficulty |
|----------|-------------|------------|
| [react-native-app](specs/mobile/react-native-app.md) | Cross-platform mobile app | Intermediate |

### SEO & AEO
| Template | Description | Difficulty |
|----------|-------------|------------|
| [aeo-toolkit](specs/seo/aeo-toolkit.md) | Answer Engine Optimization with llms.txt, AI crawlers, citations | Advanced |
| [seo-toolkit](specs/seo/seo-toolkit.md) | Technical SEO with metadata, sitemaps, Core Web Vitals | Intermediate |

### Tools
| Template | Description | Difficulty |
|----------|-------------|------------|
| [cli-tool](specs/tools/cli-tool.md) | Node.js CLI application | Beginner |
| [chrome-extension](specs/tools/chrome-extension.md) | Chrome browser extension | Intermediate |
| [vscode-extension](specs/tools/vscode-extension.md) | VS Code extension | Intermediate |

## Usage

```bash
# List available specs
ralph-starter template list

# Use a spec to build a project
ralph-starter template use nextjs-saas

# Preview spec content before using
ralph-starter template preview landing-page
```

## Spec File Format

Each spec follows a standard markdown structure:

```markdown
# Project Name

Brief description of what the project does.

## Overview
Detailed explanation of the project purpose and goals.

## Features
- Feature 1
- Feature 2
- Feature 3

## Tasks

### Task 1: Setup
- [ ] Subtask 1
- [ ] Subtask 2

### Task 2: Core Implementation
- [ ] Subtask 1
- [ ] Subtask 2

## Tech Stack
- Technology 1
- Technology 2

## Files to Create
- `src/index.ts`
- `src/components/App.tsx`
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new specs.

## License

MIT
