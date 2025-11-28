/**
 * TypeScript package profile - for libraries (no React)
 */
import prettier from 'eslint-config-prettier';

import bestPractices from '../script/lint-rules/best-practices.js';
import comments from '../script/lint-rules/comments.js';
import naming from '../script/lint-rules/naming.js';
import typescript from '../script/lint-rules/typescript.js';
import unicorn from '../script/lint-rules/unicorn.js';

export default [
  ...bestPractices,
  ...comments,
  ...naming,
  ...typescript,
  ...unicorn,
  prettier,
  {
    ignores: ['build/', 'dist/', 'lib/', 'node_modules/'],
  },
];
