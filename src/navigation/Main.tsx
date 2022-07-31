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
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Main;