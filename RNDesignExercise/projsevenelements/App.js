import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const data = [
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title one"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title two"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title three"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title four"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title five"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title six"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title seven"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "title eight"
  }
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList
      horizontal
        data={this.state.data}
        renderItem={({item: rowData}) => {
          return(
              <Card
              style={{height: 200}}
              title={null}
              image={{url: rowData.imageUrl}}
              containerStyle={{padding: 0, width: 160, height: 200, marginTop: 150}}
              >
              <Text style={{marginBottom: 10}}>{rowData.title}</Text>
              </Card>
          );
        }
      }
      KeyExtractor={(item, index) => index}
      />
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
