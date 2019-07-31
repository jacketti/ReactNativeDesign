import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {
  Drawer,
  Title,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right }
  from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import  CardImage  from './Components/CardImage';
import  FooterBadge from './Components/FooterBadge';
import  Sidebar from './Components/Sidebar';


export default class App extends React.Component {

async componentDidMount() {
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
}

closeDrawer()  {
   this.drawer._root.close()
 }
 openDrawer() {
   this.drawer._root.open()
 }

  render() {
  return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={()=> this.openDrawer()}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Side bar Drawer</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='camera' />
                </Button>
              </Right>
            </Header>
            <FlatList
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
            renderItem={({item}) => <CardImage />}
            />

          </Container>
            <FooterBadge />
        </Drawer>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
