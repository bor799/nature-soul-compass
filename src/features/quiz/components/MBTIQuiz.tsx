import { useQuizStore } from '@/core/store/quizStore';
import { mbtiQuestions } from '@/data/questions/mbtiQuestions';
import { ForestLayout } from '@/components/layout/ForestLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagicButton } from '@/components/ui/MagicButton';
import { motion, AnimatePresence } from 'framer-motion';

export function MBTIQuiz() {
  const { current_mbti_question, answerMBTIQuestion, setMBTIQuestion } = useQuizStore();
  const question = mbtiQuestions[current_mbti_question];
  const progress = ((current_mbti_question + 1) / mbtiQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    answerMBTIQuestion(question.id, value as any);
  };

  const handlePrevious = () => {
    if (current_mbti_question > 0) {
      setMBTIQuestion(current_mbti_question - 1);
    }
  };

  return (
    <ForestLayout variant="mbti">
      <div className="space-y-5">
        {/* 标题区域 */}
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-magic-gold mb-2">
            性格测试
          </h2>
          <p className="text-cream-100 opacity-90 text-base">
            选择更符合你真实想法的答案
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
          问题 {current_mbti_question + 1} / {mbtiQuestions.length}
        </div>

        {/* 问题卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current_mbti_question}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-6">
              <div className="space-y-5">
                {/* 问题内容 */}
                <h3 className="text-xl font-serif font-semibold text-cream-50 leading-relaxed text-center">
                  {question.question}
                </h3>

                {/* 选项 */}
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <MagicButton
                        onClick={() => handleAnswer(option.value)}
                        variant="primary"
                        className="w-full text-left"
                      >
                        {option.text}
                      </MagicButton>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* 上一题按钮 */}
        {current_mbti_question > 0 && (
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
