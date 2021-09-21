import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/screens/MainMenu';
import CategorySelection from './components/screens/CategorySelection';
import QuizAttempt from './components/screens/QuizAttempt';
import ScoreBoard from './components/screens/ScoreBoard';

const RouterComponent = () => {

      return (
            <Router>
                  <Scene key="main" hideNavBar={true}>
                        <Scene key="mainMenu" component={MainMenu}   />
                        <Scene key="categorySelection" component={CategorySelection} initial  />
                        <Scene key="quizAttempt" component={QuizAttempt} />
                        <Scene key="scoreBoard" component={ScoreBoard} />
                  </Scene>
            </Router>
  );
};

export default RouterComponent;

// Scene Router.js fix bug!!!!

// sceneStyle: ViewPropTypes ? ViewPropTypes.style : PropTypes.object,
