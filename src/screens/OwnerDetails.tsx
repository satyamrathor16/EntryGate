import React from 'react';
import { ScrollView, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import assets from '../assets';
import Components from '../components'
import Config from '../Config';

interface listItem {
    item: {
        id: number;
        name: string;
        number: string;
        house_no: string;
        is_approved: boolean
    },
    index: number
}

const OwnerDetails = ({ navigation, route }: NativeStackHeaderProps) => {

    const data: listItem = route.params.data;

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Owner Details'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            {/* <ScrollView style={Config.GlobalStyles.contentContainer}> */}
            <View style={[Config.GlobalStyles.contentContainer, Config.GlobalStyles.pagePaddingSide]}>
                <Components.ProfileImage
                    containerStyle={{ marginTop: 20, }}
                />
                <Components.LabeledText
                    label='Name'
                    text={data.item.name}
                    containerStyle={{ marginTop: 10 }}
                />
                <Components.LabeledText
                    label='Number'
                    text={data.item.number}
                    containerStyle={{ marginTop: 10 }}
                />
                <Components.LabeledText
                    label='House No.'
                    text={data.item.house_no}
                    containerStyle={{ marginTop: 10 }}
                />
            </View>
            {/* </ScrollView> */}
        </Components.ScreenTopView>
    );
}

export default OwnerDetails;