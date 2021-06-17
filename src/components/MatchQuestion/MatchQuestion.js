import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import './MatchQuestion.css';
import DroppableColumn from '../DroppableColumn/DroppableColumn.js';

function MatchQuestion({ question, currentQuestionIndex, confirmAnswer }) {

  const [dataQuestion, setDataQuestion] = React.useState(question);
  const [answerSelected, setAnswerSelected] = React.useState(false);

  function checkAnswer() {
    const column = dataQuestion.column;
    const rightAnswers = dataQuestion.rightAnswers.join();
    let strokeAnswer = column.answerIds.map(answerId => dataQuestion.answers[answerId].text).join(' -> ');

    if (column.answerIds.join() === rightAnswers) {
        confirmAnswer(true, strokeAnswer);
    } else {
        confirmAnswer(false, strokeAnswer);
    }
  }

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = dataQuestion.column;

    const newAnswerIds = Array.from(column.answerIds);
    newAnswerIds.splice(source.index, 1);
    newAnswerIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      id: column.id,
      answerIds: newAnswerIds,
    };

    const newState = {
      ...dataQuestion,
      column: newColumn,
    };

    setDataQuestion(newState);
    setAnswerSelected(true);
  }

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd} >
      <DroppableColumn 
          key={currentQuestionIndex} 
          column={dataQuestion.column}
          answers={dataQuestion.column.answerIds.map(answerId => dataQuestion.answers[answerId])}
          question={question}
        />  
    </DragDropContext>
    <button 
    className={`btn answer__button ${answerSelected ? "" : "answer__button_type_disabled"}`} 
    type="button" 
    onClick={(() => checkAnswer())}
    >
    Ответить
    </button>
    </>
  );
}

MatchQuestion.propTypes = {
  question: PropTypes.object,
  currentQuestionIndex: PropTypes.number,
  confirmAnswer: PropTypes.func,
}

export default MatchQuestion;