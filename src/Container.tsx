import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Container = ({ children }) => {
    return (
        <View style={styles.flex}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
})

export default Container;