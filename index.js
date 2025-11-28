/**
 * @abhsh/styleguide - Shared ESLint v9 config
 */

// Profiles (flat config arrays)
export { default as next } from './profiles/next.js';
export { default as react } from './profiles/react.js';
export { default as tsPackage } from './profiles/ts-package.js';
export { default as nodeService } from './profiles/node-service.js';

// Individual rule sets for custom composition
export * as rules from './script/lint-rules/index.js';
