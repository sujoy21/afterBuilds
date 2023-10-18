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

const AddApplicancesScreen = ({ navigation }) => {
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
                <Text style={{ color: 'black', fontWeight: '500', fontSize: widthToDp('6%'), textAlign: 'center', marginTop: heightToDp('2%'), marginBottom: heightToDp('2%') }}>Add Appliances</Text>
            </View>
            {/* <View style={{ height: heightToDp('30%'), width: widthToDp('90%'), marginTop: heightToDp('4%'), alignSelf: 'center', backgroundColor: 'white' }}>
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
            </View> */}
            <View style={{ alignSelf: 'center', height: heightToDp('40%'), width: widthToDp('85%'), backgroundColor: 'white', marginTop: '5%' }}>
                <Image
                    source={require('../images/addApplicances.png')}
                    // resizeMode='contain'
                    style={{ height: heightToDp('40%'), width: widthToDp('85%'), borderRadius: 10 }}
                />
            </View>
            <View style={{ alignSelf: 'center', height: heightToDp('40%'), width: widthToDp('95%'), backgroundColor: 'white', marginTop: '5%', alignItems: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', height: heightToDp('6%'), width: widthToDp('85%'), borderRadius: 10, backgroundColor: '#00288F', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Text style={{ color: 'white', fontSize: widthToDp('4%'), fontWeight: 'bold' }}>Add Applicances</Text>
                    <Image
                        source={require('../images/whiteAdd.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('5%'), width: widthToDp('8%'), borderRadius: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', height: heightToDp('10%'), width: widthToDp('85%'), borderRadius: 10, backgroundColor: 'rgba(0, 117, 255, 0.43)', alignItems: 'center', justifyContent: 'space-evenly', marginTop: heightToDp('5%') }}>
                    {/* <Text style={{color:'white',fontSize:widthToDp('4%'),fontWeight:'bold'}}>Add Applicances</Text>
                    <Image
                        source={require('../images/whiteAdd.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('5%'), width: widthToDp('8%'), borderRadius: 10 }}
                    /> */}
                    <View>
                        <Text style={{ color: 'black', fontSize: widthToDp('5%'), fontWeight: 'bold' }}>Refrigerator</Text>
                        <Text style={{ color: 'black', fontSize: widthToDp('4%'), fontWeight: '300' }}>Evry 3 months</Text>
                    </View>
                    <Image
                        source={require('../images/penfield.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('5%'), width: widthToDp('8%')}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', height: heightToDp('10%'), width: widthToDp('85%'), borderRadius: 10, backgroundColor: 'rgba(0, 117, 255, 0.43)', alignItems: 'center', justifyContent: 'space-evenly', marginTop: heightToDp('5%') }}>
                    {/* <Text style={{color:'white',fontSize:widthToDp('4%'),fontWeight:'bold'}}>Add Applicances</Text>
                    <Image
                        source={require('../images/whiteAdd.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('5%'), width: widthToDp('8%'), borderRadius: 10 }}
                    /> */}
                    <View>
                        <Text style={{ color: 'black', fontSize: widthToDp('5%'), fontWeight: 'bold' }}>Wasing Machine</Text>
                        <Text style={{ color: 'black', fontSize: widthToDp('4%'), fontWeight: '300' }}>last saturday of every month</Text>
                    </View>
                    <Image
                        source={require('../images/penfield.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('5%'), width: widthToDp('8%')}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddApplicancesScreen