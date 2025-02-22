import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set this value to whatever size you prefer (in KB)
  },
  server: {
    historyApiFallback: true,
  },
})
