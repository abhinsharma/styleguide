import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

/**
 * React-specific ESLint configuration.
 * Includes rules for React components and hooks.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/react',
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Require an explicit type when using button elements
      'react/button-has-type': 'error',

      // Require consistent boolean attributes notation in JSX
      'react/jsx-boolean-value': 'error',

      // Disallow unnecessary curly braces in JSX props and children
      'react/jsx-curly-brace-presence': 'error',

      // Require using shorthand form for React fragments, unless required
      'react/jsx-fragments': 'error',

      // Prevent problematic leaked values from being rendered
      'react/jsx-no-leaked-render': 'error',

      // Prevents usage of unsafe `target='_blank'`
      'react/jsx-no-target-blank': [
        'error',
        {
          allowReferrer: true,
        },
      ],

      // Disallow empty React fragments
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

      // Require the use of PascalCase for user-defined JSX components
      'react/jsx-pascal-case': 'error',

      // Disallow usage of Array index in keys
      'react/no-array-index-key': 'off',

      // Disallow creating unstable components inside components
      'react/no-unstable-nested-components': 'error',

      // Disallow closing tags for components without children
      'react/self-closing-comp': 'warn',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': [
        'error',
        { additionalHooks: 'useUpdateEffect' },
      ],

      // Disable React in scope requirement (not needed in React 17+)
      'react/react-in-jsx-scope': 'off',

      // Disable prop-types (we use TypeScript)
      'react/prop-types': 'off',
    },
  },
];
