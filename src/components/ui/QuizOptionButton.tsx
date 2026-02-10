import { motion } from 'framer-motion';

interface QuizOptionButtonProps {
  variant?: 'default' | 'icon' | 'slider';
  selected?: boolean;
  disabled?: boolean;
  onPress: () => void;
  children: React.ReactNode;
  icon?: string;
  value?: number;
  maxValue?: number;
}

export const QuizOptionButton: React.FC<QuizOptionButtonProps> = ({
  variant = 'default',
  selected = false,
  disabled = false,
  onPress,
  children,
  icon,
  value,
  maxValue = 4,
}) => {
  const baseClasses = 'relative min-h-[52px] w-full rounded-2xl p-4 text-center transition-all duration-200';

  const variantClasses = {
    default: selected
      ? 'border-2 border-forest-green bg-green-50 shadow-forest'
      : 'border-2 border-earth-200 bg-white hover:border-forest-500 hover:bg-forest-50',
    icon: selected
      ? 'border-2 border-forest-600 bg-green-50 shadow-forest'
      : 'border-2 border-earth-200 bg-white hover:border-forest-600 hover:bg-forest-50',
    slider: selected
      ? 'border-2 border-forest-green bg-green-50'
      : 'border-2 border-earth-200 bg-white hover:border-forest-500',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      onClick={onPress}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2`}
    >
      <div className={`flex items-center gap-3 ${variant === 'slider' ? 'justify-between' : 'justify-center'}`}>
        <div className="flex items-center justify-center gap-3 flex-1">
          {icon && <span className="text-2xl flex-shrink-0">{icon}</span>}
          <span className="text-base text-earth-800 font-medium">{children}</span>
        </div>

        {/* Slider variant - level indicator */}
        {variant === 'slider' && value !== undefined && (
          <div className="flex-shrink-0 flex items-center gap-0.5">
            {[1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-2 h-6 rounded-sm transition-colors duration-200 ${
                  level <= value ? 'bg-forest-600' : 'bg-earth-200'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.button>
  );
};
