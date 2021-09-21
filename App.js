import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';
// import Navigation from './src/Navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';


export default class App extends React.Component {

      render() {
            const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
            return (
                  <Provider store={store}>
                        <Router />
                        {/*<NavigationContainer>
                              <Navigation />
                        </NavigationContainer>*/}
                  </Provider>
            );
      }
}
