import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';



const SplashScreen = ({ navigation, route }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000)
    }, [])

    return (
        <View style={styles.mainView}>
            <Text>Spalsh Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SplashScreen;