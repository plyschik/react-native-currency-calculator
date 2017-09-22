import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CurrencyCalculatorScreen extends Component {
    static navigationOptions = {
        title: 'Kalkulator'
    };

    render() {
        return (
            <View>
                <Text>CurrencyCalculatorScreen</Text>
            </View>
        );
    }
}

export default CurrencyCalculatorScreen;