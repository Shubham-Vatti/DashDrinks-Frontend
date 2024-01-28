import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BlackColor, GreenColor, LightBlackColor, WhiteColor } from '../../Components/Colors'
import { getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')
import { Switch } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'


const ProfileScreen = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const SettingCard = ({ txt, navpath, icon }) => {
    return (
      <TouchableOpacity style={{ backgroundColor: WhiteColor, paddingVertical: width * 0.04, flexDirection: "row", alignItems: "center", elevation: 4, width: width * 0.88, borderRadius: width * 0.02, justifyContent: "space-between", paddingHorizontal: width * 0.04, marginVertical: width * 0.02 }}
      onPress={()=>navigation.navigate(navpath)}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon}
          <Text style={{ fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(15), marginLeft: width * 0.02 }}>{txt}</Text>
        </View>
        <Entypo name="chevron-right" size={24} color={LightBlackColor

        } />
      </TouchableOpacity>)
  }
  return (
    <View style={{ flex: 1, backgroundColor: WhiteColor }}>
      <Text style={{ paddingHorizontal: width * 0.04, marginTop: width * 0.06, fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(32) }}>Profile</Text>
      <Text style={{ paddingHorizontal: width * 0.04, marginTop: width * 0.02, fontFamily: 'Poppins-Regular', textAlign: 'center', color: BlackColor, fontSize: getFontSize(16) }}>Hello</Text>
      <Text style={{ paddingHorizontal: width * 0.04, fontFamily: 'Poppins-Medium', textAlign: 'center', color: BlackColor, fontSize: getFontSize(18) }}>Shubham Kumar</Text>
      <View style={{ alignSelf:"center", marginTop: width * 0.14 }}>
        <SettingCard txt={"My Information"} icon={<AntDesign name="edit" size={24} color={GreenColor} />} navpath={'UserData'}/>
        <SettingCard txt={"My Order's"} icon={<MaterialCommunityIcons name="truck-fast-outline" size={width*0.066} color={GreenColor}/>} navpath={'Order'}/>
        <View style={{ backgroundColor: WhiteColor, paddingVertical: width * 0.04, flexDirection: "row", alignItems: "center", elevation: 4, width: width * 0.88, borderRadius: width * 0.02, justifyContent: "space-between", paddingHorizontal: width * 0.04, marginVertical: width * 0.02 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="bell-ring-outline" size={width * 0.066} color={GreenColor} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(15), marginLeft: width * 0.02 }}>Notifications</Text>
          </View>
          <Switch
            value={checked}
            color={GreenColor}
            onValueChange={(value) => setChecked(value)}
          />
        </View>
        <Text style={{fontFamily:"Poppins-Medium",color:LightBlackColor,marginVertical:width*0.02}}>Support</Text>
        <SettingCard txt={"Help"} icon={<Feather name="info" size={width*0.066} color={GreenColor} />} navpath={'Help'}/>
        <SettingCard txt={"Support"} icon={<AntDesign name="message1" size={width*0.066} color={GreenColor} />} navpath={'Support'}/>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})