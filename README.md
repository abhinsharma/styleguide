# @abhsh/styleguide

Shared ESLint, TSConfig, and Prettier configs.

## Install

```bash
pnpm add @abhsh/styleguide eslint typescript
```

## Profiles

| Profile | Use Case |
|---------|----------|
| `next` | Next.js apps |
| `react` | React apps (non-Next) |
| `tsPackage` | TypeScript libraries |
| `nodeService` | Node.js backends |

## Usage

```js
// eslint.config.js
import { next } from '@abhsh/styleguide';
export default next;
```

Extend with overrides:

```js
import { tsPackage } from '@abhsh/styleguide';
export default [
  ...tsPackage,
  {
    rules: {
      'no-console': 'off',
    },
  },
];
```

Custom composition:

```js
import { rules } from '@abhsh/styleguide';
export default [
  ...rules.bestPractices,
  ...rules.typescript,
];
```

## Rule Sets

- `bestPractices` - general JS/TS rules
- `comments` - eslint-comments plugin
- `naming` - TS naming conventions + filename-case
- `react` - React + hooks rules
- `typescript` - TS-specific rules
- `unicorn` - unicorn plugin rules

## TSConfig

| Profile | Use Case |
|---------|----------|
| `tsconfig/web/app.json` | Next.js, Vite apps |
| `tsconfig/web/library.json` | React component libs |
| `tsconfig/node/app.json` | Node.js services |
| `tsconfig/node/library.json` | TS packages |

```json
{
  "extends": "@abhsh/styleguide/tsconfig/web/app.json",
  "include": ["src"]
}
```

## Prettier

```js
// prettier.config.js
export { default } from '@abhsh/styleguide/prettier.config.js';
```

Settings: `printWidth: 200`, `singleQuote: true`, `semi: true`
