import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: '192.168.178.108',
    proxy: {
      '/api': {
        target: 'https://justice-matters-server.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
