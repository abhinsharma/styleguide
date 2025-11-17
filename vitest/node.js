import baseConfig from './base.js';

/**
 * Node.js Vitest configuration
 * Extends base config for Node.js applications.
 *
 * @type {import('vitest/config').UserConfig}
 */
export default {
  ...baseConfig,
  test: {
    ...baseConfig.test,

    // Explicitly use Node environment
    environment: 'node',

    // Setup files for Node.js testing
    setupFiles: ['./vitest.setup.ts'],
  },
};
