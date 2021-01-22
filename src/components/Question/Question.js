import React from 'react';
import './Question.css';

function Question({ questions, setShowResult, score, setScore }) {

    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);
    const [answerSelected, setAnswerSelected] = React.useState(false);

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
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setAnswerSelected(false);
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
              </ul>
            </div>
        </div>
    )
}

export default Question;