/**
 * Node service profile - for backend services (no React)
 */
import prettier from 'eslint-config-prettier';

import barrel from '../script/lint-rules/barrel.js';
import bestPractices from '../script/lint-rules/best-practices.js';
import comments from '../script/lint-rules/comments.js';
import naming from '../script/lint-rules/naming.js';
import typescript from '../script/lint-rules/typescript.js';
import unicorn from '../script/lint-rules/unicorn.js';

export default [
  {
    ignores: ['build/', 'dist/', 'node_modules/', '*.config.js', '*.config.mjs', '*.config.ts'],
  },
  ...barrel,
  ...bestPractices,
  ...comments,
  ...naming,
  ...typescript,
  ...unicorn,
  prettier,
];
