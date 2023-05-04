import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';


import assets from '../assets';
import Components from '../components'
import Config from '../Config';

const NoticeboardCreate = ({ navigation, route }: NativeStackHeaderProps) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Notice Board'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            <View style={Config.GlobalStyles.contentContainer}>
                <KeyboardAvoidingScrollView>
                    <View style={[Config.GlobalStyles.pagePaddingSide]}>
                        <Components.TextInput
                            value={title}
                            placeholder='Notice Title'
                            onChangeText={(value) => {
                                setTitle(value)
                            }}
                        />
                        <Components.TextInput
                            value={description}
                            placeholder='Notice Description'
                            onChangeText={(value) => {
                                setDescription(value)
                            }}
                            multiline={true}
                            containerStyle={styles.addressInput}
                            style={styles.addressInput}
                        />
                        <Components.TextInput
                            value={endDate}
                            placeholder='Notice End Date'
                            onChangeText={(value) => {
                                setEndDate(value)
                            }}
                        />
                        <Components.TextInput
                            value={endTime}
                            placeholder='Notice End Time'
                            onChangeText={(value) => {
                                setEndTime(value)
                            }}
                        />
                        <Components.Button
                            title='Submit'
                            onPress={() => { }}
                            buttonStyle={styles.buttonStyle}
                        />
                    </View>
                </KeyboardAvoidingScrollView>
            </View>
        </Components.ScreenTopView>
    );
}

const styles = StyleSheet.create({
    addressInput: {
        height: 120,
        textAlign: 'left',
        textAlignVertical: 'top'
    },
    buttonStyle: {
        marginTop: 20
    }
})

export default NoticeboardCreate;