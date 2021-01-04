import React from 'react';
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Login from './Login';
const LoginScreen = ({navigation}) => {
    return (
        <>
        <Login navigation={navigation}/>
        </>
    );
}
const styles = StyleSheet.create({

});
export default LoginScreen;