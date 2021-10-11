import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from './components/screens/MainMenu';
import ScoreBoard from './components/screens/ScoreBoard';

const Drawer = createDrawerNavigator();

function Navigation() {

      return (

            <Drawer.Navigator initialRouteName="mainMenu">
              <Drawer.Screen name="Home" component={MainMenu} />
              <Drawer.Screen name="ScoreBoard" component={ScoreBoard} />

              <Drawer
                  hideNavBar
                  key="drawerMenu"
                  contentComponent={SideMenu}
                  drawerWidth={300}
                  drawerPosition="left"
                  >
                  <Stack key="mainContainer">
                        <Scene
                        key="mainMenu"
                        component={MainMenu}
                        title="Home"
             
                        />
           
                  </Stack>
            </Drawer>

            </Drawer.Navigator>

            
      )
}

export default Navigation;