/**
 * Base Vitest configuration
 * Common test configuration for all project types.
 *
 * @type {import('vitest/config').UserConfig}
 */
export default {
  test: {
    // Use globals like describe, it, expect without importing
    globals: true,

    // Default test environment
    environment: 'node',

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        'build/',
        'coverage/',
        '**/*.config.*',
        '**/*.d.ts',
        '**/*.spec.*',
        '**/*.test.*',
        '**/test/**',
        '**/tests/**',
        '**/__tests__/**',
        '**/__mocks__/**',
      ],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70,
      },
    },

    // Include source maps for better error messages
    includeSource: ['src/**/*.{js,ts,jsx,tsx}'],

    // Test timeout
    testTimeout: 10000,

    // Hook timeout
    hookTimeout: 10000,
  },
};
