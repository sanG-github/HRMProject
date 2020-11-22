import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import {connect} from 'react-redux';
import * as actions from '../redux/actions'

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle = "dark-content"
        hidden = {true}/>
      <ImageBackground 
        resizeMode='cover' 
        style={styles.image}
        source={require('../assets/background_gradient.jpg')}>
        <Text style={styles.logo}>HRM</Text>
      </ImageBackground>
    </View>
  );
}

const white = '#FFF'
const black = '#000'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  image: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  logo: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 8,
    color: white,
    fontSize: 90,
    paddingLeft: 25,
    paddingRight: 25,
    textShadowColor: black,
    textShadowOffset: {width: 7, height: 7},
    textShadowRadius: 20
  }
});

export default connect(null, actions)(LandingPage);