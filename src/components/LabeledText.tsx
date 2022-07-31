import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Config from '../Config';

interface TextProps {
    textStyle?: object;
    containerStyle?: object;
    labelStyle?: object;
    numberofLine?: number;
    label: string;
    text: string;
}

const LabeledText = (props: TextProps) => {

    const { textStyle, numberofLine, label, text, containerStyle, labelStyle } = props;

    return (
        <View style={[containerStyle]}>
            <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
            <View style={styles.textContainer}>
                <Text
                    numberOfLines={numberofLine}
                    style={[styles.textStyle, textStyle]}>
                    {text}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: Config.Colors.BLACK,
        // fontFamily: Config.Theme.FONT_REGULAR,
    },
    labelStyle: {
        color: Config.Colors.PRIMARY,
        fontSize: 12,
        marginBottom:3
    },
    textContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: Config.Colors.PRIMARY,
        borderRadius: 12,
        paddingVertical:10,
        paddingHorizontal:5,
        backgroundColor:Config.Colors.LIGHT_GRAY,
        elevation: 5,
        shadowOffset: {
            height: 2,
            width: 2,
        },
        shadowColor: Config.Colors.BLACK,
        shadowRadius: 5
    }
});

export default LabeledText;