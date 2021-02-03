import React from 'react';
import './Quiz.css';
import questions from '../../data/questions.js';
import StartQuiz from '../StartQuiz/StartQuiz.js';
import Score from '../Score/Score.js';
import Question from '../Question/Question.js';

function Quiz() {

    const [shuffledQuestions, setShuffledQuestions] = React.useState([]);
    const [beginQuiz, setBeginQuiz] = React.useState(false);
    const [showResult, setShowResult] = React.useState(false);
    const [score, setScore] = React.useState(0);
  
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
  
    return (
      <section className="quiz">
          {shuffledQuestions.length === 0 &&
          <div className="preloader"></div>
          }
          {!beginQuiz &&
              <StartQuiz
              onClickStart={setBeginQuiz}
              />
          }
          {showResult &&
              <Score
              questions={questions}
              score={score}
              />
          }
          {beginQuiz && !showResult &&
              <Question
              questions={shuffledQuestions}
              setShowResult={setShowResult}
              score={score}
              setScore={setScore}
              />   
          }
      </section>
    );
}
  
export default Quiz;