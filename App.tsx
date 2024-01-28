import { SafeAreaView, ScrollViewBase, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/Navigation/StackNavigator'

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
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
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