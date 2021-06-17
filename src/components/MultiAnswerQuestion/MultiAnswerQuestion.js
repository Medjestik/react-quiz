import React from 'react';
import PropTypes from 'prop-types';
import './MultiAnswerQuestion.css';

function MultiAnswerQuestion({ question, currentQuestionIndex, confirmAnswer }) {

    const [answerSelected, setAnswerSelected] = React.useState(false);
    const [rightAnswers, setRightAnswers] = React.useState([]);
    const [userAnswer, setUserAnswer] = React.useState([]);

    function checkAnswer () {
        let strokeAnswer = userAnswer.join(', ');
        if (rightAnswers.length === userAnswer.length) {
            let compareArray = 0;
            for( let i = 0; i < rightAnswers.length; i++ ) {
                for( let j = 0; j < userAnswer.length; j++ ) {
                    if(rightAnswers[i] === userAnswer[j]) {
                        compareArray++
                        break;
                    }
                }
            }
            compareArray === rightAnswers.length ? confirmAnswer(true, strokeAnswer): confirmAnswer(false, strokeAnswer);
        } 
        confirmAnswer(false, strokeAnswer);
    }

    React.useEffect(() => {
        let answers = [];
        question.answerOptions.forEach((item) => {
            if (item.isCorrect) {
                answers.push(item.answerText);
            }
        })
        setRightAnswers(answers);
    }, [question]);

    function checkActiveButton (answerArray) {
        if (answerArray.length === 0) {
            setAnswerSelected(false);
        } else {
            setAnswerSelected(true);
        }
    }

    function handleAnswerClick (answerText) {
        let answerArray = userAnswer;    
        if (answerArray.includes(answerText)) {
            answerArray.splice(answerArray.indexOf(answerText), 1);
        } else {
            answerArray.push(answerText);
        }
        checkActiveButton(answerArray);
        setUserAnswer(answerArray);
    };

    React.useEffect(() => {
        setAnswerSelected(false);
    }, [question]);

    return (
        <>
        <ul className="question__answer-container">
            {question.answerOptions.map((answerOption) => (
            <li className="question__answer-item" key={answerOption.answerText}>
                <label className="checkbox">
                    <input name={currentQuestionIndex} type="checkbox" value={answerOption.answerText} onClick={(e)=> handleAnswerClick(answerOption.answerText)}></input>
                    <span>{answerOption.answerText}</span>
                </label>
            </li>
            ))}
        </ul>
        <button 
        className={`btn answer__button ${answerSelected ? "" : "answer__button_type_disabled"}`} 
        type="button" 
        onClick={(() => checkAnswer())}
        >
        Ответить
        </button>
        </>
    )
}

MultiAnswerQuestion.propTypes = {
    question: PropTypes.object,
    currentQuestionIndex: PropTypes.number,
    confirmAnswer: PropTypes.func,
  }

export default MultiAnswerQuestion;