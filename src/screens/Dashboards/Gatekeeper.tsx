import React from 'react';
import { View } from 'react-native';

import assets from '../../assets';
import Components from '../../components'
import Config from '../../Config';

const Gatekeeper = () => {
    const listData = [
        {
            id: 0, name: 'Visitor', image: assets.visitor
        },
        {
            id: 1, name: 'Staff', image: assets.staff
        },
        {
            id: 2, name: 'Group Visitor', image: assets.group_visitor
        },
        {
            id: 3, name: 'Service Provider', image: assets.service_provider
        },
        {
            id: 4, name: 'Pre-Bookes', image: assets.pre_booked
        },
        {
            id: 5, name: 'Vendors', image: assets.vendors
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
                    }}
                />
            </View>
        </Components.ScreenTopView>
    );
}

export default Gatekeeper;