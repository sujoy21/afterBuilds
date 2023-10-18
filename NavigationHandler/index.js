/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import UserSelectionScreen from '../screens/UserSelectionScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpPhoneNumberScreen from '../screens/OtpPhoneNumberScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import HomePageScreen from '../screens/HomePageScreen';
import HamburgerScreen from '../screens/HamburgerScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceElementScreen from '../screens/ServiceElementsScreen';
import ServiceElementLinkScreen from '../screens/ServiceElementLinkScreen';
import ServiceElementDescriptionScreen from '../screens/ServiceElementDescriptionScreen';
import AddApplicancesScreen from '../screens/AddApplicancesScreen';
import CancelOrderScreen from '../screens/CancelOrderScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="RoleSelectionScreen" component={RoleSelectionScreen} />
                <Stack.Screen name="UserSelectionScreen" component={UserSelectionScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="OtpPhoneNumberScreen" component={OtpPhoneNumberScreen} />
                <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
                <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
                <Stack.Screen name="HamburgerScreen" component={HamburgerScreen} />
                <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
                <Stack.Screen name="ServiceElementScreen" component={ServiceElementScreen} />
                <Stack.Screen name="ServiceElementLinkScreen" component={ServiceElementLinkScreen} />
                <Stack.Screen name="ServiceElementDescriptionScreen" component={ServiceElementDescriptionScreen} />
                <Stack.Screen name="AddApplicancesScreen" component={AddApplicancesScreen} />
                <Stack.Screen name="CancelOrderScreen" component={CancelOrderScreen} />
                <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationHandler;