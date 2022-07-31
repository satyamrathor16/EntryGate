import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Image, Platform, Linking } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { BlurView } from "@react-native-community/blur";
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import Config from '../Config';
import assets from '../assets';
// import Utils from '../utils';
// import Module from '../module';
import Text from './CustomText'

interface ImagePickerPopupProps {
    showOption: boolean;
    onGetImage: (Image) => void;
    closePopup: () => void;
    cropping: boolean;
}

const ImagePickerPopup = (props: ImagePickerPopupProps) => {

    const { showOption, onGetImage, closePopup, cropping = false } = props;

    const onCameraPress = async () => {
        if (Platform.OS == 'android') {
            await check(PERMISSIONS.ANDROID.CAMERA).then((result) => {
                if (result == RESULTS.DENIED) {
                    request(PERMISSIONS.ANDROID.CAMERA).then((result1) => {
                        if (result1 == RESULTS.GRANTED) {
                            checkLibraryPermission();
                        } else {
                            console.log(result1);
                        }

                    })
                } else if (result == RESULTS.GRANTED) {
                    // console.log('ImageList:(151) takePicture',result == RESULTS.GRANTED);
                    checkLibraryPermission();
                } else if (result == RESULTS.BLOCKED) {
                    closePopup();
                    // Module.CustomDialog.showDialog(
                    //     Config.I18N.t('PERMISSION_ERROR'),
                    //     Config.I18N.t('CAMERA_PERMISSION_ERROR'),
                    //     Config.I18N.t('SETTING'),
                    //     Config.I18N.t('CANCEL'),
                    //     true,
                    //     async () => {
                    //         Linking.openSettings();
                    //     },
                    //     () => { console.log('No') }
                    // )
                }
            })
        } else {
            await check(PERMISSIONS.IOS.CAMERA).then((result) => {
                if (result == RESULTS.DENIED) {
                    request(PERMISSIONS.IOS.CAMERA).then((result1) => {
                        if (result1 == RESULTS.GRANTED) {
                            onCameraPremissionGranted();
                        } else {
                            console.log(result1);
                        }
                    })
                } else if (result == RESULTS.GRANTED) {
                    onCameraPremissionGranted();
                } else if (result == RESULTS.BLOCKED) {
                    closePopup();
                    // Module.CustomDialog.showDialog(
                    //     Config.I18N.t('PERMISSION_ERROR'),
                    //     Config.I18N.t('CAMERA_PERMISSION_ERROR'),
                    //     Config.I18N.t('SETTING'),
                    //     Config.I18N.t('CANCEL'),
                    //     true,
                    //     async () => {
                    //         Linking.openSettings();
                    //     },
                    //     () => { console.log('No') }
                    // )
                }
            })
        }
    }

    const checkLibraryPermission = async () => {
        await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result) => {
            if (result == RESULTS.DENIED) {
                request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result1) => {
                    if (result1 == RESULTS.GRANTED) {
                        onCameraPremissionGranted();
                    } else {
                        console.log(result1);
                    }

                })
            } else if (result == RESULTS.GRANTED) {
                // console.log('ImageList:(151) takePicture',result == RESULTS.GRANTED);
                onCameraPremissionGranted();
            } else if (result == RESULTS.BLOCKED) {
                closePopup();
                // Module.CustomDialog.showDialog(
                //     Config.I18N.t('PERMISSION_ERROR'),
                //     Config.I18N.t('MEDIA_PERMISSION_ERROR'),
                //     Config.I18N.t('SETTING'),
                //     Config.I18N.t('CANCEL'),
                //     true,
                //     async () => {
                //         Linking.openSettings();
                //     },
                //     () => { console.log('No') }
                // )
            }
        })
    }

    const onGalleryPress = async () => {
        if (Platform.OS == 'android') {
            await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result) => {
                if (result == RESULTS.DENIED) {
                    request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result1) => {
                        if (result1 == RESULTS.GRANTED) {
                            onGalleryPremissionGranted()
                        } else {
                            console.log(result1);
                        }

                    })
                } else if (result == RESULTS.GRANTED) {
                    // console.log('ImageList:(151) takePicture',result == RESULTS.GRANTED);
                    onGalleryPremissionGranted()
                } else if (result == RESULTS.BLOCKED) {
                    closePopup();
                    // Module.CustomDialog.showDialog(
                    //     Config.I18N.t('PERMISSION_ERROR'),
                    //     Config.I18N.t('MEDIA_PERMISSION_ERROR'),
                    //     Config.I18N.t('SETTING'),
                    //     Config.I18N.t('CANCEL'),
                    //     true,
                    //     async () => {
                    //         Linking.openSettings();
                    //     },
                    //     () => { console.log('No') }
                    // )
                }
            })
        } else {
            await check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                if (result == RESULTS.DENIED) {
                    request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result1) => {
                        if (result1 == RESULTS.GRANTED) {
                            onGalleryPremissionGranted()
                        } else {
                            console.log(result1);
                        }
                    })
                } else if (result == RESULTS.GRANTED) {
                    onGalleryPremissionGranted()
                } else if (result == RESULTS.BLOCKED) {
                    closePopup();
                    // Module.CustomDialog.showDialog(
                    //     Config.I18N.t('PERMISSION_ERROR'),
                    //     Config.I18N.t('MEDIA_PERMISSION_ERROR'),
                    //     Config.I18N.t('SETTING'),
                    //     Config.I18N.t('CANCEL'),
                    //     true,
                    //     async () => {
                    //         Linking.openSettings();
                    //     },
                    //     () => { console.log('No') }
                    // )
                }
            })
        }
    }

    const onCameraPremissionGranted = () => {
        ImagePicker.openCamera({
            width: 1024,
            height: 1024,
            cropping: cropping,
            compressImageMaxWidth: 1024,
            compressImageMaxHeight: 1024,
            compressImageQuality: 0.7,
            mediaType: 'photo',
        }).then(image => {
            console.log(image);
            onGetImage(image)
        });
    }

    const onGalleryPremissionGranted = () => {
        ImagePicker.openPicker({
            width: 1024,
            height: 1024,
            cropping: cropping,
            compressImageMaxWidth: 1024,
            compressImageMaxHeight: 1024,
            mediaType: 'photo',
            smartAlbums: ['PhotoStream', 'Generic', 'Panoramas', 'Favorites', 'AllHidden', 'RecentlyAdded', 'Bursts', 'UserLibrary', 'SelfPortraits', 'Screenshots', 'DepthEffect', 'Animated', 'LongExposure']
        }).then(image => {
            console.log(image);
            onGetImage(image)
        });
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showOption}
            onRequestClose={() => {
                // setNumberDialogVisible(false)
            }}>
            <View style={styles.centeredView}>
                <BlurView
                    style={styles.absolute}
                    blurType="dark"
                    blurAmount={2}
                />
                <View style={styles.modalView}>

                    <TouchableOpacity
                        onPress={() => {
                            onCameraPress();
                            // ImagePicker.openCamera({
                            //     width: 1024,
                            //     height: 1844,
                            //     cropping: cropping,
                            //     compressImageMaxWidth: 1024,
                            //     compressImageMaxHeight: 1844,
                            //     mediaType: 'photo',
                            // }).then(image => {
                            //     console.log(image);
                            //     onGetImage(image)
                            // });
                        }}>
                        <Image source={assets.camera}
                            style={styles.imagePickerPopupImages}
                            resizeMode='contain'
                        />
                        <Text textStyle={styles.buttonTextStyle}>Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        onGalleryPress();
                        // ImagePicker.openPicker({
                        //     width: 1024,
                        //     height: 1844,
                        //     cropping: cropping,
                        //     compressImageMaxWidth: 1024,
                        //     compressImageMaxHeight: 1844,
                        //     mediaType: 'photo',
                        // }).then(image => {
                        //     console.log(image);
                        //     onGetImage(image)
                        // });
                    }}>
                        <Image source={assets.gallery}
                            style={styles.imagePickerPopupImages}
                            resizeMode='contain'
                        />
                        <Text textStyle={styles.buttonTextStyle}>Gallery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelSelectedItemButton}
                        onPress={closePopup}
                    >
                        <Image
                            source={assets.cross}
                            resizeMode='contain'
                            style={styles.modalCancelImage}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    modalView: {
        width: Config.Constants.SCREEN_WIDTH,
        backgroundColor: Config.Colors.SECONDARY,
        paddingHorizontal: 20,
        paddingVertical: 35,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    cancelSelectedItemButton: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: Config.Colors.SECONDARY,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 0
    },
    modalCancelImage: {
        height: 15,
        width: 15,
    },
    imagePickerPopupImages: {
        width: 75,
        height: 75,
    },
    buttonTextStyle: {
        color: Config.Colors.PRIMARY,
        // fontFamily: Config.Theme.FONT_BOLD,
        textAlign: 'center'
    }
})

export default ImagePickerPopup;