import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
    FlatList,
    Linking,
    Alert
} from 'react-native';
import Colors from '../components/Colors';
import { heightToDp, widthToDp } from '../components/Responsive';
import Button from '../components/Button';
import HamburgerScreen from './HamburgerScreen';
import { useSelector, useDispatch } from 'react-redux'

const ServiceElementLinkScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const dispatch = useDispatch()
    const apartmentList = useSelector((state) => state.apartment.apartmentData)

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ width: widthToDp('100%'), height: heightToDp('8%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: 'absolute', left: 10, top: 20 }}
                >
                    <Image
                        source={require('../images/leftArrow.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
            {/* <ImageBackground
                source={require("../images/appLogoDimmed.png")}
                resizeMode='contain'
                style={{ height: heightToDp('30%'), width: widthToDp('50%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('10%') }}>After Build</Text>
                <Text style={{ color: 'black', fontWeight: '400', fontSize: widthToDp('5%'), marginTop: heightToDp('3%') }}>{apartmentList.name}</Text>
            </ImageBackground> */}
            <View style={{ height: heightToDp('20%'), width: widthToDp('40%'), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: item.image == "" ? "https://parceljs.org/assets/og.png" : item.image }}
                    style={{ height: heightToDp('20%'), width: widthToDp('40%') }}
                // resizeMode='contain'
                />
            </View>

            <View style={{ margin: 10 }}></View>
            <TouchableOpacity
                onPress={() => navigation.navigate('ServiceElementDescriptionScreen',{
                    item : item
                })}
                style={{ backgroundColor: '#00288F', height: heightToDp('6%'), width: widthToDp('70%'), alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: widthToDp('5%') }}>Spec Sheet</Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }}></View>
            <TouchableOpacity 
            onPress={async() => {
                const supported = await Linking.canOpenURL(item.link);
                if (supported) {
                    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                    // by some browser in the mobile
                    await Linking.openURL(item.link);
                  } else {
                    Alert.alert(`Don't know how to open this URL: ${item.link}`);
                  }
            }}
            style={{ backgroundColor: '#00288F', height: heightToDp('6%'), width: widthToDp('70%'), alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: widthToDp('5%') }}>Link to the product</Text>
                <View style={{ borderColor: 'white', borderWidth: 0.5, width: widthToDp('50%'), backgroundColor: 'white', alignSelf: 'center' }}></View>
            </TouchableOpacity>

        </View>
    )
}

export default ServiceElementLinkScreen;
