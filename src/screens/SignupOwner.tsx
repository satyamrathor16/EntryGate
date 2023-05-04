import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import SoftInputMode from 'react-native-set-soft-input-mode'

import assets from '../assets';
import Components from '../components'
import Config from '../Config';
import ApiCalls from '../webServices';


const SignupOwner = ({ navigation }: NativeStackHeaderProps) => {

    const [societyCode, setSocietyCode] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('Mr.')
    const [idProofType, setIdProofType] = useState('Aadhar Card')
    const [idProofNumber, setIdProofNumber] = useState('')
    const [idProofImage, setIdProofImage] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [isIdproofImage, setIsIdproofImage] = useState(true)
    const [contactNumber, setContactNumber] = useState('')
    const [alternativeContactNumber, setAlternativeContactNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imagePickerPopup, setImagePickerPopup] = useState<boolean>(false)

    useEffect(() => {
        SoftInputMode.set(SoftInputMode.ADJUST_RESIZE)
        return () => {
            SoftInputMode.set(SoftInputMode.ADJUST_NOTHING)
        }
    }, [])

    const validateForm = () => {
        if (societyCode.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Society Code is required', 'Please enter the society code');
            return false
        }
        if (firstName.trim() === '') {
            Components.DropDownAlert.showErrorAlert('First Name is required', 'Please enter the first name');
            return false
        }
        if (middleName.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Middle Name is required', 'Please enter the middle name');
            return false
        }
        if (lastName.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Last Name is required', 'Please enter the last name');
            return false
        }

        if (contactNumber.trim().length < 10) {
            Components.DropDownAlert.showErrorAlert('Contact Number is invailid', 'Please enter the correct contact number');
            return false
        }
        if (!(Config.Constants.MOBILE_NUMBER.test(contactNumber.trim()))) {
            Components.DropDownAlert.showErrorAlert('Contact Number is invailid', 'Please enter the correct contact number');
            return false
        }
        if (alternativeContactNumber.trim().length < 10) {
            Components.DropDownAlert.showErrorAlert('Alternative Contact Number is invailid', 'Please enter the correct alternative contact number');
            return false
        }
        if (!(Config.Constants.MOBILE_NUMBER.test(alternativeContactNumber.trim()))) {
            Components.DropDownAlert.showErrorAlert('Alternative Contact Number is invailid', 'Please enter the correct alternative contact number');
            return false
        }
        if (idProofNumber.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Id Proof Number is required', 'Please enter the id proof number');
            return false
        }
        if (idProofImage.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Id Proof Image is required', 'Please select the id proof image');
            return false
        }
        if (profileImage.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Profile Image is required', 'Please enter the profile image');
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
        if (password.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Password is required', 'Please enter the password');
            return false
        }
        return true
    }


    const onSubmit = () => {
        if (validateForm()) {
            var formData = new FormData()
            formData.append('society_id', '3');
            formData.append('prefix', gender)
            formData.append('first_name', firstName.trim())
            formData.append('middle_name', middleName.trim())
            formData.append('last_name', lastName.trim())
            formData.append('owner_email_id', email.trim())
            formData.append('password', password.trim())
            formData.append('id_proof_number', idProofNumber.trim())
            formData.append('id_proof_type', idProofType)
            formData.append('id_proof_image', { uri: idProofImage, name: 'image.jpg', type: 'image/jpeg' });
            formData.append('owner_contact_number', contactNumber.trim())
            formData.append('owner_alternative_contact_number', alternativeContactNumber.trim())
            formData.append('owner_profile_image', { uri: profileImage, name: 'image.jpg', type: 'image/jpeg' })
            formData.append('created_by', 'Committee Member')
            ApiCalls.PostApiCall(ApiCalls.ApiUrls.Sign_Owner, formData, true, { 'Content-Type': 'multipart/form-data' }).then(
                (success: any) => {
                    // console.log(success);
                    navigation.goBack();
                    Components.DropDownAlert.showSuccessAlert('Registered Successfully', 'Please wait till secretary accept your request.')
                },
                (fail) => {
                    Components.DropDownAlert.showSuccessAlert('Something went wrong', fail)
                })
        }
    }


    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Owner'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            <View style={[Config.GlobalStyles.contentContainer]}>
                <ScrollView>
                    <View style={Config.GlobalStyles.pagePaddingSide}>
                        <Components.TextInput
                            value={societyCode}
                            placeholder='Society code'
                            onChangeText={(value) => {
                                setSocietyCode(value)
                            }}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.menuView}>
                                <Menu>
                                    <MenuTrigger>
                                        <View style={styles.dropdownArrow}>
                                            <Components.Text textStyle={styles.menuOptionText}>{gender}</Components.Text>
                                            <Image
                                                source={assets.back}
                                                resizeMode='contain'
                                                style={styles.dropdownArrowImage}
                                            />
                                        </View>
                                    </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption onSelect={() => { setGender('Mr.') }}>
                                            <Components.Text textStyle={styles.menuOptionText}>Mr.</Components.Text>
                                        </MenuOption>
                                        <MenuOption onSelect={() => { setGender('Ms.') }}>
                                            <Components.Text textStyle={styles.menuOptionText}>Ms.</Components.Text>
                                        </MenuOption>
                                        <MenuOption onSelect={() => { setGender('Mrs') }}>
                                            <Components.Text textStyle={styles.menuOptionText}>Mrs</Components.Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </View>
                            <Components.TextInput
                                value={firstName}
                                placeholder='First Name'
                                onChangeText={(value) => {
                                    setFirstName(value)
                                }}
                                containerStyle={styles.firstNameInputText}
                            />
                        </View>
                        <Components.TextInput
                            value={middleName}
                            placeholder='Middle Name'
                            onChangeText={(value) => {
                                setMiddleName(value)
                            }}
                        />
                        <Components.TextInput
                            value={lastName}
                            placeholder='Last Name'
                            onChangeText={(value) => {
                                setLastName(value)
                            }}
                        />
                        <Components.TextInput
                            value={contactNumber}
                            placeholder='Contact Number'
                            onChangeText={(value) => {
                                setContactNumber(value)
                            }}
                        />
                        <Components.TextInput
                            value={alternativeContactNumber}
                            placeholder='Alternative Contact Number'
                            onChangeText={(value) => {
                                setAlternativeContactNumber(value)
                            }}
                        />
                        <Components.Text textStyle={styles.idProofPlaceholder}>Id Proof Type</Components.Text>
                        <Menu style={{ paddingVertical: 12, paddingHorizontal: 10 }}>
                            <MenuTrigger>
                                <View style={styles.dropdownArrow}>
                                    <Components.Text textStyle={styles.menuOptionText}>{idProofType}</Components.Text>
                                    <Image
                                        source={assets.back}
                                        resizeMode='contain'
                                        style={styles.dropdownArrowImage}
                                    />
                                </View>
                            </MenuTrigger>
                            <MenuOptions>
                                <MenuOption onSelect={() => { setIdProofType('Aadhar Card') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Aadhar Card</Components.Text>
                                </MenuOption>
                                <MenuOption onSelect={() => { setIdProofType('Pan Card') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Pan Card</Components.Text>
                                </MenuOption>
                                <MenuOption onSelect={() => { setIdProofType('Election Card') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Election Card</Components.Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                        <Components.TextInput
                            value={idProofNumber}
                            placeholder='Id Proof Number'
                            onChangeText={(value) => {
                                setIdProofNumber(value)
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setImagePickerPopup(true)
                                setIsIdproofImage(true)
                            }}
                            style={styles.imageUploadViewStyle}>
                            {idProofImage ?
                                <Image
                                    source={{ uri: idProofImage }}
                                    style={styles.imageUploadViewImage}
                                    resizeMode={'contain'}
                                />
                                :
                                <Components.Text>Upload Id Proof Image</Components.Text>
                            }
                        </TouchableOpacity>
                        
                        <Components.TextInput
                            value={email}
                            placeholder='Email'
                            onChangeText={(value) => {
                                setEmail(value)
                            }}
                        />
                        <Components.TextInput
                            value={password}
                            placeholder='password'
                            onChangeText={(value) => {
                                setPassword(value)
                            }}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setImagePickerPopup(true)
                                setIsIdproofImage(false)
                            }}
                            style={styles.imageUploadViewStyle}>
                            {profileImage ?
                                <Image
                                    source={{ uri: profileImage }}
                                    style={styles.imageUploadViewImage}
                                    resizeMode={'contain'}
                                />
                                :
                                <Components.Text>Upload Profile Image</Components.Text>
                            }
                        </TouchableOpacity>

                        <Components.Button
                            title='Submit'
                            onPress={() => {

                            }}
                            buttonStyle={styles.submitButton}
                        />
                    </View>
                </ScrollView>
            </View>
            <Components.ImagePickerPopup
                showOption={imagePickerPopup}
                cropping={true}
                onGetImage={(image) => {
                    setImagePickerPopup(false);
                    if (isIdproofImage) {
                        setIdProofImage(image.path)
                    } else {
                        setProfileImage(image.path)
                    }
                    // setImageURI(image.path)

                }}
                closePopup={() => {
                    setImagePickerPopup(false);
                }}
            />
        </Components.ScreenTopView>
    );
}

const styles = StyleSheet.create({
    firstNameInputText: {
        width: '70%',
    },
    addressInput: {
        height: 120,
        textAlign: 'left'
    },
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    idProofPlaceholder: {
        fontSize: 12,
        marginTop: 10
    },
    menuOptionText: {
        fontSize: 14
    },
    menuView: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    imageUploadViewStyle: {
        height: 130,
        width: '100%',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageUploadViewImage: {
        width: '100%',
        height: '100%',
    },
    submitButton: {
        marginTop: 20,
        // marginBottom: 10
    },
    dropdownArrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownArrowImage: {
        height: 20,
        width: 20,
        transform: [
            { rotate: '-90deg' }
        ]
    }
})

export default SignupOwner;