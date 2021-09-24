import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      "name": "0xbul1.github.io",
      "short_name": "0xbul1",
      "start_url": ".",
      "display": "standalone",
      "description": "a simple portfolio",
    },
  }), svgLoader({svgo: false})],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables";@import "./src/styles/breakpoints";',
      }
    }
  },
  // 开启本地测试
  server: {
    host: true
  }
})
