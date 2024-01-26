import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlackColor, GreenColor, WhiteColor } from '../../Components/Colors'
import { getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')

const AccountApproval = () => {
    return (
        <View style={{ flex: 1, backgroundColor: WhiteColor }}>
            <View style={{width:width*0.8,alignSelf:"center"}}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: GreenColor, fontSize: getFontSize(44),marginTop: width * 0.24 }}>Hello !</Text>
            <Text style={{ fontFamily: 'Poppins-Regular', color: GreenColor, fontSize: getFontSize(24) }}>Thanks for joining 
Dash Drinks !</Text>
            <Text style={{ fontFamily: 'Poppins-Medium', color:GreenColor, fontSize: getFontSize(28) }}>Please wait for your account approval we can connect after your account get approved</Text>
            </View>
        </View>
    )
}

export default AccountApproval

const styles = StyleSheet.create({})