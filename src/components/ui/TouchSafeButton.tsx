import { motion } from 'framer-motion';

interface TouchSafeButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const TouchSafeButton: React.FC<TouchSafeButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onPress,
  children,
  fullWidth = false,
  icon,
}) => {
  const baseClasses = 'font-semibold rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 touch-safe';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-forest-600 to-forest-500 text-white hover:from-forest-700 hover:to-forest-600 shadow-forest',
    secondary: 'bg-earth-100 text-earth-800 hover:bg-earth-200',
    outline: 'border-2 border-forest-500 text-forest-600 hover:bg-forest-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-3 text-sm min-h-[44px]',
    md: 'px-6 py-4 text-base min-h-[52px]',
    lg: 'px-8 py-5 text-lg min-h-[56px]',
  };

  return (
    <motion.button
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      onClick={onPress}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? 'w-full' : ''
      } ${(disabled || loading) ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'} focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2`}
    >
      {loading ? (
        <>
          <motion.svg
            className="w-5 h-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </motion.svg>
          <span>处理中...</span>
        </>
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
};
