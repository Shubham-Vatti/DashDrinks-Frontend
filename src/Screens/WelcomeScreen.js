import { Dimensions, FlatList, Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View, Animated, PermissionsAndroid } from 'react-native'
import React, {  useEffect, useRef, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {  ListItem, getFontSize} from '../Components/UiComps'
import { BlackColor, LightBlack, WhiteColor } from '../Components/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { width, height } = Dimensions.get('window')
let flatList1;

const Slide=[
  {
    id:1,
    img:require('../Assets/s1.png'),
    title:'Choose Your Favorite Drink',
    description:"Find your favorite drink anytime from your existing location easily "
  },
  {
    id:2,
    img:require('../Assets/s2.png'),
    title:' Refresh Yourself with a Drink ',
    description: "Be it a game night or long day after office we are always there to refresh you"
  },
  {
    id:3,
    img:require('../Assets/s3.png'),
    title:'Fastest Delivery Ever',
    description:"Because chilled drinks are always better"
  }
]


const WelcomeScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current
  const [currentIndex, setCurrentIndex] = useState(0)
  const onViewRef = React.useRef((viewableItems) => {
    setCurrentIndex(viewableItems.viewableItems[0].index)
  })
  const SkipButton = () => {
    if (flatList1 != undefined && flatList1 != null) {
      flatList1.scrollToOffset({ animated: true, offset: width * (3) })
      navigation.navigate('LoginScreen')
    }
  }
  const ClickedNext = () => {
    if (flatList1 != undefined && flatList1 != null) {
      flatList1.scrollToOffset({ animated: true, offset: width * (currentIndex + 1) })
    }
  }
  const ClickedBack = () => {
    if (flatList1 != undefined && flatList1 != null) {
      flatList1.scrollToOffset({ animated: true, offset: width * (currentIndex - 1) })
    }
  }

  const GetCurrentSlide = async () => {
    try {
      console.log('--asyncdata--',currentIndex.toString())
      await AsyncStorage.setItem('CurrentSlide', currentIndex.toString())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetCurrentSlide()
  }, [currentIndex])

  return (
    <View style={{ flex: 1, backgroundColor: WhiteColor }}>
      {currentIndex != 0 ? <TouchableOpacity style={{ paddingHorizontal: width * 0.04, marginTop: height * 0.028, flexDirection: 'row', justifyContent: 'space-between', width: width * 0.166, zIndex: 2 }}
        onPress={() => ClickedBack()}
      >
        <AntDesign name="left" size={width * 0.068} color="grey" />
      </TouchableOpacity> : <View style={{ paddingHorizontal: width * 0.04, marginTop: height * 0.028, flexDirection: 'row', justifyContent: 'space-between', width: width * 0.166, zIndex: 2 }}><View style={{ width: width * 0.068, height: width * 0.068 }} /></View>}
      <View style={{ zIndex: 2, flex: 1 }}>
        <FlatList
          ref={(flatList) => { flatList1 = flatList }}
          pagingEnabled
          bounces={false}
          onViewableItemsChanged={onViewRef.current}
          showsHorizontalScrollIndicator={false}
          keyExtractor={key => key.id.toString()}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 25,
            minimumViewTime: 200,
          }}
          scrollEventThrottle={16}
          decelerationRate={"normal"}
          data={Slide}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          scrollEnabled
          renderItem={({ item, index }) => {
            return <ListItem item={item} index={index} />
          }}
        />
        <View style={{ alignItems: 'center', paddingHorizontal: width * 0.06, bottom: width * 0.04 }}>
          {/* <TouchableOpacity
            onPress={() => SkipButton()}
          >
            <Text style={{ fontFamily: 'Poppins-Medium',color:BlackColor, fontSize: getFontSize(15) }}>Skip</Text>
          </TouchableOpacity> */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {Slide.map((ele, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
              const DotStyling = scrollX.interpolate({
                inputRange,
                outputRange: [4, 7, 4],
                extrapolate: 'clamp'

              })
              const bgColor = scrollX.interpolate({
                inputRange,
                outputRange: ['gray', 'black', 'gray'],
                extrapolate: 'clamp'

              })
              return (
                <Animated.View key={ele.id} style={[{ width: DotStyling, margin: width * 0.008, height: DotStyling, backgroundColor: bgColor, borderRadius: 2,bottom:width*0.1 }]} />
              )
            })}
          </View>
          <TouchableOpacity
            onPress={() => { currentIndex != 2 ? ClickedNext() : navigation.navigate('LoginScreen') }}
          >
            <Text style={{ fontFamily: 'Poppins-Medium',color:BlackColor, fontSize: getFontSize(15) }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})