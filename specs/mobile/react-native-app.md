# React Native App

Build a cross-platform mobile application with React Native and Expo.

## Overview

A production-ready React Native application using Expo for simplified development. Features navigation, state management, API integration, authentication, push notifications, and offline support. Designed to work seamlessly on both iOS and Android.

## Features

- Expo managed workflow
- Tab and stack navigation
- State management with Zustand
- API integration with React Query
- Authentication flow
- Push notifications
- Offline support with caching
- Dark mode
- Biometric authentication
- Image picker and camera
- Form handling with validation
- Splash screen and app icon

## Tasks

### Task 1: Project Setup
- [ ] Initialize Expo project with TypeScript
- [ ] Configure ESLint and Prettier
- [ ] Set up folder structure
- [ ] Configure path aliases
- [ ] Install core dependencies

### Task 2: Navigation
- [ ] Install React Navigation
- [ ] Create bottom tab navigator
- [ ] Add stack navigators for each tab
- [ ] Set up authentication navigator
- [ ] Configure deep linking

### Task 3: Authentication
- [ ] Create login screen
- [ ] Create registration screen
- [ ] Build forgot password screen
- [ ] Implement secure token storage
- [ ] Add biometric authentication
- [ ] Create auth context/store

### Task 4: State Management
- [ ] Set up Zustand stores
- [ ] Create auth store
- [ ] Create user preferences store
- [ ] Implement persistent storage

### Task 5: API Layer
- [ ] Configure React Query
- [ ] Create API client with axios
- [ ] Add request/response interceptors
- [ ] Handle token refresh
- [ ] Create API hooks

### Task 6: Core Screens
- [ ] Create home screen
- [ ] Build profile screen
- [ ] Create settings screen
- [ ] Add search screen
- [ ] Build detail screen

### Task 7: UI Components
- [ ] Create button component
- [ ] Build input component
- [ ] Create card component
- [ ] Add loading indicators
- [ ] Build empty states
- [ ] Create error boundaries

### Task 8: Push Notifications
- [ ] Set up Expo notifications
- [ ] Request permissions
- [ ] Handle notification tokens
- [ ] Configure notification handlers
- [ ] Add notification preferences

### Task 9: Offline Support
- [ ] Configure React Query caching
- [ ] Add network status detection
- [ ] Implement offline queue
- [ ] Handle sync on reconnect

### Task 10: Media Features
- [ ] Add image picker
- [ ] Configure camera access
- [ ] Implement image upload
- [ ] Add image caching

### Task 11: Polish
- [ ] Configure splash screen
- [ ] Set up app icons
- [ ] Add haptic feedback
- [ ] Implement pull-to-refresh
- [ ] Add skeleton loading
- [ ] Configure dark mode

### Task 12: Testing & Build
- [ ] Set up Jest for testing
- [ ] Write component tests
- [ ] Configure EAS Build
- [ ] Create preview builds
- [ ] Document submission process

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Zustand
- React Query
- Axios
- Expo Notifications
- Expo SecureStore
- Expo Image Picker

## Files to Create

- `App.tsx`
- `src/navigation/index.tsx`
- `src/navigation/tabs.tsx`
- `src/navigation/auth.tsx`
- `src/screens/home/index.tsx`
- `src/screens/profile/index.tsx`
- `src/screens/settings/index.tsx`
- `src/screens/auth/login.tsx`
- `src/screens/auth/register.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/card.tsx`
- `src/stores/auth.ts`
- `src/stores/preferences.ts`
- `src/lib/api.ts`
- `src/hooks/useAuth.ts`
- `src/hooks/useApi.ts`
- `src/utils/storage.ts`
- `app.json`
- `eas.json`
