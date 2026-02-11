import { Question } from '../types';

export const questions: Question[] = [
  // ==================== I vs E ====================
  {
    id: 'ie_1',
    type: 'mbti',
    category: '能量来源',
    dimension: 'I', // Tracks I vs E
    text: '徒步时，你更倾向于：',
    options: [
      { text: '享受独处的宁静', value: 'I' },
      { text: '和同伴边走边聊', value: 'E' }
    ]
  },
  {
    id: 'ie_2',
    type: 'mbti',
    category: '能量来源',
    dimension: 'I',
    text: '在山顶休息时，你更想：',
    options: [
      { text: '安静地欣赏风景', value: 'I' },
      { text: '和其他驴友交流经验', value: 'E' }
    ]
  },
  {
    id: 'ie_3',
    type: 'mbti',
    category: '能量来源',
    dimension: 'I',
    text: '对于徒步社交，你的态度是：',
    options: [
      { text: '更喜欢认识新朋友', value: 'E' },
      { text: '享受与自己独处的时光', value: 'I' }
    ]
  },

  // ==================== N vs S ====================
  {
    id: 'ns_1',
    type: 'mbti',
    category: '感知方式',
    dimension: 'N',
    text: '徒步对你来说，最重要的是：',
    options: [
      { text: '探索未知的惊喜感', value: 'N' },
      { text: '感受脚下的每一步', value: 'S' }
    ]
  },
  {
    id: 'ns_2',
    type: 'mbti',
    category: '感知方式',
    dimension: 'N',
    text: '选择路线时，你更看重：',
    options: [
      { text: '风景的独特性和意境', value: 'N' },
      { text: '路线的可行性和安全', value: 'S' }
    ]
  },
  {
    id: 'ns_3',
    type: 'mbti',
    category: '感知方式',
    dimension: 'N',
    text: '看到壮丽景色时，你更倾向于：',
    options: [
      { text: '想象背后的故事和意义', value: 'N' },
      { text: '观察眼前的具体细节', value: 'S' }
    ]
  },

  // ==================== T vs F ====================
  {
    id: 'tf_1',
    type: 'mbti',
    category: '决策方式',
    dimension: 'T',
    text: '面对体力挑战，你的心态是：',
    options: [
      { text: '把它当作需要克服的目标', value: 'T' },
      { text: '倾听身体的感受', value: 'F' }
    ]
  },
  {
    id: 'tf_2',
    type: 'mbti',
    category: '决策方式',
    dimension: 'T',
    text: '徒步中遇到困难时，你更会：',
    options: [
      { text: '理性分析解决方案', value: 'T' },
      { text: '相信直觉和感受', value: 'F' }
    ]
  },
  {
    id: 'tf_3',
    type: 'mbti',
    category: '决策方式',
    dimension: 'T',
    text: '对于徒步成就，你更看重：',
    options: [
      { text: '完成挑战的满足感', value: 'T' },
      { text: '过程中的情感体验', value: 'F' }
    ]
  },

  // ==================== J vs P ====================
  {
    id: 'jp_1',
    type: 'mbti',
    category: '生活态度',
    dimension: 'J',
    text: '制定徒步计划时，你更倾向于：',
    options: [
      { text: '详细规划每一个细节', value: 'J' },
      { text: '大概方向，灵活调整', value: 'P' }
    ]
  },
  {
    id: 'jp_2',
    type: 'mbti',
    category: '生活态度',
    dimension: 'J',
    text: '遇到意外情况（如天气变化），你会：',
    options: [
      { text: '希望有明确的备选方案', value: 'J' },
      { text: '喜欢即兴应对的刺激', value: 'P' }
    ]
  },
  {
    id: 'jp_3',
    type: 'mbti',
    category: '生活态度',
    dimension: 'J',
    text: '理想的徒步节奏是：',
    options: [
      { text: '按计划准时到达目的地', value: 'J' },
      { text: '随心情和状态自由调整', value: 'P' }
    ]
  },

  // ==================== SURVIVAL ====================
  {
    id: 'toilet',
    type: 'survival',
    category: '如厕场景',
    text: '徒步途中需要上厕所，但条件有限...',
    description: '你的底线是什么？',
    options: [
      { value: 1, text: '完全无法接受', description: '必须有独立卫浴的厕所，否则不考虑' },
      { value: 2, text: '勉强可以接受', description: '旱厕或简易厕所可以接受，但希望有遮挡' },
      { value: 3, text: '可以接受', description: '野外方便也可以，但希望有基本隐私' },
      { value: 4, text: '完全没问题', description: '野外随地解决，完全不在意这些' }
    ]
  },
  {
    id: 'shower',
    type: 'survival',
    category: '洗澡场景',
    text: '徒步2-3天后，身上有些汗味...',
    description: '你可以坚持多久不洗澡？',
    options: [
      { value: 1, text: '必须每天洗澡', description: '没有独立卫浴的洗澡条件会非常困扰' },
      { value: 2, text: '可以接受2-3天', description: '简单擦身或冷水澡可以接受' },
      { value: 3, text: '可以忍受', description: '3-4天不洗澡没问题，湿巾也可以' },
      { value: 4, text: '完全不在意', description: '一周不洗澡也没关系，徒步本就如此' }
    ]
  },
  {
    id: 'bugs',
    type: 'survival',
    category: '虫子场景',
    text: '山里有蚊虫、飞虫，甚至可能有蜘蛛...',
    description: '你的恐惧程度？',
    options: [
      { value: 1, text: '非常害怕虫子', description: '看到虫子会崩溃，需要完全防护' },
      { value: 2, text: '有点害怕', description: '蚊虫可以接受，但不想看到大虫子' },
      { value: 3, text: '可以忍受', description: '有虫子是正常的，基本防护即可' },
      { value: 4, text: '完全不在意', description: '虫子是自然的一部分' }
    ]
  },
  {
    id: 'fitness',
    type: 'survival',
    category: '体能评估',
    text: '面对连续爬升、长距离行走...',
    description: '你的体能状态如何？',
    options: [
      { value: 1, text: '体能较差', description: '平时较少运动，希望选择轻松路线' },
      { value: 2, text: '体能一般', description: '可以完成单日徒步，多日需要休息' },
      { value: 3, text: '体能尚可', description: '有运动基础，可以承受中等强度' },
      { value: 4, text: '体能很好', description: '经常运动，可以承受高强度挑战' }
    ]
  }
];