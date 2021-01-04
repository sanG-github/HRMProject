import React from 'react';
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Approved = (props) => {
    const {data, setData} = props;

    const Ele = ({employee}) => {
        let iconStatus;
        let iconColor;
    
        if (employee.status === "Thông qua"){
            iconStatus = "checkbox-marked-circle"
            iconColor = "green"
        }
        if (employee.status === "Không thông qua"){
            iconStatus = "close-circle"
            iconColor = "red"
        }
        if (employee.status === "Đang chờ"){
            iconStatus = "checkbox-blank-circle"
            iconColor = "blue"
        }
     
        const navigation = useNavigation();
        if(employee.status !== "Đang chờ")
        {
            return (
                <TouchableOpacity 
                    style = {styles.eleWrapper} 
                    onPress={() => navigation.navigate('LeavingForm', {employee, data, setData})}
                >
                    <View style = {styles.eleStyle}>               
                        <MaterialCommunityIcons name={iconStatus}
                        size={28} color={iconColor}/>
                        <View style={styles.statusStyle}>
                            <Text style={styles.NameStyle}>{employee.name}</Text>
                            <Text style={styles.TxtStyle}>Trạng thái: {employee.status}</Text>
                        </View>              
                    </View>
                </TouchableOpacity>
            );
        }
        else{
            return(
                <>
                </>
            );
        }
    
    }

    return(
        <FlatList
            data = {data}
            renderItem= {({item})=><Ele employee={item}/>}
            keyExtractor={item => item.email}
        />
    );
}


const styles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
    },
    eleWrapper :{
        padding: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "#d6d4d4",
    },
    eleStyle: {
        paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    statusStyle : {
        flexDirection: "column",
        marginLeft: 10,
    },
    NameStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    TxtStyle: {
        fontSize: 16,
    }
})

export default Approved;