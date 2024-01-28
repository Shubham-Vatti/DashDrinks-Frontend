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

const SupportScreen = () => {
  const [code, setCode] = useState('');
  const [Mobile, setMobile] = useState('')
  const [isLoading, SetisLoading] = useState(false)
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'I need help with my DashDrinks online order.' },
    { key: '2', value: 'I found incorrect/outdated information on a page.' },
    { key: '3', value: 'There is a photo/review that is bothering me and I would like to report it.' },
    { key: '4', value: 'The website/app are not working the way they should.' },
    { key: '5', value: 'I would like to give feedback/suggestions.' },
    { key: '6', value: 'Other' },
  ]

  const submitdata = () => {
    try {

    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: WhiteColor }}>
      <Text style={{ paddingHorizontal: width * 0.04, marginTop: width * 0.06, fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(32) }}>Support</Text>
      <View style={{ flex: 1, backgroundColor: WhiteColor }}>
        <ScrollView>
          <View style={{ alignSelf: "center" }}>
            <View style={{ marginTop: width * 0.06, paddingHorizontal: width * 0.04 }}>
              {/* <Text style={{ fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(22) }}>Welcome to Dash Drink</Text> */}
              <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor, fontSize: getFontSize(14) }}>At DashDrinks, we value your satisfaction and are here to assist you. Whether you have questions, feedback, or need support, our team is ready to help.</Text>
              <View style={{ marginTop: width * 0.04, alignSelf: "center" }}>
                <View style={{ marginVertical: width * 0.01 }}>
                  <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor }}>Name :</Text>
                  <TextInput style={{ fontFamily: 'Poppins-Medium', borderColor: BlackColor, borderRadius: width * 0.02, borderWidth: 1, paddingHorizontal: width * 0.02, width: width * 0.92 }} />
                </View>
                <View style={{ marginVertical: width * 0.01 }}>
                  <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor }}>Email :</Text>
                  <TextInput style={{ fontFamily: 'Poppins-Medium', borderColor: BlackColor, borderRadius: width * 0.02, borderWidth: 1, paddingHorizontal: width * 0.02, width: width * 0.92 }} />
                </View>
                <View style={{ marginVertical: width * 0.01 }}>
                  <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor }}>How can we help you? :</Text>

                  <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    boxStyles={{paddingVertical:width*0.04,borderColor:BlackColor,borderWidth:1,width:width*0.92}}
                    inputStyles={{color:BlackColor,fontFamily:"Poppins-Regular"}}
                    dropdownItemStyles={{}}
                    dropdownTextStyles={{fontFamily:"Poppins-Regular",color:BlackColor}}
                    save="value"
                  />
                </View>
                <View style={{ marginVertical: width * 0.01 }}>
                  <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor }}>Enter your Issue :</Text>
                  <TextInput style={{ fontFamily: 'Poppins-Medium', borderColor: BlackColor, borderRadius: width * 0.02, borderWidth: 1, paddingHorizontal: width * 0.02, width: width * 0.92, height: width * 0.4, textAlignVertical: "top" }} multiline />
                </View>
                <View style={{ marginTop: width * 0.2, alignSelf: "center", marginBottom: width * 0.08 }}>
                  <GreenButton txt={"Submit"} Handlefunc={submitdata} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {isLoading && <AppLoading />}
      </View>
    </View>
  )
}

export default SupportScreen

const styles = StyleSheet.create({})