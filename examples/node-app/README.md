# Node.js App Example

This example demonstrates how to use the `@styleguide/config` package in a Node.js application.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

## Configuration Files

### ESLint (`eslint.config.js`)

Uses the Node.js profile which includes all necessary rules for Node.js development:

```js
import node from '@styleguide/config/eslint/profiles/node';

export default node;
```

### Prettier (`package.json`)

```json
{
  "prettier": "@styleguide/config/prettier"
}
```

### TypeScript (`tsconfig.json`)

Extends the Node.js TypeScript configuration:

```json
{
  "extends": "@styleguide/config/tsconfig/node.json"
}
```

### Vitest (`vitest.config.js`)

Uses the Node.js Vitest configuration:

```js
import { defineConfig } from 'vitest/config';
import nodeConfig from '@styleguide/config/vitest/node';

export default defineConfig(nodeConfig);
```

## Scripts

- `npm run dev` - Start development server with tsx watch
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run built JavaScript
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests with Vitest
- `npm run test:coverage` - Run tests with coverage

## Features

- ✅ Node.js globals configured
- ✅ Console allowed (unlike React/browser configs)
- ✅ TypeScript with NodeNext module resolution
- ✅ Vitest for testing
- ✅ Consistent code formatting
