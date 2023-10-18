import React, { useEffect, useState } from 'react';
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
import { baseUrl } from '../api/baseUrl/baseUrl';
import { getUser } from '../api/apiEndpoints/apiEndpoints';
import { axiosGetCall } from '../api/apiAxios/apiAxios';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ navigation }) => {
    const accessToken = useSelector((state) => state.login.accessToken)
    const [userDetails, setUserDetails] = useState('')
    useEffect(() => {
        getProfileDetailsFunction()
    }, [])

    const getProfileDetailsFunction = async () => {
        let response = await axiosGetCall(`${baseUrl}${getUser}`, accessToken)
        setUserDetails(response.user)
        // if (response.success) {
        //     setLoader(false)
        //     dispatch(setAccessToken(response.token))
        //     let response2 = await axiosGetCall(`${baseUrl}${getApartment}`, response.token)
        //     if (response2.success) {
        //         dispatch(setApartment(response2.apartment))
        //         navigation.reset({
        //             index: 0,
        //             routes: [{ name: 'HomePageScreen' }],
        //         })
        //     }
        // }
    }
    return (
        <View style={{ backgroundColor: "#00288F", flex: 1, }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', left: 10, top: 20 }}
            >
                <Image
                    source={require('../images/leftArrow.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <View
                style={{ alignSelf: 'center', marginTop: heightToDp('5%'), alignItems: 'center', height: heightToDp('25%'), width: widthToDp('100%') }}
            >
                <Text style={{ color: 'white', fontSize: widthToDp('8%'), marginTop: heightToDp('0%'), marginBottom: heightToDp('2%') }}>Profile</Text>
                <TouchableOpacity
                    style={{ height: heightToDp('14%'), width: widthToDp('28%') }}
                    onPress={() => navigation.navigate('EditProfileScreen',{
                        userData : userDetails
                    })}
                >
                    <Image
                        source={require('../images/userImage.png')}
                        resizeMode='contain'
                    />
                    <Image
                        source={require('../images/editProfile.png')}
                        resizeMode='contain'
                        style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 0 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'white', height: heightToDp('100%'), width: widthToDp('100%'), borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 1 }}>
                <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10, marginBottom: heightToDp('20%') }}
                >
                    <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('4%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Name</Text>
                    <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='Name'
                            style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                            cursorColor={'black'}
                            placeholderTextColor={'black'}
                            defaultValue={userDetails?.name}
                            editable = {false}
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
                            defaultValue={userDetails?.email}
                            editable = {false}
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
                            defaultValue={userDetails?.address1}
                            editable = {false}
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
                            defaultValue={userDetails?.address2}
                            editable = {false}
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
                                defaultValue={userDetails?.city}
                                editable={false}
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
                                defaultValue={userDetails?.state}
                                editable={false}
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
                                defaultValue={userDetails?.pincode}
                                editable={false}
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
                                defaultValue={userDetails?.country}
                                editable={false}
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
                            defaultValue={userDetails?.phone}
                            editable={false}
                        />
                    </View>

                    {/* <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Create Password</Text>
                    <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='Create Password'
                            style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                            cursorColor={'black'}
                            placeholderTextColor={'black'}
                            editable={false}
                        // defaultValue= {userDetails?.name}
                        // onChangeText={(text) => {
                        //     var password = {
                        //         ...formData,
                        //         password: text,
                        //     }
                        //     setFormData(password)
                        // }}
                        />
                    </View> */}

                </ScrollView>
            </View>
        </View>
    )
}
export default ProfileScreen