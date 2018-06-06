/* @flow */
import React, { Component } from 'react';

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

        const { user } = this.props;
        <View>
            <Image
                source={user.icon}
            />
            <Text >{user.title}</Text>
        </View>
    }

}
