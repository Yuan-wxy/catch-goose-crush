import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // 微信小游戏构建时输出到 mini-game 目录
    outDir: process.env.MODE === 'wx' ? 'mini-game' : 'dist',
    // 小游戏不需要hash
    filenameHashing: false,
  },
});
