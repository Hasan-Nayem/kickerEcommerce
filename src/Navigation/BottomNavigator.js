import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import WishList from '../Screens/WishList';
import Notification from '../Screens/Notification';
import Cart from '../Screens/Cart';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#EB3C3C',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
    }}>
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
            headerShown: false,
            tabBarIcon: ({color, size})=> (<Octicons name='home' color={color} size={size}/>),
            title: 'Home',
        }}
        
        />
        <Tab.Screen name='WishList' component={WishList} options={{
            headerShown: false,
            tabBarIcon: ({color, size})=> (<Fontisto name='heart-alt' color={color} size={size}/>),
        }}/>
        <Tab.Screen name='Notification' component={Notification} options={{
            headerShown: false,
            tabBarIcon: ({color, size})=> (<Octicons name='bell' color={color} size={size}/>),
        }}/>
        <Tab.Screen name='Cart' component={Cart} options={{
            headerShown: false,
            tabBarIcon: ({color, size})=> (<Ionicons name='bag-outline' color={color} size={size}/>),
        }}/>
    </Tab.Navigator>
  )
}

export default BottomNavigator