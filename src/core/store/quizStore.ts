import { create } from 'zustand';
import type { QuizState, MBTIDimension, ToleranceLevel, SurvivalCategory, QuizStage, Destination } from '@/shared/types';
import { mbtiQuestions } from '@/data/questions/mbtiQuestions';
import { survivalQuestions } from '@/data/questions/survivalQuestions';
import destinationsData from '@/data/destinations/destinations.json';
import { calculateMBTIType, calculateMBTIScores } from '@/core/engines/quizEngine';
import { generateQuizResult } from '@/core/engines/recommendationEngine';

// 类型安全的数据导入 - 需要类型断言因为 JSON 数据的类型更宽泛
const destinations: Destination[] = destinationsData.destinations as Destination[];

interface QuizStore extends QuizState {
  // Actions implementation
  setStage: (stage: QuizStage) => void;
  setMBTIQuestion: (index: number) => void;
  setSurvivalQuestion: (index: number) => void;
  answerMBTIQuestion: (questionId: string, value: MBTIDimension) => void;
  answerSurvivalQuestion: (category: SurvivalCategory, level: ToleranceLevel) => void;
  calculateResult: () => void;
  reset: () => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  // Initial state - 统一使用单一状态变量
  stage: 'landing',
  current_mbti_question: 0,
  current_survival_question: 0,
  mbti_answers: new Map(),
  survival_answers: new Map(),
  result: null,

  setStage: (stage) => set({ stage }),

  setMBTIQuestion: (index) => set({ current_mbti_question: index }),

  setSurvivalQuestion: (index) => set({ current_survival_question: index }),

  answerMBTIQuestion: (questionId, value) => {
    const state = get();
    const newAnswers = new Map(state.mbti_answers);
    newAnswers.set(questionId, value);
    set({ mbti_answers: newAnswers });

    // Auto advance to next question
    if (state.current_mbti_question < mbtiQuestions.length - 1) {
      set({ current_mbti_question: state.current_mbti_question + 1 });
    } else {
      // Move to survival stage
      set({ stage: 'survival' });
    }
  },

  answerSurvivalQuestion: (category, level) => {
    const state = get();
    const newAnswers = new Map(state.survival_answers);
    newAnswers.set(category, level);
    set({ survival_answers: newAnswers });

    // Auto advance to next question
    if (state.current_survival_question < survivalQuestions.length - 1) {
      set({ current_survival_question: state.current_survival_question + 1 });
    } else {
      // Calculate results
      get().calculateResult();
    }
  },

  calculateResult: () => {
    const state = get();

    // Calculate MBTI type
    const mbtiType = calculateMBTIType(state.mbti_answers);
    const mbtiScores = calculateMBTIScores(state.mbti_answers);

    // Build survival tolerance object
    const survivalTolerance = {
      toilet: state.survival_answers.get('toilet') || 2,
      shower: state.survival_answers.get('shower') || 2,
      bugs: state.survival_answers.get('bugs') || 2,
      fitness: state.survival_answers.get('fitness') || 2
    };

    // Generate recommendations
    const result = generateQuizResult(
      destinations,
      mbtiType,
      mbtiScores,
      survivalTolerance
    );

    // Update state
    set({
      stage: 'calculating',
      result
    });

    // Show results after animation
    setTimeout(() => {
      set({ stage: 'results' });
    }, 2000);
  },

  reset: () => set({
    stage: 'landing',
    current_mbti_question: 0,
    current_survival_question: 0,
    mbti_answers: new Map(),
    survival_answers: new Map(),
    result: null
  })
}));
