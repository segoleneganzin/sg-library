import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'sg-modal-lib',
      fileName: (format) => `sg-modal-lib.${format}.js`,
      // Formats to build the library in (CommonJS and ES modules)
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      // External dependencies that should not be bundled into the library
      // expected to be available in the environment where the library is used
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
});
