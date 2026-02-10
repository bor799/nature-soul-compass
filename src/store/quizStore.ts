import { create } from 'zustand';
import type { QuizState, MBTIDimension, ToleranceLevel, SurvivalCategory, QuizStage, Destination } from '../lib/types';
import { mbtiQuestions } from '../data/mbtiQuestions';
import { survivalQuestions } from '../data/survivalQuestions';
import destinationsData from '../../data/destinations.json';
import { calculateMBTIType, calculateMBTIScores } from '../lib/quizEngine';
import { generateQuizResult } from '../lib/recommendationEngine';

// 类型安全的数据导入 - 需要类型断言因为 JSON 数据的类型更宽泛
const destinations: Destination[] = destinationsData.destinations as Destination[];

interface QuizStore extends QuizState {
  // Internal state
  _mbtiAnswers: Map<string, MBTIDimension>;
  _survivalAnswers: Map<SurvivalCategory, ToleranceLevel>;

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
  // Initial state
  stage: 'landing',
  current_mbti_question: 0,
  current_survival_question: 0,
  mbti_answers: new Map(),
  survival_answers: new Map(),
  result: null,
  _mbtiAnswers: new Map(),
  _survivalAnswers: new Map(),

  setStage: (stage) => set({ stage }),

  setMBTIQuestion: (index) => set({ current_mbti_question: index }),

  setSurvivalQuestion: (index) => set({ current_survival_question: index }),

  answerMBTIQuestion: (questionId, value) => {
    const state = get();
    state._mbtiAnswers.set(questionId, value);
    set({ _mbtiAnswers: new Map(state._mbtiAnswers) });

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
    state._survivalAnswers.set(category, level);
    set({ _survivalAnswers: new Map(state._survivalAnswers) });

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
    const mbtiType = calculateMBTIType(state._mbtiAnswers);
    const mbtiScores = calculateMBTIScores(state._mbtiAnswers);

    // Build survival tolerance object
    const survivalTolerance = {
      toilet: state._survivalAnswers.get('toilet') || 2,
      shower: state._survivalAnswers.get('shower') || 2,
      bugs: state._survivalAnswers.get('bugs') || 2,
      fitness: state._survivalAnswers.get('fitness') || 2
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
      mbti_answers: new Map(state._mbtiAnswers),
      survival_answers: new Map(state._survivalAnswers),
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
    result: null,
    _mbtiAnswers: new Map(),
    _survivalAnswers: new Map()
  })
}));
