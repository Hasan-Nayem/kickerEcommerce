import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../Screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{
            headerShown: false
        }} />
        <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{
          headerShown: false,
        }}
        
        />
    </Stack.Navigator>
  )
}

export default StackNavigator