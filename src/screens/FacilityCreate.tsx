import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';


import assets from '../assets';
import Components from '../components'
import Config from '../Config';

const FacilityCreate = ({ navigation, route }: NativeStackHeaderProps) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [hour, setHour] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [quarterly, setQuarterly] = useState('')
    const [sixMonth, setSixMonth] = useState('')
    const [yearly, setYearly] = useState('')

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Facility'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            <View style={Config.GlobalStyles.contentContainer}>
                <KeyboardAvoidingScrollView>
                    <View style={[Config.GlobalStyles.pagePaddingSide]}>
                        <Components.TextInput
                            value={title}
                            placeholder='Facility Name'
                            onChangeText={(value) => {
                                setTitle(value)
                            }}
                        />
                        <Components.TextInput
                            value={description}
                            placeholder='Facility Description'
                            onChangeText={(value) => {
                                setDescription(value)
                            }}
                            multiline={true}
                            containerStyle={styles.addressInput}
                            style={styles.addressInput}
                        />
                        <Components.TextInput
                            value={hour}
                            placeholder='Facility Charge/hr'
                            onChangeText={(value) => {
                                setHour(value)
                            }}
                        />
                        <Components.TextInput
                            value={day}
                            placeholder='Facility Charge/day'
                            onChangeText={(value) => {
                                setDay(value)
                            }}
                        />
                        <Components.TextInput
                            value={month}
                            placeholder='Facility Charge/month'
                            onChangeText={(value) => {
                                setMonth(value)
                            }}
                        />
                        <Components.TextInput
                            value={quarterly}
                            placeholder='Facility Charge/quarterly'
                            onChangeText={(value) => {
                                setQuarterly(value)
                            }}
                        />
                        <Components.TextInput
                            value={sixMonth}
                            placeholder='Facility Charge/6 months'
                            onChangeText={(value) => {
                                setSixMonth(value)
                            }}
                        />
                        <Components.TextInput
                            value={yearly}
                            placeholder='Facility Charge/yearly'
                            onChangeText={(value) => {
                                setYearly(value)
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

export default FacilityCreate;