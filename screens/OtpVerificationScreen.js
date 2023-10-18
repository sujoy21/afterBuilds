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
import OtpInputs from 'react-native-otp-inputs';

const OtpVerificationScreen = ({ navigation }) => {

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
                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('3%'), fontWeight: 'bold' }}>OTP Verification</Text>
                <Text style={{ color: 'black', fontSize: widthToDp('4%'), marginTop: heightToDp('2%') }}>Enter the 4 digit OTP sent to +9177xxxx</Text>

                <View style={{height:heightToDp('20%'),width : widthToDp('70%')}}>
                    <OtpInputs
                         placeholder="Number"
                         numberOfInputs={4}
                        //  style={{ flexDirection: 'row' , color : 'black' }}
                        cursorColor={'black'}
                         inputContainerStyles={{
                           backgroundColor :'white',
                           borderRadius : 10,
                           elevation : 10,
                         }}
                         inputStyles={{
                            color:'black',
                            fontWeight : 'bold',
                         }}
                        autoFocus = {true}
                    />
                </View>

                <View style={{ width: widthToDp('90%'), height: heightToDp('5%'), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: widthToDp('4%') }}>Didn't get code ? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: widthToDp('4%'), fontWeight: 'bold' }}>RESEND</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 10 }}></View>
                <Button height={'5%'} width={'60%'} text={"Verify & Continue"} txtColor={'white'} />

            </View>
        </ScrollView>
    )
}

export default OtpVerificationScreen;