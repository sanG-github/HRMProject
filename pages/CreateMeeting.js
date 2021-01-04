import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions'
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../src/component/BottomTab'
import HeaderTab from '../src/component/HeaderTab'
const ButtonCreate = () => {
    return (
    <View style={{flexDirection: "row",justifyContent: "center",marginTop: 20}}>
        <TouchableOpacity style={styles.btn}>
                    <Text style = {{color: '#FFF', fontSize: 30}}>Tạo</Text>
        </TouchableOpacity>
    </View>
    );

}
const CreateMeeting = () => {
    return (
        <>
        <StatusBar barStyle="default"/>
        <SafeAreaView>
        <HeaderTab />
        <View style={styles.container}>


            <View style={styles.topcontainer}>

                <View style={styles.inputContainer}>
                    <Text>Tên cuộc họp</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Phòng</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Ngày</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Giờ</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Thành phần tham dự</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Nội dung</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>             
            </View>
            <ButtonCreate/>
        </View>
        
        </SafeAreaView>
        {/* //<View style={styles.container}>
            
            
        //</View> */}
        </>
    );
}
const styles = StyleSheet.create({
    botcontainer:{
        alignItems: "center",
    },
    btn: {
        alignItems: "center",
        backgroundColor: "#FF375F",
        borderRadius: 5,
        height: 52,
        justifyContent: "center",
        width: "80%",
        
    },
    container: {      
        flex: 1, 
        justifyContent: "space-between"
    },
    inputContainer: {
        justifyContent: "space-between",
        //padding: 40,
        margin: 40,
    },
    textInput: {
        borderColor: "#5F5F5F",
        //borderWidth: 2,
        borderBottomWidth: 1,
        height: 30,
        fontSize: 16,

    },
    topcontainer: {
        
        justifyContent: "space-between",
    }
});
export default connect(null, actions)(CreateMeeting);