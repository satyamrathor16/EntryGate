import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SoftInputMode from 'react-native-set-soft-input-mode'
import assets from '../assets';
import Components from '../components'
import Config from '../Config';
import ApiCalls from '../webServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/Actions';
const Login = ({ navigation }: NativeStackHeaderProps) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const validateForm = () => {
        if (username.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Username is required', 'Please enter the username');
            return false
        }
        if (password.trim() === '') {
            Components.DropDownAlert.showErrorAlert('Password is required', 'Please enter the password');
            return false
        }
        return true
    }

    const onLogin = () => {
        if (validateForm()) {
            var payload = {
                email: username.trim(),
                password: password.trim()
            }
            ApiCalls.PostApiCall(ApiCalls.ApiUrls.Login, JSON.stringify(payload)).then(
                (success: any) => {
                    // console.log(JSON.stringify(success));
                    AsyncStorage.setItem('user_data', JSON.stringify(success.data))
                    Actions.AddUserData(dispatch, success.data)
                    if (success.data.role_name == 'COMMITTEE_MEMBER') {
                        navigation.navigate('CommitteeMemberDashboard')
                    } else if (success.data.role_name == 'SECRETARY') {
                        navigation.navigate('SecretaryDashboard')
                    } else if (success.data.role_name == 'OWNER') {
                        navigation.navigate('OwnerDashboard')
                    } else if (success.data.role_name == 'GATEKEEPER') {
                        navigation.navigate('GatekeeperDashboard')
                    } else if (success.data.role_name == 'TENANT') {
                        navigation.navigate('TenantDashboard')
                    } else if (success.data.role_name == 'STAFF') {
                        navigation.navigate('StaffDashboard')
                    }
                },
                (fail) => {
                    console.log(JSON.stringify(fail));
                })
        }

        //     if (username == 'humera01@gmail.com' && password == 'humera01') {
        //         navigation.navigate('CommitteeMemberDashboard')
        //     } else if (username == 'satyam@gmail.com' && password == 'satyam@123') {
        // navigation.navigate('SecretaryDashboard')
        //     } else if (username == 'ajay@gmail.com' && password == 'ajay@123') {
        // navigation.navigate('OwnerDashboard')
        //     } else if (username == 'rahul@gmail.com' && password == 'rahul@123') {
        // navigation.navigate('GatekeeperDashboard')
        //     } else if (username == 'vikas@gmail.com' && password == 'vikas@123') {
        // navigation.navigate('TenantDashboard')
        //     } else if (username == 'jitu@gmail.com' && password == 'jitu@123') {
        //         navigation.navigate('StaffDashboard')
        //     }
    }

    useEffect(() => {
        SoftInputMode.set(SoftInputMode.ADJUST_NOTHING)
        return () => {
            SoftInputMode.set(SoftInputMode.ADJUST_RESIZE)
        }
    }, [])



    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Login'
                showLeftButton={false}
            />
            <View style={[Config.GlobalStyles.contentContainer, { paddingHorizontal: 16 }]}>
                <Image
                    source={assets.spalshImage}
                    resizeMode='cover'
                    style={styles.imageStyle}
                />
                <View style={styles.textInputView}>
                    <Components.TextInput
                        value={username}
                        placeholder='Username'
                        placeholderTextColor={Config.Colors.WHITE}
                        style={styles.textInputStyle}
                        onChangeText={(value) => {
                            setUsername(value)
                        }}

                    />
                    <View style={styles.passwordView}>
                        <Components.TextInput
                            value={password}
                            placeholder='Password'
                            placeholderTextColor={'white'}
                            style={styles.textInputStyle}
                            secureTextEntry={!passwordVisibility}
                            onChangeText={(value) => {
                                setPassword(value)
                            }}
                            containerStyle={{ width: '90%', }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setPasswordVisibility(!passwordVisibility)
                            }}
                            style={styles.passwordEyeView}>
                            <Image
                                source={passwordVisibility == false ? assets.password_invisible : assets.password_visible}
                                style={styles.passwordEye}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.forgotPassword}>
                    <Components.Text textStyle={styles.forgotPasswordText}>Forgot Password?</Components.Text>
                </TouchableOpacity>
                <Components.Button
                    title='Submit'
                    onPress={() => {
                        onLogin();
                        // navigation.navigate('SecretaryDashboard')
                        // navigation.navigate('GatekeeperDashboard')
                        // navigation.navigate('CommitteeMemberDashboard')
                        // navigation.navigate('OwnerDashboard')
                        // navigation.navigate('StaffDashboard')
                        // navigation.navigate('TenantDashboard')
                    }}
                    buttonStyle={styles.submitButtonSty}
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Signup')
                    }}
                    style={styles.signup}>
                    <Components.Text textStyle={styles.signupText}>Sign Up?</Components.Text>
                </TouchableOpacity>
                <View style={styles.registerTextView}>
                    <Components.Text>Don't have register society on EntryGate?</Components.Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Register')
                    }}>
                        <Components.Text textStyle={styles.registerText}>Register</Components.Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Components.ScreenTopView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    imageStyle: {
        height: '30%',
        width: '100%',
        marginTop: 16,
        borderRadius: 12
    },
    textInputView: {
        paddingTop: 6,
        paddingBottom: 18,
        paddingHorizontal: 16,
        backgroundColor: Config.Colors.PRIMARY,
        borderRadius: 12,
        marginTop: 24
    },
    textInputStyle: {
        color: Config.Colors.WHITE,
        fontSize: 16,
        borderBottomColor: Config.Colors.SECONDARY
    },
    passwordView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    passwordEyeView: {
        height: 50,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    passwordEye: {
        height: 27,
        width: 27,
        tintColor: Config.Colors.SECONDARY,
        marginTop: 10
        // backgroundColor:'red'
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 10,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: Config.Colors.PRIMARY
    },
    submitButtonSty: {
        width: '100%',
        marginTop: 14
    },
    signup: {
        alignSelf: 'center',
        marginTop: 10,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        color: Config.Colors.PRIMARY,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    registerTextView: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerText: {
        color: Config.Colors.PRIMARY,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginLeft: 5
    },
})

export default Login;