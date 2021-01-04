import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import firebase from '../../firebase'
import { useEffect } from 'react';
import { useState } from 'react';

const db = firebase.firestore();

const Info = (props) => {
  const name = 'Tên';
  const { isEdit, user, setInfo} = props;
  const { handleSubmit, control } = useForm();
  const [ data, setData ] = useState({});

  const tmpData = {
    "Tên": '',
    "Chức vụ": "",
    "Email": "",
    "Giới tính": "",
    "Ngày sinh": "",
    "Quê quán": "",
    "Điện thoại": "",
  }

  useEffect(() => {
    let isMounted = true;
    const events = db.collection('Profile').doc(user.email);
    events.get().then((snap) => {
			if (isMounted && !shallowEqual(data, snap.data())){
        console.log(JSON.stringify(snap.data()), JSON.stringify(data));
        setData(snap.data());
        console.log('setInfo')
        setInfo(snap.data());
      }
    })
    .catch(err => {
        console.log(err);
    });
    return () => { isMounted = false }; 
  });

  function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  
  const onSubmit = (dataField) => {
    var dataPush = {...data};  // copy data
    Object.keys(dataField).map((item, idx) => {
      if(dataField[item])
        dataPush[item] = dataField[item]
    });
    
    if(!shallowEqual(data, dataPush)){   
      db.collection("Profile").doc(user.email).set(dataPush)
    }
    
    console.log('Save')
  };

  const getField = (data, item, idx, isEdit) => {
    return (
      <View style={styles.item}>
        <Text style={styles.field}>{item}: </Text>
        {
          isEdit && 
          <Controller
            key={idx}
            defaultValue=""
            name={item}
            control={control}
            render={({ onChange, value }) => (
                <TextInput
                  key={idx}
                  style={styles.value}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  placeholder={data[item]}
                />
            )}
          />
        }
        {
          !isEdit && 
          <Text style={{marginRight: 15}}>{data[item]}</Text>
        }
      </View>
    )
  }

  return (
    <View
      style={styles.container} 
      onSubmit={(data) => handleSubmit(data)}>
      <Avatar.Image size={150} style={styles.picture} source={require('../../assets/images/lalisa.jpg')} />   
      <Text style={styles.nameText}>{data[name]}</Text>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
      >
        {
          Object.keys(tmpData).map((item, idx) => { return getField(data, item, idx, isEdit) })
        }
        {isEdit && <Button onPress={handleSubmit(onSubmit)} title="Save" />}
      </ScrollView>
    </View>
  );
}

export default Info;

const white = '#FFF'
const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    height: '100%'
  },
  field: {
    flex: 1
  },
  item: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    marginLeft: 15,
  },
  nameText: {
    alignSelf: 'center',
    fontSize: 25,
    letterSpacing: 3,
    marginTop: 5
  },
  picture: {
    alignSelf: 'center',
    marginTop: 25
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 20
  },
  value: {
    borderBottomWidth: 0.5,
    flex: 3,
    height: 40,
    marginRight: 15,
    alignContent: 'center'
  }
});