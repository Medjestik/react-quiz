import React from 'react';
import './App.css';
import questions from '../../data/questions.js';
import Score from '../Score/Score.js';
import Question from '../Question/Question.js';

function App() {

  const [showResult, setShowResult] = React.useState(false);
  const [score, setScore] = React.useState(0);

  return (
    <div className="page">
      <div className="test">
        {showResult ?
        <Score
        questions={questions}
        score={score}
        /> 
        : 
        <Question
        questions={questions}
        setShowResult={setShowResult}
        score={score}
        setScore={setScore}
        />}
      </div>
    </div>
  );
}

export default App;
