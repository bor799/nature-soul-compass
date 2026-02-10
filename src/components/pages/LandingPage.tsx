import { useQuizStore } from '../../store/quizStore';
import { TouchSafeButton } from '../ui/TouchSafeButton';
import { Card } from '../ui/Card';
import { ForestBackground } from '../ui/ForestBackground';
import { FadeIn, StaggerIn } from '../layout/PageTransition';
import { CenteredCard } from '../layout/CenteredCard';
import { motion } from 'framer-motion';

export function LandingPage() {
  const setStage = useQuizStore((state) => state.setStage);

  const startQuiz = () => {
    setStage('mbti');
  };

  const features = [
    {
      icon: '🧠',
      title: '12题性格测试',
      description: '基于MBTI科学评估你的性格类型',
    },
    {
      icon: '🎯',
      title: '4题舒适度测试',
      description: '了解你对户外条件的接受程度',
    },
    {
      icon: '🏔️',
      title: '专属推荐',
      description: '从16条精选路线中获得最佳匹配',
    },
  ];

  return (
    <ForestBackground variant="landing">
      <CenteredCard maxWidth="lg">
        {/* Hero 内容 */}
        <div className="flex flex-col items-center text-center w-full space-y-4 sm:space-y-6">
          <FadeIn delay={0}>
            <motion.div
              className="mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-8xl sm:text-9xl">🧭</div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-900 mb-4 bg-gradient-to-r from-forest-600 via-forest-500 to-earth-600 bg-clip-text text-transparent leading-tight">
              山野灵感罗盘
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl sm:text-2xl text-earth-800 mb-3 font-medium">
              2 分钟找到适合你的徒步路线
            </p>
            <p className="text-base sm:text-lg text-earth-700 max-w-md mx-auto">
              基于MBTI性格和舒适度偏好，智能推荐最适合你的徒步目的地
            </p>
          </FadeIn>

          {/* CTA 按钮 */}
          <FadeIn delay={0.3}>
            <div className="w-full max-w-sm mt-10 mb-16">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TouchSafeButton
                  onPress={startQuiz}
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<span className="text-xl">🚀</span>}
                >
                  开始测试
                </TouchSafeButton>
              </motion.div>
            </div>
          </FadeIn>

          {/* 特性卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <StaggerIn key={index}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="text-center p-6 h-full bg-white/80 backdrop-blur-sm border-earth-200">
                    <motion.div
                      className="text-4xl mb-4"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2.5 + index * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="font-bold text-earth-900 mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-earth-600">{feature.description}</p>
                  </Card>
                </motion.div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </CenteredCard>
    </ForestBackground>
  );
}
