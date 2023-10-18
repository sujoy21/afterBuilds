/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
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

const HomePageScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const apartmentList = useSelector((state) => state.apartment.apartmentData)
    const listData = [
        {
            name: "Kitchen",
        },
        {
            name: "Living",
        },
        {
            name: "Bed 1",
        },
        {
            name: "Bath 1",
        },
        {
            name: "Misc",
        },
    ]

    const Item = ({ title, item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('ServicesScreen', {
                item: item,
            })}
            style={{ height: heightToDp('5%'), width: widthToDp('40%'), backgroundColor: Colors.homePageButton, borderRadius: 10, flexDirection: 'row', alignItems: 'center', padding: 10, marginTop: heightToDp('2%'), marginBottom: heightToDp('2%') }}>
            {/* <Text style={{ color: 'black', fontWeight: '300', fontSize: widthToDp('10%') }}>.</Text> */}
            <Text style={{ color: 'black', fontWeight: '300', fontSize: widthToDp('4%') }}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ width: widthToDp('100%'), height: heightToDp('8%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ProfileScreen")}
                >
                    <Image
                        source={require('../images/profileIcon.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('6%'), width: widthToDp('10') }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HamburgerScreen")}
                >
                    <Image
                        source={require('../images/hamburgerIcon.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('6%'), width: widthToDp('9') }}
                    />
                </TouchableOpacity>
            </View>
            <ImageBackground
                source={require("../images/appLogoDimmed.png")}
                resizeMode='contain'
                style={{ height: heightToDp('30%'), width: widthToDp('50%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('6%') }}>Welcome to After Build</Text>
                <Text style={{ color: 'black', fontWeight: '400', fontSize: widthToDp('5%'), marginTop: heightToDp('3%') }}>Your Home's Digital twin</Text>
            </ImageBackground>

            <View style={{ width: widthToDp('100%'), height: heightToDp('8%'), marginTop: heightToDp('1%'), backgroundColor: 'white', alignItems: 'center' }}>
                <View style={{ width: widthToDp('80%'), height: heightToDp('8%'), backgroundColor: 'rgba(0, 90, 255, 0.43)', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ width: widthToDp('38%'), height: heightToDp('7%'), backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('5%') }}>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: widthToDp('38%'), height: heightToDp('7%'), backgroundColor: 'rgba(0, 90, 255, 0.43)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('5%') }}>Plan</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: heightToDp('40%'), width: widthToDp('100%'), backgroundColor: 'white', marginTop: heightToDp('2%'), padding: 20, justifyContent: 'center' }}>
                <FlatList
                    data={apartmentList.rooms}
                    renderItem={({ item }) => <Item title={item.name} item={item} />}
                />
            </View>

            <View style={{ width: widthToDp('100%'), alignItems: 'center' }}>
                <TouchableOpacity style={{ height: heightToDp('5%'), width: widthToDp('50%'), backgroundColor: Colors.homePageButton, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: '400', fontSize: widthToDp('4.5%') }}>Request for Service</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomePageScreen;