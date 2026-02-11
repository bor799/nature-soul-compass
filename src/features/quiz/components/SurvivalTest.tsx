import { useQuizStore } from '@/core/store/quizStore';
import { survivalQuestions } from '@/data/questions/survivalQuestions';
import { ForestLayout } from '@/components/layout/ForestLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagicButton } from '@/components/ui/MagicButton';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/outline';

export function SurvivalTest() {
  const { current_survival_question, answerSurvivalQuestion, setSurvivalQuestion } = useQuizStore();
  const question = survivalQuestions[current_survival_question];
  const progress = ((current_survival_question + 1) / survivalQuestions.length) * 100;

  const handleAnswer = (level: number) => {
    answerSurvivalQuestion(question.category, level as any);
  };

  const handlePrevious = () => {
    if (current_survival_question > 0) {
      setSurvivalQuestion(current_survival_question - 1);
    }
  };

  return (
    <ForestLayout variant="survival">
      <div className="space-y-5">
        {/* 标题区域 */}
        <div className="text-center">
          <motion.div
            className="mb-3 inline-block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HomeIcon className="w-14 h-14 text-magic-gold" />
          </motion.div>
          <h2 className="text-2xl font-serif font-bold text-cream-50 mb-2">
            舒适度测试
          </h2>
          <p className="text-cream-100 opacity-90 text-base">
            诚实选择，帮助我们找到最适合你的路线
          </p>
        </div>

        {/* 进度条 */}
        <div className="w-full bg-forest-glass backdrop-blur-sm rounded-full p-1">
          <motion.div
            className="h-2 bg-magic-gold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* 进度文字 */}
        <div className="text-center text-cream-100 opacity-80 text-sm">
          问题 {current_survival_question + 1} / {survivalQuestions.length}
        </div>

        {/* 问题卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current_survival_question}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-6">
              <div className="space-y-5">
                {/* 场景标签 */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-magic-gold/20 text-magic-gold text-xs font-semibold uppercase tracking-wider rounded-full">
                    {question.scenario}
                  </span>
                </div>

                {/* 问题内容 */}
                <h3 className="text-xl font-serif font-semibold text-cream-50 leading-relaxed text-center">
                  {question.description}
                </h3>

                {/* 选项 - 滑块样式 */}
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.div
                      key={option.level}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <MagicButton
                        onClick={() => handleAnswer(option.level)}
                        variant="primary"
                        className="w-full text-left px-5 py-4"
                      >
                        <div className="flex items-start justify-between w-full">
                          <div className="flex-1">
                            <div className="text-cream-50 font-semibold text-base mb-1">
                              {option.text}
                            </div>
                            <div className="text-cream-100 opacity-80 text-sm">
                              {option.description}
                            </div>
                          </div>
                          {/* 刻度指示 */}
                          <div className="flex gap-1 ml-3">
                            {[1, 2, 3, 4].map((level) => (
                              <div
                                key={level}
                                className={`w-2 h-2 rounded-full ${
                                  level === option.level
                                    ? 'bg-magic-gold'
                                    : 'bg-white/30'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </MagicButton>
                    </motion.div>
                  ))}
                </div>

                {/* 刻度说明 */}
                <div className="flex justify-between items-center text-xs text-cream-100 opacity-70 px-2">
                  <span>能接受</span>
                  <span>轻度</span>
                  <span>中度</span>
                  <span>完全不行</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* 上一题按钮 */}
        {current_survival_question > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button
              onClick={handlePrevious}
              className="text-cream-100 opacity-80 hover:opacity-100 font-medium text-base flex items-center gap-2 mx-auto transition-opacity"
            >
              <span>←</span>
              <span>上一题</span>
            </button>
          </motion.div>
        )}
      </div>
    </ForestLayout>
  );
}
