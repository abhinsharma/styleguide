/**
 * React profile - includes React and all base rules (no Next.js)
 */
import prettier from 'eslint-config-prettier';

import barrel from '../script/lint-rules/barrel.js';
import bestPractices from '../script/lint-rules/best-practices.js';
import comments from '../script/lint-rules/comments.js';
import naming from '../script/lint-rules/naming.js';
import react from '../script/lint-rules/react.js';
import typescript from '../script/lint-rules/typescript.js';
import unicorn from '../script/lint-rules/unicorn.js';

export default [
  ...barrel,
  ...bestPractices,
  ...comments,
  ...naming,
  ...typescript,
  ...unicorn,
  ...react,
  prettier,
  {
    ignores: ['build/', 'dist/', 'node_modules/', 'storybook-static/'],
  },
];
