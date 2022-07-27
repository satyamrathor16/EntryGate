import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Config from '../Config';

interface TextProps {
    textStyle?: object;
    numberofLine?: number;
    children: React.ReactChild,
    onPress?: () => void
}

const CustomText = (props: TextProps) => {

    const { textStyle, numberofLine, onPress = () => { } } = props;

    return (
        <Text
            onPress={onPress}
            numberOfLines={numberofLine}
            style={[{
                // fontFamily: Config.Theme.FONT_REGULAR,
                color: Config.Colors.BLACK
            }, textStyle]}>
            {props.children}
        </Text>
    )
}
export default CustomText;