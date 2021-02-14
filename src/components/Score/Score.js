import React from 'react';
import './Score.css';

function Score({ questions, score, onShowReport, onShowResult }) {

    function countPercent (currentScore, numberOfQuestions) {
        let percent = 0;
        percent = currentScore / numberOfQuestions * 100;

        return Math.round(percent);
    }

    function showReport() {
        onShowReport(true);
        onShowResult(false);
    }

    return (
        <div className="score">
            <span className="score__percent">{countPercent(score, questions.length)}%</span>
            <h2 className="score__title">Вы правильно ответили на {score} из {questions.length} вопросов!</h2>
            <button 
            className="btn score__button score__button_type_report" 
            onClick={showReport}
            type="button"
            >
            Просмотреть отчёт
            </button>
        </div>
    )
}

export default Score;