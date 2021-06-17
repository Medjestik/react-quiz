import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Quiz from '../Quiz/Quiz.js';
import Main from '../Main/Main.js';

function App() {

  const history = useHistory();

  function chooseQuiz() {
    console.log(localStorage)
    history.push('/quiz');
    let startQuizTime = Math.floor(Date.now() / 1000);
    localStorage.setItem('startQuizTime', startQuizTime);
    console.log(localStorage);
    localStorage.clear();
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main
          chooseQuiz={chooseQuiz} 
          />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
