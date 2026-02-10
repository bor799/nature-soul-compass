interface CenteredCardProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CenteredCard({
  children,
  maxWidth = 'lg',
  className = ''
}: CenteredCardProps) {
  const maxWidthStyles = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl'
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 ${className}`}>
      <div className={`w-full ${maxWidthStyles[maxWidth]} mx-auto`}>
        {children}
      </div>
    </div>
  );
}
