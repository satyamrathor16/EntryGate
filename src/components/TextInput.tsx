import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import Config from '../Config';

// interface TextInputProps {
//     label: string;
//     labelStyle: object;
//     placeholder: string;
//     autoCapitalize: ;
//     password,
//     containerStyle,
//     image,
//     imageStyle,
//     onChangeText,
//     keyboardType,
//     textInputStyle,
//     multiline,
//     value,
//     defaultValue,
//     returnKeyType,
//     onSubmitEditing,
//         onCreateRef = () => { },
//     maxLength,
//     editable,
//     autoCorrect = false,
//     inputFocusColor,

// }

const CustomTextInput = (props: TextInputProps) => {

    const {
        placeholder,
        style,
        autoCapitalize,
        onSubmitEditing,
        returnKeyType,
        onCreateRef = () => { },
        multiline,
        maxLength,
        editable,
        value,
        defaultValue,
        keyboardType,
        secureTextEntry,
        onChangeText,
        autoCorrect,
        containerStyle,
        placeholderTextColor
    } = props

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[styles.inputStyle, style]}
                placeholder={placeholder}
                autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                textContentType="oneTimeCode"
                ref={(input) => onCreateRef(input)}
                multiline={multiline}
                maxLength={maxLength}
                editable={editable}
                selectTextOnFocus={editable}
                value={value}
                defaultValue={defaultValue}
                keyboardType={keyboardType ? keyboardType : 'default'}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
                autoCorrect={autoCorrect}
                numberOfLines={1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        height: 50,
        fontSize: 14,
        color: Config.Colors.BLACK,
        borderBottomWidth: 2,
        paddingHorizontal:10
        // fontFamily: Config.Theme.FONT_REGULAR,
        // borderWidth:1
        // paddingTop: 18
        // backgroundColor:Config.Theme.COLOR_PURPLE
    },
    container: {
        height: 50,
        width: '100%',
    },
})

export default CustomTextInput;