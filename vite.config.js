import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({svgo: false})],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables";@import "./src/styles/breakpoints";',
      }
    }
  },
  server: {
    host: true
  }
})
