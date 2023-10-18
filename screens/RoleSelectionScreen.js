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
    useColorScheme,
    View,
} from 'react-native';
import Colors from '../components/Colors';
import { heightToDp, widthToDp } from '../components/Responsive';
import Button from '../components/Button';

const RoleSelectionScreen = ({navigation}) => {
    const builderButtonPressFunction = () => {
        navigation.navigate('UserSelectionScreen')
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', padding: 10 }}>
            <View style={{marginTop : heightToDp('15%')}}>
                <Image
                    source={require('../images/appLogo.png')}
                    style={{}}
                />
            </View>
            <Text style={{ color: 'black', fontSize: widthToDp('6%'), marginTop: heightToDp('3%') }}>AFTER BUILD</Text>
            {/* <View style={{ marginTop: heightToDp('5%') }}>
                <Button height={'7%'} width={'90%'} text={"Builder"} image={require('../images/builderLogo.png')} />
            </View> */}
            <View style={{ marginTop: heightToDp('5%') }}>
                <Button height={'7%'} width={'90%'} text={"User"} image={require('../images/userLogo.png')} onPress={builderButtonPressFunction} />
            </View>
        </View>
    )
}

export default RoleSelectionScreen;