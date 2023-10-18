/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import Colors from '../components/Colors';
import { heightToDp, widthToDp } from '../components/Responsive';
import Button from '../components/Button';

const OtpPhoneNumberScreen = ({ navigation }) => {

    const otpVerificationFunction = () => {
        navigation.navigate('OtpVerificationScreen')
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'center', padding: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: 'absolute', left: 10, top: 20 }}
                >
                    <Image
                        source={require('../images/leftArrow.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <View style={{ marginTop: heightToDp('4%') }}>
                    <Image
                        source={require('../images/appLogo.png')}
                        style={{}}
                    />
                </View>
                <Text style={{ color: 'black', fontSize: widthToDp('4%'), marginTop: heightToDp('2%') }}>Enter your phone no to receive</Text>
                <Text style={{ color: 'black', fontSize: widthToDp('4%'), marginTop: heightToDp('0%') }}>a verification code</Text>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('4%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Phone</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Phone'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={{ margin: 10 }}></View>
                <Button height={'5%'} width={'50%'} text={"Continue"} txtColor={'white'} onPress={otpVerificationFunction}/>

            </View>
        </ScrollView>
    )
}

export default OtpPhoneNumberScreen;