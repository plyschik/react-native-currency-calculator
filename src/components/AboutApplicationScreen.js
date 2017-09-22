import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AboutApplicationScreen extends Component {
    static navigationOptions = {
        title: 'O aplikacji'
    };

    render() {
        return (
            <View>
                <Text>AboutApplicationScreen</Text>
            </View>
        );
    }
}

export default AboutApplicationScreen;