import React from 'react';
import { motion } from 'framer-motion';

interface MagicButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'active';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * MagicButton - 魔法按钮
 * 遵循 README 设计规范:
 * - 默认: 深绿底 + 金色边框
 * - 激活: 金色填充 + 深绿文字 + 外发光
 * - 最小高度: 48px (iOS HIG)
 */
export const MagicButton: React.FC<MagicButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseStyles = `
    relative overflow-hidden
    rounded-xl
    font-semibold
    transition-all duration-200
    min-h-[48px]
    px-6
  `;

  const variantStyles = {
    primary: `
      bg-[#0f3e21]
      border-2 border-[#FFD700]
      text-[#FFD700]
    `,
    active: `
      bg-[#FFD700]
      text-[#0f3e21]
    `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={variant === 'active' ? {
        boxShadow: '0 0 15px rgba(255, 215, 0, 0.4)',
      } : {}}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
