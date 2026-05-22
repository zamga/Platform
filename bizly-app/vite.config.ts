import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative base so assets load on github.io/Platform/ without broken paths
  base: process.env.GITHUB_PAGES === "true" ? "./" : "/",
})
