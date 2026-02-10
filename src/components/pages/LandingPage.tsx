import { useQuizStore } from '../../store/quizStore';
import { Button } from '../ui/Button';

export function LandingPage() {
  const setStage = useQuizStore((state) => state.setStage);

  const startQuiz = () => {
    setStage('mbti');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="mb-8">
        <div className="text-6xl mb-4">🧭</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
          山野灵感罗盘
        </h1>
        <p className="text-xl sm:text-2xl text-earth-700 mb-2">
          2 分钟找到适合你的徒步路线
        </p>
        <p className="text-base text-earth-600">
          基于你的性格和舒适度，智能推荐最适合的徒步目的地
        </p>
      </div>

      <div className="space-y-4 w-full max-w-sm">
        <Button onClick={startQuiz} size="lg" fullWidth>
          开始测试
        </Button>

        <div className="pt-6 text-sm text-earth-600">
          <p className="mb-2">✨ 12 道性格测试题</p>
          <p className="mb-2">🎯 4 道舒适度测试题</p>
          <p>🏔️ 获得专属推荐</p>
        </div>
      </div>
    </div>
  );
}
