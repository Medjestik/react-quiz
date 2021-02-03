import React from 'react';
import './OpenAnswerQuestion.css';

function OpenAnswerQuestion({ question, currentQuestionIndex, confirmAnswer }) {

    const [answer, setAnswer] = React.useState('');

    function handleChangeAnswer(e) {
        setAnswer(e.target.value);
    }

    function checkAnswer () {
        const transformAnswer = answer.toLocaleLowerCase()
        if (question.answerOptions.includes(transformAnswer)) {
            confirmAnswer(true);
        } else {
            confirmAnswer(false);
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
                className={`answer__button ${(answer.length > 0) ? "" : "answer__button_type_disabled"}`} 
                type="button" 
                onClick={checkAnswer}
                >
                Ответить
                </button>
            </div>
        </div>
    )
}

export default OpenAnswerQuestion;