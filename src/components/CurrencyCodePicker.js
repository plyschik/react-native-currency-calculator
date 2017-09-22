import React, { Component } from 'react';
import { Picker } from 'react-native';
import currencies from './../currencies';

class CurrencyCodePicker extends Component {
    render() {
        return (
            <Picker
                selectedValue={ this.props.currencyCode }
                onValueChange={ (value) => { this.props.onValueChangeCurrencyCode(value) } }
            >
                { currencies.map((currency, index) => (
                    <Picker.Item
                        key={ index }
                        label={ `(${currency.code}) ${currency.name}` }
                        value={ currency.code }
                    />
                )) }
            </Picker>
        );
    }
}

export default CurrencyCodePicker;