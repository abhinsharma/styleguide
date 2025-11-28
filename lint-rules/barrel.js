/**
 * Barrel files - ban barrel file patterns
 */
import barrelFiles from 'eslint-plugin-barrel-files';

export default [
  {
    plugins: {
      'barrel-files': barrelFiles,
    },
    rules: {
      'barrel-files/avoid-barrel-files': 'error',
      'barrel-files/avoid-importing-barrel-files': 'error',
      'barrel-files/avoid-namespace-import': 'error',
      'barrel-files/avoid-re-export-all': 'error',
    },
  },
];
