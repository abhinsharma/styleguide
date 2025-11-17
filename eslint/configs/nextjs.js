import nextPlugin from '@next/eslint-plugin-next';

/**
 * Next.js-specific ESLint configuration.
 * Includes rules specific to Next.js applications.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/nextjs',
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      // Allow default exports for Next.js pages and components
      'import/no-default-export': 'off',

      // Next.js recommended rules
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/inline-script-id': 'error',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-assign-module-variable': 'error',
      '@next/next/no-async-client-component': 'warn',
      '@next/next/no-before-interactive-script-outside-document': 'warn',
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/no-head-element': 'warn',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-styled-jsx-in-document': 'warn',
      '@next/next/no-sync-scripts': 'warn',
      '@next/next/no-title-in-document-head': 'warn',
      '@next/next/no-typos': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
    },
  },
  {
    name: 'styleguide/nextjs-pages',
    files: [
      'src/pages/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      'src/app/**/*.{js,jsx,ts,tsx}',
      'app/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      // Allow default exports in Next.js page files
      'import/no-default-export': 'off',
    },
  },
];
