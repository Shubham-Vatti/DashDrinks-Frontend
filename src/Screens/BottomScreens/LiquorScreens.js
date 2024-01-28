import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, RedColor, WhiteColor } from '../../Components/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')
import { getFontSize } from '../../Components/UiComps'

const LiquorScreens = ({navigation}) => {

  const Slide=[
    {
      id:1,
      name:'Whisky',
      img:require('../../Assets/Frame.png')
    },
    {
      id:2,
      name:'Beer',
      img:require('../../Assets/Frame1.png')
    },
    {
      id:3,
      name:'Rum',
      img:require('../../Assets/Frame2.png')
    },
    {
      id:4,
      name:'Sparkler',
      img:require('../../Assets/Frame3.png')
    },
    {
      id:5,
      name:'Vodka',
      img:require('../../Assets/Frame4.png')
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: WhiteColor }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: width * 0.04, marginTop: width * 0.06 }}>
          <View>
            <Ionicons name="location-sharp" size={width * 0.1} color={GreenColor} />
          </View>
          <View>
            <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor, fontSize: getFontSize(10) }}>Deliver to</Text>
            <Text style={{ fontFamily: 'Poppins-Medium', color: BlackColor, fontSize: getFontSize(11), width: width * 0.8 }}>near gondwana bhawan singarbhat kanker chhattishgarh cg</Text>
          </View>
        </View>
        <View style={{paddingHorizontal:width*0.04,marginVertical:width*0.06}}>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: getFontSize(22), color: BlackColor }}>Select Category</Text>
        </View>
        <View style={{flex:1,justifyContent:"space-between"}}>
          <FlatList
          numColumns={2}
          data={Slide}
          columnWrapperStyle={{justifyContent:"space-between",paddingHorizontal:width*0.04,marginVertical:width*0.04}}
          renderItem={({item,index})=>{
            return(
              <TouchableOpacity style={{borderColor:GreenColor,borderWidth:1,borderRadius:width*0.02,padding:width*0.04,alignItems:"center"}}
              onPress={()=>{navigation.navigate('LiquorData')}}              
              >
                <Image source={item.img} style={{width:width*0.34,height:width*0.34,resizeMode:"contain"}}/>
                <Text style={{fontFamily:"Poppins-Medium",color:BlackColor,fontSize:getFontSize(16)}}>{item.name}</Text>
              </TouchableOpacity>
            )
          }}
          />
        </View>
      </View>
    </View>
  )
}

export default LiquorScreens

const styles = StyleSheet.create({})