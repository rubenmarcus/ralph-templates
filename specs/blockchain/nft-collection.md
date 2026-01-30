# NFT Collection

Build an ERC-721 NFT collection with minting, reveal mechanics, and marketplace integration.

## Overview

A feature-rich NFT collection using ERC-721A for gas-efficient batch minting. Includes whitelist functionality, reveal mechanics, royalty support (EIP-2981), and integration with OpenSea. Comes with a minting website frontend.

## Features

- ERC-721A for efficient batch minting
- Whitelist/allowlist with Merkle tree
- Delayed reveal mechanism
- Royalty support (EIP-2981)
- Public and presale minting phases
- Max per wallet limits
- Withdraw functionality
- Metadata and IPFS hosting
- Minting website frontend
- OpenSea integration

## Tasks

### Task 1: Project Setup
- [ ] Initialize Hardhat project with TypeScript
- [ ] Install ERC721A and OpenZeppelin
- [ ] Configure networks
- [ ] Set up environment variables
- [ ] Create folder structure

### Task 2: NFT Contract
- [ ] Create base ERC721A contract
- [ ] Add minting phases (presale, public)
- [ ] Implement Merkle tree whitelist
- [ ] Add max per wallet tracking
- [ ] Implement reveal mechanism
- [ ] Add royalty support (EIP-2981)
- [ ] Create withdraw function
- [ ] Add owner controls (pause, set prices)

### Task 3: Metadata
- [ ] Create metadata JSON structure
- [ ] Generate placeholder metadata for pre-reveal
- [ ] Set up IPFS/Pinata integration
- [ ] Create batch upload script
- [ ] Implement tokenURI logic

### Task 4: Testing
- [ ] Test minting phases
- [ ] Test whitelist verification
- [ ] Test max per wallet limits
- [ ] Test reveal functionality
- [ ] Test royalties
- [ ] Test withdraw
- [ ] Gas optimization tests

### Task 5: Deployment
- [ ] Create deployment script
- [ ] Add Merkle root generation script
- [ ] Create verification script
- [ ] Set up deployment config per network

### Task 6: Minting Website
- [ ] Create Next.js frontend
- [ ] Build wallet connection (RainbowKit)
- [ ] Create minting UI
- [ ] Show collection stats
- [ ] Add whitelist checker
- [ ] Display user's NFTs

### Task 7: OpenSea Integration
- [ ] Set collection metadata
- [ ] Configure royalties
- [ ] Set up storefront
- [ ] Add collection description

## Tech Stack

- Solidity 0.8.x
- Hardhat
- ERC721A
- OpenZeppelin
- Merkle.js
- Next.js
- wagmi
- RainbowKit
- IPFS/Pinata
- TypeScript

## Files to Create

- `contracts/NFTCollection.sol`
- `test/NFTCollection.test.ts`
- `scripts/deploy.ts`
- `scripts/generate-merkle.ts`
- `scripts/upload-metadata.ts`
- `hardhat.config.ts`
- `frontend/src/app/page.tsx`
- `frontend/src/components/mint-button.tsx`
- `frontend/src/components/wallet-connect.tsx`
- `frontend/src/lib/contract.ts`
- `frontend/src/lib/merkle.ts`
- `metadata/placeholder.json`
- `.env.example`
