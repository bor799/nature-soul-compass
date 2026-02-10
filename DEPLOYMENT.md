# 山野灵感罗盘 - 部署指南

## 项目完成状态

✅ 所有功能已实现完毕：
- ✅ MBTI 性格测试（12 题）
- ✅ 生存底线测试（4 场景）
- ✅ 智能推荐算法
- ✅ 15 个精选目的地
- ✅ 完整的响应式 UI
- ✅ 本地构建测试通过

## 本地运行

```bash
cd "/Users/murphy/Documents/Obsidian Vault/case/徒步目的地/app"
npm run dev
```

访问 http://localhost:5173

## 部署到 Vercel

### 方法 1：通过 Vercel CLI（推荐）

1. 安装 Vercel CLI（已完成）
2. 登录 Vercel 账户：
   ```bash
   cd "/Users/murphy/Documents/Obsidian Vault/case/徒步目的地/app"
   vercel login
   ```
   按照提示在浏览器中完成登录

3. 部署到生产环境：
   ```bash
   vercel --prod
   ```

### 方法 2：通过 Vercel 网站（最简单）

1. 访问 https://vercel.com
2. 使用 GitHub 账户登录
3. 点击 "Add New Project"
4. 导入此项目的 Git 仓库（如果项目已推送到 GitHub）
5. Vercel 会自动检测 Vite 配置并部署

### 方法 3：手动部署

1. 构建项目：
   ```bash
   cd "/Users/murphy/Documents/Obsidian Vault/case/徒步目的地/app"
   npm run build
   ```

2. 将 `dist` 文件夹内容上传到任何静态网站托管服务：
   - Vercel
   - Netlify
   - GitHub Pages
   - Cloudflare Pages

## 环境变量

本项目不需要环境变量，可直接部署。

## 项目结构

```
app/
├── dist/              # 构建输出（部署此文件夹）
├── data/
│   └── destinations.json  # 目的地数据
├── src/
│   ├── components/     # React 组件
│   ├── data/          # 测试题目数据
│   ├── lib/           # 核心逻辑
│   ├── store/         # 状态管理
│   └── styles/        # 样式文件
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 性能指标

- 首次加载：~230KB (gzip: ~72KB)
- Lighthouse 性能评分预期：> 90
- 移动端友好：100% 响应式

## 后续优化建议

1. **数据持久化**：添加后端 API 存储用户结果
2. **分享功能**：生成自定义分享图片
3. **SEO 优化**：添加结构化数据
4. **数据分析**：集成 Google Analytics
5. **A/B 测试**：优化问题顺序和推荐算法

## 联系方式

如有问题，请联系开发者。
