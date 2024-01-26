import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, WhiteColor } from '../../Components/Colors'
import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import auth from '@react-native-firebase/auth';
import { AppLoading, GreenButton, getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')

const ProfileScreen = () => {
    const [confirm, setConfirm] = useState(null);
    // console.log()
    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');
    const [Mobile, setMobile] = useState('')
    const [callingcode, setCallingCode] = useState('+91')
    const [CountryCode, SetCountryCode] = useState('IN')
    const [CountryVisibility, SetCountryVisibility] = useState(false)
    const [isLoading,SetisLoading]=useState(false)
    
    const submitdata=()=>{
        try{

        }
        catch(err)
        {
            console.log(err)
        }
    }
  return (
    <View style={{ flex: 1, backgroundColor: WhiteColor }}>
        <ScrollView>
        <View style={{ alignSelf: "center" }}>
            <View style={{ marginTop: width * 0.24 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(22) }}>Welcome to Dash Drink</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor, fontSize: getFontSize(14) }}>Please provide us with few more details</Text>
                <View style={{ marginTop: width * 0.2 }}>
                    <View style={{marginVertical:width*0.01}}>
                        <Text style={{fontFamily:'Poppins-Regular',color:BlackColor}}>First Name :</Text>
                    <TextInput style={{fontFamily:'Poppins-Medium',borderColor:BlackColor,borderRadius:width*0.02,borderWidth:1,paddingHorizontal:width*0.02,width:width*0.8}}/>
                    </View>
                    <View style={{marginVertical:width*0.01}}>
                        <Text style={{fontFamily:'Poppins-Regular',color:BlackColor}}>Last Name :</Text>
                    <TextInput style={{fontFamily:'Poppins-Medium',borderColor:BlackColor,borderRadius:width*0.02,borderWidth:1,paddingHorizontal:width*0.02,width:width*0.8}}/>
                    </View>
                    <View style={{marginVertical:width*0.01}}>
                        <Text style={{fontFamily:'Poppins-Regular',color:BlackColor}}>Address :</Text>
                    <TextInput style={{fontFamily:'Poppins-Medium',borderColor:BlackColor,borderRadius:width*0.02,borderWidth:1,paddingHorizontal:width*0.02,width:width*0.8}}/>
                    </View>
                    <View style={{marginVertical:width*0.01}}>
                        <Text style={{fontFamily:'Poppins-Regular',color:BlackColor}}>Mobile No :</Text>
                    <TextInput style={{fontFamily:'Poppins-Medium',borderColor:BlackColor,borderRadius:width*0.02,borderWidth:1,paddingHorizontal:width*0.02,width:width*0.8}} keyboardType={"number-pad"}/>
                    </View>
                    <View style={{marginTop:width*0.2}}>
                    <GreenButton txt={"Submit"} Handlefunc={submitdata}/>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
        {isLoading&&<AppLoading />}
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})