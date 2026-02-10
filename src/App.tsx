import { useQuizStore } from './store/quizStore';
import { PageLayout } from './components/layout/PageLayout';
import { LandingPage } from './components/pages/LandingPage';
import { MBTIQuiz } from './components/quiz/MBTIQuiz';
import { SurvivalTest } from './components/quiz/SurvivalTest';
import { Calculating } from './components/pages/Calculating';
import { ResultsPage } from './components/pages/ResultsPage';

function App() {
  const stage = useQuizStore((state) => state.stage);

  return (
    <PageLayout maxWidth="md">
      {stage === 'landing' && <LandingPage />}
      {stage === 'mbti' && <MBTIQuiz />}
      {stage === 'survival' && <SurvivalTest />}
      {stage === 'calculating' && <Calculating />}
      {stage === 'results' && <ResultsPage />}
    </PageLayout>
  );
}

export default App;
