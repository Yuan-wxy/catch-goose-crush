# NestJS后端 Docker镜像构建文件

FROM node:18-alpine

WORKDIR /app

# 复制依赖描述文件
COPY package.json package-lock.json* ./

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

# 构建NestJS项目
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npm", "run", "start:prod"]