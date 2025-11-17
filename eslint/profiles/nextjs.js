import reactProfile from './react.js';
import nextjs from '../configs/nextjs.js';

/**
 * Next.js profile - Complete ESLint configuration for Next.js applications.
 * Extends the React profile with Next.js-specific rules.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  // Include all React profile configs
  ...reactProfile,

  // Add Next.js specific rules
  ...nextjs,
];
