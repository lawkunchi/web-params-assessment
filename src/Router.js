import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainMenu from './components/screens/MainMenu';
import CategorySelection from './components/screens/CategorySelection';
import QuizAttempt from './components/screens/QuizAttempt';
import ScoreBoard from './components/screens/ScoreBoard';
import AttemptOver from './components/screens/AttemptOver';

const RouterComponent = () => {

      return (
            <Router>
                  <Scene>
                        {/* <Scene key="root" hideNavBar={false}> */}
                              <Scene key="mainMenu" title ="Home" component={MainMenu}    />
                              <Scene key="categorySelection" title ="Start Quiz" component={CategorySelection}   />
                              <Scene key="quizAttempt" title="Quiz Attempt" component={QuizAttempt} />
                              {/* <Scene key="scoreBoard" title ="Score Board" component={ScoreBoard} /> */}
                              <Scene key="attemptOver" title="Attempt Over" component={AttemptOver} />
                        {/* </Scene> */}

                        <Scene key="tabs" hideNavBar={true} tabs={true} initial>
                              <Scene key="mainMenu" title ="Home" component={MainMenu}  />
                              {/* <Scene key="categorySelection" title ="Start Quiz" component={CategorySelection}   /> */}
                              <Scene key="scoreBoard" title ="Score Board" component={ScoreBoard} />
                        </Scene>
                  </Scene>

            </Router>

               
  );
};


export default RouterComponent;
