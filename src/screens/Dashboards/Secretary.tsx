import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import assets from '../../assets';
import Components from '../../components'
import Config from '../../Config';
import { useDispatch, useSelector } from 'react-redux';
import ApiCalls from '../../webServices';
import * as Actions from '../../store/Actions';

const Secretary = ({ navigation }: NativeStackHeaderProps) => {

    const userData = useSelector((state: any) => state.userData)
    const dispatch = useDispatch()
    useEffect(() => {
        ApiCalls.GetApiCall(ApiCalls.ApiUrls.ViewSociety + `${userData.id}`).then(
            (success: any) => {
                // console.log(success);
                Actions.AddSocietyData(dispatch, success.data[0])
            },
            (fail) => {
                console.log(JSON.stringify(fail));
            }
        )
    }, [])

    const listData = [
        {
            id: 0, name: 'Society', image: assets.society, navigation: 'SocietyInformation'
        },
        {
            id: 1, name: 'Committee Members', image: assets.committee_member, navigation: 'CommitteeMemberList'
        },
        {
            id: 2, name: 'Owners', image: assets.owner, navigation: 'OwnerList'
        },
        {
            id: 3, name: 'Tenants', image: assets.tenant, navigation: 'TenantList'
        },
        {
            id: 5, name: 'Staff', image: assets.staff, navigation: 'StaffList'
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
            id: 9, name: 'Events', image: assets.events, navigation: 'EventCreate'
        },
        {
            id: 10, name: 'Emergency', image: assets.emergency
        },
        {
            id: 11, name: 'Facility', image: assets.facility, navigation: 'FacilityCreate'
        },
        {
            id: 12, name: 'Services', image: assets.services, navigation: 'ServiceCreate'
        },
        {
            id: 13, name: 'Account', image: assets.account
        },
        {
            id: 14, name: 'Notice Board', image: assets.noticeboard, navigation: 'NoticeboardCreate'
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
        }
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