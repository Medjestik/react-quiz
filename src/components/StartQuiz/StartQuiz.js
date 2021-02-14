import React from 'react';
import './StartQuiz.css';
import questionsImg from '../../images/quiz/quiz-question.png';
import scoreImg from '../../images/quiz/quiz-passing-score.png';
import attemptImg from '../../images/quiz/quiz-attempt.png';


function StartQuiz({ questions, onBeginQuiz, onShowQuestions, passingScore }) {

    function beginQuiz () {
        onBeginQuiz(true);
        onShowQuestions(true);
    }

    return (
        <section className="begin">
            <h2 className="begin__title">Добро пожаловать в систему тестирования!</h2>
            <button 
            className="btn begin__button" 
            onClick={beginQuiz} 
            type="button"
            >
            Начать тестирование
            </button>
            <ul className="begin__info-container">
                <li className="begin__info-item">
                    <img className="begin__info-img" src={questionsImg} alt="Количество вопросов"></img>
                    <div className="begin__info-description">
                        <span className="begin__info-count">{questions.length}</span>
                        <p className="begin__info-caption">количество вопросов</p>
                    </div>
                </li>
                <li className="begin__info-item">
                    <img className="begin__info-img" src={scoreImg} alt="Количество вопросов"></img>
                    <div className="begin__info-description">
                        <span className="begin__info-count">{passingScore}</span>
                        <p className="begin__info-caption">проходной балл</p>
                    </div>
                </li>
                <li className="begin__info-item">
                    <img className="begin__info-img" src={attemptImg} alt="Количество вопросов"></img>
                    <div className="begin__info-description">
                        <span className="begin__info-count">3</span>
                        <p className="begin__info-caption">осталось попыток</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default StartQuiz;