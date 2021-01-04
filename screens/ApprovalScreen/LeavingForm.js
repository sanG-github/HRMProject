import React from 'react';
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firebase from '../../firebase'

const db = firebase.firestore();

const LeavingForm = ({ navigation, route }) => {
    const user = route.params.employee;
    const data = route.params.data;
    const setData = route.params.setData;

    function handleApply() {
        const dataPush = data.map(userLetter => {
            if (userLetter.email === user.email){
                user.status = 'Thông qua'
                return user;
            } else {
                return userLetter
            }
        });

        setData(dataPush);
        db.collection('Approval').doc(user.email).set(user);
        navigation.navigate('ApprovalScreen')
    }

    function handleReject() {
        navigation.navigate('ApprovalScreen')
    }

    return (
        <>
        <StatusBar barStyle="default"/>
        <View style={styles.container}>
    
            <View style={styles.formWrapper}>
                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Tên:  {user.name}</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Email:  {user.email}</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Trạng thái:  {user.status}</Text>

                </View>
                
                <View style={styles.dateTime}>
                    <View style={{flex:0.5}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Từ ngày</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.dateInput} > {user.fromDate} </Text>

                        </View>
                        
                    </View>
                    <View style={{flex: 0.5}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Đến ngày</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.dateInput}> {user.toDate} </Text>
 
                        </View>
                    </View>
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Lý do</Text>
                    <Text style={styles.textInput}> {user.reason} </Text>
                </View>
        
                <View style={styles.inputWrapper}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Minh chứng</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textInput1}> {user.evidence} </Text>
                        <Entypo name="camera" style={styles.icons} />
                        <SimpleLineIcons name="paper-clip" style={styles.icons}></SimpleLineIcons>
                    </View>
                </View>
    
    
            </View>
        
            <View style={styles.btnWrapper}>   
                {(() => {
                if (user.status === "Đang chờ"){
                    
                    return (
                        <> 
                            <TouchableOpacity style={styles.btn2} onPress={() => handleApply()}>
                                    <Text style = {styles.btnText}>Thông qua</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} onPress={() => handleReject()}>
                                    <Text style = {styles.btnText}>Không thông qua</Text>
                            </TouchableOpacity>
                        </>
                    );
                }
                
                return null;
                })()}
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
 
        marginTop: 10,
        flexDirection: "row",
        justifyContent:"space-between",

    },
    btn: {
        height: 50,
        width: "86%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        backgroundColor: "#F54A4A",
        bottom: 0,
        position: 'absolute',
        // bottom: 10,
        elevation: 5
        
    },
    btn2: {
        height: 50,
        width: "86%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        backgroundColor: "#2ACB31",
        marginBottom: 3,
        bottom: 60,
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



export default LeavingForm;