import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Navigation() {

      return (

            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={MainMenu} />
              <Drawer.Screen name="Notifications" component={MainMenu} />
            </Drawer.Navigator>
      )
}

export default Navigation;