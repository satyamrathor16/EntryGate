import React from 'react';
import { View, StyleSheet, FlatList, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import assets from '../assets';
import Components from '../components'
import Config from '../Config';

interface listItem {
    item: {
        id: number;
        role: string;
        image: ImageSourcePropType,
        navigationScreenName: string
    }
    index: number;
}

const Signup = ({ navigation }: NativeStackHeaderProps) => {

    const data = [
        {
            id: 1,
            role: 'Committee Member',
            image: assets.committee_member,
            navigationScreenName: 'SignupCommitteeMember',
        },
        {
            id: 2,
            role: 'Owner',
            image: assets.owner,
            navigationScreenName: 'SignupOwner',
        },
        {
            id: 3,
            role: 'Tenant',
            image: assets.tenant,
            navigationScreenName: 'SignupTenant',
        },
        {
            id: 4,
            role: 'Gatekeeper',
            image: assets.gatekeeper,
            navigationScreenName: 'SignupGatekeeper',
        },
        {
            id: 5,
            role: 'Staff',
            image: assets.staff,
            navigationScreenName: 'SignupStaff',
        },
    ]

    const _renderItem = ({ item, index }: listItem) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(item.navigationScreenName)
                }}
                style={styles.listItem}>
                <Image
                    source={item.image}
                    style={{ width: '60%', height: '60%' }}
                    resizeMode='contain'
                />
                <Components.Text textStyle={styles.listItemText}>{item.role}</Components.Text>
            </TouchableOpacity>
        )
    }

    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Signup'
                leftButtonPress={() => {
                    navigation.goBack()
                }}
            />
            <View style={[Config.GlobalStyles.contentContainer]}>
                <FlatList
                    data={data}
                    keyExtractor={(data) => data.id.toString()}
                    renderItem={_renderItem}
                    numColumns={2}
                    style={styles.listSty}
                />
            </View>
        </Components.ScreenTopView>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '45%',
        height: 150,
        backgroundColor: '#F5F5F5',
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowOffset: {
            height: 2,
            width: 2,
        },
        shadowColor: Config.Colors.BLACK,
        shadowRadius: 5
    },
    listSty: {
        paddingHorizontal: 16
    },
    listItemText: {
        marginTop: 10
    }
})

export default Signup;