import { defineConfig } from 'vite'

// Vite dev server config: proxy /api to Django backend on localhost:8000
// This avoids CORS changes in Django and makes `fetch('/api/...')` work in dev.
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
