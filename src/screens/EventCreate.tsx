import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';


import assets from '../assets';
import Components from '../components'
import Config from '../Config';

const EventCreate = ({ navigation, route }: NativeStackHeaderProps) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Events'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            <View style={Config.GlobalStyles.contentContainer}>
                <KeyboardAvoidingScrollView>
                    <View style={[Config.GlobalStyles.pagePaddingSide]}>
                        <Components.TextInput
                            value={title}
                            placeholder='Event Title'
                            onChangeText={(value) => {
                                setTitle(value)
                            }}
                        />
                        <Components.TextInput
                            value={description}
                            placeholder='Event Description'
                            onChangeText={(value) => {
                                setDescription(value)
                            }}
                            multiline={true}
                            containerStyle={styles.addressInput}
                            style={styles.addressInput}
                        />
                        <Components.TextInput
                            value={startDate}
                            placeholder='Event Start Date'
                            onChangeText={(value) => {
                                setStartDate(value)
                            }}
                        />
                        <Components.TextInput
                            value={startTime}
                            placeholder='Event Start Time'
                            onChangeText={(value) => {
                                setStartTime(value)
                            }}
                        />
                        <Components.TextInput
                            value={endDate}
                            placeholder='Event End Date'
                            onChangeText={(value) => {
                                setEndDate(value)
                            }}
                        />
                        <Components.TextInput
                            value={endTime}
                            placeholder='Event End Time'
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

export default EventCreate;