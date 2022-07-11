import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import Login from '../screens/Login';

const StackNav = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{ headerShown: false }}>
        <StackNav.Screen component={SplashScreen} name={'SplashScreen'} />
        <StackNav.Screen component={Login} name={'LoginScreen'} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Main;