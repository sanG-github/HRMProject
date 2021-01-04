import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions'
import {SafeAreaView ,StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../src/component/BottomTab'
import HeaderTab from '../src/component/HeaderTab'


const Salary = () => {
  return (
        <>
            <StatusBar barStyle="default"/>
            <SafeAreaView>
            <HeaderTab />
              <ScrollView style={styles.scrollView} />
              <BottomTab />
            </SafeAreaView>
            {/* //<View style={styles.container}>
                
                
            //</View> */}
        </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    scrollView: {
        flex: 1,
    }
});
export default connect(null, actions)(Salary);
