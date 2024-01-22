import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { RFPercentage } from "react-native-responsive-fontsize";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.subHeader}>Welcome back, get back to exploring our amazing kicks.</Text>
      </View>
      <View styles={styles.inputContainer}>
        <TextInput></TextInput>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: RFPercentage(3)
    },
    headContainer: {
        marginBottom: RFPercentage(3)
    },
    header: {
        fontFamily: 'Actonia_PERSONAL',
        fontSize: RFPercentage(12),
        color: '#EB3C3C'
    },
    subHeader: {
        fontSize: 16
    }
})
export default LoginScreen