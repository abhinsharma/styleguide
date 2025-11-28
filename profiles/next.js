/**
 * Next.js profile - includes React, Next.js, and all base rules
 */
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';

import barrel from '../lint-rules/barrel.js';
import bestPractices from '../lint-rules/best-practices.js';
import comments from '../lint-rules/comments.js';
import naming from '../lint-rules/naming.js';
import react from '../lint-rules/react.js';
import typescript from '../lint-rules/typescript.js';
import unicorn from '../lint-rules/unicorn.js';

const baseIgnores = ['.next/', 'out/', 'build/', 'dist/', 'node_modules/', '**/*.config.js', '**/*.config.mjs', '**/*.config.ts'];
const baseFiles = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mts', '**/*.cts'];

export default [
  {
    ignores: baseIgnores,
  },
  ...barrel.map((c) => ({ ...c, files: baseFiles })),
  ...bestPractices.map((c) => ({ ...c, files: baseFiles })),
  ...comments.map((c) => ({ ...c, files: baseFiles })),
  ...naming.map((c) => ({ ...c, files: c.files || baseFiles })),
  ...typescript,
  ...unicorn.map((c) => ({ ...c, files: baseFiles })),
  ...react.map((c) => ({ ...c, files: ['**/*.tsx', '**/*.jsx'] })),
  {
    files: baseFiles,
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'off',
    },
  },
  prettier,
];
