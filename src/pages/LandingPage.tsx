import { useQuizStore } from '@/core/store/quizStore';
import { ForestLayout } from '@/components/layout/ForestLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagicButton } from '@/components/ui/MagicButton';
import { motion } from 'framer-motion';
import { MapPinIcon, LightBulbIcon, SparklesIcon } from '@heroicons/react/24/outline';

// 自定义山峦 SVG 图标
const MountainIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 19l3-7 3 7m0 0l3-7 3 7" />
  </svg>
);

// 自定义树木 SVG 图标
const TreeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
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
      icon: <MountainIcon className="w-8 h-8" />,
      title: '4题舒适度测试',
      description: '了解你对户外条件的接受程度',
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: '专属推荐',
      description: '从16条精选路线中获得最佳匹配',
    },
  ];

  return (
    <ForestLayout variant="landing">
      <div className="flex flex-col items-center text-center w-full space-y-6">
        {/* Logo 图标动画 */}
        <motion.div
          className="mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MapPinIcon className="w-20 h-20 text-magic-gold" />
        </motion.div>

        {/* 主标题 */}
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-magic-gold mb-2 leading-tight">
          山野灵感罗盘
        </h1>

        {/* 副标题 */}
        <p className="text-xl text-cream-100 opacity-90 font-medium mb-2">
          2 分钟找到适合你的徒步路线
        </p>
        <p className="text-base text-cream-primary opacity-80 max-w-xs">
          基于MBTI性格和舒适度偏好<br />智能推荐最适合你的徒步目的地
        </p>

        {/* CTA 按钮 */}
        <div className="w-full max-w-xs mt-8 mb-10">
          <MagicButton onClick={startQuiz} variant="primary" className="w-full">
            开始测试
          </MagicButton>
        </div>

        {/* 特性卡片 */}
        <div className="flex flex-col gap-4 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <GlassCard className="text-center p-5">
                <motion.div
                  className="mb-3 text-magic-gold"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.5 + index * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-serif font-bold text-cream-50 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-cream-100 opacity-80">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </ForestLayout>
  );
}
