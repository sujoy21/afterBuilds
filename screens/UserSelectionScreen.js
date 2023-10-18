/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
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
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import Colors from '../components/Colors';
import { heightToDp, widthToDp } from '../components/Responsive';
import Button from '../components/Button';

const UserSelectionScreen = ({ navigation }) => {

    const navigateToSignUpFunction = () => {
        navigation.navigate('SignUpScreen')
    }

    const navigateToLoginFunction = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', padding: 10 }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ position: 'absolute', left: 10, top: 20 }}
            >
                <Image
                    source={require('../images/leftArrow.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <View style={{marginTop : heightToDp('15%')}}>
                <Image
                    source={require('../images/appLogo.png')}
                    style={{}}
                />
            </View>
            <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('3%') }}>AFTER BUILD</Text>
            <View style={{ marginTop: heightToDp('5%') }}>
                <Button height={'6%'} width={'90%'} text={"Sign Up"} color ={'white'} txtColor ={'black'} onPress={navigateToSignUpFunction}/>
            </View>
            <View style={{ marginTop: heightToDp('5%') }}>
                <Button height={'6%'} width={'90%'} text={"Login"} onPress={navigateToLoginFunction}/>
            </View>
        </View>
    )
}

export default UserSelectionScreen;