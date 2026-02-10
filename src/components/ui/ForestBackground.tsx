import { motion } from 'framer-motion';

interface ForestBackgroundProps {
  variant: 'landing' | 'mbti' | 'survival' | 'calculating' | 'results';
  children: React.ReactNode;
}

export const ForestBackground: React.FC<ForestBackgroundProps> = ({
  variant,
  children,
}) => {
  // 背景渐变
  const backgrounds = {
    landing: 'bg-gradient-to-b from-green-50 via-green-100 to-green-200',
    mbti: 'bg-gradient-to-b from-forest-dark via-green-900 to-green-950',
    survival: 'bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200',
    calculating: 'bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300',
    results: 'bg-gradient-to-b from-amber-50 via-yellow-100 to-yellow-200',
  };

  // 浮动装饰元素
  const floatingElements = {
    landing: [
      { icon: '🌲', top: '10%', left: '5%', delay: 0, size: 'text-4xl' },
      { icon: '🏔️', top: '20%', right: '8%', delay: 0.5, size: 'text-5xl' },
      { icon: '⛰️', top: '60%', left: '8%', delay: 1, size: 'text-4xl' },
      { icon: '🌿', top: '75%', right: '5%', delay: 1.5, size: 'text-3xl' },
      { icon: '🍃', top: '40%', right: '15%', delay: 2, size: 'text-2xl' },
    ],
    mbti: [
      { icon: '🌲', top: '15%', left: '5%', delay: 0, size: 'text-3xl' },
      { icon: '🌿', top: '65%', left: '3%', delay: 0.8, size: 'text-2xl' },
      { icon: '🍄', top: '80%', right: '5%', delay: 1.2, size: 'text-2xl' },
      { icon: '🦉', top: '25%', right: '8%', delay: 1.5, size: 'text-3xl' },
    ],
    survival: [
      { icon: '🏕️', top: '15%', left: '5%', delay: 0, size: 'text-4xl' },
      { icon: '🎒', top: '70%', left: '8%', delay: 0.6, size: 'text-3xl' },
      { icon: '⛺', top: '30%', right: '5%', delay: 1, size: 'text-4xl' },
      { icon: '🔥', top: '80%', right: '10%', delay: 1.4, size: 'text-3xl' },
      { icon: '🧭', top: '50%', left: '3%', delay: 1.8, size: 'text-2xl' },
    ],
    calculating: [
      { icon: '🧠', top: '20%', left: '5%', delay: 0, size: 'text-3xl' },
      { icon: '🗺️', top: '70%', right: '8%', delay: 0.5, size: 'text-4xl' },
      { icon: '🧭', top: '45%', right: '5%', delay: 1, size: 'text-3xl' },
      { icon: '✨', top: '85%', left: '10%', delay: 1.5, size: 'text-2xl' },
    ],
    results: [
      { icon: '🏆', top: '15%', left: '5%', delay: 0, size: 'text-4xl' },
      { icon: '⭐', top: '25%', right: '8%', delay: 0.4, size: 'text-3xl' },
      { icon: '🎉', top: '65%', left: '3%', delay: 0.8, size: 'text-4xl' },
      { icon: '✨', top: '80%', right: '5%', delay: 1.2, size: 'text-3xl' },
      { icon: '🌟', top: '45%', right: '10%', delay: 1.6, size: 'text-2xl' },
    ],
  };

  // 透明度
  const opacity = variant === 'mbti' ? '0.15' : '0.1';

  const elements = floatingElements[variant];

  return (
    <div className={`relative w-full min-h-screen ${backgrounds[variant]} overflow-hidden`}>
      {/* 浮动元素背景 */}
      <div className="absolute inset-0 pointer-events-none">
        {elements.map((elem, i) => (
          <motion.div
            key={i}
            className={`absolute ${elem.size} opacity-${opacity}`}
            style={{
              top: elem.top,
              left: elem.left,
              right: elem.right,
              opacity: parseFloat(opacity),
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: elem.delay,
            }}
          >
            {elem.icon}
          </motion.div>
        ))}
      </div>

      {/* 光斑效果 */}
      {variant === 'landing' && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      {/* 数据流动效果（Calculating 页面） */}
      {variant === 'calculating' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-sky-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
              animate={{
                y: ['-100vh', '-10vh'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* 内容 */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
