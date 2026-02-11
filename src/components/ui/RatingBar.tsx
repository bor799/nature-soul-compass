import { motion } from 'framer-motion';

interface RatingBarProps {
  value: number;        // 评分值 (0-5)
  max?: number;         // 最大值 (默认 5)
  label?: string;       // 标签（如"难度等级"）
  showValue?: boolean;  // 是否显示数字
  color?: 'primary' | 'accent' | 'leaf' | 'sky';  // 颜色主题
  size?: 'sm' | 'md';   // 尺寸
}

export function RatingBar({
  value,
  max = 5,
  label,
  showValue = true,
  color = 'primary',
  size = 'md'
}: RatingBarProps) {
  const colorClasses = {
    primary: 'bg-forest-600',
    accent: 'bg-magic-gold',
    leaf: 'bg-forest-500',
    sky: 'bg-sky-500',
  };

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
  };

  const labelColorClasses = {
    sm: 'text-cream-100 opacity-80',
    md: 'text-cream-100 opacity-90',
  };

  const valueColorClasses = {
    sm: 'text-magic-gold font-semibold',
    md: 'text-magic-gold font-semibold',
  };

  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      {label && (
        <div className={`${textSizeClasses[size]} ${labelColorClasses[size]} mb-2 font-medium`}>
          {label}
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`${heightClasses[size]} ${colorClasses[color]} rounded-full transition-all duration-300`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        {showValue && (
          <span className={`${valueColorClasses[size]} min-w-[2rem] text-right`}>
            {value.toFixed(1)}
          </span>
        )}
      </div>
    </div>
  );
}
