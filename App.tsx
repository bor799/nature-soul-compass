import React, { useState } from 'react';
import ForestLayout from './components/ForestLayout';
import MagicButton from './components/MagicButton';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { questions } from './data/questions';
import { getRecommendations } from './lib/recommendation';
import { UserState, Option, Destination, MbtiDimension } from './types';

const INITIAL_STATE: UserState = {
  answers: {},
  currentStep: 0,
  isFinished: false,
  mbtiCounts: { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 },
  survivalLevels: {
    toilet: 1,
    shower: 1,
    bugs: 1,
    fitness: 1
  }
};

const App: React.FC = () => {
  const [userState, setUserState] = useState<UserState>(INITIAL_STATE);
  const [recommendations, setRecommendations] = useState<Destination[]>([]);

  const handleStart = () => {
    setUserState(prev => ({ ...prev, currentStep: 1 }));
  };

  const handleAnswer = (option: Option) => {
    const currentQ = questions[userState.currentStep - 1];
    
    setUserState(prev => {
      const newState = { ...prev };
      
      // Save Answer
      newState.answers[currentQ.id] = option.value;

      // Update Scoring Logic
      if (currentQ.type === 'mbti' && currentQ.dimension) {
        // Option value is 'E', 'I', etc.
        const val = option.value as MbtiDimension;
        newState.mbtiCounts[val] = (newState.mbtiCounts[val] || 0) + 1;
      } else if (currentQ.type === 'survival') {
        // Option value is number 1-4
        // Map specific question IDs to state keys
        if (currentQ.id === 'toilet') newState.survivalLevels.toilet = option.value;
        if (currentQ.id === 'shower') newState.survivalLevels.shower = option.value;
        if (currentQ.id === 'bugs') newState.survivalLevels.bugs = option.value;
        if (currentQ.id === 'fitness') newState.survivalLevels.fitness = option.value;
      }

      // Progress
      const nextStep = prev.currentStep + 1;
      const isFinished = nextStep > questions.length;
      
      newState.currentStep = nextStep;
      newState.isFinished = isFinished;

      return newState;
    });
  };

  // Calculate results when finished
  React.useEffect(() => {
    if (userState.isFinished) {
      const recs = getRecommendations(userState);
      setRecommendations(recs);
    }
  }, [userState.isFinished]); // Removed userState.scores dependency as it's not flat anymore

  const handleRestart = () => {
    setUserState(INITIAL_STATE);
    setRecommendations([]);
  };

  const handleBack = () => {
     setUserState(prev => ({
       ...prev,
       currentStep: Math.max(1, prev.currentStep - 1)
     }));
  };

  // Render Logic
  let content;
  if (userState.currentStep === 0) {
    // Landing Page
    content = (
      <div className="flex-1 flex flex-col justify-center items-center text-center p-6 animate-fadeIn z-20">
        <div className="mb-6 relative">
             <div className="absolute inset-0 bg-magic-gold blur-[60px] opacity-20 rounded-full"></div>
             <span className="text-6xl relative z-10">🌲</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-50 mb-4 drop-shadow-lg">
          山野灵感罗盘
        </h1>
        <p className="text-lg text-magic-glow font-serif italic mb-8 opacity-90">
          "Nature Soul Compass"
        </p>
        <p className="text-white/80 max-w-xs leading-relaxed mb-12">
          为每一颗渴望山野的灵魂，找到最契合的栖息地。
          <br/>
          <span className="text-xs text-white/50 mt-2 block">
             MBTI性格匹配 · 生存底线评估 · 沉浸式推荐
          </span>
        </p>
        <MagicButton onClick={handleStart} className="w-48 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
          开始探索
        </MagicButton>
      </div>
    );
  } else if (userState.isFinished) {
    content = <Results recommendations={recommendations} onRestart={handleRestart} />;
  } else {
    const currentQ = questions[userState.currentStep - 1];
    content = (
      <Quiz 
        question={currentQ} 
        onAnswer={handleAnswer} 
        currentStep={userState.currentStep}
        totalSteps={questions.length}
        onBack={handleBack}
      />
    );
  }

  return (
    <ForestLayout>
      <header className="p-4 flex justify-center absolute top-0 w-full z-20">
         <div className="w-8 h-1 bg-white/10 rounded-full"></div>
      </header>
      {content}
    </ForestLayout>
  );
};

export default App;