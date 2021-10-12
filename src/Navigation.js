import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from './components/screens/MainMenu';
import ScoreBoard from './components/screens/ScoreBoard';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Navigation() {

      return (

            <Drawer.Navigator initialRouteName="mainMenu">
              <Drawer.Screen name="Home" component={MainMenu} />
              <Drawer.Screen name="ScoreBoard" component={ScoreBoard} />

              <Drawer
                  hideNavBar
                  key="scoreBoard"
                  contentComponent={ScoreBoard}
                  drawerWidth={300}
                  drawerPosition="left"
                  >
                  <Stack key="scoreBoard">
                        <Scene
                        key="scoreBoard"
                        component={ScoreBoard}
                        title="Score Board"
             
                        />
           
                  </Stack>
            </Drawer>

            </Drawer.Navigator>

            
      )
}

export default Navigation;