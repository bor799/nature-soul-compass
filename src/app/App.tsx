import { useQuizStore } from '@/core/store/quizStore';
import { PageLayout } from '@/components/layout/PageLayout';
import { LandingPage } from '@/pages/LandingPage';
import { MBTIQuiz } from '@/pages/MBTIQuizPage';
import { SurvivalTest } from '@/pages/SurvivalTestPage';
import { Calculating } from '@/pages/CalculatingPage';
import { ResultsPage } from '@/pages/ResultsPage';
import { PageTransition } from '@/components/layout/PageTransition';
import { useMemo } from 'react';

function App() {
  const stage = useQuizStore((state) => state.stage);

  // 定义阶段顺序，用于确定滑动方向
  const stageOrder = ['landing', 'mbti', 'survival', 'calculating', 'results'];
  const direction = useMemo(() => {
    const currentIndex = stageOrder.indexOf(stage);
    const prevIndex = stageOrder.indexOf(useQuizStore.getState().stage);
    return currentIndex > prevIndex ? 1 : -1;
  }, [stage]);

  return (
    <PageLayout>
      <PageTransition stage={stage} direction={direction}>
        {stage === 'landing' && <LandingPage />}
        {stage === 'mbti' && <MBTIQuiz />}
        {stage === 'survival' && <SurvivalTest />}
        {stage === 'calculating' && <Calculating />}
        {stage === 'results' && <ResultsPage />}
      </PageTransition>
    </PageLayout>
  );
}

export default App;
