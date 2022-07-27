import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import assets from '../assets';
import Components from '../components'
import Config from '../Config';

const Login = ({ navigation }: NativeStackHeaderProps) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisibility, setPasswordVisibility] = useState(false)

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