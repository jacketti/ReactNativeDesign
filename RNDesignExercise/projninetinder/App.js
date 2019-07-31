import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// At the top of your file
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import HeaderCustom from './components/HeaderCustom';
import SwipeCard from './components/SwipeCard';

export default class App extends React.Component {

  async componentWillMount() {
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
}


  render() {
    return (
      <View style={styles.container}>
      <HeaderCustom />
      <SwipeCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },
});
