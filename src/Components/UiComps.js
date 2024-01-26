import { ActivityIndicator, Dimensions, Image, PixelRatio, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
const { width, height } = Dimensions.get('window')
import { BlackColor, GreenColor, LightBlackColor, LightGreenColor, LightLightBlackColor, WhiteColor } from '../Components/Colors'
const fontScale = PixelRatio.getFontScale();
export const getFontSize = size => size / fontScale;

export const ListItem = ({ item, index }) => {
    return (
        <View style={{ width, }}>
            <View style={{ alignItems: 'center', marginTop: height * 0.1 }}>
                <Image source={item.img}
                    style={{ width: width * 0.9, height: width * 0.9, borderRadius: 1000, resizeMode: 'contain', backgroundColor: LightGreenColor }}
                />
            </View>
            <Text style={{ fontSize: getFontSize(22.5), paddingHorizontal: width * 0.06, textAlign: 'center', marginTop: height * 0.08, fontFamily: 'Poppins-Bold', color: BlackColor }}>{item.title}</Text>
            <Text style={{ fontSize: getFontSize(15), textAlign: 'center', fontFamily: 'Poppins-Regular', color: BlackColor, paddingHorizontal: width * 0.04, marginTop: height * 0.01 }}>{item.description}</Text>
        </View>
    )

}


export const GreenButton = ({ Handlefunc, txt }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: GreenColor, width: width * 0.8, paddingVertical: width * 0.04, borderRadius: width * 0.02 }}
            onPress={() => Handlefunc()}
        >
            <Text style={{ color: WhiteColor, fontFamily: 'Poppins-Medium', textAlign: "center" }}>{txt}</Text>
        </TouchableOpacity>
    )
}


export const AppLoading = () => {
    return (
        <View style={{ position: 'absolute', zIndex: 1000, backgroundColor: LightBlackColor, flex: 1, height, width, justifyContent: 'center', alignItems: "center" }}>
            <View style={{ backgroundColor: WhiteColor, elevation: 4, width: width * 0.26, borderRadius: width * 0.02, height: width * 0.26, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator animating color={GreenColor} size={"large"} style={{}} />
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: getFontSize(13), marginTop: 10, color: BlackColor }}>Loading . . .</Text>
            </View>
        </View>
    )
}