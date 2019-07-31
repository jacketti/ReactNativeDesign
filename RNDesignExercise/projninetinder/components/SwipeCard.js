/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


const cards = [
  {
    text: 'Card one',
    name: 'One',
    image: require('./img/img1.jpeg'),
  },
  {
    text: 'Card two',
    name: 'Two',
    image: require('./img/img2.jpeg'),
  },
  {
    text: 'Card three',
    name: 'Three',
    image: require('./img/img3.jpeg'),
  },
  {
    text: 'Card four',
    name: 'Four',
    image: require('./img/img4.jpeg'),
  },

];

export default class SwipeCard extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Robert Clicked</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
