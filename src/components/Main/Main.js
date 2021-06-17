import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import mainImg from '../../images/main-img.png';

function Main({ chooseQuiz }) {

  return (
    <section className="main">

      <div className="main__greeting">
        <h1 className="main__title">Добро пожаловать в систему тестирования!</h1>
        <h3 className="main__subtitle">выберите любой доступный тест или создайте свой</h3>
          <button 
            className="btn choose__btn"
            onClick={chooseQuiz}
            type="button"
          >
            Выбрать тестирование
          </button>
          <button 
            className="btn create__btn"
            type="button"
          >
            Создать тестирование
          </button>
      </div>
      <img className="main__img" src={mainImg} alt="Knowledge"></img>

    </section>
  );
  
}

Main.propTypes = {
  chooseQuiz: PropTypes.func,
}

export default Main;