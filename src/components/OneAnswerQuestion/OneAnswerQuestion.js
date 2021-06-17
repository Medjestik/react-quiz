import React from 'react';
import PropTypes from 'prop-types';
import './OneAnswerQuestion.css';

function OneAnswerQuestion({ question, currentQuestionIndex, confirmAnswer }) {

    const [correctAnswer, setCorrectAnswer] = React.useState(false);
    const [answerSelected, setAnswerSelected] = React.useState(false);
    const [userAnswer, setUserAnswer] = React.useState('');

    function handleAnswerClick (answer) {
        setAnswerSelected(true);
        setUserAnswer(answer.answerText);
          if (answer.isCorrect) {
            setCorrectAnswer(true);
          } else {
            setCorrectAnswer(false);
        }
    };

    React.useEffect(() => {
        setAnswerSelected(false);
    }, [question]);

    return (
        <>
        <ul className="question__answer-container">
            {question.answerOptions.map((answerOption) => (
            <li className="question__answer-item" key={answerOption.answerText}>
                <label className="radio">
                    <input className="radio" name={currentQuestionIndex} type="radio" value={answerOption.answerText} onClick={()=> handleAnswerClick(answerOption)} defaultChecked={false}></input>
                    <span className="">{answerOption.answerText}</span>
                </label>
            </li>
            ))}
        </ul>
        <button 
        className={`btn answer__button ${answerSelected ? "" : "answer__button_type_disabled"}`} 
        type="button" 
        onClick={(() => confirmAnswer(correctAnswer, userAnswer))}
        >
        Ответить
        </button>
        </>
    )
}

OneAnswerQuestion.propTypes = {
    question: PropTypes.object,
    currentQuestionIndex: PropTypes.number,
    confirmAnswer: PropTypes.func,
  }

export default OneAnswerQuestion;