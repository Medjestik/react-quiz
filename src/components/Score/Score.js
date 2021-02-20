import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';

function Score({ questions, score, onShowReport, onShowResult, spentTime }) {

    function countPercent (currentScore, numberOfQuestions) {
        let percent = 0;
        percent = currentScore / numberOfQuestions * 100;

        return Math.round(percent);
    }

    console.log(spentTime);

    function showReport() {
        onShowReport(true);
        onShowResult(false);
    }

    return (
        <div className="score">
            <span className="score__percent">{countPercent(score, questions.length)}%</span>
            <h2 className="score__title">Вы правильно ответили на {score} из {questions.length} вопросов!</h2>
            <span className="score__time">Время прохождения тестирования &ndash; {spentTime}</span>
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

Score.propTypes = {
    questions: PropTypes.array,
    score: PropTypes.number,
    onShowReport: PropTypes.func,
    onShowResult: PropTypes.func,
    spentTime: PropTypes.number,
}

export default Score;