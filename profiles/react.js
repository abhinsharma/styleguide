/**
 * React profile - includes React and all base rules (no Next.js)
 */
import prettier from 'eslint-config-prettier';

import barrel from '../lint-rules/barrel.js';
import bestPractices from '../lint-rules/best-practices.js';
import comments from '../lint-rules/comments.js';
import naming from '../lint-rules/naming.js';
import react from '../lint-rules/react.js';
import typescript from '../lint-rules/typescript.js';
import unicorn from '../lint-rules/unicorn.js';

export default [
  {
    ignores: ['build/', 'dist/', 'node_modules/', 'storybook-static/', '*.config.js', '*.config.mjs', '*.config.ts'],
  },
  ...barrel,
  ...bestPractices,
  ...comments,
  ...naming,
  ...typescript,
  ...unicorn,
  ...react,
  prettier,
];
