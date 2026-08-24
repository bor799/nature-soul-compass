import React from 'react';
import { Question, Option } from '../types';
import GlassCard from './GlassCard';

interface QuizProps {
  question: Question;
  onAnswer: (option: Option) => void;
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ question, onAnswer, currentStep, totalSteps, onBack }) => {
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <div className="flex-1 flex flex-col justify-center py-8 px-4 animate-fadeIn z-20">
      {/* Progress Bar */}
      <div className="mb-8 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-magic-gold transition-all duration-500 ease-out shadow-[0_0_10px_#FFD700]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mb-2 text-magic-gold/80 text-xs font-serif tracking-widest uppercase flex justify-between">
        <span>{question.category}</span>
        <span>{currentStep} / {totalSteps}</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream-50 mb-4 leading-tight">
        {question.text}
      </h2>
      
      {question.description && (
        <p className="text-white/70 text-base mb-6 font-light italic border-l-2 border-magic-gold pl-3">
          {question.description}
        </p>
      )}

      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <GlassCard 
            key={idx} 
            className="group cursor-pointer hover:bg-white/20 transition-all duration-300 active:scale-[0.98] border-transparent hover:border-magic-gold/30 p-4"
          >
            <div onClick={() => onAnswer(option)} className="flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <span className="text-base font-medium text-cream-50 group-hover:text-magic-glow transition-colors">
                  {option.text}
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-magic-gold transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 text-lg">
                  ✨
                </span>
              </div>
              {option.description && (
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                  {option.description}
                </span>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        {currentStep > 1 && (
           <button 
             onClick={onBack}
             className="text-white/40 hover:text-white text-sm font-sans px-4 py-2"
           >
             ← 返回上题
           </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;