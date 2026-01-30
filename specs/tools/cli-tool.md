# CLI Tool

Build a Node.js command-line interface application.

## Overview

A professional CLI tool built with modern Node.js practices. Features interactive prompts, beautiful output formatting, configuration management, and plugin support. Uses Commander.js for command parsing and Inquirer for interactive prompts.

## Features

- Command and subcommand structure
- Interactive prompts
- Beautiful terminal output (colors, spinners, tables)
- Configuration file support
- Environment variable handling
- Auto-update notifications
- Shell completions
- Plugin system
- Error handling with helpful messages
- Cross-platform support

## Tasks

### Task 1: Project Setup
- [ ] Initialize Node.js project with TypeScript
- [ ] Configure tsup for building
- [ ] Set up ESLint and Prettier
- [ ] Configure bin entry point
- [ ] Create folder structure

### Task 2: Command Structure
- [ ] Set up Commander.js
- [ ] Create main entry point
- [ ] Add version and help commands
- [ ] Configure global options
- [ ] Set up command routing

### Task 3: Core Commands
- [ ] Create init command
- [ ] Add config command (get, set, list)
- [ ] Create run command
- [ ] Add list command
- [ ] Create help subcommands

### Task 4: Interactive Prompts
- [ ] Install and configure Inquirer
- [ ] Create selection prompts
- [ ] Add input prompts
- [ ] Build confirmation prompts
- [ ] Create multi-select prompts

### Task 5: Terminal Output
- [ ] Set up chalk for colors
- [ ] Add ora for spinners
- [ ] Configure cli-table3 for tables
- [ ] Create boxen for boxes
- [ ] Build progress bars

### Task 6: Configuration
- [ ] Create config file handler
- [ ] Support multiple config locations
- [ ] Add config validation
- [ ] Implement config merging
- [ ] Support environment variables

### Task 7: Error Handling
- [ ] Create custom error classes
- [ ] Build error formatting
- [ ] Add debug mode
- [ ] Create helpful error messages
- [ ] Implement graceful exits

### Task 8: File Operations
- [ ] Add file reading utilities
- [ ] Create file writing helpers
- [ ] Build directory operations
- [ ] Add template file generation

### Task 9: Testing
- [ ] Set up Vitest
- [ ] Write command tests
- [ ] Test configuration handling
- [ ] Add integration tests
- [ ] Test error scenarios

### Task 10: Distribution
- [ ] Configure npm package
- [ ] Add update notifier
- [ ] Create shell completions
- [ ] Document installation methods
- [ ] Set up GitHub releases

## Tech Stack

- Node.js
- TypeScript
- Commander.js
- Inquirer
- Chalk
- Ora
- tsup
- Vitest

## Files to Create

- `src/index.ts`
- `src/cli.ts`
- `src/commands/init.ts`
- `src/commands/config.ts`
- `src/commands/run.ts`
- `src/lib/config.ts`
- `src/lib/logger.ts`
- `src/lib/prompts.ts`
- `src/lib/spinner.ts`
- `src/utils/files.ts`
- `src/utils/errors.ts`
- `src/types/index.ts`
- `bin/cli.js`
- `tsup.config.ts`
- `vitest.config.ts`
- `package.json`
- `.env.example`
