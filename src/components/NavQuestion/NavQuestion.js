import React from 'react';
import './NavQuestion.css';


function NavQuestion({ question, index, setCurrentQuestion, setAnswerSelected }) {


    function changeQuestion () {
        setCurrentQuestion(index);
        setAnswerSelected(false);
    };

    return (
        <button className={`nav-question__link ${question.answerReceived ? "nav-question__link_type_block" : ""}`} onClick={changeQuestion} type="button">{index + 1}</button>
    )
}

export default NavQuestion;