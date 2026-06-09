import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/**
 * Vite微信小游戏专用构建配置
 * 通过环境变量 MODE=wx 触发：npm run build:wx
 */
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  define: {
    'process.env.MODE': JSON.stringify(mode),
  },
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
    // 微信小游戏模式输出到 wx-dist 目录
    outDir: mode === 'wx' ? 'wx-dist' : 'dist',
    // 关闭hash，小游戏文件名保持固定
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // 小游戏模式使用ES模块输出
        format: mode === 'wx' ? 'es' : 'iife',
      },
    },
  },
}));
