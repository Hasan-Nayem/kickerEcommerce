import { SafeAreaView, ScrollViewBase, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import SplashScreen from './src/Screens/SplashScreen'
import LoginScreen from './src/Screens/LoginScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.layout}>
      <StatusBar
        animated={true}
        backgroundColor="#eb3c3c08"
        barStyle='dark-content'
        showHideTransition='fade'
        hidden={false}
      />
      {/* <HomeScreen/> */}
      {/* <SplashScreen/> */}
      <LoginScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#eb3c3c08',
    height: '100%',
    width: '100%',
  }
})