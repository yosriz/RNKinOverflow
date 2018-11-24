/* @flow */
import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';
import QuestionListItem from '../QuestionListItem'
import { getQuestions } from '../StackOverflowApi';
import { Question } from '../models/Question';
import { colors } from '../Colors';


export class QuestionsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: null,
    };
  }

  async updateQuestions() {
    const questions = await getQuestions('android');
    console.log(questions);
    this.setState({
      questions: questions.items
    })
  }

  componentDidMount() {
    this.updateQuestions();
  }

  render() {
    const question = {
      title: "Some awesome question about some interesting answers that do not fit in one line",
      up_vote_count: 4, tags: ["javascript", "react-native"]
    };

    if (this.state.questions && this.state.questions.length > 0) {
      return (
        <View >
          <FlatList
            data={this.state.questions}
            renderItem={({ item }) => <QuestionListItem question={item} />}
            ItemSeparatorComponent={(highlighted) => (
              <View style={{ borderBottomColor: colors.primary, borderBottomWidth: 1, marginBottom: 5, marginTop: 5 }} />
            )}
          />
        </View>
      );
    }
    else {
      return (
        <ActivityIndicator size="large" color={colors.primary} style={{ flex: 1, alignSelf: 'center', alignItems: 'center' }} />
      );
    }
  }
}