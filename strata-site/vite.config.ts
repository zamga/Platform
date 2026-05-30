import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Portable relative base so the build can be hosted from any sub-path.
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})
