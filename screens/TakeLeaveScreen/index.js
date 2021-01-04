import React from 'react';
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SendTakeLeave from './SendTakeLeave';
const TakeLeaveScreen = (props) => {
    return (
        <>
            <SendTakeLeave {...props}/>
        </>
    );
}
export default TakeLeaveScreen;