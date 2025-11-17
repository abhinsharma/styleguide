/**
 * Node.js-specific ESLint configuration.
 * Includes rules and globals for Node.js applications.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/node',
    languageOptions: {
      globals: {
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'writable',
        global: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
      },
    },
    rules: {
      // Allow console in Node.js applications
      'no-console': 'off',

      // Disallow process.exit()
      'no-process-exit': 'off',
    },
  },
];
