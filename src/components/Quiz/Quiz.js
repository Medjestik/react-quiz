import React from 'react';
import './Quiz.css';
import questions from '../../data/questions.js';
import StartQuiz from '../StartQuiz/StartQuiz.js';
import Score from '../Score/Score.js';
import Question from '../Question/Question.js';
import QuizReport from '../QuizReport/QuizReport.js';

function Quiz() {

    const [shuffledQuestions, setShuffledQuestions] = React.useState([]);
    const [beginQuiz, setBeginQuiz] = React.useState(false);
    const [showQuestions, setShowQuestions] = React.useState(false);
    const [showResult, setShowResult] = React.useState(false);
    const [showReport, setShowReport]= React.useState(false);
    const [score, setScore] = React.useState(0);
    const [passingScore, setPassingScore] = React.useState(0);
  
    React.useEffect(() => {
      shuffleQuestions(questions);
    }, []);

    React.useEffect(() => {
      setPassingScore(Math.round(questions.length * 0.7));
    }, []);
  
    function shuffleQuestions(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setShuffledQuestions(array);
    }
  
    return (
      <section className="quiz">
          {shuffledQuestions.length === 0 &&
          <div className="preloader"></div>
          }
          {!beginQuiz &&
              <StartQuiz
              questions={questions}
              onBeginQuiz={setBeginQuiz}
              onShowQuestions={setShowQuestions}
              passingScore={passingScore}
              />
          }
          {beginQuiz && showQuestions &&
              <Question
              questions={shuffledQuestions}
              onShowResult={setShowResult}
              onShowQuestions={setShowQuestions}
              score={score}
              setScore={setScore}
              />   
          }
          {showResult && !showQuestions &&
              <Score
              questions={questions}
              score={score}
              onShowReport={setShowReport}
              onShowResult={setShowResult}
              />
          }
          {showReport && !showResult &&
              <QuizReport
              questions={questions}
              score={score}
              />
          }
      </section>
    );
}
  
export default Quiz;