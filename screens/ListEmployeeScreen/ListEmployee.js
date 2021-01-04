import React from 'react';
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Font from 'expo-font';

const ListEmployee = () => {
    return (
        <View style = {styles.pageWrapper}>
            <View style = {styles.eleWrapper}>
                <View style = {styles.eleStyle}>
                    <MaterialCommunityIcons name="account" size={28}/>
                    <View style={styles.statusStyle}>
                        <Text style={styles.NameStyle}>Lalisa</Text>
                        <Text style={styles.TxtStyle}>ID: 12345</Text>
                    </View>
                </View>
            </View>
        </View>
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
export default ListEmployee;