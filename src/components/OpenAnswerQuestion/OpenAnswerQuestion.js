import React from 'react';
import PropTypes from 'prop-types';
import './OpenAnswerQuestion.css';

function OpenAnswerQuestion({ question, currentQuestionIndex, confirmAnswer }) {

    const [answer, setAnswer] = React.useState('');

    function handleChangeAnswer(e) {
        setAnswer(e.target.value);
    }

    function checkAnswer () {
        const transformUserAnswer = answer.toLocaleLowerCase();
        const transformRightAnswer = question.answerOptions.map((elem) => {
            return elem.toLocaleLowerCase();
        });
        
        if (transformRightAnswer.includes(transformUserAnswer)) {
            confirmAnswer(true, transformUserAnswer);
        } else {
            confirmAnswer(false, transformUserAnswer);
        }
    }

    React.useEffect(() => {
        setAnswer('');
    }, [question]);

    return (
        <div className="question__answer-container">
            <div className="open-answer">
                <input
                className="open-answer__input"
                name={currentQuestionIndex}
                id="openAnswer"
                value={answer}
                onChange={handleChangeAnswer}
                type="text"
                placeholder="введите ответ"
                minLength="1"
                required
                >
                </input>
                <button 
                className={`btn answer__button ${(answer.length > 0) ? "" : "answer__button_type_disabled"}`} 
                type="button" 
                onClick={checkAnswer}
                >
                Ответить
                </button>
            </div>
        </div>
    )
}

OpenAnswerQuestion.propTypes = {
    question: PropTypes.object,
    currentQuestionIndex: PropTypes.number,
    confirmAnswer: PropTypes.func,
}

export default OpenAnswerQuestion;