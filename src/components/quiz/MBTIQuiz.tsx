import { useQuizStore } from '../../store/quizStore';
import { mbtiQuestions } from '../../data/mbtiQuestions';
import { ProgressBar } from '../ui/ProgressBar';
import { QuizOptionButton } from '../ui/QuizOptionButton';
import { ForestBackground } from '../ui/ForestBackground';
import { FadeIn } from '../layout/PageTransition';
import { CenteredCard } from '../layout/CenteredCard';
import { motion } from 'framer-motion';

export function MBTIQuiz() {
  const { current_mbti_question, answerMBTIQuestion, setMBTIQuestion } = useQuizStore();
  const question = mbtiQuestions[current_mbti_question];

  const handleAnswer = (value: string) => {
    answerMBTIQuestion(question.id, value as any);
  };

  const handlePrevious = () => {
    if (current_mbti_question > 0) {
      setMBTIQuestion(current_mbti_question - 1);
    }
  };

  return (
    <ForestBackground variant="mbti">
      <CenteredCard maxWidth="lg">
        <FadeIn>
          <div className="space-y-4 sm:space-y-6">
            {/* 标题区域 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                性格测试
              </h2>
              <p className="text-green-100 text-base">
                选择更符合你真实想法的答案
              </p>
            </div>

            {/* 进度条 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
              <ProgressBar
                current={current_mbti_question + 1}
                total={mbtiQuestions.length}
                variant="forest"
              />
            </div>

            {/* 问题卡片 */}
            <motion.div
              key={current_mbti_question}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-forest"
            >
              <div className="space-y-6">
                {/* 问题编号 */}
                <div>
                  <span className="text-xs font-semibold text-forest-700 uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
                    问题 {current_mbti_question + 1} / {mbtiQuestions.length}
                  </span>
                </div>

                {/* 问题内容 */}
                <h3 className="text-xl sm:text-2xl font-semibold text-earth-900 leading-relaxed">
                  {question.question}
                </h3>

                {/* 选项 */}
                <div className="space-y-4 sm:space-y-5">
                  {question.options.map((option, index) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <QuizOptionButton
                        selected={false}
                        onPress={() => handleAnswer(option.value)}
                      >
                        {option.text}
                      </QuizOptionButton>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 上一题按钮 */}
            {current_mbti_question > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <button
                  onClick={handlePrevious}
                  className="text-white/90 hover:text-white font-medium text-base flex items-center gap-2 mx-auto transition-colors touch-safe"
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
