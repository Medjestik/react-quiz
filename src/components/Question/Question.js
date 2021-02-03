import React from 'react';
import './Question.css';
import NavQuestion from '../NavQuestion/NavQuestion.js';
import OneAnswerQuestion from '../OneAnswerQuestion/OneAnswerQuestion.js';
import OpenAnswerQuestion from '../OpenAnswerQuestion/OpenAnswerQuestion.js';

function Question({ questions, setShowResult, score, setScore }) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answeredQuestion, setAnsweredQuestion] = React.useState(1);

  function findSkipQuestion(element, index) {
    if (!element.answerReceived) {
      setCurrentQuestionIndex(index);
    }
  }
  
  function confirmAnswer(correctAnswer) {
    if (correctAnswer) {
      setScore(score + 1);
    }
    questions[currentQuestionIndex].answerReceived = true;
    setAnsweredQuestion(answeredQuestion + 1);
    const nextQuestion = currentQuestionIndex + 1;
    if (answeredQuestion < questions.length) {
      if (nextQuestion < questions.length && questions[nextQuestion].answerReceived === false) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        questions.find(findSkipQuestion);
      }
    } else {
      setShowResult(true);
    }
  }

  function getTypeOfQuestion (question) {
    switch (question.questionType) {
      case "open-answer": 
        return (
        <OpenAnswerQuestion
        question={question}
        currentQuestionIndex={currentQuestionIndex}
        confirmAnswer={confirmAnswer}
        />
        );
      default:
        return (
        <OneAnswerQuestion 
        question={question}
        currentQuestionIndex={currentQuestionIndex}
        confirmAnswer={confirmAnswer}
        />
        );
    }
  }

  return (
    <div className="question">

      <NavQuestion
      questions={questions}
      changeQuestion={setCurrentQuestionIndex}
      currentQuestionIndex={currentQuestionIndex}
      />
      
      <div className="question__container">
        <span className="question__count">Осталось вопросов: {questions.length - answeredQuestion + 1}</span>
        <h2 className="question__title">{questions[currentQuestionIndex].questionText}</h2>
        {getTypeOfQuestion(questions[currentQuestionIndex])}
      </div>

    </div>
  )
}

export default Question;