# Web3 dApp

Build a modern Web3 decentralized application with wallet connectivity and smart contract interaction.

## Overview

A full-stack Web3 dApp with modern tooling. Features wallet connection via RainbowKit, contract interactions with wagmi, and a clean UI. Includes a simple smart contract for demonstration and can be extended for any use case.

## Features

- Multi-wallet support (MetaMask, WalletConnect, Coinbase)
- Network switching
- Contract read/write operations
- Transaction status tracking
- ENS resolution
- Balance display
- Event listening
- Mobile responsive
- Dark mode
- TypeScript throughout

## Tasks

### Task 1: Project Setup
- [ ] Initialize Next.js 14 project
- [ ] Install wagmi, viem, RainbowKit
- [ ] Configure Tailwind CSS
- [ ] Set up environment variables
- [ ] Create folder structure

### Task 2: Wallet Connection
- [ ] Configure RainbowKit provider
- [ ] Set up wagmi config
- [ ] Add supported chains
- [ ] Create connect button component
- [ ] Display connected address

### Task 3: Smart Contract
- [ ] Create simple storage contract (Solidity)
- [ ] Add read functions
- [ ] Add write functions
- [ ] Add events
- [ ] Deploy to testnet

### Task 4: Contract Integration
- [ ] Generate contract types
- [ ] Create contract hooks (useReadContract, useWriteContract)
- [ ] Build contract interaction UI
- [ ] Handle transaction states
- [ ] Display transaction receipts

### Task 5: User Dashboard
- [ ] Display wallet balance
- [ ] Show ENS name if available
- [ ] List recent transactions
- [ ] Display connected network
- [ ] Add network switch button

### Task 6: Event Handling
- [ ] Set up event listeners
- [ ] Display live events
- [ ] Create notification system
- [ ] Add event history

### Task 7: UI Components
- [ ] Create transaction button component
- [ ] Build loading states
- [ ] Add error handling UI
- [ ] Create toast notifications
- [ ] Build network badge

### Task 8: Testing
- [ ] Test contract locally with Hardhat
- [ ] Test wallet connection flows
- [ ] Test transaction handling
- [ ] Test error scenarios

### Task 9: Polish
- [ ] Add dark mode
- [ ] Optimize for mobile
- [ ] Add loading skeletons
- [ ] Improve error messages
- [ ] Add analytics (optional)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- wagmi v2
- viem
- RainbowKit
- Hardhat
- Solidity

## Files to Create

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/providers.tsx`
- `src/components/connect-button.tsx`
- `src/components/wallet-info.tsx`
- `src/components/contract-interaction.tsx`
- `src/components/transaction-button.tsx`
- `src/components/network-badge.tsx`
- `src/lib/wagmi.ts`
- `src/lib/contracts.ts`
- `src/hooks/useContract.ts`
- `contracts/SimpleStorage.sol`
- `hardhat.config.ts`
- `scripts/deploy.ts`
- `.env.example`
- `tailwind.config.ts`
