import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
import LoginScreen from '../Screens/LoginsScreens/LoginScreen';
import DocumentPicScreen from '../Screens/LoginsScreens/DocumentPicScreen'
import BottomStack from './BottomStack';
const Stack=createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false,presentation:"transparentModal"}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='DocScreen' component={DocumentPicScreen}/>
        <Stack.Screen name='BottomStack' component={BottomStack}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})