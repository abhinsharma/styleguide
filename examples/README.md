# Examples

This directory contains example projects demonstrating how to use `@styleguide/config` in different types of applications.

## Available Examples

### 1. [React App](./react-app)

A React application using Vite.

**Includes:**
- ESLint with React profile
- Prettier configuration
- TypeScript with React settings
- Vitest with jsdom for component testing

### 2. [Next.js App](./nextjs-app)

A Next.js application with App Router.

**Includes:**
- ESLint with Next.js profile
- Prettier configuration
- TypeScript with Next.js settings
- Next.js specific linting rules

### 3. [Node.js App](./node-app)

A Node.js API or CLI application.

**Includes:**
- ESLint with Node.js profile
- Prettier configuration
- TypeScript with Node.js module resolution
- Vitest for unit testing

## Quick Start

Each example can be set up independently:

```bash
cd react-app
npm install
npm run dev
```

## Common Commands

All examples support these npm scripts:

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted

## Configuration Pattern

All examples follow the same pattern:

1. **Install the package**: `npm install --save-dev @styleguide/config`
2. **Choose a profile or compose custom config**
3. **Extend TypeScript configuration**
4. **Reference Prettier config in package.json**

This makes it easy to maintain consistent code quality across all your projects!
