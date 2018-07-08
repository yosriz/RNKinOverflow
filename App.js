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
import QuestionListItem from './src/QuestionListItem';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const user = { title: "Yossi Rizgan", icon: "https://media.licdn.com/dms/image/C4D03AQFIKDRr1Hegew/profile-displayphoto-shrink_200_200/0?e=1534377600&v=beta&t=Vp2c20_6fqQMIsH1aZsVJcCZFrKD5qOUP7RYBKOPBvY" };
    const question = {
      title: "Some awesome question about some interesting answers that do not fit in one line",
      up_vote_count: 4, tags: ["javascript", "react-native"]
    };
    return (
      <View >
        <UserProfile user={user} />
        <QuestionListItem question={question} />
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
