import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const menus = ['home', 'filetext1', 'wallet', 'user']
const BottomTab = () => {
  return (
      <View style={styles.bottoms}>
          {menus.map(e => {
              return(
                <TouchableOpacity key={e}>
                <AntDesign name={e} size={30}/>
                </TouchableOpacity>
              );      
          })}
      </View>
  );
}

const styles = StyleSheet.create({
    bottoms: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 15,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        shadowColor: "#000",
        paddingBottom: 20,


    }
});

export default BottomTab;
