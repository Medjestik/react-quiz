import React from 'react';
import './App.css';
import questions from '../../data/questions.js';
import Score from '../Score/Score.js';
import Question from '../Question/Question.js';

function App() {

  const [shuffledQuestions, setShuffledQuestions] = React.useState([]);

  React.useEffect(() => {
    shuffleQuestions(questions);
  }, []);

  function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledQuestions(array)
  }

  const [showResult, setShowResult] = React.useState(false);
  const [score, setScore] = React.useState(0);

  return (
    (shuffledQuestions.length === 0)
    ?
    <div></div>
    :
    <div className="page">
      <div className="test">
        {showResult ?
        <Score
        questions={questions}
        score={score}
        /> 
        :
        <Question
        questions={shuffledQuestions}
        setShowResult={setShowResult}
        score={score}
        setScore={setScore}
        />
        }
      </div>
    </div>

  );
}

export default App;
