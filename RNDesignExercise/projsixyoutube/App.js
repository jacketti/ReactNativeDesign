import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NavigationBar from './app/components/NavigationBar';
import Tabbar from './app/components/Tabbar';
import Body from './app/components/Body';


import data from './app/search.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        <ScrollView>
        <Body video={data.items[0]} />
        <Body video={data.items[1]} />
        <Body video={data.items[2]} />
        <Body video={data.items[3]} />
        <Body video={data.items[4]} />
        </ScrollView>
        <Tabbar />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#fff',
     // alignItems: 'center',
      justifyContent: 'center',
  },
});
