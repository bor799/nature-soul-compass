interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white';

  const variantStyles = {
    primary: 'bg-forest-600 text-white hover:bg-forest-700 hover:shadow-lg focus:ring-forest-500 active:scale-[0.98]',
    secondary: 'bg-earth-500 text-white hover:bg-earth-600 hover:shadow-lg focus:ring-earth-400 active:scale-[0.98]',
    outline: 'border-2 border-forest-600 text-forest-600 hover:bg-forest-50 hover:shadow-soft focus:ring-forest-500 active:scale-[0.98]',
    gradient: 'bg-gradient-forest text-white hover:shadow-glow-forest focus:ring-forest-500 hover:brightness-110 active:scale-[0.98]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]'
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
