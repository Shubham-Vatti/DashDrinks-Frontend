import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
import LoginScreen from '../Screens/LoginsScreens/LoginScreen';
import DocumentPicScreen from '../Screens/LoginsScreens/DocumentPicScreen'
import BottomStack from './BottomStack';
import UserProfileScreens from '../Screens/ProfileScreens/UserProfileScreens'
import HelpScreen from '../Screens/ProfileScreens/HelpScreen'
import SupportScreen from '../Screens/ProfileScreens/SupportScreen'
import OrderScreen from '../Screens/OrdersScreens';
import LiquorDataScreen from '../Screens/LiquorScreen/LiquorDataScreen';
// import CartScreen from '../Screens/CartScreen'



const Stack=createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false,presentation:"transparentModal"}} >
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='DocScreen' component={DocumentPicScreen}/>
        <Stack.Screen name='BottomStack' component={BottomStack}/>
        <Stack.Screen name='UserData' component={UserProfileScreens}/>
        <Stack.Screen name='Help' component={HelpScreen}/>
        <Stack.Screen name='Support' component={SupportScreen}/>
        <Stack.Screen name='Order' component={OrderScreen}/>
        <Stack.Screen name='LiquorData' component={LiquorDataScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})