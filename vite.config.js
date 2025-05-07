import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // allow all hosts
    port: process.env.PORT || 4173,
    allowedHosts: ['email-flow-frontend.onrender.com'], // ✅ allow Render host
  },
});

