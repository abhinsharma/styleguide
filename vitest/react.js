import baseConfig from './base.js';

/**
 * React Vitest configuration
 * Extends base config with React Testing Library setup.
 *
 * @type {import('vitest/config').UserConfig}
 */
export default {
  ...baseConfig,
  test: {
    ...baseConfig.test,

    // Use jsdom environment for React components
    environment: 'jsdom',

    // Setup files to run before tests
    setupFiles: ['./vitest.setup.ts'],

    // CSS modules mock
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },

    // Coverage configuration for React
    coverage: {
      ...baseConfig.test.coverage,
      exclude: [
        ...(baseConfig.test.coverage?.exclude || []),
        '**/*.stories.*',
        '**/storybook/**',
        '**/.storybook/**',
      ],
    },
  },
};
