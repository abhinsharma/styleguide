# Styleguide Config

> Reusable ESLint, Prettier, Vitest, and TypeScript configurations for React, Next.js, and Node.js applications.

## 📦 Installation

```bash
npm install --save-dev @styleguide/config
```

Install peer dependencies:

```bash
npm install --save-dev eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-no-barrel-files eslint-plugin-eslint-comments typescript prettier vitest
```

For Next.js projects, also install:

```bash
npm install --save-dev @next/eslint-plugin-next
```

---

## 🚀 Quick Start

### ESLint

#### Using Profiles (Recommended)

**React Application:**

```js
// eslint.config.js
import react from '@styleguide/config/eslint/profiles/react';

export default react;
```

**Next.js Application:**

```js
// eslint.config.js
import nextjs from '@styleguide/config/eslint/profiles/nextjs';

export default nextjs;
```

**Node.js Application:**

```js
// eslint.config.js
import node from '@styleguide/config/eslint/profiles/node';

export default node;
```

#### Custom Composition

You can also compose your own configuration using individual modules:

```js
// eslint.config.js
import base from '@styleguide/config/eslint/base';
import typescript from '@styleguide/config/eslint/typescript';
import react from '@styleguide/config/eslint/react';
import importRules from '@styleguide/config/eslint/import';

export default [
  ...base,
  ...typescript,
  ...react,
  ...importRules,
  // Your custom overrides
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

---

### Prettier

**Using package.json (Recommended):**

```json
{
  "prettier": "@styleguide/config/prettier"
}
```

**Or create prettier.config.js:**

```js
import prettierConfig from '@styleguide/config/prettier';

export default prettierConfig;
```

**Or extend and customize:**

```js
import prettierConfig from '@styleguide/config/prettier';

export default {
  ...prettierConfig,
  printWidth: 120, // Override specific settings
};
```

---

### TypeScript

**React Application:**

```json
{
  "extends": "@styleguide/config/tsconfig/react.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

**Next.js Application:**

```json
{
  "extends": "@styleguide/config/tsconfig/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Node.js Application:**

```json
{
  "extends": "@styleguide/config/tsconfig/node.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

**Library Package:**

```json
{
  "extends": "@styleguide/config/tsconfig/library.json"
}
```

---

### Vitest

**React Application:**

```js
// vitest.config.js
import { defineConfig } from 'vitest/config';
import reactConfig from '@styleguide/config/vitest/react';

export default defineConfig(reactConfig);
```

**Node.js Application:**

```js
// vitest.config.js
import { defineConfig } from 'vitest/config';
import nodeConfig from '@styleguide/config/vitest/node';

export default defineConfig(nodeConfig);
```

**Custom Configuration:**

```js
// vitest.config.js
import { defineConfig } from 'vitest/config';
import baseConfig from '@styleguide/config/vitest/base';

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    // Your custom overrides
    testTimeout: 5000,
  },
});
```

---

## 📚 Available Exports

### ESLint Configs

**Individual Modules:**
- `@styleguide/config/eslint/base` - Base JavaScript rules
- `@styleguide/config/eslint/typescript` - TypeScript-specific rules
- `@styleguide/config/eslint/react` - React-specific rules
- `@styleguide/config/eslint/nextjs` - Next.js-specific rules
- `@styleguide/config/eslint/node` - Node.js-specific rules
- `@styleguide/config/eslint/import` - Import/export rules
- `@styleguide/config/eslint/naming-convention` - Naming convention rules
- `@styleguide/config/eslint/eslint-comments` - ESLint comment rules

**Profiles (Pre-composed):**
- `@styleguide/config/eslint/profiles/react` - React application profile
- `@styleguide/config/eslint/profiles/nextjs` - Next.js application profile
- `@styleguide/config/eslint/profiles/node` - Node.js application profile

### Prettier Config

- `@styleguide/config/prettier` - Prettier formatting rules

### Vitest Configs

- `@styleguide/config/vitest/base` - Base Vitest configuration
- `@styleguide/config/vitest/react` - React + Testing Library setup
- `@styleguide/config/vitest/node` - Node.js testing setup

### TypeScript Configs

- `@styleguide/config/tsconfig/base.json` - Base TypeScript config
- `@styleguide/config/tsconfig/react.json` - React TypeScript config
- `@styleguide/config/tsconfig/nextjs.json` - Next.js TypeScript config
- `@styleguide/config/tsconfig/node.json` - Node.js TypeScript config
- `@styleguide/config/tsconfig/library.json` - Library package config

---

## 🎨 Prettier Rules

Our Prettier configuration includes:

- **No semicolons** (`semi: false`)
- **Single quotes** (`singleQuote: true`)
- **2 spaces** for indentation (`tabWidth: 2`)
- **ES5 trailing commas** (`trailingComma: 'es5'`)
- **160 character line width** (`printWidth: 160`)
- **Always use parentheses** around arrow function parameters (`arrowParens: 'always'`)

---

## 🔍 ESLint Rules Highlights

### Base Rules

- Enforces `===` over `==`
- Disallows `console` statements (use proper logging)
- Disallows `eval()` and similar unsafe patterns
- Requires template literals over string concatenation
- Disallows nested ternary operators
- Disallows magic numbers (configurable)

### TypeScript Rules

- Enforces `type` over `interface`
- Requires inline type imports (`import { type Foo }`)
- Disallows `any` type
- Enforces naming conventions:
  - Variables: `camelCase`, `UPPER_CASE`, or `PascalCase`
  - Booleans: Must have prefix (`is`, `has`, `can`, `should`, etc.)
  - Types: `PascalCase` (no `I` prefix)
  - Functions: `camelCase` or `PascalCase` (React components)

### React Rules

- Requires explicit button types
- Disallows array index as key
- Prevents unstable nested components
- Enforces React Hooks rules
- Requires self-closing components when applicable

### Import Rules

- Disallows barrel files
- Disallows circular dependencies
- Requires imports before other statements
- Enforces import order
- Disallows absolute imports

---

## 🧪 Vitest Configuration

### Base Config Features

- Global test functions (`describe`, `it`, `expect`)
- V8 coverage provider
- Coverage thresholds: 70% (lines, functions, branches, statements)
- 10-second test timeout
- Source map support

### React Config Features

- JSDOM environment for DOM testing
- Setup files support
- CSS modules mock
- Excludes Storybook files from coverage

---

## 📖 Examples

### Example: React + Vite Project

**package.json:**
```json
{
  "name": "my-react-app",
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  },
  "prettier": "@styleguide/config/prettier"
}
```

**eslint.config.js:**
```js
import react from '@styleguide/config/eslint/profiles/react';

export default react;
```

**tsconfig.json:**
```json
{
  "extends": "@styleguide/config/tsconfig/react.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

**vitest.config.js:**
```js
import { defineConfig } from 'vitest/config';
import reactConfig from '@styleguide/config/vitest/react';

export default defineConfig(reactConfig);
```

---

### Example: Next.js Project

**package.json:**
```json
{
  "name": "my-nextjs-app",
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "prettier": "@styleguide/config/prettier"
}
```

**eslint.config.js:**
```js
import nextjs from '@styleguide/config/eslint/profiles/nextjs';

export default nextjs;
```

**tsconfig.json:**
```json
{
  "extends": "@styleguide/config/tsconfig/nextjs.json"
}
```

---

### Example: Node.js API

**package.json:**
```json
{
  "name": "my-api",
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "test": "vitest"
  },
  "prettier": "@styleguide/config/prettier"
}
```

**eslint.config.js:**
```js
import node from '@styleguide/config/eslint/profiles/node';

export default node;
```

**tsconfig.json:**
```json
{
  "extends": "@styleguide/config/tsconfig/node.json"
}
```

**vitest.config.js:**
```js
import { defineConfig } from 'vitest/config';
import nodeConfig from '@styleguide/config/vitest/node';

export default defineConfig(nodeConfig);
```

---

## 🔧 Customization

All configurations can be extended and customized:

```js
// eslint.config.js
import react from '@styleguide/config/eslint/profiles/react';

export default [
  ...react,
  {
    // Add project-specific overrides
    rules: {
      'no-console': 'warn', // Downgrade from error to warning
      'import/no-default-export': 'off', // Allow default exports
    },
  },
];
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT

---

## 🙏 Acknowledgments

This configuration is built on top of excellent tools:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)
