interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'gradient-border' | 'elevated';
  animation?: 'none' | 'fade-in' | 'slide-up';
}

export function Card({
  children,
  className = '',
  onClick,
  variant = 'default',
  animation = 'none'
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl p-6 transition-all duration-300';

  const variantStyles = {
    default: onClick
      ? 'cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1'
      : 'shadow-soft',
    'gradient-border': 'relative shadow-soft hover:shadow-lg',
    elevated: 'shadow-lg hover:shadow-xl'
  };

  const animationStyles = {
    none: '',
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up'
  };

  if (variant === 'gradient-border') {
    return (
      <div
        className={`relative rounded-xl p-[2px] bg-gradient-forest ${animationStyles[animation]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
        onClick={onClick}
      >
        <div className="bg-white rounded-xl h-full p-5">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${animationStyles[animation]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
