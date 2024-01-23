import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage } from "react-native-responsive-fontsize";

const LoginScreen = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const handleLogin = () => {
    console.log('Login')
  }
  const handleSignUp = () => {
    console.log('Signup pressed')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.subHeader}>Welcome back, get back to exploring our amazing kicks.</Text>
      </View>
      <View styles={styles.inputContainer}>
        <TextInput style={emailFocused ? styles.onfocusStyle : styles.onBlurStyle} placeholder='Email Address' onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} />
        <TextInput style={passwordFocused ? styles.onfocusStyle : styles.onBlurStyle} placeholder='Password' onFocus={() => setPasswordFocused(true)} onBlur={() => setPasswordFocused(false)} />
      </View>
      <View style={styles.socialIconContainer}>
        <TouchableOpacity>
          <View style={styles.facebook}>
            <Image style={styles.icon} source={require('../../assets/images/facebook.png')} />
            <Text style={styles.facebookText}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.gmail}>
            <Image style={styles.gmailIcon} source={require('../../assets/images/google.png')} />
            <Text style={styles.gmailText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>

      {
        emailFocused || passwordFocused ?
          '' : <View style={styles.signUpContainer}>
          <Text style={styles.signup} onPress={handleSignUp}>Sign Up</Text>
          <TouchableOpacity style={styles.letsgo} onPress={handleLogin}>
            <Text style={{ fontFamily: 'DMSans-Bold', fontSize: 20, color: "#2D264B", marginRight: RFPercentage(2) }}>Let’s Get Kicking!</Text>
            <Image source={require('../../assets/images/rightIcon.png')} />
          </TouchableOpacity>
        </View>
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RFPercentage(3),
    width: '100%',
    marginLeft: 0
  },
  headContainer: {
    marginHorizontal: 15,
    marginBottom: RFPercentage(3)
  },
  header: {
    fontFamily: 'Actonia_PERSONAL',
    fontSize: RFPercentage(12),
    color: '#EB3C3C'
  },
  subHeader: {
    fontSize: 16
  },
  inputContainer: {

  },
  onfocusStyle: {
    borderColor: "#EB3C3C",
    borderWidth: 1,
    width: RFPercentage(44),
    height: 55,
    borderRadius: 6,
    fontSize: RFPercentage(2),
    marginBottom: 5,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  onBlurStyle: {
    borderWidth: 1,
    width: RFPercentage(44),
    height: 55,
    borderRadius: 6,
    fontSize: RFPercentage(2),
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderColor: "#dddd",
    padding: 10,
  },
  facebook: {
    width: RFPercentage(44),
    backgroundColor: '#4584FF',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
  },
  gmail: {
    marginTop: 10,
    width: RFPercentage(44),
    backgroundColor: '#FFFFFF',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
  },
  icon: {
    width: 22,
    height: 22,
    marginEnd: 60
  },
  gmailIcon: {
    width: 20,
    height: 20,
    marginEnd: 60
  },
  facebookText: {
    color: 'white',
    fontSize: RFPercentage(2),
    fontFamily: 'DMSans-Bold',
    marginEnd: 60
  },
  gmailText: {
    color: '#EB3C3C',
    fontSize: RFPercentage(2),
    fontFamily: 'DMSans-Bold',
    marginEnd: 80
  },
  signUpContainer: {
    marginTop: 20,
    backgroundColor: "#EB3C3C",
    width: '100%',
    height: RFPercentage(22),
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
  },
  signup: {
    marginBottom: RFPercentage(3),
    color: "#FFFFFF",
    fontFamily: 'DMSans-Bold',
    fontSize: RFPercentage(2.3)
  },
  letsgo: {
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    backgroundColor: "#FFFFFF",
    height: RFPercentage(12),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
export default LoginScreen