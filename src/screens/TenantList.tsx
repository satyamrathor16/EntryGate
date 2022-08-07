import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import assets from '../assets';
import Components from '../components'
import Config from '../Config';

interface listItem {
    id: number;
    name: string;
    number: string;
    house_no: string;
    is_approved: boolean
}

const TenantList = ({ navigation, route }: NativeStackHeaderProps) => {

    const DATA: Array<listItem> = [
        { id: 1, name: 'Ramesh', number: '9865328754', house_no: 'A 301', is_approved: true },
        { id: 2, name: 'Mahesh', number: '9865328754', house_no: 'A 303', is_approved: true },
        { id: 3, name: 'Kamal', number: '9865328754', house_no: 'A 402', is_approved: true },
        { id: 4, name: 'Kisor', number: '9865328754', house_no: 'A 504', is_approved: false },
        { id: 5, name: 'Maharaj', number: '9865328754', house_no: 'A 604', is_approved: true },
        { id: 6, name: 'Ajay', number: '9865328754', house_no: 'A 802', is_approved: true },
        { id: 7, name: 'Satendra', number: '9865328754', house_no: 'A 901', is_approved: false },
        { id: 8, name: 'Shubham', number: '9865328754', house_no: 'A 1104', is_approved: true },
    ]

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Tenants'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            <View style={[Config.GlobalStyles.contentContainer]}>
                <Components.ApproveRejectList
                    data={DATA}
                    onPress={(data) => {
                        navigation.navigate('TenantDetails', { data })
                    }}
                    onNagativePress={() => { }}
                    onPositivePress={() => { }}
                />
            </View>
        </Components.ScreenTopView>
    );
}


export default TenantList;