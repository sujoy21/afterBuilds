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

const MyOrderScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "white", flex: 1, }}>
            <View style={{ width: widthToDp('100%'), height: heightToDp('8%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require('../images/leftArrow.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('6%'), width: widthToDp('10') }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomePageScreen")}
                >
                    <Image
                        source={require('../images/home.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('4%'), width: widthToDp('6%') }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: widthToDp('90%'), marginLeft: widthToDp('5%'), marginRight: widthToDp('5%') }}>
                <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('6%'), textAlign: 'center', marginTop: heightToDp('2%'), marginBottom: heightToDp('2%') }}>My Orders</Text>
            </View>
            <View style={{ height: heightToDp('30%'), width: widthToDp('90%'), marginTop: heightToDp('4%'), alignSelf: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', height: heightToDp('4%'), width: widthToDp('25%'), justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>Completed</Text>
                    <Image
                        source={require('../images/blackCircleTick.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('4%'), width: widthToDp('4%') }}
                    />
                </View>
                <View style={{ height: heightToDp('25%'), width: widthToDp('90%'), backgroundColor: '#00288F', borderRadius: 10 }}>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Kitchen</Text>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Service</Text>
                        <Text style={{ color: 'white' }}>---</Text>
                        <Text style={{ color: 'white' }}>Paint</Text>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Date</Text>
                        <Text style={{ color: 'white' }}>---</Text>
                        <Text style={{ color: 'white' }}>08.01.23</Text>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Cost</Text>
                        <Text style={{ color: 'white' }}>---</Text>
                        <Text style={{ color: 'white' }}>$ 150.00</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: heightToDp('30%'), width: widthToDp('90%'), marginTop: heightToDp('4%'), alignSelf: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', height: heightToDp('4%'), width: widthToDp('25%'), justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>Pending</Text>
                    <Image
                        source={require('../images/pending.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('4%'), width: widthToDp('4%') }}
                    />
                </View>
                <View style={{ height: heightToDp('25%'), width: widthToDp('90%'), backgroundColor: '#00288F', borderRadius: 10 }}>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Kitchen</Text>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Service</Text>
                        <Text style={{ color: 'white' }}>---</Text>
                        <Text style={{ color: 'white' }}>Paint</Text>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Date</Text>
                        <Text style={{ color: 'white' }}>---</Text>
                        <Text style={{ color: 'white' }}>08.01.23</Text>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' ,width:widthToDp('90%'),height:heightToDp('5%'),flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ color: 'white' }}>Cost</Text>
                        <Text style={{ color: 'white' }}>---</Text>
                        <Text style={{ color: 'white' }}>$ 150.00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MyOrderScreen