import importPlugin from 'eslint-plugin-import';
import noBarrelFilesPlugin from 'eslint-plugin-no-barrel-files';

/**
 * Import/export rules configuration.
 * Enforces best practices for imports and exports.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/import',
    plugins: {
      import: importPlugin,
      'no-barrel-files': noBarrelFilesPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Disable barrel files
      'no-barrel-files/no-barrel-files': 'error',

      // Disable these rules because they are covered by TypeScript
      'import/default': 'off',
      'import/export': 'off',
      'import/namespace': 'off',
      'import/no-unresolved': 'off',

      // No mutable imports
      'import/no-mutable-exports': 'error',

      // Disallow non-import statements appearing before import statements
      'import/first': 'error',

      // No external dependencies outside of package.json
      'import/no-extraneous-dependencies': ['error', { includeTypes: true }],

      // No cyclic dependencies & self module imports
      'import/no-cycle': 'error',
      'import/no-self-import': 'error',
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-useless-path-segments': ['error'],

      // No default export
      'import/no-default-export': ['off'],

      // No absolute path import (/path/to/file)
      'import/no-absolute-path': 'error',

      // Relative import
      'import/no-relative-packages': 'error',

      // Import Sorting
      'import/order': [
        'error',
        {
          alphabetize: { order: 'ignore', caseInsensitive: false },
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          groups: ['internal', 'builtin', 'external', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
        },
      ],
    },
  },
];
