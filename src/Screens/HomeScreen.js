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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "red",
        marginHorizontal: 30
    },
    
})
export default HomeScreen;
