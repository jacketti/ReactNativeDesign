/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import MyForm from './MyForm'

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={require('./images/lcologo.png')}
          />
          <Text style={styles.title}>A simple login App</Text>
          </View>
            <View style={styles.myform}>
              <MyForm />
            </View>
          </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c7a89',
    width: Dimensions.get('window').width,
  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  myform: {
    flex: 1,
  },
  title: {
    color: '#fff',
    marginTop: 10,
  },
});
