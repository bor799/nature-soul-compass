import type { SurvivalQuestion } from '@/shared/types';

export const survivalQuestions: SurvivalQuestion[] = [
  {
    id: 'toilet',
    category: 'toilet',
    scenario: '如厕场景',
    description: '徒步途中需要上厕所，但条件有限...',
    options: [
      {
        level: 1,
        text: '完全无法接受',
        description: '必须有独立卫浴的厕所，否则不考虑'
      },
      {
        level: 2,
        text: '勉强可以接受',
        description: '旱厕或简易厕所可以接受，但希望能有遮挡'
      },
      {
        level: 3,
        text: '可以接受',
        description: '野外方便也可以，但希望有基本隐私'
      },
      {
        level: 4,
        text: '完全没问题',
        description: '野外随地解决，完全不在意这些'
      }
    ]
  },
  {
    id: 'shower',
    category: 'shower',
    scenario: '洗澡场景',
    description: '徒步2-3天后，身上有些汗味...',
    options: [
      {
        level: 1,
        text: '必须每天洗澡',
        description: '没有独立卫浴的洗澡条件会非常困扰'
      },
      {
        level: 2,
        text: '可以接受2-3天不洗澡',
        description: '简单擦身或冷水澡可以接受'
      },
      {
        level: 3,
        text: '可以忍受',
        description: '3-4天不洗澡没问题，湿巾也可以'
      },
      {
        level: 4,
        text: '完全不在意',
        description: '一周不洗澡也没关系，徒步本就如此'
      }
    ]
  },
  {
    id: 'bugs',
    category: 'bugs',
    scenario: '虫子场景',
    description: '山里有蚊虫、飞虫，甚至可能有蜘蛛...',
    options: [
      {
        level: 1,
        text: '非常害怕虫子',
        description: '看到虫子会崩溃，需要完全防护'
      },
      {
        level: 2,
        text: '有点害怕',
        description: '蚊虫可以接受，但不想看到大虫子'
      },
      {
        level: 3,
        text: '可以忍受',
        description: '有虫子是正常的，基本防护即可'
      },
      {
        level: 4,
        text: '完全不在意',
        description: '虫子是自然的一部分，不在意'
      }
    ]
  },
  {
    id: 'fitness',
    category: 'fitness',
    scenario: '体能场景',
    description: '面对连续爬升、长距离行走...',
    options: [
      {
        level: 1,
        text: '体能较差',
        description: '平时较少运动，希望选择轻松路线'
      },
      {
        level: 2,
        text: '体能一般',
        description: '可以完成单日徒步，多日需要休息'
      },
      {
        level: 3,
        text: '体能尚可',
        description: '有运动基础，可以承受中等强度'
      },
      {
        level: 4,
        text: '体能很好',
        description: '经常运动，可以承受高强度挑战'
      }
    ]
  }
];
