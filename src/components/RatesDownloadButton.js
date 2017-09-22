import React, { Component } from 'react';
import { Button } from 'react-native';

class RatesDownloadButton extends Component {
    render() {
        return (
            <Button
                title="Pobierz kursy walut"
                onPress={ () => this.props.onRatesDownloadButtonPressed() }
                color="#123456"
                style={{ width: '100%' }}
            />
        );
    }
}

export default RatesDownloadButton;