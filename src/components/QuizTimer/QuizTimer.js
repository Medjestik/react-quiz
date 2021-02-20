import React from 'react';
import PropTypes from 'prop-types';
import './QuizTimer.css';

const padTime = time => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${padTime(seconds)}`;
};

function QuizTimer({ quizTime, onSpentTime }) {

    const quizMin = quizTime * 60;
    const [counter, setCounter] = React.useState(quizMin);
    
    React.useEffect(() => {
        let timer;
        let timeSpent = 0;
        if (counter > 0) {
            timer = setTimeout(() => {
                setCounter(s => s - 1);
                timeSpent = quizMin - counter;
                onSpentTime(format(timeSpent));
            }, 1000) 
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter, onSpentTime, quizMin]);

    return (
        <div className="quiz-timer">
            {counter === 0 ? "Время закончилось" : <span>Осталось времени: {format(counter)}</span>}
        </div>
    );
}

QuizTimer.propTypes = {
    quizTime: PropTypes.number,
    onSpentTime: PropTypes.func,
}

export default QuizTimer;