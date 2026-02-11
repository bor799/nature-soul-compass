import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * GlassCard - 玻璃态卡片组件
 * 遵循 README 设计规范:
 * - border: 1px solid rgba(255,255,255,0.15)
 * - border-radius: 16px
 * - shadow: 0 8px 32px rgba(0,0,0,0.2)
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <motion.div
      whileHover={onClick ? { y: -2, scale: 1.01 } : {}}
      whileTap={onClick ? { scale: 0.99 } : {}}
      className={`
        relative backdrop-blur-md
        bg-white/10
        border border-white/15
        rounded-[16px]
        p-6
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
