import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Flag from 'react-native-flags';
import countries from './../countries';

class CurrencyConversionRow extends Component {
    render() {
        const styles = StyleSheet.create({
            row: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                height: 48,
                marginBottom: 10,
                width: '100%',
                backgroundColor: '#fafafa'
            }
        }); 

        return (
            <View style={ styles.row }>
                <View style={{ marginLeft: 10 }}>
                    <Flag
                        code={ countries[this.props.currencyCode] }
                        size={32}
                        style={{ alignSelf: 'flex-start' }}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ alignSelf: 'flex-end', textAlignVertical: 'center', fontSize: 14 }}>{ this.props.currencyAmount } { this.props.currencyCode }</Text>
                </View>
                <View style={{ marginLeft: 5, marginRight: 5 }}>
                    <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 14 }}>=</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ alignSelf: 'flex-start', textAlignVertical: 'center', fontSize: 14 }}>{ (Math.round((parseFloat(this.props.currencyAmount) * parseFloat(this.props.currency.rate)) * 100) / 100) } { this.props.currency.code }</Text>
                </View>
                <View style={{ marginRight: 10 }}>
                    <Flag
                        code={ countries[this.props.currency.code] }
                        size={32}
                        style={{ alignSelf: 'flex-end' }}
                    />
                </View>
            </View>
        );
    }
}

export default CurrencyConversionRow;