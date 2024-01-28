import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, WhiteColor } from '../../Components/Colors'
import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import auth from '@react-native-firebase/auth';
import { AppLoading, GreenButton, getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')
import { SelectList } from 'react-native-dropdown-select-list'
import { ListItem } from '@rneui/themed';

const UserProfileScreens = () => {
  return (
    <View style={{flex:1,backgroundColor:WhiteColor}}>
    <Text style={{ paddingHorizontal: width * 0.04, marginTop: width * 0.06, fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(32) }}>My Information</Text>
    <View style={{width:width*0.92,paddingHorizontal:width*0.04,marginTop:width*0.14}}>
      <View>
        <Text style={{fontFamily:'Poppins-SemiBold',color:GreenColor,fontSize:getFontSize(18)}}>Name :</Text>
        <Text style={{fontFamily:'Poppins-Medium',color:BlackColor,fontSize:getFontSize(22)}}>Shubham Kumar</Text>
      </View>
      <View>
        <Text style={{fontFamily:'Poppins-SemiBold',color:GreenColor,fontSize:getFontSize(18)}}>Mobile number :</Text>
        <Text style={{fontFamily:'Poppins-Medium',color:BlackColor,fontSize:getFontSize(22)}}>+91 9340860259</Text>
      </View>
      <View>
        <Text style={{fontFamily:'Poppins-SemiBold',color:GreenColor,fontSize:getFontSize(18)}}>Address :</Text>
        <Text style={{fontFamily:'Poppins-Medium',color:BlackColor,fontSize:getFontSize(22)}}>Singarbhat kanker chhattisgarh</Text>
      </View>
    </View>
    </View>
  )
}

export default UserProfileScreens

const styles = StyleSheet.create({})