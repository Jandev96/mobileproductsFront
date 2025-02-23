import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mobileproductsbackend.onrender.com', // Your backend URL
        changeOrigin: true,
        secure: false, // Allow proxying to HTTPS backend
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
      },
    },
  },
});