import React, {useState, useEffect, Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import firebase from '../../firebase'
const db = firebase.firestore();

class Schedule extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: {},
      data: {},
      choosingDate: '2021-01-01'
    }
    this.getMarkers();
  }

  getMarkers = () => {
    const events = db.collection('Meeting').doc('Schedule');
    events.onSnapshot((snap) => {
      this.setState({...this.state, data: snap.data()});
      this.loadItems(snap.data());
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }

  loadItems = (data = this.state.data) => {
    try{
      const items = this.state.items;
      // console.log('~~~~~~~~~~~~~~~~~~~~~', data)
      if(JSON.stringify(data) !== JSON.stringify(items)){
        Object.keys(data).forEach(date => {
          for(let i = 0; i < data[date].length; i++){
            data[date][i] = {name: data[date][i]}
          }
        });
        this.setState({...this.state, items: data})
      }
    } catch(err) {
      // console.log(err);
    }
  };

  renderItem = (item) => {
    try {
      return (
        <TouchableOpacity style={{marginRight: 10, marginTop: 17 }}>
          <Card>
            <Card.Content>
              <View
                style={styles.CardContent}>
                <Text>{item.name}</Text>
                <Avatar.Text label="S" />
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      );
    } catch(err) {
      // console.log(err);
    }
  };

  render(){
    return (
      <View style={{flex: 1}}>
        { this.state.items &&
          <Agenda
            items={this.state.items}
            loadItemsForMonth={() => this.loadItems()}
            selected={this.state.choosingDate}
            renderItem={(item) => this.renderItem(item)}
            onDayPress={(day) => {
              this.setState({...this.state, choosingDate: day.dateString});
            }}
          />
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  CardContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})

export default Schedule;