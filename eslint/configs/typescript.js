import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

/**
 * TypeScript ESLint configuration.
 * Includes TypeScript-specific rules and type-aware linting.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/typescript',
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Disable base rule in favor of TypeScript version
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: false,
        },
      ],

      // Prefer type over interface
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // Disallow explicit function return types (rely on inference)
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Disallow creation of functions within loops
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',

      // Disallow variable shadowing
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      // Consistent import and export of types
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],

      '@typescript-eslint/consistent-type-exports': [
        'error',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],

      // Disallow any type
      '@typescript-eslint/no-explicit-any': 'error',

      // Disallow members of unions and intersections that do nothing
      '@typescript-eslint/no-redundant-type-constituents': 'error',

      // Disallow unnecessary namespace qualifiers
      '@typescript-eslint/no-unnecessary-qualifier': 'error',

      // Require using `RegExp.exec()` over `String.match()` for consistency
      '@typescript-eslint/prefer-regexp-exec': 'error',

      // Require Array#sort calls to provide a compare function
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        { ignoreStringArrays: true },
      ],

      // Switch exhaustiveness disabled during migration
      '@typescript-eslint/switch-exhaustiveness-check': 'off',

      // Disallow variable redeclaration, but allow declaration merging
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': [
        'error',
        { ignoreDeclarationMerge: true },
      ],
    },
  },
];
