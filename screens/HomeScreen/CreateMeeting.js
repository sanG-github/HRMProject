import React from 'react';
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useForm, Controller } from 'react-hook-form';
import firebase from '../../firebase'
import { useState } from 'react';
import { useEffect } from 'react';

const db = firebase.firestore();
const events = db.collection('Meeting').doc('Schedule');

const CreateMeeting = () => {
    const { handleSubmit, control, errors } = useForm();
    const [ dataStore, setDataStore ] = useState({});

    useEffect(() => {
        let isMounted = true;
        events.get().then((snap) => {
            if (isMounted)
                setDataStore(snap.data());
        })
        .catch(err => {
            console.log(err);
        });
        return () => { isMounted = false }; 
    });

    function setData(data) {
        return events.set(data);
    }
    
    function onSubmit (data) {
        try {
            const newDate = data.date.replaceAll('/', '-');
            const dataPush = dataStore;
            var isSet = false;

            Object.keys(dataPush).forEach(date => {
                if (date === newDate){
                    dataPush[newDate].push(data.name)
                    isSet = true;
                }
            });
            
            if(!isSet){
                dataPush[newDate] = [ data.name ];
            }

            // Push data
            setData(dataPush);
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <>
        <StatusBar barStyle="default"/>
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.formWrapper}>
                <View style={styles.inputWrapper}>
                    <Text>Tên cuộc họp</Text>
                    <Controller
                        defaultValue=""
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ onChange, value }) => (
                            <TextInput
                            style={styles.textinput}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            placeholder=""
                            />
                        )}
                    />
                    {errors.name && <Text style={{color: 'red'}}>This is required.</Text>}
                </View>
                <View style={styles.datetime}>
                    <View style={{flex: 4,}}>
                        <Text>Ngày</Text>
                        <View style={{flexDirection:"row"}}>
                            <Controller
                                defaultValue=""
                                name="date"
                                control={control}
                                render={({ onChange, value }) => (
                                    <TextInput
                                    style={styles.textinput2}
                                    onChangeText={(text) => onChange(text)}
                                    value={value}
                                    placeholder="DD/MM/YYYY"
                                    />
                                )}
                            />
                            <Entypo name="calendar" size={25} />
                        </View>
                    </View>
                    <View style={{flex: 2}}>
                        <Text>Giờ</Text>
                        <View style={styles.input1}>
                            <Controller
                                defaultValue=""
                                name="hours"
                                control={control}
                                render={({ onChange, value }) => (
                                    <TextInput
                                        style={styles.textinput1}
                                        textAlign="center"
                                        maxLength={2}
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                        placeholder=""
                                    />
                                )}
                            />
                            <Text style={{fontWeight: 'bold', flex: 0.4, textAlign: 'center'}}>:</Text>
                            <Controller
                                defaultValue=""
                                name="minutes"
                                control={control}
                                render={({ onChange, value }) => (
                                    <TextInput
                                        style={styles.textinput1}
                                        textAlign="center"
                                        maxLength={2}
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                        placeholder=""
                                    />
                                )}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Phòng</Text>
                    <Controller
                        defaultValue=""
                        name="room"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextInput
                            style={styles.textinput}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            placeholder=""
                            />
                        )}
                    />
                </View>
        
                <View style={styles.inputWrapper}>
                    <Text>Thành phần tham dự</Text>
                    <Controller
                        defaultValue=""
                        name="participants"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextInput
                            style={styles.textinput}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            placeholder=""
                            />
                        )}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Nội dung</Text>
                    <Controller
                        defaultValue=""
                        name="content"
                        control={control}
                        render={({ onChange, value }) => (
                            <TextInput
                            style={styles.textinput}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            placeholder=""
                            />
                        )}
                    />
                </View>

            </View>
            </ScrollView>
            <View style={styles.btnWrapper}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={handleSubmit(onSubmit)}
                    >
                        <Text style = {{color: '#FFF', fontSize: 26, fontWeight: 'bold'}}>Tạo cuộc họp</Text>
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
        //bottom: 0,
        marginBottom: 15,
        
    },
    container: {      
        flex: 1, 
        //flexDirection: "column",
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
    input1: {
        alignItems: 'center',
        flexDirection: 'row'
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
        flex: 0.8,
        fontSize: 16,
        height: 30
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
export default CreateMeeting;