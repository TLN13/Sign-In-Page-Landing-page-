import React from 'react';
import { View, Text, StyleSheet } from "react-native"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CalgaryScreen from './calgary'
import EdmontonScreen from './edmonton'

const Tab = createBottomTabNavigator();
const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to My New App!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    }
});

export default Welcome;
