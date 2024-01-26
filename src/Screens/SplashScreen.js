import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {WhiteColor} from '../Components/Colors'

const {width, height} =Dimensions.get('window')
const SplashScreen = ({navigation}) => {

  setTimeout(()=>{
    navigation.navigate('WelcomeScreen')
  },1000)
  
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/logo.jpg')} style={styles.splashimage}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:WhiteColor,justifyContent:"center",alignItems:'center'},
  splashimage:{ width: width * 0.8, height: width * 0.8,resizeMode:"contain"}
})