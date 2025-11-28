/**
 * TypeScript package profile - for libraries (no React)
 */
import prettier from 'eslint-config-prettier';

import bestPractices from '../lint-rules/best-practices.js';
import comments from '../lint-rules/comments.js';
import naming from '../lint-rules/naming.js';
import typescript from '../lint-rules/typescript.js';
import unicorn from '../lint-rules/unicorn.js';

export default [
  {
    ignores: ['build/', 'dist/', 'lib/', 'node_modules/', '*.config.js', '*.config.mjs', '*.config.ts'],
  },
  ...bestPractices,
  ...comments,
  ...naming,
  ...typescript,
  ...unicorn,
  prettier,
];
