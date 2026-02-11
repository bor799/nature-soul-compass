import React from 'react';
import { motion } from 'framer-motion';

interface ForestLayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'forest' | 'sunset' | 'landing' | 'mbti' | 'survival' | 'calculating' | 'results';
}

/**
 * ForestLayout - 森林主题布局组件
 *
 * 新设计系统规范：
 * - 绝对居中布局
 * - 最大宽度 max-w-md (约 450px，模拟 APP 体验)
 * - 固定背景层防止白边
 * - 安全区域适配 (iPhone 底部横条)
 */
export const ForestLayout: React.FC<ForestLayoutProps> = ({
  children,
  className = '',
  variant = 'forest'
}) => {
  // 背景渐变配置
  const gradients = {
    forest: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    sunset: 'radial-gradient(circle at center, #b45309 0%, #292524 100%)',
    landing: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    mbti: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    survival: 'radial-gradient(circle at center, #b45309 0%, #292524 100%)',
    calculating: 'radial-gradient(circle at center, #1a5c38 0%, #0f3e21 100%)',
    results: 'radial-gradient(circle at center, #b45309 0%, #292524 100%)',
  };

  return (
    <div className={`relative min-h-screen w-full ${className}`}>
      {/* 固定背景层 - 防止白边 */}
      <div
        className="fixed inset-0 -z-10"
        style={{ background: gradients[variant] }}
      >
        {/* 魔法光效 - 微弱的金色光晕 */}
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
      </div>

      {/* 内容容器 - 绝对居中 + 最大宽度限制 */}
      <div className="min-h-screen flex items-center justify-center px-4 py-6">
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>

      {/* 安全区域适配 - iPhone 底部横条 */}
      <div className="safe-bottom fixed bottom-0 left-0 right-0 h-0 pointer-events-none" />
    </div>
  );
};
