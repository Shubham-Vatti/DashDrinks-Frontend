import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, WhiteColor } from '../../Components/Colors'
import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import auth from '@react-native-firebase/auth';
import { Accordion, AppLoading, GreenButton, getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')
import { SelectList } from 'react-native-dropdown-select-list'
import { ListItem } from '@rneui/themed';

const helpslide=[
  {
    ques:"How do I place an order for liquor delivery?",
    ans:"Browse the app, select your desired products, add them to your cart, and proceed to checkout. Enter your delivery details, choose a payment method, and confirm your order."
  },
  {
    ques:"Can I track the status of my liquor delivery order?",
    ans:`Yes, you can track your order in real-time. Go to the "Order History" section in the app to view the status and expected delivery time.`
  },
  {
    ques:"What are the delivery charges and timeframes?",
    ans:"Delivery charges and timeframes vary. They are displayed at checkout based on your location and the delivery method you choose."
  },
  {
    ques:"What payment methods are accepted?",
    ans:"We accept various payment methods, including credit/debit cards and digital wallets. You can view the available options during the checkout process."
  },
  {
    ques:"Is my payment information secure?",
    ans:"Yes, your payment information is securely processed. We use industry-standard encryption to protect your data and ensure a safe transaction."
  },
  {
    ques:"I received the wrong item. What should I do?",
    ans:"Contact our customer support immediately with your order number and details of the issue. We will promptly assist you and arrange for a replacement if necessary."
  },
  {
    ques:"How does the app ensure age verification for liquor purchases?",
    ans:"We implement strict age verification processes in compliance with local laws. You may be required to provide identification upon delivery."
  },
]
const HelpScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:WhiteColor}}>
    <Text style={{ paddingHorizontal: width * 0.04, marginTop: width * 0.06, fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(32) }}>Help</Text>
    <View style={{alignItems:"center",marginTop:width*0.14,flex:1}}>
    <FlatList
    showsVerticalScrollIndicator={false}
    data={helpslide}
    renderItem={({item,index})=>{
      return(
        <View>
          <Accordion item={item} index={index+1}/>
        </View>
      )
    }}
    />
    </View>
    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({})