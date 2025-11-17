# Next.js App Example

This example demonstrates how to use the `@styleguide/config` package in a Next.js application.

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

Uses the Next.js profile which includes React rules plus Next.js-specific rules:

```js
import nextjs from '@styleguide/config/eslint/profiles/nextjs';

export default nextjs;
```

### Prettier (`package.json`)

```json
{
  "prettier": "@styleguide/config/prettier"
}
```

### TypeScript (`tsconfig.json`)

Extends the Next.js TypeScript configuration:

```json
{
  "extends": "@styleguide/config/tsconfig/nextjs.json"
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Features

- ✅ All React rules
- ✅ Next.js specific rules (Image, Link, Script components)
- ✅ Allows default exports in pages directory
- ✅ TypeScript with Next.js types
- ✅ Consistent code formatting
