# ERC-20 Token

Build a standard ERC-20 token with additional features and comprehensive tests.

## Overview

A production-ready ERC-20 token implementation using Solidity and Hardhat. Includes features like minting, burning, pausability, and access control. Comes with comprehensive tests, deployment scripts, and verification for block explorers.

## Features

- Standard ERC-20 implementation
- Minting functionality (owner only)
- Burning functionality
- Pausable transfers
- Access control with roles
- Permit (gasless approvals)
- Comprehensive test suite
- Deployment scripts
- Etherscan verification
- Documentation

## Tasks

### Task 1: Project Setup
- [ ] Initialize Hardhat project with TypeScript
- [ ] Install OpenZeppelin contracts
- [ ] Configure Hardhat networks (localhost, testnet, mainnet)
- [ ] Set up environment variables
- [ ] Configure TypeChain for type generation

### Task 2: Token Contract
- [ ] Create base ERC-20 token
- [ ] Add ERC20Burnable extension
- [ ] Add ERC20Pausable extension
- [ ] Implement ERC20Permit
- [ ] Add AccessControl for roles
- [ ] Create minting function with role check
- [ ] Add pause/unpause functions

### Task 3: Testing
- [ ] Write deployment tests
- [ ] Test transfer functionality
- [ ] Test minting (authorized and unauthorized)
- [ ] Test burning
- [ ] Test pause/unpause
- [ ] Test permit functionality
- [ ] Test edge cases and reverts
- [ ] Check gas usage

### Task 4: Deployment Scripts
- [ ] Create deployment script
- [ ] Add verification script
- [ ] Create role assignment script
- [ ] Build deployment logging

### Task 5: Documentation
- [ ] Document contract functions
- [ ] Add NatSpec comments
- [ ] Create deployment guide
- [ ] Document environment setup

### Task 6: Security
- [ ] Run Slither analysis
- [ ] Review for common vulnerabilities
- [ ] Add reentrancy guards where needed
- [ ] Validate access controls

## Tech Stack

- Solidity 0.8.x
- Hardhat
- TypeScript
- OpenZeppelin Contracts
- Ethers.js
- Chai (testing)
- Slither (security)

## Files to Create

- `contracts/MyToken.sol`
- `test/MyToken.test.ts`
- `scripts/deploy.ts`
- `scripts/verify.ts`
- `hardhat.config.ts`
- `.env.example`
- `README.md`
