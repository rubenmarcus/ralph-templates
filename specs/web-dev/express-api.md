# Express.js REST API

Build a production-ready RESTful API with Express.js.

## Overview

A well-structured Express.js API with authentication, validation, error handling, and documentation. Follows REST best practices with proper HTTP methods, status codes, and resource naming. Includes JWT authentication, rate limiting, and database integration.

## Features

- RESTful API design
- JWT authentication
- Request validation with Zod
- Error handling middleware
- Rate limiting
- API documentation with Swagger
- Database with Prisma
- Logging with Winston
- Unit and integration tests
- Docker support

## Tasks

### Task 1: Project Setup
- [ ] Initialize Node.js project with TypeScript
- [ ] Configure ESLint and Prettier
- [ ] Set up folder structure (routes, controllers, services, middleware)
- [ ] Configure environment variables
- [ ] Set up path aliases

### Task 2: Express Configuration
- [ ] Create Express app
- [ ] Configure CORS
- [ ] Set up body parsing
- [ ] Add helmet for security headers
- [ ] Configure compression

### Task 3: Database Setup
- [ ] Install and configure Prisma
- [ ] Create User model
- [ ] Create example resource models (Post, Comment)
- [ ] Set up migrations
- [ ] Add seed script

### Task 4: Authentication
- [ ] Create auth routes (register, login, refresh)
- [ ] Implement JWT token generation
- [ ] Build auth middleware
- [ ] Add password hashing with bcrypt
- [ ] Create protected route examples

### Task 5: CRUD Routes
- [ ] Create user routes
- [ ] Build post routes (CRUD)
- [ ] Add comment routes
- [ ] Implement pagination
- [ ] Add filtering and sorting

### Task 6: Validation & Error Handling
- [ ] Create validation middleware
- [ ] Build Zod schemas for requests
- [ ] Create error handling middleware
- [ ] Define custom error classes
- [ ] Add request logging

### Task 7: API Documentation
- [ ] Install Swagger/OpenAPI
- [ ] Document all endpoints
- [ ] Add request/response examples
- [ ] Create Swagger UI route

### Task 8: Rate Limiting & Security
- [ ] Implement rate limiting
- [ ] Add input sanitization
- [ ] Configure secure headers
- [ ] Add request ID tracking

### Task 9: Testing
- [ ] Set up Jest
- [ ] Write unit tests for services
- [ ] Write integration tests for routes
- [ ] Add test database configuration

### Task 10: Docker & Deployment
- [ ] Create Dockerfile
- [ ] Add docker-compose.yml
- [ ] Create health check endpoint
- [ ] Add graceful shutdown handling

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma
- PostgreSQL
- JWT
- Zod
- Swagger
- Jest
- Docker

## Files to Create

- `src/index.ts`
- `src/app.ts`
- `src/routes/index.ts`
- `src/routes/auth.routes.ts`
- `src/routes/user.routes.ts`
- `src/routes/post.routes.ts`
- `src/controllers/auth.controller.ts`
- `src/controllers/user.controller.ts`
- `src/controllers/post.controller.ts`
- `src/services/auth.service.ts`
- `src/services/user.service.ts`
- `src/services/post.service.ts`
- `src/middleware/auth.middleware.ts`
- `src/middleware/validate.middleware.ts`
- `src/middleware/error.middleware.ts`
- `src/schemas/auth.schema.ts`
- `src/schemas/user.schema.ts`
- `src/lib/prisma.ts`
- `src/lib/jwt.ts`
- `src/utils/logger.ts`
- `prisma/schema.prisma`
- `Dockerfile`
- `docker-compose.yml`
- `.env.example`
