import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, WhiteColor } from '../../Components/Colors'
import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import auth from '@react-native-firebase/auth';
import { AppLoading, GreenButton, getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')
import { getCurrencies, getLocales } from "react-native-localize";
const LoginScreen = () => {
    const [confirm, setConfirm] = useState(null);
    // console.log()
    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');
    const [Mobile, setMobile] = useState('')
    const [callingcode, setCallingCode] = useState('+91')
    const [CountryCode, SetCountryCode] = useState('IN')
    const [CountryVisibility, SetCountryVisibility] = useState(false)
    const [isLoading,SetisLoading]=useState(false)
    // Handle login
    function onAuthStateChanged(user) {
        if (user) {
            // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
            // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
            // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
            // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
        SetisLoading(false)
    }

    async function confirmCode() {
        try {
            SetisLoading(true)
            await confirm.confirm(code);
        SetisLoading(false)
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    const userLogin = async () => {
        try {
            if (Mobile.length == 10) {
                SetisLoading(true)
                signInWithPhoneNumber(`+${callingcode}${Mobile}`)
            }
            else {
                alert("please enter your mobile number")
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    if (!confirm) {
        return (
            <View style={{ flex: 1, backgroundColor: WhiteColor }}>
                <View style={{ alignSelf: "center" }}>
                    <View style={{ marginTop: width * 0.24 }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(22) }}>Enter your phone number</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor, fontSize: getFontSize(14) }}>Login or sign up to place your order</Text>
                        <View style={{ flexDirection: 'row', marginTop: width * 0.04, alignItems: "center" }}>
                            <CountryPicker
                                withFilter
                                withFlagButton
                                visible={CountryVisibility}
                                countryCode={CountryCode}
                                withFlag
                                onClose={() => SetCountryVisibility(false)}
                                withCallingCode
                                // theme={}
                                onSelect={country => {
                                    const { cca2, callingCode } = country;
                                    console.log(cca2, callingCode)
                                    SetCountryVisibility(false)
                                    SetCountryCode(cca2), setCallingCode(callingCode[0])
                                }}
                                containerButtonStyle={{ textColor: BlackColor, fontFamily: 'Poppins-SemiBold', alignItems: 'center', alignSelf: 'center', backgroundColor: WhiteColor, borderRadius: width * 0.02, borderColor: LightLightBlackColor, borderWidth: 1, alignContent: 'center', justifyContent: "center", paddingVertical: height * 0.0142, paddingHorizontal: width * 0.02, width: width * 0.2 }}
                            />
                            <View>
                                <TextInput placeholder='XXXXXXXXXX' style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(12), color: BlackColor, borderRadius: width * 0.02, width: width * 0.577, marginLeft: width * 0.02, borderColor: LightLightBlackColor, borderWidth: 1, letterSpacing: width * 0.016, paddingHorizontal: width * 0.02 }} maxLength={10} keyboardType={"number-pad"} onChangeText={(txt) => setMobile(txt)} value={Mobile} />
                            </View>
                        </View>
                        <View style={{ marginTop: width * 0.2 }}>
                            <GreenButton txt={"Send OTP"} Handlefunc={userLogin} />
                        </View>
                    </View>
                </View>
                {isLoading&&<AppLoading />}
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: WhiteColor }}>
            <View style={{ alignSelf: "center" }}>
                <View style={{ marginTop: width * 0.24 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(22) }}>Verify mobile number</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor, fontSize: getFontSize(14) }}>{'Enter the OTP sent to ' + `${callingcode} ${Mobile}`}</Text>
                    <View style={{ flexDirection: 'row', marginTop: width * 0.04, alignItems: "center" }}>
                        <View>
                            <TextInput placeholder='Otp ...' style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(12), color: BlackColor, borderRadius: width * 0.02, letterSpacing: width * 0.014, width: width * 0.8, borderColor: LightLightBlackColor, borderWidth: 1, paddingHorizontal: width * 0.02 }} maxLength={6} keyboardType={"number-pad"} onChangeText={(txt) => setCode(txt)} value={code} />
                        </View>
                    </View>
                    <View style={{ marginTop: width * 0.2 }}>
                        <GreenButton txt={"Verify OTP"} Handlefunc={confirmCode} />
                    </View>
                </View>
            </View>
            {isLoading&&<AppLoading />}
        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({})