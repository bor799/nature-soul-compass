import React from 'react';

interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const MagicButton: React.FC<MagicButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden transition-all duration-300 font-serif font-bold tracking-wide py-4 px-8 rounded-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-forest-900 border border-magic-gold text-magic-gold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:bg-forest-800",
    secondary: "bg-magic-gold text-forest-900 border border-magic-gold hover:bg-yellow-400 shadow-lg shadow-magic-gold/20",
    outline: "bg-transparent border border-white/20 text-cream-50 hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default MagicButton;