import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Signup from '../screens/Signup';
import SignupCommitteeMember from '../screens/SignupCommitteeMember';
import SignupGatekeeper from '../screens/SignupGatekeeper';
import SignupOwner from '../screens/SignupOwner';
import SignupStaff from '../screens/SignupStaff';
import SignupTenant from '../screens/SignupTenant';
import Secretary from '../screens/Dashboards/Secretary';
import Gatekeeper from '../screens/Dashboards/Gatekeeper';
import Staff from '../screens/Dashboards/Staff';
import Owner from '../screens/Dashboards/Owner';
import Tenant from '../screens/Dashboards/Tenant';
import CommitteeMember from '../screens/Dashboards/CommitteeMember';
import SocietyInformation from '../screens/SocietyInformation';
import CommitteeMemberList from '../screens/CommitteeMemberList';
import CommitteeMemberDetails from '../screens/CommitteeMemberDetails';
import OwnerList from '../screens/OwnerList';
import OwnerDetails from '../screens/OwnerDetails';
import TenantList from '../screens/TenantList';
import TenantDetails from '../screens/TenantDetails';
import StaffList from '../screens/StaffList';
import StaffDetails from '../screens/StaffDetails';
import EventCreate from '../screens/EventCreate';
import FacilityCreate from '../screens/FacilityCreate';
import ServiceCreate from '../screens/ServiceCreate';
import NoticeboardCreate from '../screens/NoticeboardCreate';

const StackNav = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{ headerShown: false }}>
        <StackNav.Screen component={SplashScreen} name={'Splash'} />
        <StackNav.Screen component={Login} name={'Login'} />
        <StackNav.Screen component={Register} name={'Register'} />
        <StackNav.Screen component={Signup} name={'Signup'} />
        <StackNav.Screen component={SignupCommitteeMember} name={'SignupCommitteeMember'} />
        <StackNav.Screen component={SignupGatekeeper} name={'SignupGatekeeper'} />
        <StackNav.Screen component={SignupOwner} name={'SignupOwner'} />
        <StackNav.Screen component={SignupStaff} name={'SignupStaff'} />
        <StackNav.Screen component={SignupTenant} name={'SignupTenant'} />
        <StackNav.Screen component={Secretary} name={'SecretaryDashboard'} />
        <StackNav.Screen component={Gatekeeper} name={'GatekeeperDashboard'} />
        <StackNav.Screen component={Staff} name={'StaffDashboard'} />
        <StackNav.Screen component={Owner} name={'OwnerDashboard'} />
        <StackNav.Screen component={Tenant} name={'TenantDashboard'} />
        <StackNav.Screen component={CommitteeMember} name={'CommitteeMemberDashboard'} />
        <StackNav.Screen component={SocietyInformation} name={'SocietyInformation'} />
        <StackNav.Screen component={CommitteeMemberList} name={'CommitteeMemberList'} />
        <StackNav.Screen component={CommitteeMemberDetails} name={'CommitteeMemberDetails'} />
        <StackNav.Screen component={OwnerList} name={'OwnerList'} />
        <StackNav.Screen component={OwnerDetails} name={'OwnerDetails'} />
        <StackNav.Screen component={TenantList} name={'TenantList'} />
        <StackNav.Screen component={TenantDetails} name={'TenantDetails'} />
        <StackNav.Screen component={StaffList} name={'StaffList'} />
        <StackNav.Screen component={StaffDetails} name={'StaffDetails'} />
        <StackNav.Screen component={EventCreate} name={'EventCreate'} />
        <StackNav.Screen component={FacilityCreate} name={'FacilityCreate'} />
        <StackNav.Screen component={ServiceCreate} name={'ServiceCreate'} />
        <StackNav.Screen component={NoticeboardCreate} name={'NoticeboardCreate'} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Main;