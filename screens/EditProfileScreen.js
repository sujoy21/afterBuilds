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
import { getUser, updateUser } from '../api/apiEndpoints/apiEndpoints';
import { axiosGetCall , axiosPostCall, axiosPutCall} from '../api/apiAxios/apiAxios';
import { useSelector } from 'react-redux';

const EditProfileScreen = ({ route, navigation }) => {
    const { userData } = route.params;
    const accessToken = useSelector((state) => state.login.accessToken)
    const [userDetails, setUserDetails] = useState(userData)
    console.log(userDetails, "CHUDI PUDI")
    // useEffect(() => {
    //     getProfileDetailsFunction()
    // }, [])

    // const getProfileDetailsFunction = async () => {
    //     let response = await axiosGetCall(`${baseUrl}${getUser}`, accessToken)
    //     setUserDetails(response.user)
    //     // if (response.success) {
    //     //     setLoader(false)
    //     //     dispatch(setAccessToken(response.token))
    //     //     let response2 = await axiosGetCall(`${baseUrl}${getApartment}`, response.token)
    //     //     if (response2.success) {
    //     //         dispatch(setApartment(response2.apartment))
    //     //         navigation.reset({
    //     //             index: 0,
    //     //             routes: [{ name: 'HomePageScreen' }],
    //     //         })
    //     //     }
    //     // }
    // }

    const editDetailsFunction = async (keyName, value) => {
        let copyObj = { ...userDetails }
        copyObj.keyName = value
        setUserDetails(copyObj)
    }

    const updateFunctionCall = async() => {
        let tempObjUser = {...userDetails}
        delete tempObjUser.__v
        delete tempObjUser._id
        let response = await axiosPostCall(`${baseUrl}${updateUser}`,tempObjUser, accessToken)
        navigation.navigate('ProfileScreen')
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
                <Text style={{ color: 'white', fontSize: widthToDp('8%'), marginTop: heightToDp('0%'), marginBottom: heightToDp('2%') }}>Edit Profile</Text>
                <TouchableOpacity
                    style={{ height: heightToDp('14%'), width: widthToDp('28%') }}
                >
                    <Image
                        source={require('../images/userImage.png')}
                        resizeMode='contain'
                    />
                    <View
                        style={{ backgroundColor: '#D9D9D9', height: heightToDp('4.5%'), width: widthToDp('30%'), borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}
                    >
                        <Text style={{ color: '#716F6F' }}>Upload img</Text>
                        <Image
                            source={require('../images/upload.png')}
                            resizeMode='contain'
                        />
                    </View>

                    {/* <Image
                        source={require('../images/editProfile.png')}
                        resizeMode='contain'
                        style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 0 }}
                    /> */}
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
                            onChangeText={(text) => {
                                // var first_name = {
                                //     ...formData,
                                //     first_name: text,
                                // }
                                // setFormData(first_name)
                                editDetailsFunction("name", text)
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
                            onChangeText={(text) => {
                                // var email = {
                                //     ...formData,
                                //     email: text,
                                // }
                                // setFormData(email)
                                editDetailsFunction("email", text)
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
                            onChangeText={(text) => {
                                // var address1 = {
                                //     ...formData,
                                //     address1: text,
                                // }
                                // setFormData(address1)
                                editDetailsFunction("address1", text)
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
                            onChangeText={(text) => {
                                // var address2 = {
                                //     ...formData,
                                //     address2: text,
                                // }
                                // setFormData(address2)
                                editDetailsFunction("address2", text)
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
                                onChangeText={(text) => {
                                    // var city = {
                                    //     ...formData,
                                    //     city: text,
                                    // }
                                    // setFormData(city)
                                    editDetailsFunction("city", text)
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
                                onChangeText={(text) => {
                                    // var state = {
                                    //     ...formData,
                                    //     state: text,
                                    // }
                                    // setFormData(state)
                                    editDetailsFunction("state", text)
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
                                onChangeText={(text) => {
                                    // var pincode = {
                                    //     ...formData,
                                    //     pincode: text,
                                    // }
                                    // setFormData(pincode)
                                    editDetailsFunction("pincode", text)
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
                                onChangeText={(text) => {
                                    // var country = {
                                    //     ...formData,
                                    //     country: text,
                                    // }
                                    // setFormData(country)
                                    editDetailsFunction("country", text)
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
                            onChangeText={(text) => {
                                editDetailsFunction("phone", text)
                            }}
                        />
                    </View>

                    <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('2%'), fontWeight: 'bold', alignSelf: 'flex-start' }}>Change Password</Text>
                    <View style={{ width: widthToDp('95%'), height: heightToDp('6%'), elevation: 5, backgroundColor: 'white', borderRadius: 10, marginTop: heightToDp('1%'), padding: 20, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='Change Password'
                            style={{ color: 'black', width: widthToDp('90%'), height: heightToDp('6') }}
                            cursorColor={'black'}
                            placeholderTextColor={'black'}
                            // defaultValue= {userDetails?.name}
                            onChangeText={(text) => {
                                // var password = {
                                //     ...formData,
                                //     password: text,
                                // }
                                // setFormData(password)
                                editDetailsFunction("password", text)
                            }}
                        />
                    </View>

                    <TouchableOpacity
                    onPress={() => updateFunctionCall()}
                    style={{backgroundColor:'#054999',height:heightToDp('5%'),width:widthToDp('40%'),marginTop:heightToDp('3%'),borderRadius:20,justifyContent:'center',alignItems:'center'}}
                    >
                        <Text style={{color:'white',fontWeight:'bold',fontSize:widthToDp('5%')}}>Save Changes</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    )
}
export default EditProfileScreen