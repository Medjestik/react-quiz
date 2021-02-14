import React from 'react';
import './DroppableColumn.css';
import { Droppable } from 'react-beautiful-dnd';
import DraggableItem from '../DraggableItem/DraggableItem.js';


function DroppableColumn({ column, answers }) {

    return (
        <div className="question__answer-container">
            <Droppable droppableId={column.id}>
                {provided => (
                    <div className="droppable-column">
                        <ul className="droppable__count-list">{answers.map((answer, index) => (
                        <li className="droppable__count" key={index}>{index + 1}</li>
                        ))}
                        </ul>
                        <ul className="droppable-column__list"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {answers.map((answer, index) => (
                                <DraggableItem 
                                key={answer.id} 
                                answer={answer} 
                                index={index} 
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

