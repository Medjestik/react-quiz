import React from 'react';
import './OneAnswerQuestion.css';

function OneAnswerQuestion({ question, currentQuestionIndex, confirmAnswer }) {

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

    React.useEffect(() => {
        setAnswerSelected(false);
    }, [question]);

    return (
        <>
        <ul className="question__answer-container">
            {question.answerOptions.map((answerOption) => (
            <li className="question__answer-item" key={answerOption.answerText}>
                <label className="radio">
                    <input className="radio" name={currentQuestionIndex} type="radio" value={answerOption.answerText} onClick={()=> handleAnswerClick(answerOption.isCorrect)} defaultChecked={false}></input>
                    <span className="">{answerOption.answerText}</span>
                </label>
            </li>
            ))}
        </ul>
        <button 
        className={`answer__button ${answerSelected ? "" : "answer__button_type_disabled"}`} 
        type="button" 
        onClick={(() => confirmAnswer(correctAnswer))}
        >
        Ответить
        </button>
        </>
    )
}

export default OneAnswerQuestion;