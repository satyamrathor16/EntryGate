import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Config from '../Config';

const ScreenTopView = ({ children }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.absViews} />
            <View style={styles.absViews1} />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    absViews: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: '30%',
        // flex: 1,
        backgroundColor: Config.Colors.PRIMARY
    },
    absViews1: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: '30%',
        // flex: 1,
        backgroundColor: Config.Colors.BLACK
    }
})

export default ScreenTopView;