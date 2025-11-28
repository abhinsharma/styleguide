/**
 * Unicorn - additional unicorn plugin rules
 */
import unicorn from 'eslint-plugin-unicorn';

export default [
  {
    plugins: {
      unicorn,
    },
    rules: {
      'unicorn/expiring-todo-comments': 'error',
    },
  },
];
