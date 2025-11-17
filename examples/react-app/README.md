# React App Example

This example demonstrates how to use the `@styleguide/config` package in a React application.

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

Uses the React profile which includes all necessary rules for React development.

```js
import react from '@styleguide/config/eslint/profiles/react';

export default react;
```

### Prettier (`package.json`)

```json
{
  "prettier": "@styleguide/config/prettier"
}
```

### TypeScript (`tsconfig.json`)

Extends the React TypeScript configuration:

```json
{
  "extends": "@styleguide/config/tsconfig/react.json"
}
```

### Vitest (`vitest.config.js`)

Uses the React Vitest configuration with jsdom:

```js
import { defineConfig } from 'vitest/config';
import reactConfig from '@styleguide/config/vitest/react';

export default defineConfig(reactConfig);
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests with Vitest
- `npm run test:coverage` - Run tests with coverage
