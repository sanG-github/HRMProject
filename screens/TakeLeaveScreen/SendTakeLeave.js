import React, {useState} from 'react';
import {SafeAreaView,Button,StyleSheet, Text, View, TouchableOpacity, StatusBar,  TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firebase from '../../firebase'

const db = firebase.firestore();

// // Object
// user: {
//     name:        String
//     fromDate:    String
//     toDate:      String
//     reason:      String  
//     evidence:    String
// }

const SendTakeLeave = (props) => {
    const name = "Tên";
    const {user, info} = props;
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [reason, setReason] = useState('');
    const [evidence, setEvidence] = useState('');

    const handleSendLeave = () => {
        const dataPush = {
            "name": info[name],
            fromDate,
            toDate,
            reason,
            evidence,
            "status": "Đang chờ",
            "email": user.email
        }
        
        if(dataPush)
            db.collection("Approval").doc(user.email).set(dataPush)
    }

    return (
        <>
        <StatusBar barStyle="default"/>
        <View style={styles.container}>
    
            <View style={styles.formWrapper}>
                
                <View style={styles.dateTime}>
                    <View style={{flex:0.5}}>
                        <Text>Từ ngày</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput 
                                style={styles.dateInput}
                                onChangeText={(text) => setFromDate(text)}
                            />
                            <Entypo name="calendar" style={styles.icons}/>
                        </View>
                        
                    </View>
                    <View style={{flex: 0.5} }>
                        <Text>Đến ngày</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput 
                                style={styles.dateInput}
                                onChangeText={(text) => setToDate(text)}
                            />                        
                            <Entypo name="calendar"style={styles.icons}/>
                        </View>
                    </View>
                </View>

                <View style={styles.inputWrapper}>
                    <Text>Lý do</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(text) => setReason(text)}
                    />
                </View>
        
                <View style={styles.inputWrapper}>
                    <Text>Minh chứng</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput 
                            style={styles.textInput1}
                            onChangeText={(text) => setEvidence(text)}
                        />
                        <Entypo name="camera" style={styles.icons} />
                        <SimpleLineIcons name="paper-clip" style={styles.icons}></SimpleLineIcons>
                    </View>
                </View>

            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={() => handleSendLeave()}>
                        <Text style = {styles.btnText}>Gửi</Text>
                </TouchableOpacity>
            </View>

        </View>
        </>
    );

    
}
const styles = StyleSheet.create({
    container: {      
        flex: 1, 
        //flexDirection: "column",
    },
    formWrapper:{
        marginHorizontal: 20,
    },
    inputWrapper:{
        marginTop: 24,
    },
    icons:{
        marginLeft: 7,
        marginRight: 7,
        fontSize: 22,
    },

    dateInput: {
        borderColor: "#abaeb3",
        borderBottomWidth: 2,
        height: 30,
        fontSize: 16,
        width:"80%",
    },
    textInput:{
        borderColor: "#abaeb3",
        borderBottomWidth: 2,
        height: 30,
        width:"97%",
        fontSize: 16,
    },
    textInput1 :{
        borderColor: "#abaeb3",
        borderBottomWidth: 2,
        height: 30,
        fontSize: 16,
        width: "80%",
        marginRight: 10,
    },
    dateTime:{
 
        marginTop: 20,
        flexDirection: "row",
        justifyContent:"space-between",

    },
    btn: {
        height: 50,
        width: "86%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        backgroundColor: "#FF375F",
        bottom: 7,
        position: 'absolute',
        // bottom: 10,
        elevation: 5
        
    },
    btnWrapper: {
        alignItems: "center",
        flex: 1,
        marginBottom: 15,
        
    },
    headerWrapper: {
        flexDirection: "row",
        marginTop: 10,
    },
    btnText:{
        color: '#FFF', 
        fontSize: 21,
        fontWeight: 'bold',
        color:'white'
    },
});
export default SendTakeLeave;