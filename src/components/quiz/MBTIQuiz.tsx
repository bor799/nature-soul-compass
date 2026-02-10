import { useQuizStore } from '../../store/quizStore';
import { mbtiQuestions } from '../../data/mbtiQuestions';
import { ProgressBar } from '../ui/ProgressBar';
import { Card } from '../ui/Card';

export function MBTIQuiz() {
  const { current_mbti_question, answerMBTIQuestion } = useQuizStore();
  const question = mbtiQuestions[current_mbti_question];

  const handleAnswer = (value: string) => {
    answerMBTIQuestion(question.id, value as any);
  };

  const handlePrevious = () => {
    if (current_mbti_question > 0) {
      useQuizStore.getState().setMBTIQuestion(current_mbti_question - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-earth-900 mb-2">
          性格测试
        </h2>
        <p className="text-earth-600 text-sm">
          选择更符合你真实想法的答案
        </p>
      </div>

      <ProgressBar current={current_mbti_question + 1} total={mbtiQuestions.length} />

      <Card>
        <div className="space-y-6">
          <div>
            <span className="text-xs font-medium text-forest-600 uppercase tracking-wide">
              问题 {current_mbti_question + 1} / {mbtiQuestions.length}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-earth-900 mt-2">
              {question.question}
            </h3>
          </div>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 rounded-lg border-2 border-earth-200 hover:border-forest-500 hover:bg-forest-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              >
                <span className="text-earth-800 font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </Card>

      {current_mbti_question > 0 && (
        <button
          onClick={handlePrevious}
          className="text-earth-600 hover:text-earth-800 font-medium text-sm"
        >
          ← 上一题
        </button>
      )}
    </div>
  );
}
