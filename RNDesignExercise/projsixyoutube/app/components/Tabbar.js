/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Tabbar extends Component {
  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.containter}>
          <Icon name="home" size={25}/>
          <Text style={styles.myText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containter}>
          <Icon name="whatshot" size={25}/>
          <Text style={styles.myText}>What's hot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containter}>
          <Icon name="subscriptions" size={25}/>
          <Text style={styles.myText}>Subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containter}>
          <Icon name="add-alert" size={25}/>
          <Text style={styles.myText}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containter}>
          <Icon name="folder" size={25}/>
          <Text style={styles.myText}>Account</Text>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 2,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  myText: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 2,
    color: 'rgb(50,50,50)',
  },
  containter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
