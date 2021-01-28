import React from 'react';
import './Question.css';
import NavQuestion from '../NavQuestion/NavQuestion.js';

function Question({ questions, setShowResult, score, setScore }) {

    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [answeredQuestion, setAnsweredQuestion] = React.useState(1);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);
    const [answerSelected, setAnswerSelected] = React.useState(false);
    const CountQuestions = 4;

    function findSkipQuestion(element, index) {
      if (!element.answerReceived) {
        setCurrentQuestion(index);
      }
    }
  
    function handleAnswerClick (isCorrect) {
      setAnswerSelected(true);
        if (isCorrect) {
          setCorrectAnswer(true);
        } else {
          setCorrectAnswer(false);
        }
    };

    function handleSubmit(e) {
      e.preventDefault();

      if (correctAnswer) {
        setScore(score + 1);
      }

      questions[currentQuestion].answerReceived = true;
      setAnsweredQuestion(answeredQuestion + 1);
      
      const nextQuestion = currentQuestion + 1;
      if (answeredQuestion < CountQuestions) {
        if (nextQuestion < questions.length && questions[nextQuestion].answerReceived === false) {
          setCurrentQuestion(nextQuestion);
          setAnswerSelected(false);
        } else {
          questions.find(findSkipQuestion);
          setAnswerSelected(false);
        }
      } else {
        setShowResult(true);
      }
    }

    return (
        <div className="question">
            <div className="question__header">
                <span className="question__count">Вопрос {currentQuestion + 1} из {questions.length}</span>
            </div>
            <div className="question__container">
              <h2 className="question__title">{questions[currentQuestion].questionText}</h2>
              <ul className="question__answer-container">
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <li className="question__answer-item" key={index}>
                      <label className="question__answer-radio">
                        <input className="radio" name={currentQuestion} type="radio" value={answerOption.answerText} onClick={()=> handleAnswerClick(answerOption.isCorrect)}></input>
                        <span className={`checkbox ${answerSelected ? "visible-checkbox" : ""}`}></span>
                      </label>
                      <span className="question__answer-text">{answerOption.answerText}</span>
                    </li>
                  ))}
                  <button className={`answer__button ${answerSelected ? "" : "answer__button_type_disabled"}`} type="submit" onClick={handleSubmit}>Ответить</button>
                  <nav className="nav-question__menu">{questions.map((question, index) => 
                    <NavQuestion
                    question={question}
                    index={index}
                    key={index}
                    setCurrentQuestion={setCurrentQuestion}
                    setAnswerSelected={setAnswerSelected}
                    />
                  )}</nav>
              </ul>
            </div>
        </div>
    )
}

export default Question;