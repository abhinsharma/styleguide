import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import reactConfig from '@styleguide/config/vitest/react';

export default defineConfig({
  plugins: [react()],
  ...reactConfig,
});
