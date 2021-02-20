import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';
import NavQuestion from '../NavQuestion/NavQuestion.js';
import OneAnswerQuestion from '../OneAnswerQuestion/OneAnswerQuestion.js';
import OpenAnswerQuestion from '../OpenAnswerQuestion/OpenAnswerQuestion.js';
import MultiAnswerQuestion from '../MultiAnswerQuestion/MultiAnswerQuestion.js';
import SequenceQuestion from '../SequenceQuestion/SequenceQuestion.js';
import MatchQuestion from '../MatchQuestion/MatchQuestion.js';

function Question({ questions, onShowResult, onShowQuestions, score, setScore, quizTime, onSpentTime }) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(questions[0]);
  const [answeredQuestion, setAnsweredQuestion] = React.useState(1);

  function findSkipQuestion(element, index) {
    if (!element.answerReceived) {
      setCurrentQuestionIndex(index);
    }
  }

  function changeQuestion () {
    const nextQuestion = currentQuestionIndex + 1;
    if (answeredQuestion < questions.length) {
      if (nextQuestion < questions.length && questions[nextQuestion].answerReceived === false) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        questions.find(findSkipQuestion);
      }
    } else {
      onShowResult(true);
      onShowQuestions(false);
    }
  }
  
  function confirmAnswer(correctAnswer, userAnswer) {
    if (correctAnswer) {
      setScore(score + 1);
      currentQuestion.answerCorrect = true;
    }
    currentQuestion.userAnswer = userAnswer;
    currentQuestion.answerReceived = true;
    setAnsweredQuestion(answeredQuestion + 1);
    changeQuestion();
    
  }

  React.useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [questions, currentQuestionIndex]);

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
      case "multi-answer": 
        return (
        <MultiAnswerQuestion
        question={question}
        currentQuestionIndex={currentQuestionIndex}
        confirmAnswer={confirmAnswer}
        />
        );
        case "sequence":
        return (
        <SequenceQuestion
        question={question}
        currentQuestionIndex={currentQuestionIndex}
        confirmAnswer={confirmAnswer}
        />
        );
        case "match":
        return (
        <MatchQuestion
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

    (currentQuestion !== {}) &&
    <div className="question">

      <NavQuestion
      questions={questions}
      changeQuestion={setCurrentQuestionIndex}
      currentQuestionIndex={currentQuestionIndex}
      quizTime={quizTime}
      onSpentTime={onSpentTime}
      />
      
      <div className="question__container">
        <span className="question__count">Осталось вопросов: {questions.length - answeredQuestion + 1}</span>
        <h2 className="question__title">{currentQuestion.questionText}</h2>
        {getTypeOfQuestion(currentQuestion)}
      </div>

    </div>
  )
}

Question.propTypes = {
  questions: PropTypes.array,
  onShowResult: PropTypes.func,
  onShowQuestions: PropTypes.func,
  score: PropTypes.number,
  setScore: PropTypes.func,
  quizTime: PropTypes.number,
  onSpentTime: PropTypes.func,
}

export default Question;