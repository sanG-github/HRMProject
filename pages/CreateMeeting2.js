import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions'
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../src/component/BottomTab'
import HeaderTab from '../src/component/HeaderTab'
import Entypo from 'react-native-vector-icons/Entypo';

const CreateMeeting2 = () => {
    return (
        <>
        <StatusBar barStyle="default"/>
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Entypo name="chevron-left" size={25}/>
                <Text>Tạo cuộc họp</Text>
            </View>
            <ScrollView>
            <View style={styles.formWrapper}>
                <View style={styles.inputWrapper}>
                    <Text>Tên cuộc họp</Text>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
                <View style={styles.datetime}>
                    <View style={{flex: 2,}}>
                        <Text>Ngày</Text>
                        <View style={{flexDirection:"row"}}>
                            <TextInput style={styles.textinput2}></TextInput>
                            <Entypo name="calendar" size={25} />
                        </View>
                        
                    </View>
                    <View style={{flex: 1,}}>
                        <Text>Giờ</Text>
                        <TextInput style={styles.textinput1}></TextInput>
                    </View>
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Phòng</Text>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
        
                <View style={styles.inputWrapper}>
                    <Text>Thành phần tham dự</Text>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Nội dung</Text>
                    <TextInput style={styles.textinput}></TextInput>
                </View>

            </View>
            </ScrollView>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn}>
                        <Text style = {{color: '#FFF', fontSize: 30,}}>Tạo</Text>
                </TouchableOpacity>
            </View>
            
            
            
            
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    btn: {
        alignItems: "center",
        backgroundColor: "#FF375F",
        borderRadius: 5,
        bottom: 0,
        height: 52,
        justifyContent: "center",
        position: 'absolute',
        width: "90%",
        
    },
    btnWrapper: {
        //alignSelf: 'flex-end',
        //justifyContent: "center",
        alignItems: "center",
        flex: 1,
        //position: 'absolute',
        marginBottom: 15,
        
    },
    container: {      
        flex: 1, 
        flexDirection: "column",
    },
    datetime:{
 
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 20,

    },
    formWrapper:{
        marginHorizontal: 20,
    },
    headerWrapper: {
        flexDirection: "row",
        marginTop: 10,
    },
    inputWrapper:{
        marginTop: 20,
    },
    textinput:{
        borderBottomWidth: 2,
        borderColor: "#abaeb3",
        fontSize: 16,
        height: 30,
    },
    textinput1: {
        borderBottomWidth: 2,
        borderColor: "#abaeb3",
        fontSize: 16,
        height: 30,
    },
    textinput2 :{
        borderBottomWidth: 2,
        borderColor: "#abaeb3",
        fontSize: 16,
        height: 30,
        marginRight: 10,
        width: "80%",
    }
});
export default connect(null, actions)(CreateMeeting2);