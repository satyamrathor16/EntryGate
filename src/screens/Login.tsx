import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Components from '../components'
import Config from '../Config';
const Login = () => {
    return (
        <View style={styles.mainContainer}>
            <Components.Header
                title='Login'
                showLeftButton={false}
            />
            <View style={styles.contentContainer}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
    }
})

export default Login;