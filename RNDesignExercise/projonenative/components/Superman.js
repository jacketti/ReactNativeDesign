/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Superman extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>I am Superman</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
