/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NavigationBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
          style={styles.logo}
          source={require('../img/youtube.png')} />
          <View style={styles.moveright}>
          <TouchableOpacity>
            <Icon name="search" size={27} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name="account-circle" size={27} style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  navbar: {
    marginTop: 35,
    height: 55,
    backgroundColor: '#fff',
    elevation: 3,

    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 120,
    height: 23,
    },
  moveright: {
    flexDirection: 'row',
    },
  icons: {
    padding: 5,
    marginLeft: 15,
    },
});
