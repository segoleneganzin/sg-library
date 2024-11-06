/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  test: {
    globals: true, // Enables global test APIs like `describe`, `it`, etc.
    environment: 'jsdom', // Use jsdom environment for DOM-related tests
    setupFiles: './setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['**/coverage/**', '**/node_modules/**'],
    coverage: {
      provider: 'v8', // Use @vitest/coverage-v8 for code coverage
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'sg-library',
      fileName: (format) => `sg-library.${format}.js`,
      // Formats to build the library in (CommonJS and ES modules)
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
