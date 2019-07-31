/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.bigView}>
          <View style={styles.smallView}>
            <Image
            style={styles.myImage}
            source={require('../img/img1.jpeg')} />
            </View>
            <View style={styles.smallView}>
            <Image
            style={styles.myImage}
            source={require('../img/img2.jpeg')} />
            </View>
            <View style={styles.smallView}>
            <Image
            style={styles.myImage}
            source={require('../img/img3.jpeg')} />
            </View>
            <View style={styles.smallView}>
            <Image
            style={styles.myImage}
            source={require('../img/img4.jpeg')} />
            </View>
            <View style={styles.smallView}>
            <Image
            style={styles.myImage}
            source={require('../img/img5.jpeg')} />
            </View>
            <View style={styles.smallView}>
            <Image
            style={styles.myImage}
            source={require('../img/img6.jpeg')} />
            </View>
            <View style={styles.smallView}>
              <Image
              style={styles.myImage}
              source={require('../img/img1.jpeg')} />
              </View>
              <View style={styles.smallView}>
              <Image
              style={styles.myImage}
              source={require('../img/img2.jpeg')} />
              </View>
              <View style={styles.smallView}>
              <Image
              style={styles.myImage}
              source={require('../img/img3.jpeg')} />
              </View>
              <View style={styles.smallView}>
              <Image
              style={styles.myImage}
              source={require('../img/img4.jpeg')} />
              </View>
              <View style={styles.smallView}>
              <Image
              style={styles.myImage}
              source={require('../img/img5.jpeg')} />
              </View>
              <View style={styles.smallView}>
              <Image
              style={styles.myImage}
              source={require('../img/img6.jpeg')} />
              </View>
              <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../img/img1.jpeg')} />
                </View>
                <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../img/img2.jpeg')} />
                </View>
                <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../img/img3.jpeg')} />
                </View>
                <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../img/img4.jpeg')} />
                </View>
                <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../img/img5.jpeg')} />
                </View>
                <View style={styles.smallView}>
                <Image
                style={styles.myImage}
                source={require('../img/img6.jpeg')} />
                </View>
                <View style={styles.smallView}>
                  <Image
                  style={styles.myImage}
                  source={require('../img/img1.jpeg')} />
                  </View>
                  <View style={styles.smallView}>
                  <Image
                  style={styles.myImage}
                  source={require('../img/img2.jpeg')} />
                  </View>
                  <View style={styles.smallView}>
                  <Image
                  style={styles.myImage}
                  source={require('../img/img3.jpeg')} />
                  </View>
                  <View style={styles.smallView}>
                  <Image
                  style={styles.myImage}
                  source={require('../img/img4.jpeg')} />
                  </View>
                  <View style={styles.smallView}>
                  <Image
                  style={styles.myImage}
                  source={require('../img/img5.jpeg')} />
                  </View>
                  <View style={styles.smallView}>
                  <Image
                  style={styles.myImage}
                  source={require('../img/img6.jpeg')} />
                  </View>
          <Text>Writehere</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallView: {
    margin: 2,
    height: 100,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  myImage: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
});
