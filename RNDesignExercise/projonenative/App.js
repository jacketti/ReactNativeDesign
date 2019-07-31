import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Superman from './components/Superman'
import Red from './components/Red'
import Blue from './components/Blue'
import Green from './components/Green'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Red />
        <Blue />
        <Green />
        <Superman />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

});
