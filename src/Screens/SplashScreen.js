import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const SplashScreen = () => {
    const { width, height } = Dimensions.get('window');
    const headerFont = width / 2;
    console.log(headerFont)
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.customFont}>Kicker</Text>
                <Text style={styles.slogan}>World’s biggest collection of kicks.</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/splash_banner.png')} style={styles.banner} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
    },
    customFont: {
        fontFamily: 'Actonia_PERSONAL',
        fontSize: RFPercentage(12),
        color: '#EB3C3C'
    },
    slogan: {
        color: '#979797',
        fontSize: 16,
        fontWeight: 'bold',
    },
    banner: {
        width: 510,
        height: 370,
        top: 475,
        right: '14%'
    }
})

export default SplashScreen;
