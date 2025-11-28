/**
 * Comments - eslint-comments plugin rules
 */
import comments from 'eslint-plugin-eslint-comments';

export default [
  comments.configs.recommended,
  {
    rules: {
      'eslint-comments/require-description': 'error',
    },
  },
];
