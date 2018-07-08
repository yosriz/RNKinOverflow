/* @flow */
import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Question } from './models/Question'
import { colors } from './Colors'


type Props = {
    question: Question,
};

export default class QuestionListItem extends PureComponent<Props>{
    props: Props;

    render() {
        const question = this.props.question;
        return (
            <View style={styles.vertical}>
            <View style={styles.vertical}>
                <View style={{width: '10%', alignSelf:'center', alignItems:'center'}}>
                    <Text style={{ color: colors.primary }}>
                        {question.up_vote_count}</Text>
                </View>
                <Text style={{ margin: 5, color: colors.primary, width: '90%' }}>{question.title}</Text>
            </View>
               {/* <View style={styles.horizontal}>
                   <Text>3223</Text>
                   <Text>{question.tags}</Text>
               </View> */}
           </View> 
        );
    }
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'column',
    },
    vertical: {
        flexDirection: 'row',
    },

});
