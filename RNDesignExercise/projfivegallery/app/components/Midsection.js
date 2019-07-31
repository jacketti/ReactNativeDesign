/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Midsection extends Component {
  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.outview,styles.leftbar]}>
        <Text style={styles.textOne}>75+</Text>
        <Text style={styles.textTwo}>Images</Text>
        </View>
        <View style={styles.outview}>
          <Text style={styles.textOne}>100K +</Text>
          <Text style={styles.textTwo}>Subscribers</Text>
          </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  mid: {
    flexDirection: 'row',
    backgroundColor: '#CF000F',
    borderTopWidth: 10,
    borderTopColor: '#fff',
  },
  outview: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  textOne: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textTwo: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  leftbar: {
    borderRightWidth: 4,
    borderRightColor: '#fff',
  }
});
