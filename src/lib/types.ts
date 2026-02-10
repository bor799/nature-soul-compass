// ==================== MBTI 类型 ====================

export type MBTIDimension = 'I' | 'E' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P';
export type MBTIType = `${string}${string}${string}${string}`;

export interface MBTIScore {
  I: number; // 内向
  E: number; // 外向
  N: number; // 直觉
  S: number; // 实感
  T: number; // 思考
  F: number; // 情感
  J: number; // 判断
  P: number; // 感知
}

// ==================== 生存底线类型 ====================

export type SurvivalCategory = 'toilet' | 'shower' | 'bugs' | 'fitness';
export type ToleranceLevel = 1 | 2 | 3 | 4;

export interface SurvivalTolerance {
  toilet: ToleranceLevel;      // 如厕耐受度
  shower: ToleranceLevel;      // 洗澡耐受度
  bugs: ToleranceLevel;        // 虫子耐受度
  fitness: ToleranceLevel;     // 体能要求
}

// ==================== 问答类型 ====================

export type QuestionCategory = 'I_E' | 'N_S' | 'T_F' | 'J_P';

export interface MBTIQuestion {
  id: string;
  category: QuestionCategory;
  dimension: MBTIDimension;
  question: string;
  options: {
    text: string;
    value: MBTIDimension;
  }[];
}

export interface SurvivalQuestion {
  id: string;
  category: SurvivalCategory;
  scenario: string;
  description: string;
  options: {
    level: ToleranceLevel;
    text: string;
    description: string;
  }[];
}

// ==================== 目的地类型 ====================

export type SceneryType = string;
export type Season = string;

export interface MBTIAffinity {
  I: number;
  E: number;
  N: number;
  S: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface SurvivalRequirements {
  tolerance_toilet: ToleranceLevel;
  tolerance_shower: ToleranceLevel;
  tolerance_bugs: ToleranceLevel;
  physical_fitness: ToleranceLevel;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  duration_days: number;
  difficulty_level: 1 | 2 | 3 | 4 | 5;
  scenery_types: SceneryType[];
  hygiene_score: 1 | 2 | 3 | 4 | 5;           // 卫生指数，5星=独立卫浴
  period_friendliness: 1 | 2 | 3 | 4 | 5;     // 姨妈友好度
  instagrammability: 1 | 2 | 3 | 4 | 5;       // 出片率
  social_pressure: 1 | 2 | 3 | 4 | 5;         // 社交压力值，1=低压，5=高压
  crowd_level: 1 | 2 | 3 | 4 | 5;             // 拥挤程度
  maturation: 1 | 2 | 3 | 4 | 5;              // 路线成熟度
  mbti_affinity: MBTIAffinity;
  survival_requirements: SurvivalRequirements;
  highlights: string[];
  description: string;
  best_season: Season[];
  tags: string[];
}

// ==================== 推荐结果类型 ====================

export interface RecommendationScore {
  destination_id: string;
  total_score: number;
  mbti_match: number;        // MBTI契合度 (40%)
  survival_match: number;    // 生存底线匹配 (30%)
  maturation_bonus: number;  // 路线成熟度加成 (15%)
  instagram_bonus: number;   // 出片率加成 (10%)
  social_penalty: number;    // 社交压力惩罚 (5%)
  match_reason: string[];
  warnings: string[];
}

export interface QuizResult {
  mbti_type: MBTIType;
  mbti_scores: MBTIScore;
  survival_tolerance: SurvivalTolerance;
  recommendations: RecommendationScore[];
  personality_summary: {
    title: string;
    description: string;
    hiking_style: string;
  };
}

// ==================== 应用状态类型 ====================

export type QuizStage = 'landing' | 'mbti' | 'survival' | 'calculating' | 'results';

export interface QuizState {
  stage: QuizStage;
  current_mbti_question: number;
  current_survival_question: number;
  mbti_answers: Map<string, MBTIDimension>;
  survival_answers: Map<SurvivalCategory, ToleranceLevel>;
  result: QuizResult | null;

  // Actions
  setStage: (stage: QuizStage) => void;
  setMBTIQuestion: (index: number) => void;
  setSurvivalQuestion: (index: number) => void;
  answerMBTIQuestion: (questionId: string, value: MBTIDimension) => void;
  answerSurvivalQuestion: (category: SurvivalCategory, level: ToleranceLevel) => void;
  calculateResult: () => void;
  reset: () => void;
}
