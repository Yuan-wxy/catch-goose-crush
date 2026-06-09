/**
 * 微信小游戏入口文件 game.js
 * 使用微信小游戏canvas适配器加载主游戏包
 * 
 * 使用说明：
 * 1. 运行 npm run build:wx 构建
 * 2. 将生成的文件复制到微信开发者工具的小游戏项目目录
 * 3. 在微信开发者工具中预览/上传
 */

// 注意：Three.js在微信小游戏中需要canvas适配器
// 可使用 weapp-adapter 或 three-platformize 方案

const canvas = wx.createCanvas();
canvas.width = wx.getSystemInfoSync().windowWidth;
canvas.height = wx.getSystemInfoSync().windowHeight;

// 加载主游戏逻辑（Vite构建产物）
// 这里引入构建后的bundle文件
import './assets/index.js';
