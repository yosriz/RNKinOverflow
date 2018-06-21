/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UserProfile, { User } from './src/UserProfile';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const user = { title: "Yossi Rizgan", icon: "https://media.licdn.com/dms/image/C4D03AQFIKDRr1Hegew/profile-displayphoto-shrink_200_200/0?e=1534377600&v=beta&t=Vp2c20_6fqQMIsH1aZsVJcCZFrKD5qOUP7RYBKOPBvY" };
    return (
      <View style={styles.container}>
        <UserProfile
          user={user}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
