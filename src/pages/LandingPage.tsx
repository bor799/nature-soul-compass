import { useQuizStore } from '@/core/store/quizStore';
import { TouchSafeButton } from '@/components/ui/TouchSafeButton';
import { Card } from '@/components/ui/Card';
import { ForestBackground } from '@/components/ui/ForestBackground';
import { FadeIn, StaggerIn } from '@/components/layout/PageTransition';
import { CenteredCard } from '@/components/layout/CenteredCard';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  LightBulbIcon,
  PhotoIcon,
  PaperAirplaneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// 自定义山峦 SVG 图标
const MountainIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 19l3-7 3 7m0 0l3-7 3 7"
    />
  </svg>
);

// 自定义树木 SVG 图标
const TreeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2L6 10h3v6h6v-6h3L12 2z" />
    <path d="M10 18h4v4h-4z" />
  </svg>
);

export function LandingPage() {
  const setStage = useQuizStore((state) => state.setStage);

  const startQuiz = () => {
    setStage('mbti');
  };

  const features = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: '12题性格测试',
      description: '基于MBTI科学评估你的性格类型',
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: '4题舒适度测试',
      description: '了解你对户外条件的接受程度',
    },
    {
      icon: <MountainIcon className="w-8 h-8" />,
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
              <MapPinIcon className="w-20 h-20 sm:w-24 sm:h-24 text-primary" />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-forest-500 to-earth-700 bg-clip-text text-transparent leading-tight">
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
                  icon={<PaperAirplaneIcon className="w-5 h-5" />}
                >
                  开始测试
                </TouchSafeButton>
              </motion.div>
            </div>
          </FadeIn>

          {/* 特性卡片 */}
          <div className="flex flex-col gap-4 w-full">
            {features.map((feature, index) => (
              <StaggerIn key={index}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="text-center p-6 h-full bg-white/80 backdrop-blur-sm border-earth-200">
                    <motion.div
                      className="mb-4 text-primary"
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
