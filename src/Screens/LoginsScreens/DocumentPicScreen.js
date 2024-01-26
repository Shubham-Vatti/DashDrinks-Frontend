import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlackColor, GreenColor, LightBlackColor, LightGreenColor, LightLightBlackColor, WhiteColor } from '../../Components/Colors'
import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import auth from '@react-native-firebase/auth';
import { AppLoading, GreenButton, getFontSize } from '../../Components/UiComps'
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import { launchCamera } from 'react-native-image-picker';
const { width, height } = Dimensions.get('window')
import AntDesign from 'react-native-vector-icons/AntDesign'

const DocumentPicScreen = () => {
  const [DocImg,SetDocImg]=useState('')
  const [isLoading,SetisLoading]=useState(false)

  const submitdata=()=>{

  }

  let Options = {
    saveToPhotos: true,
    mediaType: 'photo',
    // maxWidth: 500,
    // maxHeight: 500,
    // quality: 0.,
  }

  const OpenCamera = async () => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then(async (result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            request(Platform.OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then(async () => {
              await launchCamera(Options, response => {
                if (response.didCancel) {
                  console.log('User cancelled camera');
                } else if (response.error) {
                  console.log('Camera Error: ', response.error);
                } else {
                  let imageUri = response.uri || response.assets?.[0];
                  SetDocImg(imageUri)
                  console.log('Inside = ', imageUri);
                }
              })
            })
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('granteed')
            await launchCamera(Options, response => {
              if (response.didCancel) {
                console.log('User cancelled camera');
              } else if (response.error) {
                console.log('Camera Error: ', response.error);
              } else {
                let imageUri = response.uri || response.assets?.[0];
                SetDocImg(imageUri)
                console.log('Inside = ', imageUri);
              }
            })
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        console.log('Inside Error--==', error)
      });
  }

  return (
    
    <View style={{ flex: 1, backgroundColor: WhiteColor }}>
        <ScrollView>
        <View style={{ alignSelf: "center" }}>
            <View style={{ marginTop: width * 0.24 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: BlackColor, fontSize: getFontSize(22) }}>Are you 21 or older ?</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor, fontSize: getFontSize(14) }}>Please verfiy if you are above 21 or older. </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: BlackColor, fontSize: getFontSize(14) }}>Please upload your identity proof . </Text>
                <View style={{ marginTop: width * 0.1 }}>
                  {DocImg?<Image source={{uri:DocImg.uri}} style={{width:width*0.8,height:width*0.6,borderRadius:width*0.02}}/>:<TouchableOpacity style={{width:width*0.8,height:width*0.6,backgroundColor:LightGreenColor,borderColor:GreenColor,borderWidth:1,borderStyle:"dashed",alignItems:"center",justifyContent:"center",borderRadius
                :width*0.02}}
                onPress={()=>OpenCamera()}                
                >
                  <AntDesign name="pluscircle" size={24} color={LightBlackColor} />
                  </TouchableOpacity>}
                  {DocImg&&<TouchableOpacity style={{width:width*0.8,paddingVertical:width*0.04,borderRadius:width*0.02,alignItems:'center',marginTop:width*0.02,backgroundColor:LightLightBlackColor}}
                  onPress={()=>SetDocImg('')}
                  >
                  <AntDesign name="delete" size={24} color={LightBlackColor}/>
                  </TouchableOpacity>}
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

export default DocumentPicScreen

const styles = StyleSheet.create({})