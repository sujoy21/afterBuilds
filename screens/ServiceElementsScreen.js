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

const ServiceElementScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const dispatch = useDispatch()
    const apartmentList = useSelector((state) => state.apartment.apartmentData)
    const Item = ({ title, item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('ServiceElementLinkScreen', {
                item: item,
            })}
            style={{ height: heightToDp('18%'), width: widthToDp('40%'), borderRadius: 10, alignItems: 'center', padding: 10, marginTop: heightToDp('0%'), marginBottom: heightToDp('2%'), justifyContent: 'center' }}>
            {/* <Text style={{ color: 'black', fontWeight: '300', fontSize: widthToDp('10%') }}>.</Text> */}
            <Image
                source={{ uri: item.image == "" ? "https://parceljs.org/assets/og.png" : item.image }}
                style={{ height: heightToDp('10%'), width: widthToDp('30%') }}
            // resizeMode='contain'
            />
            <Text style={{ color: 'black', fontWeight: '300', fontSize: widthToDp('4%'), marginTop: heightToDp('2%') }}>{item.name}</Text>
        </TouchableOpacity>
    );
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
            <ImageBackground
                source={require("../images/appLogoDimmed.png")}
                resizeMode='contain'
                style={{ height: heightToDp('30%'), width: widthToDp('50%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('10%') }}>After Build</Text>
                <Text style={{ color: 'black', fontWeight: '400', fontSize: widthToDp('5%'), marginTop: heightToDp('3%') }}>{apartmentList.name}</Text>
            </ImageBackground>

            <View style={{ width: widthToDp('38%'), height: heightToDp('7%'), backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('5%') }}>{item.name}</Text>
            </View>
            <View style={{ borderColor: 'black', borderWidth: 0.5, width: widthToDp('90%'), backgroundColor: 'black', alignSelf: 'center' }}></View>
            <View style={{ width: widthToDp('38%'), height: heightToDp('7%'), backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('5%') }}>{item.description}</Text>
            </View>
            {/* <View style={{ width: widthToDp('100%'), height: heightToDp('8%'), marginTop: heightToDp('1%'), backgroundColor: 'white', alignItems: 'center' }}>
                <View style={{ width: widthToDp('80%'), height: heightToDp('8%'), backgroundColor: 'rgba(0, 90, 255, 0.43)', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ width: widthToDp('38%'), height: heightToDp('7%'), backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('5%') }}>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: widthToDp('38%'), height: heightToDp('7%'), backgroundColor: 'rgba(0, 90, 255, 0.43)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('5%') }}>Plan</Text>
                    </TouchableOpacity>
                </View>
            </View> */}

            <View style={{ height: heightToDp('40%'), width: widthToDp('100%'), backgroundColor: 'white', marginTop: heightToDp('0%'), padding: 20, justifyContent: 'center' }}>
                <FlatList
                    data={item.elems}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => <Item title={item.name} item={item} />}
                />
            </View>

            {/* <View style={{ width: widthToDp('100%'), alignItems: 'center' }}>
                <TouchableOpacity style={{ height: heightToDp('5%'), width: widthToDp('50%'), backgroundColor: Colors.homePageButton, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: '400', fontSize: widthToDp('4.5%') }}>Request for Service</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default ServiceElementScreen;
