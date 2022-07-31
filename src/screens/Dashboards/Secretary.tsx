import React from 'react';
import { View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import assets from '../../assets';
import Components from '../../components'
import Config from '../../Config';

const Secretary = ({ navigation }: NativeStackHeaderProps) => {
    const listData = [
        {
            id: 0, name: 'Society', image: assets.society, navigation: 'SocietyInformation'
        },
        {
            id: 1, name: 'Committee Members', image: assets.committee_member
        },
        {
            id: 2, name: 'Owners', image: assets.owner
        },
        {
            id: 3, name: 'Tenants', image: assets.tenant
        },
        {
            id: 5, name: 'Staff', image: assets.staff
        },
        {
            id: 6, name: 'Wings', image: assets.wings
        },
        {
            id: 7, name: 'Parking', image: assets.parking
        },
        {
            id: 8, name: 'Complaints', image: assets.complaints
        },
        {
            id: 9, name: 'Events', image: assets.events
        },
        {
            id: 10, name: 'Emergency', image: assets.emergency
        },
        {
            id: 11, name: 'Facility', image: assets.facility
        },
        {
            id: 12, name: 'Services', image: assets.services
        },
        {
            id: 13, name: 'Account', image: assets.account
        },
        {
            id: 14, name: 'Notice Board', image: assets.noticeboard
        },
        {
            id: 15, name: 'Visitors Info', image: assets.visitorsinfo
        },
        {
            id: 16, name: 'Messages', image: assets.messages
        },
        {
            id: 17, name: 'Maintenance', image: assets.maintenance
        },
        {
            id: 18, name: 'Balance Manager', image: assets.balance_manager
        },
    ]
    return (
        <Components.ScreenTopView>
            <Components.Header
                title='Dashboard'
                showLeftButton={false}
            />
            <View style={[Config.GlobalStyles.contentContainer]}>
                <Components.DashboardFlatList
                    data={listData}
                    onItemPress={({ item, index }) => {
                        console.log(item.name);
                        if (item.navigation) {
                            navigation.navigate(item.navigation)
                        }
                    }}
                />
            </View>
        </Components.ScreenTopView>
    );
}

export default Secretary;