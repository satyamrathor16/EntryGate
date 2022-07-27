import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Config from '../Config';
import Text from './CustomText';
interface ButtonProps {
    title: string;
    buttonStyle?: object;
    textStyle?: object;
    onPress: () => void;
}

const Button = (props: ButtonProps) => {
    const {
        title,
        buttonStyle,
        onPress = () => { },
        textStyle
    } = props

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
            <Text textStyle={[styles.textSty, textStyle]}>{title}</Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        height: 40,
        backgroundColor: Config.Colors.PRIMARY,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textSty: {
        color: Config.Colors.WHITE,
        fontSize: 15
    }
})

export default Button;