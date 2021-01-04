import React from 'react';
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Schedule from './Schedule'
import firebase from '../../firebase'

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="default"/>
            <View style={styles.container}>

                <View style={styles.btnWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                            firebase
                                .auth()
                                .signOut()
                        }}
                    >
                        <MaterialIcons name="add-circle-outline" size={30}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:16, marginRight: 10, fontWeight: 'bold'}}>Thêm cuộc họp</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CreateMeeting')}
                    >
                        <MaterialIcons name="add-circle-outline" size={30}/>
                    </TouchableOpacity>
                </View>

                <Schedule />
            </View> 
        </>
    );
}
const styles = StyleSheet.create({
    btnWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    cal: {
        //height: 52,
        padding: 10,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#F3F4F9",
    },
    container: {      
        flex: 1, 
        //flexDirection: "column",
    },
    ele: {
        //height: 52,
        padding: 10,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#FFFAEB",
        
    },
    eleWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,    
    },
});
export default HomeScreen;