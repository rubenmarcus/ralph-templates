#!/usr/bin/env node

/**
 * Validates spec files against the required format defined in SPEC_FORMAT.md
 *
 * Required sections:
 * - H1 title
 * - ## Overview
 * - ## Features
 * - ## Tasks (with at least one task containing checkboxes)
 * - ## Tech Stack
 * - ## Files to Create or ## Files to Modify
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_SECTIONS = [
  { name: 'Overview', pattern: /^## Overview/m },
  { name: 'Features', pattern: /^## Features/m },
  { name: 'Tasks', pattern: /^## Tasks/m },
  { name: 'Tech Stack', pattern: /^## Tech Stack/m },
];

const FILES_SECTION_PATTERN = /^## Files to (Create|Modify)/m;
const H1_PATTERN = /^# .+/m;
const TASK_HEADING_PATTERN = /^### Task \d+:/m;
const CHECKBOX_PATTERN = /- \[([ x])\]/;

function validateSpec(filePath) {
  const errors = [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(process.cwd(), filePath);

  // Check for H1 title
  if (!H1_PATTERN.test(content)) {
    errors.push('Missing H1 title (# Title)');
  }

  // Check for required sections
  for (const section of REQUIRED_SECTIONS) {
    if (!section.pattern.test(content)) {
      errors.push(`Missing required section: ## ${section.name}`);
    }
  }

  // Check for Files to Create or Files to Modify
  if (!FILES_SECTION_PATTERN.test(content)) {
    errors.push('Missing required section: ## Files to Create or ## Files to Modify');
  }

  // Check for at least one task heading
  if (!TASK_HEADING_PATTERN.test(content)) {
    errors.push('Missing task heading (### Task N: Name)');
  }

  // Check for at least one checkbox in Tasks section
  const tasksMatch = content.match(/^## Tasks[\s\S]*?(?=^## |\Z)/m);
  if (tasksMatch) {
    if (!CHECKBOX_PATTERN.test(tasksMatch[0])) {
      errors.push('Tasks section must contain at least one checkbox (- [ ] or - [x])');
    }
  }

  return {
    file: relativePath,
    valid: errors.length === 0,
    errors,
  };
}

function findSpecFiles(dir) {
  const specFiles = [];
  const specsDir = path.join(dir, 'specs');

  if (!fs.existsSync(specsDir)) {
    console.error('Error: specs directory not found');
    process.exit(1);
  }

  function walkDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.md') && file !== 'SPEC_FORMAT.md') {
        specFiles.push(filePath);
      }
    }
  }

  walkDir(specsDir);
  return specFiles;
}

function main() {
  const args = process.argv.slice(2);
  let specFiles;

  if (args.length > 0) {
    // Validate specific files passed as arguments
    specFiles = args.filter(arg => fs.existsSync(arg) && arg.endsWith('.md'));
    if (specFiles.length === 0) {
      console.error('Error: No valid spec files provided');
      process.exit(1);
    }
  } else {
    // Find all spec files
    specFiles = findSpecFiles(process.cwd());
  }

  console.log(`Validating ${specFiles.length} spec file(s)...\n`);

  let hasErrors = false;
  const results = [];

  for (const file of specFiles) {
    const result = validateSpec(file);
    results.push(result);

    if (!result.valid) {
      hasErrors = true;
    }
  }

  // Print results
  for (const result of results) {
    if (result.valid) {
      console.log(`✓ ${result.file}`);
    } else {
      console.log(`✗ ${result.file}`);
      for (const error of result.errors) {
        console.log(`  - ${error}`);
      }
    }
  }

  console.log();

  const validCount = results.filter(r => r.valid).length;
  const invalidCount = results.filter(r => !r.valid).length;

  console.log(`Results: ${validCount} valid, ${invalidCount} invalid`);

  if (hasErrors) {
    process.exit(1);
  }
}

main();
