
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/widget/widget.tsx'),
      name: 'ODIAWidget',
      fileName: 'widget',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    },
    outDir: 'dist/widget',
    emptyOutDir: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
});
