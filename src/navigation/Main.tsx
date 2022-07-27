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
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Main;