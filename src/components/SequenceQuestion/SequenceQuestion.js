import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './SequenceQuestion.css';
import DroppableColumn from '../DroppableColumn/DroppableColumn.js';

function SequenceQuestion({ question, currentQuestionIndex, confirmAnswer }) {

  const [dataQuestion, setDataQuestion] = React.useState(question);
  const [answerSelected, setAnswerSelected] = React.useState(false);

  function checkAnswer() {
    const column = dataQuestion.columns[dataQuestion.columnOrder];
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

    const column = dataQuestion.columns[source.droppableId];

    const newAnswerIds = Array.from(column.answerIds);
    newAnswerIds.splice(source.index, 1);
    newAnswerIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      answerIds: newAnswerIds,
    };

    const newState = {
      ...dataQuestion,
      columns: {
        ...dataQuestion.columns,
        [newColumn.id]: newColumn,
      },
    };

    setDataQuestion(newState);
    setAnswerSelected(true);
  }

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd} >
      {dataQuestion.columnOrder.map((columnId) => {
        const column = dataQuestion.columns[columnId];
        const answers = column.answerIds.map(answerId => dataQuestion.answers[answerId]);
        return <DroppableColumn 
        key={currentQuestionIndex} 
        column={column} 
        answers={answers}
        question={question}
        />  
      })}
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

export default SequenceQuestion;