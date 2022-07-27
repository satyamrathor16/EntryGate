import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import assets from '../assets';
import Components from '../components'
import Config from '../Config';

const SignupTenant = ({ navigation }: NativeStackHeaderProps) => {

    const [societyCode, setSocietyCode] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')
    const [gender, setGender] = useState('Mr.')
    const [idProofType, setIdProofType] = useState('Aadhar Card')
    const [idProofNumber, setIdProofNumber] = useState('')
    const [idProofImage, setIdProofImage] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [rentAgreement, setRentAgreement] = useState('')
    const [uploadedImageType, setUploadedImageType] = useState<number>(0)
    const [contactNumber, setContactNumber] = useState('')
    const [refContactNumber1, setRefContactNumber1] = useState('')
    const [refPersonName1, setRefPersonName1] = useState('')
    const [refContactNumber2, setRefContactNumber2] = useState('')
    const [refPersonName2, setRefPersonName2] = useState('')
    const [rentStartDate, setrentStartDate] = useState('')
    const [rentEndDate, setrentEndDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [referredBy, setReferredBy] = useState('Owner')
    const [referredPresonName, setReferredPresonName] = useState('')
    const [tenantType, setTenantType] = useState('Family')
    const [numberOfPerson, setNumberOfPerson] = useState('')

    const [imagePickerPopup, setImagePickerPopup] = useState<boolean>(false)


    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Tenant'
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
                        <Components.TextInput
                            value={houseNumber}
                            placeholder='House No.'
                            onChangeText={(value) => {
                                setHouseNumber(value)
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
                            value={address}
                            placeholder='Permanent Address'
                            onChangeText={(value) => {
                                setAddress(value)
                            }}
                            multiline={true}
                            containerStyle={styles.addressInput}
                            style={styles.addressInput}
                        />
                        <Components.TextInput
                            value={city}
                            placeholder='City'
                            onChangeText={(value) => {
                                setCity(value)
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
                            value={pincode}
                            placeholder='Pincode'
                            onChangeText={(value) => {
                                setPincode(value)
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
                            value={refContactNumber1}
                            placeholder='Reference Contact 1'
                            onChangeText={(value) => {
                                setRefContactNumber1(value)
                            }}
                        />
                        <Components.TextInput
                            value={refPersonName1}
                            placeholder='Reference Person Name 1'
                            onChangeText={(value) => {
                                setRefPersonName1(value)
                            }}
                        />
                        <Components.TextInput
                            value={refContactNumber2}
                            placeholder='Reference Contact 2'
                            onChangeText={(value) => {
                                setRefContactNumber2(value)
                            }}
                        />
                        <Components.TextInput
                            value={refPersonName2}
                            placeholder='Reference Person Name 2'
                            onChangeText={(value) => {
                                setRefPersonName2(value)
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
                                setUploadedImageType(1)
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
                            value={rentStartDate}
                            placeholder='Rent Start Date'
                            onChangeText={(value) => {
                                setrentStartDate(value)
                            }}
                        />
                        <Components.TextInput
                            value={rentEndDate}
                            placeholder='Rent End Date'
                            onChangeText={(value) => {
                                setrentEndDate(value)
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
                                setUploadedImageType(2)
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
                        <TouchableOpacity
                            onPress={() => {
                                setImagePickerPopup(true)
                                setUploadedImageType(3)
                            }}
                            style={styles.imageUploadViewStyle}>
                            {rentAgreement ?
                                <Image
                                    source={{ uri: rentAgreement }}
                                    style={styles.imageUploadViewImage}
                                    resizeMode={'contain'}
                                />
                                :
                                <Components.Text>Upload Rent Agreement</Components.Text>
                            }
                        </TouchableOpacity>
                        <Components.Text textStyle={styles.idProofPlaceholder}>Referred By</Components.Text>
                        <Menu style={{ paddingVertical: 12, paddingHorizontal: 10 }}>
                            <MenuTrigger>
                                <View style={styles.dropdownArrow}>
                                    <Components.Text textStyle={styles.menuOptionText}>{referredBy}</Components.Text>
                                    <Image
                                        source={assets.back}
                                        resizeMode='contain'
                                        style={styles.dropdownArrowImage}
                                    />
                                </View>
                            </MenuTrigger>
                            <MenuOptions>
                                <MenuOption onSelect={() => { setReferredBy('Owner') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Owner</Components.Text>
                                </MenuOption>
                                <MenuOption onSelect={() => { setReferredBy('Committee Member') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Committee Member</Components.Text>
                                </MenuOption>
                                <MenuOption onSelect={() => { setReferredBy('Secretary') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Secretary</Components.Text>
                                </MenuOption>
                                <MenuOption onSelect={() => { setReferredBy('Agent') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Agent</Components.Text>
                                </MenuOption>
                                <MenuOption onSelect={() => { setReferredBy('Other') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Other</Components.Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                        <Components.TextInput
                            value={referredPresonName}
                            placeholder='Referred Person Name'
                            onChangeText={(value) => {
                                setReferredPresonName(value)
                            }}
                        />
                        <Components.Text textStyle={styles.idProofPlaceholder}>Tenant Type</Components.Text>
                        <Menu style={{ paddingVertical: 12, paddingHorizontal: 10 }}>
                            <MenuTrigger>
                                <View style={styles.dropdownArrow}>
                                    <Components.Text textStyle={styles.menuOptionText}>{tenantType}</Components.Text>
                                    <Image
                                        source={assets.back}
                                        resizeMode='contain'
                                        style={styles.dropdownArrowImage}
                                    />
                                </View>
                            </MenuTrigger>
                            <MenuOptions>
                                <MenuOption onSelect={() => { setTenantType('Family') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Family</Components.Text>
                                </MenuOption>
                                <MenuOption onSelect={() => { setTenantType('Bachelor') }}>
                                    <Components.Text textStyle={styles.menuOptionText}>Bachelor</Components.Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                        <Components.TextInput
                            value={numberOfPerson}
                            placeholder='Number of Person'
                            onChangeText={(value) => {
                                setNumberOfPerson(value)
                            }}
                            keyboardType='numeric'
                        />
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
                    if (uploadedImageType == 1) {
                        setIdProofImage(image.path)
                    } else if (uploadedImageType == 2) {
                        setProfileImage(image.path)
                    } else if (uploadedImageType == 3) {
                        setRentAgreement(image.path)
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

export default SignupTenant;