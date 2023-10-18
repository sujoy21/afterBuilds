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
    ActivityIndicator,
} from 'react-native';
import Colors from '../components/Colors';
import { heightToDp, widthToDp } from '../components/Responsive';
import Button from '../components/Button';
import axios from 'axios';
import { baseUrl } from '../api/baseUrl/baseUrl';
import { registerUser } from '../api/apiEndpoints/apiEndpoints';
import { axiosPostCall } from '../api/apiAxios/apiAxios';

const SignUpScreen = ({ navigation }) => {

    const [formData, setFormData] = useState({})
    const [loader, setLoader] = useState(false)

    const registerApiCall = async () => {
        setLoader(true)
        // const body = {
        //     first_name: "sujoy",
        //     last_name: "saha",
        //     password: "mypassword123",
        //     email: "oooee44oossso@example.com",
        //     address1: "123 Street",
        //     address2: "Apt 4B",
        //     city: "New York",
        //     state: "NY",
        //     pincode: "10001",
        //     country: "United States",
        // }
        let body = {
            ...formData,
            last_name: "gen",
        }
        let response = await axiosPostCall(`${baseUrl}${registerUser}`, body)

        if (response.success) {
            setLoader(false)
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomePageScreen' }],
           })
        }

    }

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'center', padding: 10 }}>
                <View style={{ marginTop: heightToDp('4%') }}>
                    <Image
                        source={require('../images/appLogo.png')}
                        style={{}}
                    />
                </View>
                <Text style={{ color: 'black', fontSize: widthToDp('5%'), marginTop: heightToDp('2%') }}>AFTER BUILD</Text>
                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('3%'), fontWeight: 'bold' }}>CREATE ACCOUNT</Text>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('4%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Name</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Name'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                        onChangeText={(text) => {
                            var first_name = {
                                ...formData,
                                first_name: text,
                            }
                            setFormData(first_name)
                        }}
                    />
                </View>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Email</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Email'
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

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Address</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Address'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                        onChangeText={(text) => {
                            var address1 = {
                                ...formData,
                                address1: text,
                            }
                            setFormData(address1)
                        }}
                    />
                </View>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Street Address</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Street Address'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                        onChangeText={(text) => {
                            var address2 = {
                                ...formData,
                                address2: text,
                            }
                            setFormData(address2)
                        }}
                    />
                </View>

                {/* <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Street Address Line 2</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Street Address Line 2'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                    />
                </View>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Street Address Line 2</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Street Address Line 2'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                    />
                </View> */}

                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 0, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, padding: 20, justifyContent: 'center' }}
                    >
                        <TextInput
                            placeholder='City'
                            style={{ color: 'black', width: widthToDp('45%'), height: heightToDp('6') }}
                            cursorColor={'black'}
                            placeholderTextColor={'black'}
                            onChangeText={(text) => {
                                var city = {
                                    ...formData,
                                    city: text,
                                }
                                setFormData(city)
                            }}
                        />
                    </View>
                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, padding: 20, justifyContent: 'center' }}
                    >
                        <TextInput
                            placeholder='State/Province'
                            style={{ color: 'black', width: widthToDp('45%'), height: heightToDp('6') }}
                            cursorColor={'black'}
                            placeholderTextColor={'black'}
                            onChangeText={(text) => {
                                var state = {
                                    ...formData,
                                    state: text,
                                }
                                setFormData(state)
                            }}
                        />
                    </View>
                </View>

                <View style={{ width: widthToDp('95%'), height: heightToDp('2%'), elevation: 0, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('2%'), elevation: 0, backgroundColor: 'white', alignItems: 'center' }}
                    >
                        <Text style={{ color: 'black', fontSize: widthToDp('4%'), marginTop: heightToDp('0%') }}>City</Text>
                    </View>

                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('2%'), elevation: 0, backgroundColor: 'white', alignItems: 'center' }}
                    >
                        <Text style={{ color: 'black', fontSize: widthToDp('4%'), marginTop: heightToDp('0%') }}>State/Province</Text>
                    </View>
                </View>

                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 0, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, padding: 20, justifyContent: 'center' }}
                    >
                        <TextInput
                            placeholder='Postal / Zip Code'
                            style={{ color: 'black', width: widthToDp('45%'), height: heightToDp('6') }}
                            cursorColor={'black'}
                            placeholderTextColor={'black'}
                            onChangeText={(text) => {
                                var pincode = {
                                    ...formData,
                                    pincode: text,
                                }
                                setFormData(pincode)
                            }}
                        />
                    </View>
                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, padding: 20, justifyContent: 'center' }}
                    >
                        <TextInput
                            placeholder='Country'
                            style={{ color: 'black', width: widthToDp('45%'), height: heightToDp('6') }}
                            cursorColor={'black'}
                            placeholderTextColor={'black'}
                            onChangeText={(text) => {
                                var country = {
                                    ...formData,
                                    country: text,
                                }
                                setFormData(country)
                            }}
                        />
                    </View>
                </View>

                <View style={{ width: widthToDp('95%'), height: heightToDp('2%'), elevation: 0, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('2%'), elevation: 0, backgroundColor: 'white', alignItems: 'center' }}
                    >
                        <Text style={{ color: 'black', fontSize: widthToDp('4%'), marginTop: heightToDp('0%') }}>Postal / Zip Code</Text>
                    </View>

                    <View
                        style={{ width: widthToDp('45%'), height: heightToDp('2%'), elevation: 0, backgroundColor: 'white', alignItems: 'center' }}
                    >
                        <Text style={{ color: 'black', fontSize: widthToDp('4%'), marginTop: heightToDp('0%') }}>Country</Text>
                    </View>
                </View>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Phone Number</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Phone Number'
                        style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                        cursorColor={'black'}
                        placeholderTextColor={'black'}
                    />
                </View>

                <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Create Password</Text>
                <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Create Password'
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

                <View style={{ margin: 10 }}></View>
                <Button height={'5%'} width={'50%'} text={"Continue"} txtColor={'white'} onPress={registerApiCall} loader={loader} />

            </View>
        </ScrollView>
    )
}

export default SignUpScreen;