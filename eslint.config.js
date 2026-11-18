import { nodeService } from './index.js';

export default [
  { ignores: ['**/dist/**', '**/build/**', '**/.next/**', '**/out/**', '**/storybook-static/**', '**/node_modules/**'] },
  ...nodeService,
  {
    files: ['index.js', 'lint-rules/index.js'],
    rules: {
      'barrel-files/avoid-barrel-files': 'off',
      'barrel-files/avoid-re-export-all': 'off',
    },
  },
];
