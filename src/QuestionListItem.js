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
            <View>
                <View style={styles.horizontal}>
                    <View style={{ width: '15%', alignSelf: 'center', alignItems: 'center' }}>
                        <View style={{
                            borderWidth: 1,
                            borderColor: '#adadad',
                            borderRadius: 3,
                            width: '60%'
                        }}>
                            <Text style={{ textAlign: 'center' }}>
                                {question.up_vote_count}</Text>
                        </View>
                    </View>
                    <Text style={{ marginLeft: 5, marginBottom: 2, marginTop: 2, color: colors.primary, width: '85%' }}>{question.title}</Text>
                </View>
                <View style={[styles.horizontal, { marginTop: 2 }]}>
                    <View style={{ width: '15%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: colors.primary, marginRight: 4 }}>
                            323</Text>
                        <Image style={{ width: 12, height: 12 }}
                            source={require('../kin-icon.png')} />
                    </View>
                    <Text style={{ marginLeft: 5, color: "#adadad", width: '85%', alignSelf: 'center' }}>
                        {question.tags.reduce((prevVal, currVal, index, array) => {
                            return prevVal + ', ' + currVal
                        })}
                    </Text>
                    <Text style={{ marginRight: 5, color: "#adadad" }}>
                        22 Hours Ago
                    </Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
    },

});
