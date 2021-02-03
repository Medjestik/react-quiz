import React from 'react';
import './Score.css';

function Score({ questions, score }) {

    function countPercent (currentScore, numberOfQuestions) {
        let percent = 0;
        percent = currentScore / numberOfQuestions * 100;

        return percent;
    }

    return (
        <div className="score">
            <h3 className="score__percent">{countPercent(score, questions.length)}%</h3>
            <div className="score__title">Вы правильно ответили на {score} из {questions.length} вопросов!</div>
        </div>
    )
}

export default Score;