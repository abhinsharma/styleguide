import tseslint from '@typescript-eslint/eslint-plugin';

/**
 * TypeScript naming convention rules.
 * Enforces consistent naming patterns across the codebase.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/naming-convention',
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        // Variables should be in camelCase or uppercase
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          filter: {
            match: false,
            regex: '^(.*)(Context|Provider|Schema|Styled|Styles)$',
          },
        },
        // Boolean variables should be in PascalCase with the following prefix
        {
          selector: 'variable',
          format: ['PascalCase'],
          types: ['boolean'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
        // Types cannot have prefix starting with I or generic name
        // Types should be in PascalCase
        {
          selector: ['typeAlias', 'interface'],
          custom: {
            match: false,
            regex: '^I[A-Z]|^(Interface|Props|State)$',
          },
          format: ['PascalCase'],
        },
        // Functions should be in camelCase or PascalCase (React components)
        {
          selector: 'function',
          format: ['strictCamelCase', 'PascalCase'],
          filter: {
            match: false,
            regex: '^_(.*)', // allow _func
          },
        },
        {
          selector: 'variable',
          format: ['strictCamelCase', 'PascalCase'],
          types: ['function'],
        },
        // Enum should be in uppercase
        {
          selector: 'enum',
          format: ['UPPER_CASE', 'PascalCase'],
        },
        // Enum key should be in strictCamelCase
        {
          selector: 'enumMember',
          format: ['strictCamelCase', 'UPPER_CASE', 'PascalCase'],
        },
      ],
    },
  },
];
