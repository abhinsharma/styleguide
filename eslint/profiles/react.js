import js from '@eslint/js';
import base from '../configs/base.js';
import typescript from '../configs/typescript.js';
import namingConvention from '../configs/naming-convention.js';
import importRules from '../configs/import.js';
import eslintComments from '../configs/eslint-comments.js';
import react from '../configs/react.js';

/**
 * React profile - Complete ESLint configuration for React applications.
 * Combines base, TypeScript, React, import, naming convention, and ESLint comments rules.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  // Global ignores
  {
    name: 'styleguide/react/ignores',
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
      '**/coverage/**',
      '**/.cache/**',
      '**/*.min.js',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.cjs',
    ],
  },

  // Base JavaScript recommended rules
  js.configs.recommended,

  // Apply all configs
  ...base,
  ...typescript,
  ...namingConvention,
  ...importRules,
  ...eslintComments,
  ...react,
];
