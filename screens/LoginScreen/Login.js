import React from 'react';
import { useState, useEffect } from 'react';
import {Text, Alert, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  return (
    <View style={styles.container}>
        <View style={styles.containTitle}>
          <Text style={styles.title}>Đăng nhập</Text>
          </View>
        <View style={styles.containInput}>
        
        <View style={styles.subContain}>
          <Text style={styles.keyword}>Tên đăng nhập</Text>
          <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder={'Tên đăng nhập'}
            style={styles.input}
          />
          <Text style={styles.errorText}> {emailError} </Text>
        </View>

        <View style={styles.subContain}>
          <Text style={styles.keyword}>Mật khẩu</Text>
          <TextInput
            value={password}
            onChangeText={(pass) => setPassword(pass)}
            placeholder={'Mật khẩu'}
            secureTextEntry={true}
            style={styles.input}
          />
          <Text style={styles.errorText}> {passwordError} </Text>
        </View>
        {
          hasAccount ? (
          <View>
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text onPress={() => setHasAccount(!hasAccount)}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          ) : (          
          <View>
            <Text>Have an account? </Text>
            <TouchableOpacity>
              <Text onPress={() => setHasAccount(!hasAccount)}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
          )
        }
      </View> 
        {
          hasAccount ? (
            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.btn} 
                onPress={() => handleLogin()}
              >
                <Text style = {styles.btnText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.btn} 
                onPress={() => handleSignup()}
              >
                <Text style = {styles.btnText}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          )
        }
    </View>
  
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  
  },
  containTitle:{
    // width: '100%',
    height:'15%',
    // backgroundColor: 'blue'
    elevation: 5

  },
  errorText: {
    color: 'red',
    fontSize: 11
  }, 
  title:{
    fontSize: 40,
    // fontWeight: 500,
    fontWeight: 'normal',
    marginLeft: 40,
    marginTop: 60
  },

  containInput:{
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: '18%',
    width: '100%',
    height: '70%',
    // backgroundColor: 'red'

  },
  subContain:{
    paddingLeft: '7%',
    width : '100%',
    marginBottom: 20,
    elevation: 5,
    // backgroundColor: 'red'
  },
  keyword:{
    fontSize: 19,
    marginBottom: 7,
    fontWeight: 'bold'
  },
  input: {
    width: '92%',
    height: 60,
    padding: 15,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 2,
    elevation: 3
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 30, //Here is the trick
},
  btnText:{
    color: '#FFF', 
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
},
});
