/**
 * Next.js profile - includes React, Next.js, and all base rules
 */
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';

import barrel from '../script/lint-rules/barrel.js';
import bestPractices from '../script/lint-rules/best-practices.js';
import comments from '../script/lint-rules/comments.js';
import naming from '../script/lint-rules/naming.js';
import react from '../script/lint-rules/react.js';
import typescript from '../script/lint-rules/typescript.js';
import unicorn from '../script/lint-rules/unicorn.js';

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
