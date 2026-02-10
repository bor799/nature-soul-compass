interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
}

export function PageLayout({ children, maxWidth = 'md' }: PageLayoutProps) {
  const maxWidthStyles = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 via-forest-50 to-earth-100">
      <div className={`mx-auto px-4 py-8 sm:py-12 ${maxWidthStyles[maxWidth]}`}>
        {children}
      </div>
    </div>
  );
}
