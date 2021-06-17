import React from 'react';
import PropTypes from 'prop-types';
import './StartQuiz.css';
import questionsImg from '../../images/quiz/quiz-question.png';
import scoreImg from '../../images/quiz/quiz-passing-score.png';
import timeImg from '../../images/quiz/quiz-time.png';


function StartQuiz({ questions, onBeginQuiz, onShowQuestions, passingScore, quizTime, setStartQuizTime }) {

    function beginQuiz () {
        onBeginQuiz(true);
        onShowQuestions(true); 
    }

    return (
        <section className="begin">
            <h2 className="begin__title">Тест на тему «Футбол»</h2>
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
                    <img className="begin__info-img" src={timeImg} alt="Количество вопросов"></img>
                    <div className="begin__info-description">
                        <span className="begin__info-count">{quizTime}</span>
                        <p className="begin__info-caption">время на прохождение тестирования (в минутах)</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

StartQuiz.propTypes = {
    questions: PropTypes.array,
    onBeginQuiz: PropTypes.func,
    onShowQuestions: PropTypes.func,
    passingScore: PropTypes.number,
    quizTime: PropTypes.number,
}

export default StartQuiz;