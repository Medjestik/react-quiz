import React from 'react';
import './Score.css';

function Score({ questions, score }) {

    function countPercent (currentScore, numberOfQuestions) {
        let percent = 0;
        percent = currentScore / numberOfQuestions * 100;

        return percent;
    }

    return (
        <>
        <div className='score-section'>Вы правильно ответили на {score} из {questions.length} вопросов!</div>
        <h3>{countPercent(score, questions.length)}%</h3>
        </>
    )
}

export default Score;