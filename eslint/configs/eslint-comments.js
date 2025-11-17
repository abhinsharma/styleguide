import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';

/**
 * ESLint comments rules configuration.
 * Enforces best practices for ESLint directive comments.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/eslint-comments',
    plugins: {
      'eslint-comments': eslintCommentsPlugin,
    },
    rules: {
      // Require description on ESLint disable directives
      'eslint-comments/require-description': 'error',

      // Recommended rules from the plugin
      'eslint-comments/disable-enable-pair': 'error',
      'eslint-comments/no-aggregating-enable': 'error',
      'eslint-comments/no-duplicate-disable': 'error',
      'eslint-comments/no-unlimited-disable': 'error',
      'eslint-comments/no-unused-disable': 'error',
      'eslint-comments/no-unused-enable': 'error',
    },
  },
];
