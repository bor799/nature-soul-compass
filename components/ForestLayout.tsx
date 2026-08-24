import React from 'react';

interface ForestLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ForestLayout: React.FC<ForestLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen w-full bg-forest-900 bg-forest-gradient text-cream-50 font-sans overflow-x-hidden selection:bg-magic-gold selection:text-forest-900 ${className}`}>
      {/* Background ambient effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Real Forest Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2000&auto=format&fit=crop")' }}
        ></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-forest-800 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-magic-gold rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-[20%] w-[60%] h-[30%] bg-forest-800 rounded-full blur-[100px] opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ForestLayout;