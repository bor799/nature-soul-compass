import { useQuizStore } from '../../store/quizStore';
import { survivalQuestions } from '../../data/survivalQuestions';
import { ProgressBar } from '../ui/ProgressBar';
import { Card } from '../ui/Card';

export function SurvivalTest() {
  const { current_survival_question, answerSurvivalQuestion } = useQuizStore();
  const question = survivalQuestions[current_survival_question];

  const handleAnswer = (level: number) => {
    answerSurvivalQuestion(question.category, level as any);
  };

  const handlePrevious = () => {
    if (current_survival_question > 0) {
      useQuizStore.getState().setSurvivalQuestion(current_survival_question - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-earth-900 mb-2">
          舒适度测试
        </h2>
        <p className="text-earth-600 text-sm">
          诚实选择，帮助我们找到最适合你的路线
        </p>
      </div>

      <ProgressBar current={current_survival_question + 1} total={survivalQuestions.length} />

      <Card>
        <div className="space-y-6">
          <div>
            <span className="text-xs font-medium text-forest-600 uppercase tracking-wide">
              {question.scenario}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-earth-900 mt-2">
              {question.description}
            </h3>
          </div>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.level}
                onClick={() => handleAnswer(option.level)}
                className="w-full text-left p-4 rounded-lg border-2 border-earth-200 hover:border-forest-500 hover:bg-forest-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-earth-800 font-medium">{option.text}</div>
                    <div className="text-sm text-earth-600 mt-1">{option.description}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-6 rounded-sm ${
                            level <= option.level
                              ? 'bg-forest-600'
                              : 'bg-earth-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card>

      {current_survival_question > 0 && (
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
