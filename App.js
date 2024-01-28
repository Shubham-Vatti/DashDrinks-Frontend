import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/Navigators/AuthStack'
import ProfileScreen from './src/Screens/LoginsScreens/ProfileScreen';
import { WhiteColor } from './src/Components/Colors';
import DocumentPicScreen from './src/Screens/LoginsScreens/DocumentPicScreen';
import AccountApproval from './src/Screens/LoginsScreens/AccountApproval';
import BottomStack from './src/Navigators/BottomStack';
const App = () => {
  return (
    // <View style={{flex:1,backgroundColor:WhiteColor}}>
    //   <AccountApproval/>
    // </View>
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})