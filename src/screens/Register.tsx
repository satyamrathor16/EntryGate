import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import assets from '../assets';
import Components from '../components'
import Config from '../Config';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const Register = ({ navigation }: NativeStackHeaderProps) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [societyName, setSocietyName] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [terms, setTerms] = useState(false)

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Register'
                // showLeftButton={false}
                imageStyle={styles.headerImage}
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />

            <View style={[Config.GlobalStyles.contentContainer]}>
                <ScrollView>
                    <View style={Config.GlobalStyles.pagePaddingSide}>
                        <Components.TextInput
                            value={name}
                            placeholder='Name'
                            onChangeText={(value) => {
                                setName(value)
                            }}
                        />
                        <Components.TextInput
                            value={email}
                            placeholder='Email'
                            onChangeText={(value) => {
                                setEmail(value)
                            }}
                        />
                        <Components.TextInput
                            value={mobileNumber}
                            placeholder='Mobile Number'
                            onChangeText={(value) => {
                                setMobileNumber(value)
                            }}
                        />
                        <Components.TextInput
                            value={societyName}
                            placeholder='Society Name'
                            onChangeText={(value) => {
                                setSocietyName(value)
                            }}
                        />
                        <Components.TextInput
                            value={country}
                            placeholder='Country'
                            onChangeText={(value) => {
                                setCountry(value)
                            }}
                        />
                        <Components.TextInput
                            value={state}
                            placeholder='State'
                            onChangeText={(value) => {
                                setState(value)
                            }}
                        />
                        <Components.TextInput
                            value={city}
                            placeholder='City'
                            onChangeText={(value) => {
                                setCity(value)
                            }}
                        />
                        <Components.TextInput
                            value={address}
                            placeholder='Address'
                            onChangeText={(value) => {
                                setAddress(value)
                            }}
                            multiline
                            containerStyle={styles.addressInput}
                            style={styles.addressInput}
                        />
                        <View style={styles.checkBoxView}>
                            <TouchableOpacity
                                onPress={() => {
                                    setTerms(!terms)
                                }}
                                style={[styles.checkbox, {
                                    borderWidth: terms ? 0 : 3,
                                    backgroundColor: terms ? Config.Colors.PRIMARY : Config.Colors.WHITE,
                                }]}>
                                {terms &&
                                    <Image
                                        source={assets.check}
                                        style={{ height: 20, width: 20, tintColor: Config.Colors.SECONDARY }}
                                        resizeMode='contain'
                                    />
                                }
                            </TouchableOpacity>
                            <Components.Text>I agree with the <Components.ClickableText onPress={() => { }} textStyle={styles.termText}>{'Terms & Conditions'}</Components.ClickableText> </Components.Text>
                        </View>
                        <Components.Button
                            title='Submit'
                            onPress={() => {

                            }}
                            buttonStyle={{marginTop: 10,}}
                        />
                    </View>
                </ScrollView>
            </View>
        </Components.ScreenTopView >
    );
}

const styles = StyleSheet.create({
    headerImage: {
        tintColor: Config.Colors.SECONDARY
    },
    addressInput: {
        height: 120,
    },
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    checkbox: {
        height: 25,
        width: 25,
        borderWidth: 3,
        borderColor: Config.Colors.PRIMARY,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    termText: {
        color: 'blue',
        textDecorationColor: 'blue',
        textDecorationLine: 'underline'
    }
})

export default Register;