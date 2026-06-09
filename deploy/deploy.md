# 摇一摇抓大鹅 - 服务器部署说明与落地执行顺序

## 一、环境要求
- Docker + Docker Compose
- Node.js 18+
- MySQL8 + Redis7（或使用Docker容器）

## 二、完整落地执行顺序

### 步骤1：启动后端数据库与服务

1. **启动MySQL和Redis容器**
```bash
cd deploy
docker-compose up -d mysql redis
```

2. **等待MySQL初始化完成**（约30秒，init.sql会自动执行）
```bash
docker-compose logs mysql  # 查看日志确认初始化完成
```

3. **安装后端依赖**
```bash
cd backend
npm install
```

4. **启动后端服务**（本地开发模式）
```bash
npm run start:dev
```
或使用Docker容器：
```bash
cd deploy
docker-compose up -d backend
```

5. **验证后端接口**
```bash
curl http://localhost:3000/api/item/all
curl http://localhost:3000/api/level/get/1
curl http://localhost:3000/api/admin/login -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123"}'
```

### 步骤2：启动Vue后台录入关卡数据

1. **安装管理后台依赖**
```bash
cd admin
npm install
```

2. **启动管理后台开发服务**
```bash
npm run dev
```
访问 http://localhost:5174

3. **登录管理后台**（账号: admin / 密码: admin123）

4. **录入关卡和食材数据**
   - 食材配置页：新增 apple, banana, orange, grape, peach 等食材，填写资源路径
   - 关卡管理页：新增关卡1-3，配置食材类型和总数

5. **打包管理后台**
```bash
npm run build
```
产出 dist 目录，可部署到Nginx

### 步骤3：本地启动游戏网页调试

1. **安装游戏客户端依赖**
```bash
cd game
npm install
```

2. **启动游戏开发服务**
```bash
npm run dev
```
访问 http://localhost:5173

3. **调试功能**
   - 点击锅内球体拾取到卡槽
   - 3个相同自动消除
   - 点击"模拟摇晃"按钮测试颠锅效果
   - 测试道具按钮（回锅/洗牌/凑三）

4. **打包游戏客户端**
```bash
npm run build
```
产出 dist 目录

### 步骤4：打包小游戏部署上线

1. **微信小游戏构建**
```bash
cd game
npm run build:wx
```

2. **将wx-dist目录复制到微信开发者工具**
   - 在微信开发者工具中创建小游戏项目
   - 将 wx-dist 中文件和 mini-game 中配置文件复制到项目根目录
   - 安装 weapp-adapter 或 three-platformize 适配器

3. **在微信开发者工具中预览和上传**

### 步骤5：服务器正式部署

1. **一键启动所有服务**
```bash
cd deploy
docker-compose up -d
```

2. **配置Nginx**
   - 将 admin/dist 复制到 /usr/share/nginx/admin/
   - 将 game/dist 复制到 /usr/share/nginx/game/
   - 复制 nginx/default.conf 到 Nginx配置目录

3. **验证部署**
   - 后端API: http://服务器IP/api/level/get/1
   - 管理后台: http://服务器IP/admin/
   - 游戏客户端: http://服务器IP/

## 三、各项目启动命令汇总

| 项目 | 安装 | 开发启动 | 打包构建 |
|------|------|---------|---------|
| 后端 | cd backend && npm install | npm run start:dev | npm run build |
| 管理后台 | cd admin && npm install | npm run dev | npm run build |
| 游戏客户端 | cd game && npm install | npm run dev | npm run build |
| 微信小游戏 | - | - | npm run build:wx |
| Docker部署 | cd deploy | docker-compose up -d | - |

## 四、关键配置参数

- MySQL: root/123456, 数据库goose_game, 端口3306
- Redis: 端口6379, 无密码
- 后端: 端口3000
- 管理后台: 端口5174（开发），Vite代理/api到后端
- 游戏客户端: 端口5173（开发），Vite代理/api到后端
- 管理员账号: admin/admin123

## 五、注意事项

1. 生产环境请修改MySQL密码和admin密码
2. Redis建议设置密码
3. 游戏客户端中openid目前为模拟值，上线需对接微信登录
4. 微信小游戏适配需要安装canvas适配器（weapp-adapter/three-platformize）
5. Three.js在微信小游戏中的性能需要优化，建议减少球体数量和几何精度