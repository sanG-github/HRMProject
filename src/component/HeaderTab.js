import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const menus = ['home', 'filetext1', 'wallet', 'user']
const HeaderTab = () => {
  return (
      <View style={styles.headerTab}>
          <Text style={styles.headText}>Tra Cứu Lương</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    headerTab: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,     
    },
    headText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default HeaderTab;
