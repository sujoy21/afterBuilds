/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Colors from '../components/Colors';
import { heightToDp, widthToDp } from '../components/Responsive';
import { useSelector, useDispatch } from 'react-redux'
import { axiosGetCall } from '../api/apiAxios/apiAxios';
import { baseUrl } from '../api/baseUrl/baseUrl';
import { getApartment } from '../api/apiEndpoints/apiEndpoints';
import { setApartment } from '../store/getApartmentSlice';

const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const accessToken = useSelector((state) => state.login.accessToken)
    const apartmentList = useSelector((state) => state.apartment.apartmentData)
    console.log(apartmentList)
    useEffect(() => {
        setTimeout(() => {
            if (accessToken == "") {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'RoleSelectionScreen' }],
                })
            }else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomePageScreen' }],
                })
            }

            // navigation.navigate('RoleSelectionScreen')
        }, 2000)
    }, [])

    useEffect(() => {
        getApartmentsApiFunction()
    },[])

    const getApartmentsApiFunction = async() => {
        let response = await axiosGetCall(`${baseUrl}${getApartment}`,accessToken)
        if(response.success){
            dispatch(setApartment(response.apartment))
        }
    }
    return (
        <View style={{ backgroundColor: Colors.splashBlue, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../images/appLogo.png')}
                style={{}}
            />
            <Text style={{ color: 'white', fontSize: widthToDp('6%'), fontWeight: 'bold', marginTop: heightToDp('3%') }}>AFTER BUILD</Text>
        </View>
    )
}

export default SplashScreen;