import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, WhiteColor } from '../Components/Colors'
import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import auth from '@react-native-firebase/auth';
import { AppLoading, GreenButton, getFontSize } from '../Components/UiComps'
const { width, height } = Dimensions.get('window')
import { SelectList } from 'react-native-dropdown-select-list'
import { ListItem } from '@rneui/themed';

const OrdersScreens = () => {
  return (
    <View style={{flex:1,backgroundColor:WhiteColor}}>
    <Text style={{ paddingHorizontal: width * 0.04, marginTop: width * 0.06, fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(32) }}>My Orders</Text>
    </View>
  )
}

export default OrdersScreens

const styles = StyleSheet.create({})