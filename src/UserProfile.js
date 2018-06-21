/* @flow */
import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export type User = {
    id: string,
    title: string,
    icon: string,
    goldBadges: number,
    silverBadges: number,
    bronzeBadges: number,
    publicAddress: string,
};
type Props = {
    user: User,
};

export default class UserProfile extends PureComponent<Props>{
    props: Props;

    render() {
        const { user } = this.props.user;
        return (
            <View>
                <Text >{this.props.user.title}</Text>
                {<Image
                    style={[                        
                        { width: 300, height: 200, marginTop: 10 },
                    ]}
                    source={{ uri: this.props.user.icon }}
                />}
            </View>
        );
    }
}
