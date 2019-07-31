import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import Midsection from './app/components/Midsection';
import Body from './app/components/Body';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Midsection />
        <Body />
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
