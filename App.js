/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, TabNavigator } from 'react-navigation';
import { QuestionsScreen } from './src/screens/QuestionsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { colors } from './src/Colors';

export const RootTabs = createBottomTabNavigator({
  Questions: {
    screen: QuestionsScreen, navigationOptions: ({ navigation }) => {
    }
  },
  Profile: ProfileScreen
},
  {
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      return (<Image style={[
        { width: 25, height: 25 },
      ]}
        source={require('./questions_icon.png')} />);
    }
  }
);

export const RootStack = createStackNavigator({
  Root: {
    screen: RootTabs,
    navigationOptions: ({ navigation }) => ({
      title: 'KinOverflow',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    })
  }
})

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}