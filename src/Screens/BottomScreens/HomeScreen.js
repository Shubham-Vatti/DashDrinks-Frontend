import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BlackColor, GreenColor, LightBlackColor, LightLightBlackColor, RedColor, WhiteColor } from '../../Components/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')
import {getFontSize} from '../../Components/UiComps'


const Slide=[
  {
    id:1,
    name:'Whisky',
    img:require('../../Assets/Frame.png')
  },
  {
    id:1,
    name:'Beer',
    img:require('../../Assets/Frame1.png')
  },
  {
    id:1,
    name:'Rum',
    img:require('../../Assets/Frame2.png')
  },
  {
    id:1,
    name:'Sparkler',
    img:require('../../Assets/Frame3.png')
  },
  {
    id:1,
    name:'Vodka',
    img:require('../../Assets/Frame4.png')
  },
]


const LSlide=[
  {
    id:1,
    name:'Smirnoff Lemon Vodka',
    type:'Vodka',
    quantity:375,
    bottle_type:'Can',
    Alcohol_per:10,
    price:180,
    Stock_left:10,
    img:require('../../Assets/a1.png')
  },
  {
    id:2,
    name:`1Jack Daniels Cola Whiskey`,
    type:'Whiskey',
    quantity:205,
    Alcohol_per:10,
    Stock_left:40,
    bottle_type:'Can',
    price:280,
    img:require('../../Assets/a2.png')
  },
  {
    id:3,
    name:'Johnnie Walker Red Label',
    type:'Wishkey',
    Stock_left:40,
    Alcohol_per:10,
    quantity:275,
    bottle_type:'Can',
    price:300,
    img:require('../../Assets/a3.png')
  },
  {
    id:4,
    name:'Calsberg Premium Beer',
    type:'Beer',
    quantity:375,
    bottle_type:'Can',
    Alcohol_per:10,
    Stock_left:40,
    price:280,
    img:require('../../Assets/a4.png')
  },
  {
    id:5,
    name:'Voodoo Ranger Imperial IPA',
    Alcohol_per:10,
    type:'Vodka',
    Stock_left:10,
    quantity:485,
    bottle_type:'Can',
    price:480,
    img:require('../../Assets/a5.png')
  },
  {
    id:6,
    name:'Downeast Cider Original Blend',
    type:'Wishkey',
    quantity:375,
    Alcohol_per:10,
    Stock_left:40,
    bottle_type:'Can',
    price:880,
    img:require('../../Assets/a6.png')
  },
]

const HomeScreen = () => {
  const [catslide,Setcatslide]=useState(Slide)
  const [LiquorSlide,SetLiquorSlide]=useState(LSlide)
  return (
    <View style={{flex:1,backgroundColor:WhiteColor}}>
      <View style={{flex:1}}>
        <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:width*0.04,marginTop:width*0.06}}>
          <View>
          <Ionicons name="location-sharp" size={width*0.1} color={GreenColor} />
          </View>
          <View>
            <Text style={{fontFamily:'Poppins-Regular',color:BlackColor,fontSize:getFontSize(10)}}>Deliver to</Text>
            <Text style={{fontFamily:'Poppins-Medium',color:BlackColor,fontSize:getFontSize(11),width:width*0.8}}>near gondwana bhawan singarbhat kanker chhattishgarh cg</Text>
          </View>
        </View>
        <View style={{alignItems:'center',marginTop:width*0.06}}>
          <TextInput
          placeholder='Search for Drinks'
          style={{width:width*0.92,paddingHorizontal:width*0.02,fontFamily:'Poppins-Regular',color:BlackColor,backgroundColor:'rgba(0,0,0,0.05)',borderRadius:width*0.01,borderColor:BlackColor,borderWidth:0.4}}
          />
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:width*0.04,marginTop:width*0.08}}>
          <View>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:getFontSize(16),color:BlackColor}}>Explore Categories</Text>
          </View>
          <TouchableOpacity>
            <Text style={{fontFamily:'Poppins-SemiBold',textDecorationLine:"underline",fontSize:getFontSize(12),color:GreenColor}}>Show all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
          // key={key=>key.id}
          horizontal
          data={catslide}
          renderItem={({index,item})=>{
            return(
              <TouchableOpacity style={{borderColor:BlackColor,borderWidth:0.4,padding:width*0.04,margin:width*0.04,borderRadius:width*0.02,alignItems:"center"}}>
                <Image source={item.img} style={{width:width*0.14,height:width*0.14,resizeMode:'contain'}}/>
                <Text style={{fontFamily:'Poppins-Medium',color:BlackColor,fontSize:getFontSize(12)}}>{item.name}</Text>
              </TouchableOpacity>
            )
          }}
          />
        </View>
        <View style={{paddingHorizontal:width*0.04,marginTop:width*0.02,flex:1}}>
          <Text style={{fontFamily:'Poppins-SemiBold',fontSize:getFontSize(16),color:BlackColor}}>Popular Liquor</Text>
          <View style={{flex:1}}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={LiquorSlide}
            renderItem={({item})=>{
              return(
                <TouchableOpacity style={{marginVertical:width*0.02,borderColor:BlackColor,borderWidth:0.4,paddingVertical:width*0.03,borderRadius:width*0.02}}>
                  <View style={{flexDirection:'row',alignItems:"center"}}>
                    <View>
                      <Image source={item.img} style={{width:width*0.24,height:width*0.24,resizeMode:'contain'}}/>
                    </View>
                    <View style={{width:width*0.65}}>
                      <Text style={{fontFamily:'Poppins-SemiBold',color:BlackColor,fontSize:getFontSize(16)}}>{item.name}</Text>
                      <Text style={{fontFamily:'Poppins-Medium',color:LightBlackColor}}>{item.quantity+'ml'+' | '+item.bottle_type+' | '+item.Alcohol_per+'%'}</Text>
                      <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                      <Text style={{fontFamily:'Poppins-SemiBold',color:GreenColor,fontSize:getFontSize(20)}}>&#8377;{' '+item.price}</Text>
                      {(item.Stock_left<=10)&&<Text style={{fontFamily:'Poppins-Regular',color:RedColor,fontSize:getFontSize(12)}}>{item.Stock_left} left in Stock</Text>}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})