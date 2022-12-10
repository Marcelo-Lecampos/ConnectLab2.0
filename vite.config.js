import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, './public'),
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@services': path.resolve(__dirname, './src/services'),
      '@context': path.resolve(__dirname, './src/context'),
      '@themes': path.resolve(__dirname, './src/themes'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@validation': path.resolve(__dirname, './src/validation'),
      // '@services': path.resolve(__dirname, './src/hooks'),
    },
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
  }, // adicionado para evitar o erro de chunk no build
});
