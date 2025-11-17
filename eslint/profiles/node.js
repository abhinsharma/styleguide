import js from '@eslint/js';
import base from '../configs/base.js';
import typescript from '../configs/typescript.js';
import namingConvention from '../configs/naming-convention.js';
import importRules from '../configs/import.js';
import eslintComments from '../configs/eslint-comments.js';
import node from '../configs/node.js';

/**
 * Node.js profile - Complete ESLint configuration for Node.js applications.
 * Combines base, TypeScript, Node, import, naming convention, and ESLint comments rules.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  // Global ignores
  {
    name: 'styleguide/node/ignores',
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.cache/**',
      '**/*.min.js',
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
  ...node,
];
