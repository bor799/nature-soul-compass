import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-6 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;