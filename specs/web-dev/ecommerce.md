# E-Commerce Platform

Build a full-featured e-commerce platform with product management, shopping cart, and checkout.

## Overview

A complete e-commerce solution with product catalog, category management, shopping cart, user accounts, order processing, and payment integration. Includes an admin dashboard for managing products, orders, and customers. Built for scalability and performance.

## Features

- Product catalog with categories and filters
- Advanced search with Algolia/Meilisearch
- Shopping cart with persistence
- User authentication and profiles
- Wishlist functionality
- Stripe payment integration
- Order management and tracking
- Admin dashboard
- Inventory management
- Email notifications
- Reviews and ratings
- SEO optimization

## Tasks

### Task 1: Project Setup
- [ ] Initialize Next.js 14 project
- [ ] Configure Tailwind CSS
- [ ] Set up Prisma with PostgreSQL
- [ ] Configure environment variables
- [ ] Create folder structure

### Task 2: Database Schema
- [ ] Create Product model
- [ ] Create Category model
- [ ] Create User and Address models
- [ ] Create Order and OrderItem models
- [ ] Create Cart and CartItem models
- [ ] Create Review model
- [ ] Set up migrations and seeds

### Task 3: Product Catalog
- [ ] Create product listing page
- [ ] Build product detail page
- [ ] Implement category navigation
- [ ] Add product filtering (price, category, attributes)
- [ ] Implement sorting options
- [ ] Add pagination

### Task 4: Search
- [ ] Set up search service (Meilisearch)
- [ ] Index products
- [ ] Create search UI with autocomplete
- [ ] Add search results page
- [ ] Implement faceted search

### Task 5: Shopping Cart
- [ ] Create cart context/state
- [ ] Build cart sidebar/page
- [ ] Add to cart functionality
- [ ] Update quantity
- [ ] Remove items
- [ ] Persist cart for logged-in users

### Task 6: User Authentication
- [ ] Implement registration
- [ ] Create login flow
- [ ] Build user profile page
- [ ] Add address management
- [ ] Create order history page
- [ ] Implement wishlist

### Task 7: Checkout Flow
- [ ] Create checkout page
- [ ] Build shipping form
- [ ] Integrate Stripe Elements
- [ ] Handle payment processing
- [ ] Create order confirmation page
- [ ] Send confirmation email

### Task 8: Order Management
- [ ] Create order service
- [ ] Build order status tracking
- [ ] Implement inventory updates
- [ ] Add order webhooks

### Task 9: Admin Dashboard
- [ ] Create admin layout
- [ ] Build product management (CRUD)
- [ ] Add category management
- [ ] Create order management
- [ ] Build customer management
- [ ] Add sales analytics

### Task 10: Reviews & Ratings
- [ ] Create review submission form
- [ ] Display product reviews
- [ ] Calculate average ratings
- [ ] Add review moderation for admin

### Task 11: Polish & Optimization
- [ ] Optimize images with next/image
- [ ] Add loading skeletons
- [ ] Implement SEO (meta tags, structured data)
- [ ] Add sitemap generation
- [ ] Performance optimization

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Stripe
- Meilisearch
- NextAuth.js
- React Query
- Zustand (cart state)
- Resend (email)

## Files to Create

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/products/page.tsx`
- `src/app/products/[slug]/page.tsx`
- `src/app/categories/[slug]/page.tsx`
- `src/app/cart/page.tsx`
- `src/app/checkout/page.tsx`
- `src/app/account/page.tsx`
- `src/app/account/orders/page.tsx`
- `src/app/admin/page.tsx`
- `src/app/admin/products/page.tsx`
- `src/app/admin/orders/page.tsx`
- `src/app/api/checkout/route.ts`
- `src/app/api/webhooks/stripe/route.ts`
- `src/components/product-card.tsx`
- `src/components/product-grid.tsx`
- `src/components/cart-sidebar.tsx`
- `src/components/checkout-form.tsx`
- `src/components/search-bar.tsx`
- `src/lib/prisma.ts`
- `src/lib/stripe.ts`
- `src/lib/search.ts`
- `src/stores/cart.ts`
- `prisma/schema.prisma`
- `.env.example`
