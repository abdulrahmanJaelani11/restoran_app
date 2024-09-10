import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        frontend: resolve(__dirname, 'index.html'),
        backend: resolve(__dirname, 'admin.html'),
      },
    },
  },
});
