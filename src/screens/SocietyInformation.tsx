import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import assets from '../assets';
import Components from '../components'
import Config from '../Config';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/Actions';

const SocietyInformation = ({ navigation }: NativeStackHeaderProps) => {

    const societyInformation = useSelector((state: any) => state.societyData)

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Society Information'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            <View style={[Config.GlobalStyles.contentContainer]}>
                <ScrollView>
                    <View style={Config.GlobalStyles.pagePaddingSide}>
                        <Image
                            source={assets.society}
                            resizeMode='cover'
                            style={styles.imageStyle}
                        />
                        <Components.LabeledText
                            label='Society Name'
                            text={societyInformation.society_name}
                            containerStyle={{ marginTop: 10 }}
                        />
                        <Components.LabeledText
                            label='Address'
                            text={societyInformation.society_address}
                            containerStyle={{ marginTop: 10 }}
                            numberofLine={3}
                        />
                        <Components.LabeledText
                            label='Contact Number'
                            text={societyInformation.society_contact_number}
                            containerStyle={{ marginTop: 10 }}
                        />

                    </View>
                </ScrollView>
            </View>
        </Components.ScreenTopView>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: Config.Constants.SCREEN_HEIGHT * 0.3,
        borderRadius: 12,
        backgroundColor: Config.Colors.PRIMARY,
    }
})

export default SocietyInformation;