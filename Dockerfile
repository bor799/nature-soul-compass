# 阶段 1: 构建前端
FROM node:18-alpine AS frontend-builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY App.tsx components/ data/ index.html index.tsx lib/ metadata.json types.ts tsconfig.json vite.config.ts ./
RUN npm run build

# 阶段 2: Python 后端
FROM python:3.11-slim

WORKDIR /app

# 安装后端依赖
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 复制后端代码
COPY backend/app.py .

# 从前端构建阶段复制构建产物
COPY --from=frontend-builder /app/dist ./dist

# 暴露端口
EXPOSE 8000

# 使用 shell form 确保 PORT 环境变量正确展开
CMD sh -c "uvicorn app:app --host 0.0.0.0 --port ${PORT:-8000}"
