import React from 'react';
import { motion } from 'framer-motion';

type ForestBackgroundVariant = 'forest' | 'sunset' | 'meadow' | 'landing' | 'mbti' | 'survival' | 'calculating' | 'results';

interface ForestBackgroundProps {
  children: React.ReactNode;
  variant?: ForestBackgroundVariant;
  className?: string;
}

/**
 * ForestBackground - 森林渐变背景
 * 遵循 README: radial-gradient 营造景深
 * 同时保持与现有页面变体的兼容性
 */
export const ForestBackground: React.FC<ForestBackgroundProps> = ({
  children,
  variant = 'forest',
  className = ''
}) => {
  // README 规范的径向渐变
  const gradients: Record<ForestBackgroundVariant, string> = {
    // README 标准变体
    forest: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    sunset: 'radial-gradient(circle at center, #b45309 0%, #292524 100%)',
    meadow: 'radial-gradient(circle at center, #166534 0%, #0f3e21 100%)',

    // 页面特定变体 (使用 README 规范的颜色)
    landing: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    mbti: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    survival: 'radial-gradient(circle at center, #b45309 0%, #292524 100%)',
    calculating: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    results: 'radial-gradient(circle at center, #b45309 0%, #292524 100%)',
  };

  return (
    <div
      className={`relative min-h-screen w-full ${className}`}
      style={{
        background: gradients[variant],
        minHeight: '100vh',
      }}
    >
      {/* Light spot effect for depth - README 规范 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* 内容容器 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
