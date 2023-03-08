import './App.css';
import { Quiz } from './components/Quiz/Quiz';
import { getQuestions } from './common/services/getQuestions';

function App() {
  const questions = getQuestions();
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export { App };
