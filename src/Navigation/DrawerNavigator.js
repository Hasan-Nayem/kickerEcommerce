import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigator from './BottomNavigator';
import Profile from '../Screens/Profile';
import SignOut from '../Screens/SignOut';

const DrawerNavigator = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='BottomNavigator' component={BottomNavigator} options={{
        
      }}/>
      <Drawer.Screen name='Profile' component={Profile} options={{
        
      }}/>
      <Drawer.Screen name='SignOut' component={SignOut} options={{
        
      }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator