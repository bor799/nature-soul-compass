# 山野灵感罗盘 (Nature Soul Compass)

通过 MBTI 风格的问答测试，为 18-40 岁女性"进阶小白"徒步者推荐适合的徒步目的地。

## 项目特点

- **2 分钟测试**：12 道 MBTI 性格题 + 4 道生存底线题
- **智能推荐**：基于性格特质和舒适度需求匹配目的地
- **15 个精选路线**：覆盖全国热门徒步目的地
- **移动端优先**：完美适配所有设备
- **零依赖后端**：纯前端应用，部署即用

## 技术栈

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (移动端优先设计)
- **Zustand** (轻量级状态管理)
- **Vercel** (一键部署)

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist` 目录。

## 项目结构

```
src/
├── components/
│   ├── ui/                    # 可复用 UI 组件
│   ├── quiz/                  # 问答组件
│   ├── results/               # 结果展示组件
│   └── layout/                # 布局组件
├── data/
│   ├── mbtiQuestions.ts       # MBTI 测试题（12 题）
│   └── survivalQuestions.ts   # 生存底线题（4 题）
├── lib/
│   ├── types.ts               # TypeScript 类型定义
│   ├── quizEngine.ts          # MBTI 计算逻辑
│   └── recommendationEngine.ts # 推荐算法
├── store/
│   └── quizStore.ts           # Zustand 状态管理
└── styles/
    └── globals.css
```

## 推荐算法

```
总匹配分 = MBTI 契合度(40%) + 生存底线匹配(30%) + 路线成熟度(15%) + 出片率(10%) + 社交压力调整(5%)
```

### 硬性过滤

- 用户耐受度低于目的地最低要求时，自动过滤该路线

### 调整因子

- 社交压力高 + 体能焦虑 = -20% 惩罚

## 目的地数据格式

```json
{
  "id": "hutiaoxia-half",
  "name": "虎跳峡高路（半程版）",
  "location": "云南·丽江",
  "duration_days": 2,
  "difficulty_level": 2,
  "hygiene_score": 4,
  "mbti_affinity": {
    "I": 0.4, "E": 0.6,
    ...
  },
  "survival_requirements": {
    "tolerance_toilet": 2,
    ...
  }
}
```

详见 `data/destinations.json`

## 部署

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 开发指南

### 添加新的目的地

编辑 `data/destinations.json`，添加新条目：

```json
{
  "id": "unique-id",
  "name": "路线名称",
  "location": "地点",
  "duration_days": 2,
  "difficulty_level": 2,
  "scenery_types": ["类型"],
  "hygiene_score": 4,
  "period_friendliness": 5,
  "instagrammability": 5,
  "social_pressure": 2,
  "crowd_level": 3,
  "maturation": 5,
  "mbti_affinity": { ... },
  "survival_requirements": { ... },
  "highlights": [ ... ],
  "description": "描述",
  "best_season": [ ... ],
  "tags": [ ... ]
}
```

### 修改推荐权重

编辑 `src/lib/recommendationEngine.ts` 中的权重分配：

```typescript
const totalScore =
  mbtiMatch * 0.4 +           // MBTI 契合度
  survivalMatch * 0.3 +       // 生存底线匹配
  maturationBonus * 0.15 +    // 路线成熟度
  instagramBonus * 0.1 +      // 出片率
  socialPenalty * 0.05;       // 社交压力
```

## 性能

- **Lighthouse 性能评分**：> 90 (预期)
- **首次加载**：~230KB (gzip: ~72KB)
- **问答完成率目标**：> 60%

## License

MIT

---

**Made with ❤️ for outdoor enthusiasts**
