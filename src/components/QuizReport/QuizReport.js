import React from 'react';
import './QuizReport.css';

function QuizReport({ questions, score }) {
    return (
        <div className="quiz-report__container">
            <h2 className="quiz-report__title">Вы правильно ответили на {score} из {questions.length} вопросов!</h2>
            <ul className="quiz-report__answers">
                {questions.map((elem, index) => (
                <li className="quiz-report__answer" key={index}>
                    <span className="quiz-report__count-question">Вопрос {index + 1}</span>
                    <div className="quiz-report__item">                    
                        <p className="quiz-report__question">{elem.questionText}</p>
                        <span className={`quiz-report__user-answer ${elem.answerCorrect ? "quiz-report__user-answer_type_correct" : ""} `}>{elem.userAnswer}</span>
                    </div>
                </li>
                ))}
            </ul> 
        </div>
    )
}

export default QuizReport;