import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import assets from '../assets';
import Components from '../components'
import Config from '../Config';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import ApiCalls from '../webServices';

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

    const validateForm = () => {
        if (name.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Name is required', 'Please enter the name');
            return false
        }
        if (email.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Email is required', 'Please enter the email');
            return false
        }
        if (!(Config.Constants.EMAIL_VALIDATION.test(email.trim()))) {
            Components.DropDownAlert.showErrorAlert('Email is invailid', 'Please enter the correct email');
            return false
        }
        if (mobileNumber.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Mobile Number is required', 'Please enter the mobile number');
            return false
        }
        if (mobileNumber.trim().length < 10) {
            Components.DropDownAlert.showErrorAlert('Mobile Number is invailid', 'Please enter the correct mobile number');
            return false
        }
        if (!(Config.Constants.MOBILE_NUMBER.test(mobileNumber.trim()))) {
            Components.DropDownAlert.showErrorAlert('Mobile Number is invailid', 'Please enter the correct mobile number');
            return false
        }
        if (societyName.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Society Name is required', 'Please enter the society name');
            return false
        }
        if (country.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Country is required', 'Please enter the country');
            return false
        }
        if (city.trim() === '') {
            Components.DropDownAlert.showErrorAlert('City is required', 'Please enter the city');
            return false
        }
        if (state.trim() === '') {
            Components.DropDownAlert.showErrorAlert('State is required', 'Please enter the state');
            return false
        }
        if (address.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Address is required', 'Please enter the address');
            return false
        }
        if (!terms) {
            Components.DropDownAlert.showErrorAlert('Terms & Condition is required', 'For moving forward you have to accept our terms and condition.');
            return false
        }
        return true
    }

    const onSubmit = () => {

        if (validateForm()) {
            var payload = {
                name: name.trim(),
                email_id: email.trim(),
                contact_number: mobileNumber.trim(),
                society_name: societyName.trim(),
                country: country.trim(),
                state: state.trim(),
                city: city.trim(),
                address: address.trim()
            }
            ApiCalls.PostApiCall(ApiCalls.ApiUrls.AddInquiry, JSON.stringify(payload)).then(
                (success: any) => {
                    // console.log(success);
                    navigation.goBack();
                    Components.DropDownAlert.showSuccessAlert('Registered Successfully', 'Our team contact you soon.')
                },
                (fail) => {
                    Components.DropDownAlert.showSuccessAlert('Something went wrong', fail)
                })
        }

    }

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
                            placeholder='Name*'
                            placeholderTextColor={Config.Colors.GRAY}
                            onChangeText={(value) => {
                                setName(value)
                            }}
                        />
                        <Components.TextInput
                            value={email}
                            placeholder='Email*'
                            placeholderTextColor={Config.Colors.GRAY}
                            keyboardType='email-address'
                            onChangeText={(value) => {
                                setEmail(value)
                            }}
                        />
                        <Components.TextInput
                            value={mobileNumber}
                            placeholder='Mobile Number*'
                            placeholderTextColor={Config.Colors.GRAY}
                            keyboardType='numeric'
                            maxLength={10}
                            onChangeText={(value) => {

                                setMobileNumber(value)
                            }}
                        />
                        <Components.TextInput
                            value={societyName}
                            placeholder='Society Name*'
                            placeholderTextColor={Config.Colors.GRAY}
                            onChangeText={(value) => {
                                setSocietyName(value)
                            }}
                        />
                        <Components.TextInput
                            value={country}
                            placeholder='Country*'
                            placeholderTextColor={Config.Colors.GRAY}
                            onChangeText={(value) => {
                                setCountry(value)
                            }}
                        />
                        <Components.TextInput
                            value={state}
                            placeholder='State*'
                            placeholderTextColor={Config.Colors.GRAY}
                            onChangeText={(value) => {
                                setState(value)
                            }}
                        />
                        <Components.TextInput
                            value={city}
                            placeholder='City*'
                            placeholderTextColor={Config.Colors.GRAY}
                            onChangeText={(value) => {
                                setCity(value)
                            }}
                        />
                        <Components.TextInput
                            value={address}
                            placeholder='Address*'
                            placeholderTextColor={Config.Colors.GRAY}
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
                                onSubmit();
                            }}
                            buttonStyle={{ marginTop: 10, }}
                        />
                    </View>
                </ScrollView>
            </View>
        </Components.ScreenTopView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        tintColor: Config.Colors.SECONDARY
    },
    addressInput: {
        height: 120,
        textAlignVertical: 'top'
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