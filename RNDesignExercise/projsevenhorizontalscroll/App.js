import React from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

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
  // Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }


  render() {
  return (
    <FlatList
      horizontal
        data={this.state.data}
        renderItem={({item: rowData}) => {
        return (
            <Container>
               <Header />
               <Content>
                 <Card>
                   <CardItem>
                     <Left>
                       <Thumbnail source={{uri: rowData.imageUrl}} />
                       <Body>
                         <Text>{rowData.title}</Text>
                         <Text note>GeekyAnts</Text>
                       </Body>
                     </Left>
                   </CardItem>
                   <CardItem cardBody>
                     <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                   </CardItem>
                   <CardItem>
                     <Left>
                       <Button transparent>
                         <Icon active name="thumbs-up" />
                         <Text>12 Likes</Text>
                       </Button>
                     </Left>
                     <Body>
                       <Button transparent>
                         <Icon active name="chatbubbles" />
                         <Text>4 Comments</Text>
                       </Button>
                     </Body>
                     <Right>
                       <Text>11h ago</Text>
                     </Right>
                   </CardItem>
                 </Card>
               </Content>
             </Container>
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
