import { useQuizStore } from '../../store/quizStore';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function LandingPage() {
  const setStage = useQuizStore((state) => state.setStage);

  const startQuiz = () => {
    setStage('mbti');
  };

  return (
    <div className="relative overflow-hidden min-h-[80vh]">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-forest opacity-5 animate-pulse-slow"></div>

      {/* 浮动装饰 */}
      <div className="absolute top-16 left-8 text-5xl opacity-10 animate-float hidden sm:block">🏔️</div>
      <div className="absolute bottom-24 right-8 text-5xl opacity-10 animate-float-delay hidden sm:block">🌲</div>
      <div className="absolute top-1/3 right-16 text-4xl opacity-10 animate-float hidden lg:block">⛰️</div>

      {/* Hero 内容 */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-10 animate-fade-in">
          <div className="text-7xl mb-6 animate-float">🧭</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-900 mb-4 bg-gradient-to-r from-forest-600 to-earth-600 bg-clip-text text-transparent">
            山野灵感罗盘
          </h1>
          <p className="text-xl sm:text-2xl text-earth-700 mb-3">
            2 分钟找到适合你的徒步路线
          </p>
          <p className="text-base text-earth-600 max-w-md mx-auto">
            基于MBTI性格和舒适度偏好，智能推荐最适合你的徒步目的地
          </p>
        </div>

        {/* CTA 按钮 */}
        <div className="w-full max-w-sm mb-12 animate-slide-up">
          <Button onClick={startQuiz} variant="gradient" size="lg" fullWidth>
            开始测试
          </Button>
        </div>

        {/* 特性卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
          <Card className="text-center p-6 animate-slide-up" animation="fade-in">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="font-bold text-earth-900 mb-2">12题性格测试</h3>
            <p className="text-sm text-earth-600">基于MBTI科学评估你的性格类型</p>
          </Card>

          <Card className="text-center p-6 animate-slide-up" animation="fade-in">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-earth-900 mb-2">4题舒适度测试</h3>
            <p className="text-sm text-earth-600">了解你对户外条件的接受程度</p>
          </Card>

          <Card className="text-center p-6 animate-slide-up" animation="fade-in">
            <div className="text-4xl mb-3">🏔️</div>
            <h3 className="font-bold text-earth-900 mb-2">专属推荐</h3>
            <p className="text-sm text-earth-600">从16条精选路线中获得最佳匹配</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
