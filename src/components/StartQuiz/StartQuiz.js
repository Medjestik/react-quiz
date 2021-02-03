import React from 'react';
import './StartQuiz.css';


function StartQuiz({ onClickStart }) {

    function beginQuiz () {
        onClickStart(true);
    }

    return (
        <section className="begin">
            <h2 className="begin__title">Добро пожаловать в систему тестирования!</h2>
            <button 
            className="begin__button" 
            onClick={beginQuiz} 
            type="button"
            >
            Начать тестирование
            </button>
        </section>
    )
}

export default StartQuiz;