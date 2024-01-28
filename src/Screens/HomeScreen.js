import React from 'react';
import { View, StyleSheet, Text, Dimensions, } from 'react-native';

const HomeScreen = () => {
    const { width, height } = Dimensions.get('window');
    const maxwidth = width - 30;
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})
export default HomeScreen;
