import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  showText?: boolean;
  variant?: 'default' | 'forest' | 'survival' | 'sky';
}

export function ProgressBar({
  current,
  total,
  showText = false,
  variant = 'default'
}: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  const variantStyles = {
    default: {
      track: 'bg-earth-200',
      fill: 'bg-forest-600',
      text: 'text-earth-700',
    },
    forest: {
      track: 'bg-white/20',
      fill: 'bg-white',
      text: 'text-white',
    },
    survival: {
      track: 'bg-amber-200',
      fill: 'bg-earth-700',
      text: 'text-earth-800',
    },
    sky: {
      track: 'bg-sky-200',
      fill: 'bg-sky-500',
      text: 'text-sky-700',
    },
  };

  const style = variantStyles[variant];

  return (
    <div className="w-full">
      {showText && (
        <div className={`flex justify-between items-center mb-2 text-sm font-medium ${style.text}`}>
          <span>进度</span>
          <span>{current}/{total}</span>
        </div>
      )}
      <div className={`w-full ${style.track} rounded-full h-2 overflow-hidden`}>
        <motion.div
          className={`${style.fill} h-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
