import React from 'react';
import './NavQuestion.css';
import oneAnswerImg from '../../images/quiz/question-one-answer.png';
import openAnswerImg from '../../images/quiz/question-open-answer.png';

function NavQuestion({ questions, changeQuestion, currentQuestionIndex }) {

    function getQuestionInfo () {
        switch (questions[currentQuestionIndex].questionType) {
          case "open-answer": 
            return (
                <>
                    <img className="nav-question__type-img" src={openAnswerImg} alt="Тип теста"></img>
                    <figcaption className="nav-question__type-caption">Тип теста: вопрос с открытым ответом</figcaption>
                </>
            );
          default:
            return (
                <>
                    <img className="nav-question__type-img" src={oneAnswerImg} alt="Тип теста"></img>
                    <figcaption className="nav-question__type-caption">Тип теста: выбор одного правильного ответа</figcaption>
                </>
            );
        }
    }

    return (
        <nav className="nav-question">
            <h4 className="nav-question__number">Вопрос {currentQuestionIndex + 1} из {questions.length}</h4>
            <figure className="nav-question__type">
                {getQuestionInfo()}
            </figure>
            <ul className="nav-question__menu">{questions.map((question, index) =>
                <button
                key={index}
                className={
                `nav-question__link 
                ${question.answerReceived ? "nav-question__link_type_block" : ""} 
                ${currentQuestionIndex === index ? "nav-question__link_type_blue" : ""}`
                } 
                onClick={()=> changeQuestion(index)} 
                type="button"
                >
                {index + 1}
                </button>
                )}
            </ul>
        </nav>
    )
}

export default NavQuestion;