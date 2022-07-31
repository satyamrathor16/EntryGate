import React from 'react';
import { View } from 'react-native';

import assets from '../../assets';
import Components from '../../components'
import Config from '../../Config';

const CommitteeMember = () => {
    const listData = [
        {
            id: 0, name: 'Society', image: assets.society
        },
        {
            id: 2, name: 'Owners', image: assets.owner
        },
        {
            id: 3, name: 'Tenants', image: assets.tenant
        },
        
        {
            id: 6, name: 'Wings', image: assets.wings
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
            id: 12, name: 'Services', image: assets.services
        },
        {
            id: 14, name: 'Notice Board', image: assets.noticeboard
        },
       
        {
            id: 16, name: 'Messages', image: assets.messages
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

export default CommitteeMember;