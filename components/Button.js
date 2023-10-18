/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Colors from './Colors';
import { heightToDp, widthToDp } from './Responsive';

const Button = (props) => {
    const { height, width, text, image, onPress, color, txtColor, loader } = props
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            {
                loader ? <View style={{ backgroundColor: color ? color : Colors.splashBlue, height: heightToDp(height), width: widthToDp(width), borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5 }} >
                    <ActivityIndicator size="large" color="#ffff" />
                </View> : <View style={{ backgroundColor: color ? color : Colors.splashBlue, height: heightToDp(height), width: widthToDp(width), borderRadius: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', elevation: 5 }}>
                    <Text style={{ color: txtColor ? txtColor : 'white', fontSize: widthToDp('5%') }}>{text}</Text>
                    {
                        image ? <Image
                            source={image}
                            style={{ position: 'absolute', right: 20, height: heightToDp('4%'), width: widthToDp('10%') }}
                            resizeMode='contain'
                        /> : null
                    }
                </View>
            }

        </TouchableOpacity>
    )
}

export default Button;