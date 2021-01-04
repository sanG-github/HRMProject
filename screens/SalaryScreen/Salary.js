import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions'
import {Picker ,Button,StyleSheet, Text, View, TouchableOpacity, StatusBar,  TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../../src/component/BottomTab'
import HeaderTab from '../../src/component/HeaderTab'
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native-gesture-handler';

export default class Salary extends Component{
  constructor(props){
    super(props);
    this.state = {selectedLabel:''}
    this.month = 1
    this.year = 2019
  }
  
  showMonth = (value)=>{
    // alert(value)
    this.month = value.split('month')[1]
    this.setState({selectedLabelMonth:value})
    
  }
  showYear = (value)=>{
    // alert(value)
    this.year = value.split('year')[1]
    this.setState({selectedLabelYear:value})
    
  }
  
  render(){
    return (
      <>
      <StatusBar barStyle="default"/>
      <View style={styles.container}>
  
          <View style={styles.formWrapper}>
              
              <View style={styles.dateTime}>
                  <View style={{flex:0.5, marginLeft:7}}>
                      <Text>Tháng</Text>
                      <View style={{flexDirection: 'row' ,width: '90%', borderBottomWidth: 2}}>
                          
                          <Picker 
                            useNativeAndroidPickerStyle={false}
                            style={styles.dateInput} 
                            selectedValue={this.state.selectedLabelMonth}
                            onValueChange={this.showMonth.bind()}
                            >
                              
                              
                              <Picker.Item label = "1" value='month1'></Picker.Item>
                              <Picker.Item label = "2" value='month2'></Picker.Item>
                              <Picker.Item label = "3" value='month3'></Picker.Item>
                              <Picker.Item label = "4" value='month4'></Picker.Item>
                              <Picker.Item label = "5" value='month5'></Picker.Item>
                              <Picker.Item label = "6" value='month6'></Picker.Item>
                              <Picker.Item label = "7" value='month7'></Picker.Item>
                              <Picker.Item label = "8" value='month8'></Picker.Item>
                              <Picker.Item label = "9" value='month9'></Picker.Item>
                              <Picker.Item label = "10" value='month10'></Picker.Item>
                              <Picker.Item label = "11" value='month11'></Picker.Item>
                              <Picker.Item label = "12" value='month12'></Picker.Item>
                          </Picker>

                      </View>
                      
                  </View>
                  <View style={{flex: 0.5, marginLeft:7} }>
                      <Text>Năm</Text>
                      <View style={{flexDirection: 'row', width: '90%', borderBottomWidth: 2}}>
                      <Picker 
                            useNativeAndroidPickerStyle={false}
                            style={styles.dateInput} 
                            selectedValue={this.state.selectedLabelYear}
                            onValueChange={this.showYear.bind()}
                            
                            >
                          
                              <Picker.Item label = "2019" value='year2019'></Picker.Item>
                              <Picker.Item label = "2020" value='year2020'></Picker.Item>
                              <Picker.Item label = "2021" value='year2021'></Picker.Item>
                          </Picker>

                      </View>
                  </View>
              </View>

              <View style={styles.btnWrapper}>
                  <TouchableOpacity style={styles.btn} 
                    onPress={() => {
                      alert(this.month + '/' + this.year)
                    }}>
                          <Text style = {styles.btnText}>Hiển thị</Text>
                          
                  </TouchableOpacity>
              </View>
  
  
          </View>
         
          
          <ScrollView style={styles.bottomContainer}>

                <View style={styles.infoContain}>
                  <Text style={styles.title}>PHIẾU LƯƠNG</Text>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key}>Tháng:</Text>
                    <Text style={styles.content}> {this.month} / {this.year}</Text>
                  </View>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key}>Mã:</Text>
                    <Text style={styles.content}>#0001</Text>
                  </View>
                  
                  <Text style={styles.nameEmploy}>La Li Sa</Text>
                  <View style={styles.itemsContain}>
                    
                    <Text style={styles.key}>ID:</Text>
                    <Text style={styles.content}>1813175</Text>
                    
                  </View>

                  <View style={styles.itemsContain}>
                    <Text style={styles.key}>Chức vụ:</Text>
                    <Text style={styles.content}>Trưởng phòng thiết kế</Text>
                    
                  </View>
                  
                </View>
          
                
                <View style={styles.subContain1}>
                <Text style={styles.title2}>Các khoản thu nhập</Text>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key2}>Mức lương cơ bản</Text>
                    <Text style={styles.content2}>20,000,000</Text>
                  </View>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key2}>Phụ cấp trách nhiệm</Text>
                    <Text style={styles.content2}>5,000,000</Text>
                  </View>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key2}>Phụ cấp nhà ở </Text>
                    <Text style={styles.content2}>5,000,000</Text>
                  </View>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key2}>Phụ cấp công việc</Text>
                    <Text style={styles.content2}>1,000,000</Text>
                  </View>
                </View>

                <View style={styles.subContain1}>
                <Text style={styles.title2}>Các khoản giảm trừ</Text>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key2}>Bảo hiểm</Text>
                    <Text style={styles.content2}>500,000</Text>
                  </View>
                  <View style={styles.itemsContain}>
                    <Text style={styles.key2}>Phí công đoàn</Text>
                    <Text style={styles.content2}>500,000</Text>
                  </View>
 
                </View>
                
                <Text style={styles.txtTotal}> Tổng cộng</Text>
                <View style={styles.subContain2}>
                 <View style={styles.totalContain}>
                    <Text style={styles.keyTotal}>Tổng số tiền lương thực nhận:</Text>
                    <Text style={styles.contentTotal}>30,000,000 VNĐ</Text>
                  </View>
                  <View style={styles.lastItem}>
                    <Text style={styles.keyLast}>Bằng chữ</Text>
                    <Text style={styles.contentLast}>Ba mươi triệu đồng</Text>
                  </View>
                </View>
                
          </ScrollView>          
      </View>
      </>
  
    )
  }
}

const styles = StyleSheet.create({
  container: {      
      flex: 1, 
      //flexDirection: "column",
  },
  formWrapper:{
      marginHorizontal: 20,
      height: '22%',
      // backgroundColor: 'red'

  },

  dateInput: {
    borderColor: "#abaeb3",
                            
    height: 30,
    fontSize: 16,
    width:"100%",
    marginLeft: 10,
      
  },

  dateTime:{

      marginTop: 20,
      flexDirection: "row",
      justifyContent:"space-between",

  },
  btn: {
      height: 38,
      width: "86%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
      backgroundColor: "#FF375F",
      bottom: 7,
      position: 'absolute',
      
  },
  btnWrapper: {
      alignItems: "center",
      flex: 1,
      marginBottom: 2,
      
  },

  btnText:{
      color: '#FFF', 
      fontSize: 19,
      fontWeight: 'bold',
      color:'white'
  },
  
  bottomContainer:{
    height: '78%',
    // backgroundColor:'blue',
    // display: 'none'
  },
  infoContain:{
    marginTop: 2,
    paddingLeft: 25,
    height: '26%',
    // backgroundColor: 'blue'
  },

  title:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemsContain:{
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 1
  },
  key:{
    width: '20%',
    fontWeight: 'bold',
    fontSize: 15
  },
  content:{
    width: '80%'
  },
  nameEmploy:{
    paddingLeft: 40,
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 16
  },
  subContain1:{
    marginTop: 10,
    marginBottom: 1,
    paddingLeft: 25,
    paddingTop: 2,
    paddingBottom: 2,
    // backgroundColor: 'blue'
  },
  key2:{
    paddingTop: 2,
    width: '50%',
    fontSize: 15
  },
  content2:{
    paddingTop: 2,
    width: '50%',
    textAlign: 'right',
    paddingRight: 40,
    fontSize: 15
  },
  title2:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    width: '89%'
  },

  subContain2:{
    marginTop: 8,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    height: '18%',
    width: '83%',
    marginLeft: 35,
    // backgroundColor: 'red'

  },
  totalContain:{
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 2

  },
  keyTotal:{
    fontWeight:'bold',
    fontSize: 18,
    width: '50%'

  },
  contentTotal:{
    fontWeight:'bold',
    fontSize: 18,
    width: '50%',
    textAlign: 'right'
  },
  lastItem:{
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 2
  },

  keyLast:{
    // fontWeight:'bold',
    fontSize: 18,
    width: '50%'
  },
  contentLast:{
    fontSize: 18,
    width: '50%',
    textAlign:'right'
  },
  txtTotal:{
    fontSize: 16, 
    textAlign:'right', 
    paddingRight: 40,
    marginTop: 5,
    fontWeight: 'bold'
  }
});