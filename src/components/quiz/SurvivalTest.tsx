import { useQuizStore } from '../../store/quizStore';
import { survivalQuestions } from '../../data/survivalQuestions';
import { ProgressBar } from '../ui/ProgressBar';
import { QuizOptionButton } from '../ui/QuizOptionButton';
import { ForestBackground } from '../ui/ForestBackground';
import { FadeIn } from '../layout/PageTransition';
import { CenteredCard } from '../layout/CenteredCard';
import { motion } from 'framer-motion';

export function SurvivalTest() {
  const { current_survival_question, answerSurvivalQuestion, setSurvivalQuestion } = useQuizStore();
  const question = survivalQuestions[current_survival_question];

  const handleAnswer = (level: number) => {
    answerSurvivalQuestion(question.category, level as any);
  };

  const handlePrevious = () => {
    if (current_survival_question > 0) {
      setSurvivalQuestion(current_survival_question - 1);
    }
  };

  return (
    <ForestBackground variant="survival">
      <CenteredCard maxWidth="lg">
        <FadeIn>
          <div className="space-y-4 sm:space-y-6">
            {/* 标题区域 */}
            <div className="text-center">
              <motion.div
                className="text-5xl mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                🏕️
              </motion.div>
              <h2 className="text-3xl font-bold text-earth-900 mb-2">
                舒适度测试
              </h2>
              <p className="text-earth-700 text-base">
                诚实选择，帮助我们找到最适合你的路线
              </p>
            </div>

            {/* 进度条 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-full p-1 shadow-soft">
              <ProgressBar
                current={current_survival_question + 1}
                total={survivalQuestions.length}
                variant="survival"
              />
            </div>

            {/* 问题卡片 */}
            <motion.div
              key={current_survival_question}
              initial={{ x: 50, opacity: 0, rotateY: 10 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-strong"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="space-y-6">
                {/* 场景标签 */}
                <div>
                  <span className="text-xs font-semibold text-earth-700 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full inline-block">
                    {question.scenario}
                  </span>
                </div>

                {/* 问题内容 */}
                <h3 className="text-xl sm:text-2xl font-semibold text-earth-900 leading-relaxed">
                  {question.description}
                </h3>

                {/* 选项 - 滑块样式 */}
                <div className="space-y-4 sm:space-y-5">
                  {question.options.map((option, index) => (
                    <motion.div
                      key={option.level}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <QuizOptionButton
                        variant="slider"
                        selected={false}
                        onPress={() => handleAnswer(option.level)}
                        value={option.level}
                      >
                        <div className="flex items-start justify-between w-full">
                          <div>
                            <div className="text-earth-800 font-semibold text-base mb-1">
                              {option.text}
                            </div>
                            <div className="text-earth-600 text-sm">
                              {option.description}
                            </div>
                          </div>
                        </div>
                      </QuizOptionButton>
                    </motion.div>
                  ))}
                </div>

                {/* 刻度说明 */}
                <div className="flex justify-between items-center text-xs text-earth-500 px-2">
                  <span>能接受</span>
                  <span>轻度</span>
                  <span>中度</span>
                  <span>完全不行</span>
                </div>
              </div>
            </motion.div>

            {/* 上一题按钮 */}
            {current_survival_question > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <button
                  onClick={handlePrevious}
                  className="text-earth-700 hover:text-earth-900 font-medium text-base flex items-center gap-2 mx-auto transition-colors touch-safe"
                >
                  <span>←</span>
                  <span>上一题</span>
                </button>
              </motion.div>
            )}
          </div>
        </FadeIn>
      </CenteredCard>
    </ForestBackground>
  );
}
