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
import HomePageScreen from './HomePageScreen';

const HamburgerScreen = ({ navigation }) => {
    const listData = [
        {
            name: "My Orders ",
            screenName:'MyOrderScreen'
        },
        {
            name: "Add appliances ",
            screenName:'AddApplicancesScreen'
        },
        {
            name: "Schedule a maintenance",
            screenName:'AddApplicancesScreen'
        },
        {
            name: "Cancel Order",
            screenName:'CancelOrderScreen'
        },
        {
            name: "Feedback",
            screenName:'FeedbackScreen'

        },
    ]
    const Item = ({ title }) => (
        <View style={{ height: heightToDp('7%'), width: widthToDp('95%'), borderRadius: 10, flexDirection: 'row', alignItems: 'flex-start', padding: 10, marginTop: heightToDp('2%'), marginBottom: heightToDp('2%'), marginLeft: widthToDp('5%'), borderBottomColor: 'black', borderBottomWidth: 1 }}>
            {/* <Text style={{ color: 'black', fontWeight: '300', fontSize: widthToDp('10%') }}>.</Text> */}
            <Text style={{ color: 'black', fontWeight: '300', fontSize: widthToDp('6%') }}>{title}</Text>
        </View>
    );
    return (
        <View style={{ backgroundColor: "white", flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: Colors.homePageButton, height: heightToDp('95%'), width: widthToDp('93%'), borderRadius: 5, paddingTop: heightToDp('2%'), display: 'flex', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={()=>navigation.navigate(HomePageScreen)}>
                    <Image
                        source={require('../images/close.png')}
                        resizeMode='contain'
                        style={{ height: heightToDp('6%'), width: widthToDp('10'), marginRight: widthToDp('4%'), transform: [{ rotate: '45deg' }] }}
                    />
                </TouchableOpacity>
                <FlatList
                    data={listData}
                    renderItem={({ item }) => <TouchableOpacity onPress={()=>navigation.navigate(item.screenName)}><Item title={item.name} /></TouchableOpacity>}
                />
            </View>
        </View>
    )
}
export default HamburgerScreen