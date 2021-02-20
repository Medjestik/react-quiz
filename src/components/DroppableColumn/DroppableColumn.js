import React from 'react';
import './DroppableColumn.css';
import { Droppable } from 'react-beautiful-dnd';
import DraggableItem from '../DraggableItem/DraggableItem.js';

function DroppableColumn({ column, answers, question, }) {

    function getTypeOfQuestion (questionType) {
        switch (questionType) {
          case "match": 
            return (
                <ul className="match-column__list">
                    {question.matchedWords.map((word, index) => (
                        <li 
                        className={`match-column__word ${question.longestAnswer > 80 ? "match-column__word_type_large" : "match-column__word_type_small"}`}
                        key={index}>
                            {word}
                        </li>
                    ))}
                </ul>
            );
          default:
            return (
                <ul className="droppable__count-list">
                    {answers.map((answer, index) => (
                        <li 
                        className={`droppable__count ${question.longestAnswer > 80 ? "droppable__count_type_large" : "droppable__count_type_small"}`}
                        key={index}>
                            {index + 1}
                        </li>
                    ))}
                </ul>
            );
        }
      }

    return (
        <div className="question__answer-container">
            <Droppable droppableId={column.id}>
                {provided => (
                    <div className="droppable-column">
                        {getTypeOfQuestion(question.questionType)}
                        <ul className="droppable-column__list"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {answers.map((answer, index) => (
                                <DraggableItem 
                                key={answer.id} 
                                answer={answer} 
                                index={index}
                                answerSize={question.longestAnswer}
                                />
                            ))}
                            {provided.placeholder}
                        </ul>
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default DroppableColumn;

