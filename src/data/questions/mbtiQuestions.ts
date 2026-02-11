import type { MBTIQuestion } from '@/shared/types';

export const mbtiQuestions: MBTIQuestion[] = [
  // ==================== I vs E (内向 vs 外向) ====================
  {
    id: 'ie_1',
    category: 'I_E',
    dimension: 'I',
    question: '徒步时，你更倾向于：',
    options: [
      { text: '享受独处的宁静', value: 'I' },
      { text: '和同伴边走边聊', value: 'E' }
    ]
  },
  {
    id: 'ie_2',
    category: 'I_E',
    dimension: 'I',
    question: '在山顶休息时，你更想：',
    options: [
      { text: '安静地欣赏风景', value: 'I' },
      { text: '和其他驴友交流经验', value: 'E' }
    ]
  },
  {
    id: 'ie_3',
    category: 'I_E',
    dimension: 'I',
    question: '对于徒步社交，你的态度是：',
    options: [
      { text: '更喜欢认识新朋友', value: 'E' },
      { text: '享受与自己独处的时光', value: 'I' }
    ]
  },

  // ==================== N vs S (直觉 vs 实感) ====================
  {
    id: 'ns_1',
    category: 'N_S',
    dimension: 'N',
    question: '徒步对你来说，最重要的是：',
    options: [
      { text: '探索未知的惊喜感', value: 'N' },
      { text: '感受脚下的每一步', value: 'S' }
    ]
  },
  {
    id: 'ns_2',
    category: 'N_S',
    dimension: 'N',
    question: '选择路线时，你更看重：',
    options: [
      { text: '风景的独特性和意境', value: 'N' },
      { text: '路线的可行性和安全', value: 'S' }
    ]
  },
  {
    id: 'ns_3',
    category: 'N_S',
    dimension: 'N',
    question: '看到壮丽景色时，你更倾向于：',
    options: [
      { text: '想象背后的故事和意义', value: 'N' },
      { text: '观察眼前的具体细节', value: 'S' }
    ]
  },

  // ==================== T vs F (思考 vs 情感) ====================
  {
    id: 'tf_1',
    category: 'T_F',
    dimension: 'T',
    question: '面对体力挑战，你的心态是：',
    options: [
      { text: '把它当作需要克服的目标', value: 'T' },
      { text: '倾听身体的感受', value: 'F' }
    ]
  },
  {
    id: 'tf_2',
    category: 'T_F',
    dimension: 'T',
    question: '徒步中遇到困难时，你更会：',
    options: [
      { text: '理性分析解决方案', value: 'T' },
      { text: '相信直觉和感受', value: 'F' }
    ]
  },
  {
    id: 'tf_3',
    category: 'T_F',
    dimension: 'T',
    question: '对于徒步成就，你更看重：',
    options: [
      { text: '完成挑战的满足感', value: 'T' },
      { text: '过程中的情感体验', value: 'F' }
    ]
  },

  // ==================== J vs P (判断 vs 感知) ====================
  {
    id: 'jp_1',
    category: 'J_P',
    dimension: 'J',
    question: '制定徒步计划时，你更倾向于：',
    options: [
      { text: '详细规划每一个细节', value: 'J' },
      { text: '大概方向，灵活调整', value: 'P' }
    ]
  },
  {
    id: 'jp_2',
    category: 'J_P',
    dimension: 'J',
    question: '遇到意外情况（如天气变化），你会：',
    options: [
      { text: '希望有明确的备选方案', value: 'J' },
      { text: '喜欢即兴应对的刺激', value: 'P' }
    ]
  },
  {
    id: 'jp_3',
    category: 'J_P',
    dimension: 'J',
    question: '理想的徒步节奏是：',
    options: [
      { text: '按计划准时到达目的地', value: 'J' },
      { text: '随心情和状态自由调整', value: 'P' }
    ]
  }
];

export const mbtiDescriptions: Record<string, { title: string; description: string; hiking_style: string }> = {
  'ISTJ': {
    title: '可靠的实践者',
    description: '你注重细节，喜欢有计划、可预测的徒步体验。成熟的路线、清晰的指示牌、完善的设施是你的首选。',
    hiking_style: '成熟路线 + 详细规划'
  },
  'ISFJ': {
    title: '温柔的守护者',
    description: '你重视舒适和安全，喜欢在保障基本生活质量的前提下欣赏自然。设施完善的路线会让你更安心。',
    hiking_style: '舒适路线 + 卫生保障'
  },
  'INFJ': {
    title: '深刻的理想主义者',
    description: '你寻求有意义的体验，风景要有意境，最好能带来精神层面的满足。你喜欢安静的朝圣感。',
    hiking_style: '朝圣路线 + 意境风景'
  },
  'INTJ': {
    title: '独立的战略家',
    description: '你喜欢有挑战性的目标，理性规划路线。高海拔、需要技术含量的路线会吸引你。',
    hiking_style: '挑战路线 + 技术含量'
  },
  'ISTP': {
    title: '冷静的探险家',
    description: '你喜欢动手解决问题，对野外环境适应力强。未开发的原始路线、需要技能的路线适合你。',
    hiking_style: '原始路线 + 探险体验'
  },
  'ISFP': {
    title: '灵动的艺术家',
    description: '你用感官体验自然，喜欢美到窒息的风景。出片率高、视觉震撼的路线是你的最爱。',
    hiking_style: '绝美风景 + 摄影圣地'
  },
  'INFP': {
    title: '浪漫的梦想家',
    description: '你追求仙境般的体验，喜欢梦幻、有灵气的地方。人少景美、有故事的地方最适合你。',
    hiking_style: '仙境秘境 + 灵气之地'
  },
  'INTP': {
    title: '好奇的分析师',
    description: '你对地理、生态感兴趣，喜欢独特的自然现象。人少、有科学价值的路线会吸引你。',
    hiking_style: '奇观路线 + 科学价值'
  },
  'ESTP': {
    title: '勇敢的行动派',
    description: '你追求刺激和肾上腺素，喜欢有挑战性的地形。陡峭、惊险、需要体力的路线让你兴奋。',
    hiking_style: '刺激路线 + 体能挑战'
  },
  'ESFP': {
    title: '热情的表演者',
    description: '你喜欢热闹的氛围，社交和风景同样重要。网红路线、适合拍照分享的路线最适合你。',
    hiking_style: '网红路线 + 社交氛围'
  },
  'ENFP': {
    title: '充满活力的启发性者',
    description: '你喜欢新鲜感和可能性，多样化的风景和体验会吸引你。不适合太单调的路线。',
    hiking_style: '多样体验 + 新鲜感'
  },
  'ENTP': {
    title: '聪明的挑战者',
    description: '你喜欢复杂性，有多样选择、可以探索的路线让你兴奋。不想走千篇一律的路径。',
    hiking_style: '复杂路线 + 多样选择'
  },
  'ESTJ': {
    title: '高效的执行者',
    description: '你喜欢有明确目标、高效完成的徒步。成熟路线、清晰路标、可以量化成就的路线适合你。',
    hiking_style: '经典路线 + 成就感'
  },
  'ESFJ': {
    title: '体贴的照顾者',
    description: '你重视舒适度和社交，设施完善、可以和朋友一起享受的路线是你的首选。',
    hiking_style: '舒适路线 + 社交体验'
  },
  'ENFJ': {
    title: '富有魅力的领导者',
    description: '你喜欢带动团队，有氛围、可以结识同好的路线适合你。客栈文化丰富的地方会吸引你。',
    hiking_style: '氛围路线 + 社交文化'
  },
  'ENTJ': {
    title: '果断的统帅',
    description: '你喜欢史诗级的挑战，长距离、高难度、有征服感的路线会满足你的雄心。',
    hiking_style: '史诗路线 + 征服感'
  }
};
