/**
 * React - React and hooks rules
 */
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/button-has-type': 'error',
      'react/jsx-boolean-value': ['error', 'never', { assumeUndefinedIsFalse: true }],
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-pascal-case': 'error',
      'react/no-array-index-key': 'off',
      'react/no-unstable-nested-components': 'error',
      'react/self-closing-comp': 'warn',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: 'useUpdateEffect',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
