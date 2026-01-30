# GraphQL API with Apollo Server

Build a production-ready GraphQL API with Apollo Server.

## Overview

A type-safe GraphQL API using Apollo Server with TypeScript. Features schema-first design, authentication, data loaders for N+1 query prevention, subscriptions for real-time updates, and comprehensive error handling.

## Features

- Apollo Server 4 with Express
- Schema-first development
- TypeScript code generation
- JWT authentication
- DataLoader for batching
- Real-time subscriptions
- Input validation
- Custom directives
- Query complexity analysis
- Prisma database integration

## Tasks

### Task 1: Project Setup
- [ ] Initialize Node.js project with TypeScript
- [ ] Install Apollo Server and dependencies
- [ ] Configure code generation
- [ ] Set up folder structure
- [ ] Configure environment variables

### Task 2: Schema Design
- [ ] Create base schema with Query and Mutation types
- [ ] Define User type and operations
- [ ] Define Post type and operations
- [ ] Define Comment type and operations
- [ ] Add input types and enums

### Task 3: Database Setup
- [ ] Install and configure Prisma
- [ ] Create database models
- [ ] Set up migrations
- [ ] Add seed data
- [ ] Create Prisma client instance

### Task 4: Resolvers
- [ ] Create User resolvers
- [ ] Create Post resolvers
- [ ] Create Comment resolvers
- [ ] Add relationship resolvers
- [ ] Implement pagination (cursor-based)

### Task 5: Authentication
- [ ] Create auth schema (login, register mutations)
- [ ] Implement JWT token handling
- [ ] Build auth context
- [ ] Create auth directive
- [ ] Add role-based authorization

### Task 6: DataLoaders
- [ ] Create user data loader
- [ ] Create post data loader
- [ ] Integrate loaders with context
- [ ] Prevent N+1 queries

### Task 7: Subscriptions
- [ ] Set up WebSocket server
- [ ] Create subscription types
- [ ] Implement pub/sub for posts
- [ ] Add real-time comment notifications

### Task 8: Validation & Error Handling
- [ ] Create custom error types
- [ ] Add input validation
- [ ] Implement error formatting
- [ ] Add query complexity limits

### Task 9: Testing
- [ ] Set up testing environment
- [ ] Write resolver unit tests
- [ ] Write integration tests
- [ ] Test subscriptions

### Task 10: Documentation & Tooling
- [ ] Enable GraphQL Playground
- [ ] Add query examples
- [ ] Document custom directives
- [ ] Create introspection guards for production

## Tech Stack

- Node.js
- Apollo Server 4
- TypeScript
- GraphQL
- Prisma
- PostgreSQL
- GraphQL Code Generator
- DataLoader
- graphql-ws
- Jest

## Files to Create

- `src/index.ts`
- `src/schema/index.ts`
- `src/schema/user.graphql`
- `src/schema/post.graphql`
- `src/schema/comment.graphql`
- `src/resolvers/index.ts`
- `src/resolvers/user.resolver.ts`
- `src/resolvers/post.resolver.ts`
- `src/resolvers/comment.resolver.ts`
- `src/context.ts`
- `src/dataloaders/index.ts`
- `src/dataloaders/user.loader.ts`
- `src/directives/auth.directive.ts`
- `src/lib/prisma.ts`
- `src/lib/jwt.ts`
- `src/lib/pubsub.ts`
- `prisma/schema.prisma`
- `codegen.yml`
- `.env.example`
