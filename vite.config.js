// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/' : '/', // Vercel uses root
  // If you ever deploy to GitHub Pages again, just change to:
  // base: '/task-management-system-with-react/',
});