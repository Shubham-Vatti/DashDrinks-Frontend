import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, RedColor, WhiteColor } from '../../Components/Colors'
import { getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')
import { Switch } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const LiquorDataScreen = ({ navigation }) => {
    const LSlide = [
        {
            id: 1,
            name: 'Smirnoff Lemon Vodka',
            type: 'Vodka',
            quantity: 375,
            bottle_type: 'Can',
            Alcohol_per: 10,
            price: 180,
            Stock_left: 10,
            img: require('../../Assets/a1.png')
        },
        {
            id: 2,
            name: `1Jack Daniels Cola Whiskey`,
            type: 'Whiskey',
            quantity: 205,
            Alcohol_per: 10,
            Stock_left: 40,
            bottle_type: 'Can',
            price: 280,
            img: require('../../Assets/a2.png')
        },
        {
            id: 3,
            name: 'Johnnie Walker Red Label',
            type: 'Wishkey',
            Stock_left: 40,
            Alcohol_per: 10,
            quantity: 275,
            bottle_type: 'Can',
            price: 300,
            img: require('../../Assets/a3.png')
        },
        {
            id: 4,
            name: 'Calsberg Premium Beer',
            type: 'Beer',
            quantity: 375,
            bottle_type: 'Can',
            Alcohol_per: 10,
            Stock_left: 40,
            price: 280,
            img: require('../../Assets/a4.png')
        },
        {
            id: 5,
            name: 'Voodoo Ranger Imperial IPA',
            Alcohol_per: 10,
            type: 'Vodka',
            Stock_left: 10,
            quantity: 485,
            bottle_type: 'Can',
            price: 480,
            img: require('../../Assets/a5.png')
        },
        {
            id: 6,
            name: 'Downeast Cider Original Blend',
            type: 'Wishkey',
            quantity: 375,
            Alcohol_per: 10,
            Stock_left: 40,
            bottle_type: 'Can',
            price: 880,
            img: require('../../Assets/a6.png')
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: WhiteColor }}>
            <View style={{ paddingHorizontal: width * 0.04, flexDirection: 'row', alignItems: "center", marginTop: width * 0.06 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-SemiBold', marginLeft: width * 0.02, color: BlackColor, fontSize: getFontSize(24) }}>Beer</Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: width * 0.06 }}>
                <TextInput
                    placeholder='Search for Drinks'
                    style={{ width: width * 0.92, paddingHorizontal: width * 0.02, fontFamily: 'Poppins-Regular', color: BlackColor, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: width * 0.01, borderColor: BlackColor, borderWidth: 0.4 }}
                />
            </View>
            <View style={{ flex: 1, alignSelf: "center",  }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={LSlide}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{marginVertical:width*0.02,borderColor:BlackColor,borderWidth:0.4,borderRadius:width*0.02}}>
                              <View style={{flexDirection:'row',alignItems:"center",paddingVertical:width*0.03}}>
                                <View>
                                  <Image source={item.img} style={{width:width*0.24,height:width*0.24,resizeMode:'contain'}}/>
                                </View>
                                <View style={{width:width*0.65}}>
                                  <Text style={{fontFamily:'Poppins-SemiBold',color:BlackColor,fontSize:getFontSize(16)}}>{item.name}</Text>
                                  <Text style={{fontFamily:'Poppins-Medium',color:LightBlackColor}}>{item.quantity+'ml'+' | '+item.bottle_type+' | '+item.Alcohol_per+'%'}</Text>
                                  <Text style={{fontFamily:'Poppins-SemiBold',color:GreenColor,fontSize:getFontSize(20)}}>&#8377;{' '+item.price}</Text>
                                  {(item.Stock_left<=10)&&<Text style={{fontFamily:'Poppins-Regular',color:RedColor,fontSize:getFontSize(12)}}>{item.Stock_left} left in Stock</Text>}
                                </View>
                              </View>
                                  <TouchableOpacity style={{backgroundColor:GreenColor,alignSelf:"flex-end",paddingVertical:width*0.02,borderBottomRightRadius:width*0.02,paddingHorizontal:width*0.02,borderTopLeftRadius:width*0.02,position:"absolute",bottom:0}}>
                                    <Text style={{color:WhiteColor,fontFamily:'Poppins-Medium'}}>Add to Cart</Text>
                                  </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            {/* <Text>LiquorDataScreen</Text> */}
        </View>
    )
}

export default LiquorDataScreen

const styles = StyleSheet.create({})