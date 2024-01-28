import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/BottomScreens/HomeScreen';
// import OrderScreen from '../Screens/BottomScreens/OrderScreen';
// import CartScreen from '../Screens/BottomScreens/CartScreen';
import ProfileScreen from '../Screens/BottomScreens/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { BlackColor, GreenColor, LightBlackColor } from '../Components/Colors';
import CartScreen from '../Screens/BottomScreens/CartScreen';
import LiquorScreens from '../Screens/BottomScreens/LiquorScreens'
const { width, height } = Dimensions.get('window')
const Bottom=createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown:false,tabBarHideOnKeyboard:true}}>
        <Bottom.Screen name='Home' component={HomeScreen}
         options={
            {
                tabBarIcon: (tabinfo) => {
                    return (tabinfo.focused ?<AntDesign name="home" size={width*0.066} color={GreenColor}/> :<AntDesign name="home" size={width*0.066} color={LightBlackColor}/>)
                },
                // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                tabBarActiveTintColor: BlackColor,
                tabBarInactiveTintColor: LightBlackColor,
                tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' }
                // tabBarLabel:"",
            }
        }
        />
        <Bottom.Screen name='Liquors' component={LiquorScreens} 
         options={
            {
                tabBarIcon: (tabinfo) => {
                    return (tabinfo.focused ?<Ionicons name="wine-sharp" size={width*0.066} color={GreenColor}/> :<Ionicons name="wine-sharp" size={width*0.066}  color={LightBlackColor}/>)
                },
                // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                tabBarActiveTintColor: BlackColor,
                tabBarInactiveTintColor: LightBlackColor,
                tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' }
                // tabBarLabel:"",
            }
        }/>
        <Bottom.Screen name='Cart' component={CartScreen} 
         options={
            {
                tabBarIcon: (tabinfo) => {
                    return (tabinfo.focused ?<Feather name="shopping-cart"  size={width*0.066} color={GreenColor}/> :<Feather name="shopping-cart"  size={width*0.066} color={LightBlackColor}/>)
                },
                // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                tabBarActiveTintColor: BlackColor,
                tabBarInactiveTintColor: LightBlackColor,
                tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' }
                // tabBarLabel:"",
            }
        }/>
        <Bottom.Screen name='Profile' component={ProfileScreen} 
         options={
            {
                tabBarIcon: (tabinfo) => {
                    return (tabinfo.focused ?<FontAwesome5 name="user" size={width*0.066} color={GreenColor}/> :<FontAwesome5 name="user" size={width*0.066} color={LightBlackColor}/>)
                },
                // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                tabBarActiveTintColor: BlackColor,
                tabBarInactiveTintColor: LightBlackColor,
                tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' }
                // tabBarLabel:"",
            }
        }/> 
    </Bottom.Navigator>
  )
}

export default BottomStack

const styles = StyleSheet.create({})