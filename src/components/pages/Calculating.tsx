import { useState, useEffect } from 'react';
import { ForestBackground } from '../ui/ForestBackground';
import { FadeIn } from '../layout/PageTransition';
import { CenteredCard } from '../layout/CenteredCard';
import { motion } from 'framer-motion';

// 计算阶段配置
const CALCULATING_STAGES = [
  { progress: 30, text: '分析你的性格类型...', icon: '🧠' },
  { progress: 60, text: '评估舒适度底线...', icon: '🏕️' },
  { progress: 90, text: '匹配最佳目的地...', icon: '🗺️' },
  { progress: 100, text: '准备出发！', icon: '✨' },
];

export function Calculating() {
  const [currentStage, setCurrentStage] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const stageDuration = 800; // 每个阶段 800ms

    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < CALCULATING_STAGES.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, stageDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetProgress = CALCULATING_STAGES[currentStage].progress;

    const animationInterval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < targetProgress) {
          return Math.min(prev + 2, targetProgress);
        }
        return prev;
      });
    }, 16); // ~60fps

    return () => clearInterval(animationInterval);
  }, [currentStage]);

  const stage = CALCULATING_STAGES[currentStage];

  return (
    <ForestBackground variant="calculating">
      <CenteredCard maxWidth="md">
        <FadeIn>
          <div className="text-center">
            {/* 罗盘动画 */}
            <motion.div
              className="relative w-32 h-32 mx-auto mb-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              {/* 外圈 */}
              <div className="absolute inset-0 border-4 border-sky-200 rounded-full" />
              <motion.div
                className="absolute inset-0 border-4 border-sky-500 rounded-full border-t-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              {/* 内圈 */}
              <div className="absolute inset-4 border-2 border-sky-300 rounded-full" />
              {/* 中心图标 */}
              <div className="absolute inset-0 flex items-center justify-center text-5xl">
                {stage.icon}
              </div>
            </motion.div>

            {/* 标题 */}
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-3">
              正在分析你的结果...
            </h2>
            <p className="text-sky-700 text-base mb-8">
              {stage.text}
            </p>

            {/* 进度环 */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              {/* SVG 圆环 */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* 背景圆 */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(14, 165, 233, 0.2)"
                  strokeWidth="8"
                />
                {/* 进度圆 */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - displayProgress / 100)}`}
                  animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - displayProgress / 100) }}
                  transition={{ duration: 0.3 }}
                />
                {/* 渐变定义 */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 中心百分比 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-sky-700">
                  {Math.round(displayProgress)}%
                </span>
              </div>
            </div>

            {/* 阶段指示器 */}
            <div className="flex justify-center items-center gap-2 mb-4">
              {CALCULATING_STAGES.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index <= currentStage ? 'bg-sky-500' : 'bg-sky-200'
                  }`}
                  style={{ width: index === currentStage ? '32px' : '12px' }}
                  initial={{ width: '12px' }}
                  animate={{ width: index <= currentStage ? (index === currentStage ? '32px' : '24px') : '12px' }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* 阶段描述 */}
            <div className="space-y-2 text-sm text-sky-600">
              {CALCULATING_STAGES.map((s, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-center gap-2 ${
                    index === currentStage ? 'font-semibold text-sky-800' : 'opacity-50'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index <= currentStage ? 1 : 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span>{s.icon}</span>
                  <span>{s.text}</span>
                  {index === currentStage && (
                    <motion.span
                      className="ml-2"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ...
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </CenteredCard>
    </ForestBackground>
  );
}
