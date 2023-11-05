import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      hooks: '/src/hooks',
      styles: '/src/styles',
      store: '/src/store',
      types: '/src/types',
      ui: '/src/ui',
      utils: '/src/utils',
    },
  },
})
