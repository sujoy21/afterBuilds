/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
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
import React, { useState } from 'react';
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
import { axiosGetCall, axiosPostCall } from '../api/apiAxios/apiAxios';
import { baseUrl } from '../api/baseUrl/baseUrl';
import { getApartment, loginUser } from '../api/apiEndpoints/apiEndpoints';
import { useSelector, useDispatch } from 'react-redux'
import { setAccessToken } from '../store/loginSlice'
import { setApartment } from '../store/getApartmentSlice';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [loader, setLoader] = useState(false)
    const otpPhoneNumberScreenFunction = () => {
        navigation.navigate('OtpPhoneNumberScreen')
    }
    const homePageFunction = async () => {
        setLoader(true)

        let response = await axiosPostCall(`${baseUrl}${loginUser}`, formData)

        if (response.success) {
            setLoader(false)
            dispatch(setAccessToken(response.token))
            let response2 = await axiosGetCall(`${baseUrl}${getApartment}`, response.token)
            if (response2.success) {
                dispatch(setApartment(response2.apartment))
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomePageScreen' }],
                })
            }
        }
        setLoader(false)
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
                <Text style={{ color: 'black', fontSize: widthToDp('5%'), marginTop: heightToDp('2%') }}>AFTER BUILD</Text>
                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('3%'), fontWeight: 'bold' }}>LOGIN</Text>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('4%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Email/Phone</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Email/Phone'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                        onChangeText={(text) => {
                            var email = {
                                ...formData,
                                email: text,
                            }
                            setFormData(email)
                        }}
                    />
                </View>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Password</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Password'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                        onChangeText={(text) => {
                            var password = {
                                ...formData,
                                password: text,
                            }
                            setFormData(password)
                        }}
                    />
                </View>

                <TouchableOpacity style={{ width: widthToDp('90%'), marginTop: heightToDp('1%') }}>
                    <Text style={{ color: Colors.splashBlue, fontSize: widthToDp('3%'), fontWeight: 'bold', alignSelf: 'flex-end' }}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={{ margin: 10 }}></View>
                <Button height={'5%'} width={'50%'} text={"Login"} txtColor={'white'} onPress={homePageFunction} loader={loader} />
                <View style={{ margin: 10 }}></View>
                <Button height={'5%'} width={'50%'} text={"OTP Login"} txtColor={'white'} onPress={otpPhoneNumberScreenFunction} />

            </View>
        </ScrollView>
    )
}

export default LoginScreen;