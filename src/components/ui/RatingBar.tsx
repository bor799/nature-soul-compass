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
    primary: 'bg-primary',
    accent: 'bg-accent',
    leaf: 'bg-leaf-600',
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

  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      {label && (
        <div className={`${textSizeClasses[size]} text-earth-600 mb-2 font-medium`}>
          {label}
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className={`${heightClasses[size]} ${colorClasses[color]} rounded-full transition-all duration-300`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        {showValue && (
          <span className={`${textSizeClasses[size]} font-semibold text-earth-900 min-w-[2rem] text-right`}>
            {value.toFixed(1)}
          </span>
        )}
      </div>
    </div>
  );
}
