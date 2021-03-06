import React from 'react';
import PropTypes from 'prop-types';
import './DraggableItem.css';
import { Draggable } from 'react-beautiful-dnd';

function DraggableItem ({ answer, index, answerSize }) {
    return (
        <Draggable draggableId={answer.id} index={index}>
            {(provided, snapshot) => (
                <li className={`draggable-item ${snapshot.isDragging ? "draggable-item_type_dragging" : "" } ${answerSize > 80 ? "draggable-item_type_large" : "draggable-item_type_small" }`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                    {answer.text}
                </li>
            )}
        </Draggable>
    )
}

DraggableItem.propTypes = {
    answer: PropTypes.object,
    index: PropTypes.number,
    answerSize: PropTypes.number,
}

export default DraggableItem;