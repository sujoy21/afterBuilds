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
} from 'react-native';
import Colors from '../components/Colors';
import { heightToDp, widthToDp } from '../components/Responsive';
import Button from '../components/Button';
import HamburgerScreen from './HamburgerScreen';
import { useSelector, useDispatch } from 'react-redux'

const ServiceElementDescriptionScreen = ({ route, navigation }) => {
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
            <View style={{ height: heightToDp('20%'), width: widthToDp('40%'), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: item.image == "" ? "https://parceljs.org/assets/og.png" : item.image }}
                    style={{ height: heightToDp('20%'), width: widthToDp('40%') }}
                // resizeMode='contain'
                />
            </View>

            <View style={{  height: heightToDp('6%'), width: widthToDp('70%'), alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: widthToDp('5%'), fontWeight:'bold' }}>{item.name}</Text>
            </View>

            <View style={{  height: heightToDp('70%'), width: widthToDp('90%'), alignSelf: 'center', borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: widthToDp('5%') }}>{item.description}</Text>
            </View>

{/* 
            <View style={{ margin: 10 }}></View>
            <TouchableOpacity style={{ backgroundColor: '#00288F', height: heightToDp('6%'), width: widthToDp('70%'), alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: widthToDp('5%') }}>Spec Sheet</Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }}></View>
            <TouchableOpacity style={{ backgroundColor: '#00288F', height: heightToDp('6%'), width: widthToDp('70%'), alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: widthToDp('5%') }}>Link to the product</Text>
                <View style={{ borderColor: 'white', borderWidth: 0.5, width: widthToDp('50%'), backgroundColor: 'white', alignSelf: 'center' }}></View>
            </TouchableOpacity> */}

        </View>
    )
}

export default ServiceElementDescriptionScreen;
