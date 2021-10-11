import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/screens/MainMenu';
import CategorySelection from './components/screens/CategorySelection';
import QuizAttempt from './components/screens/QuizAttempt';
import ScoreBoard from './components/screens/ScoreBoard';
import AttemptOver from './components/screens/AttemptOver';
import Navigation from './Navigation';

const RouterComponent = () => {

      return (
            <Router>
                  <Scene key="root" hideNavBar={false}>
                        <Scene key="mainMenu" component={MainMenu} initial   />
                        <Scene key="categorySelection" component={CategorySelection}   />
                        <Scene key="quizAttempt" component={QuizAttempt} />
                        <Scene key="scoreBoard" component={ScoreBoard} />
                        <Scene key="attemptOver" component={AttemptOver} />
                  </Scene>

            </Router>
  );
};

export default RouterComponent;
