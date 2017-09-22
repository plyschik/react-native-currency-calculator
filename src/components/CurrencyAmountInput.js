import React, { Component } from 'react';
import { TextInput } from 'react-native';

class CurrencyAmountInput extends Component {
    render() {
        return (
            <TextInput
                keyboardType="numeric"
                onChangeText={ (text) => this.props.onChangeTextCurrencyAmount(text) }
                onEndEditing={ () => this.props.onCurrencyAmountEndEditing() }
                value={ this.props.currencyAmount }
                style={{ textAlign: 'center' }}
            />
        );
    }
}

export default CurrencyAmountInput;