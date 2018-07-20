/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { QuestionsScreen } from './src/screens/QuestionsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { colors } from './src/Colors';

const RootStack = createBottomTabNavigator({
  Questions: QuestionsScreen,
  Profile: ProfileScreen
},
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return (<Image />);
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);



export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     const user = { title: "Yossi Rizgan", icon: "https://media.licdn.com/dms/image/C4D03AQFIKDRr1Hegew/profile-displayphoto-shrink_200_200/0?e=1534377600&v=beta&t=Vp2c20_6fqQMIsH1aZsVJcCZFrKD5qOUP7RYBKOPBvY" };
//     const question = {
//       title: "Some awesome question about some interesting answers that do not fit in one line",
//       up_vote_count: 4, tags: ["javascript", "react-native"]
//     };
//     return (
//       <View >        
//         <QuestionListItem question={question} />
//         <QuestionListItem question={question} />
//         <QuestionListItem question={question} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
