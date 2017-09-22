import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrencyAmount, setCurrencyCode, fetchApi } from './../actions/currencyActions';
import { setNetworkStatus } from './../actions/networkActions';
import { NetInfo, Dimensions, StyleSheet, StatusBar, Alert, ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import CurrencyAmountInput from '../components/CurrencyAmountInput';
import CurrencyCodePicker from '../components/CurrencyCodePicker';
import RatesDownloadButton from '../components/RatesDownloadButton';
import CurrencyConversionRow from '../components/CurrencyConversionRow';
import currencies from './../currencies';

class CurrencyCalculatorScreen extends Component {
    static navigationOptions = {
        title: 'Kalkulator'
    };

    constructor(props) {
        super(props);

        this.state = {
            currencyAmount: '1',
            currencyCode: 'PLN'
        };

        this.onChangeTextCurrencyAmount = this.onChangeTextCurrencyAmount.bind(this);
        this.onCurrencyAmountEndEditing = this.onCurrencyAmountEndEditing.bind(this);
        this.onValueChangeCurrencyCode = this.onValueChangeCurrencyCode.bind(this);
        this.onRatesDownloadButtonPressed = this.onRatesDownloadButtonPressed.bind(this);
    }

    componentWillMount() {
        NetInfo.isConnected.fetch().then((isConnected) => this.props.setNetworkStatus(isConnected));
        NetInfo.isConnected.addEventListener('connectionChange', (isConnected) => {
            this.props.setNetworkStatus(isConnected);
        });
    }

    onChangeTextCurrencyAmount(text) {
        this.setState({
            currencyAmount: text
        });
    }

    onCurrencyAmountEndEditing() {
        var regex = new RegExp('^[0-9]{1,5}((\.){1}([0][0-9]{1}|[1-9][0-9]?))?$');
        
        if (regex.test(this.state.currencyAmount) && this.state.currencyAmount > 0) {
            this.props.setCurrencyAmount(this.state.currencyAmount);
        } else {
            this.setState({
                currencyAmount: this.props.currencyAmount
            });

            Alert.alert(
                'Błąd!',
                'Niepoprawny format zapisu ilości waluty.\n\nObsługiwany zakres: 0.01 do 99999.99.\n\nPamiętaj o stosowaniu kropek zamiast przecinków.'
            );
        }
    }

    onValueChangeCurrencyCode(currencyCode) {
        this.setState({
            currencyCode: currencyCode
        });
    }

    onRatesDownloadButtonPressed() {
        if (this.state.currencyCode === this.props.currencyCode) {
            Alert.alert(
                'Błąd!',
                'Kursy dla wybranej waluty zostały już pobrane.'
            );
        } else {
            if (this.props.network) {
                this.props.fetchApi(this.state.currencyCode);
            } else {
                Alert.alert(
                    'Błąd!',
                    'Do pobrania kursów walut potrzebne jest połączenie z Internetem.'
                );
            }
        }
    }

    render() {
        let width = Dimensions.get('window').width;

        const styles1 = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10
            },
            item: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                height: 48,
                marginTop: 10,
                width: (width - 20),
                backgroundColor: '#fafafa'
            },
            ratesDownloadButton: {
                width: (width - 20),
                marginTop: 10
            }
        });

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10
            },
            row: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
                width: '100%'
            },
            button: {
                width: '100%',
                marginBottom: 10
            }
        });

        return (
            <View>
                <StatusBar
                    backgroundColor="#123456"
                />
                <ScrollView>
                    <View style={ styles.container }>
                        <View style={[ styles.row, { height: 48, backgroundColor: '#fafafa' } ]}>
                            <View style={{ width: '50%' }}>
                                <CurrencyAmountInput
                                    currencyAmount={ this.state.currencyAmount }
                                    onChangeTextCurrencyAmount={ this.onChangeTextCurrencyAmount }
                                    onCurrencyAmountEndEditing={ this.onCurrencyAmountEndEditing }
                                />
                            </View>
                            <View style={{ width: '50%' }}>
                                <CurrencyCodePicker
                                    currencyCode={ this.state.currencyCode }
                                    onValueChangeCurrencyCode={ this.onValueChangeCurrencyCode }
                                />
                            </View>
                        </View>
                        <View style={ styles.button }>
                            <RatesDownloadButton
                                onRatesDownloadButtonPressed={ this.onRatesDownloadButtonPressed }
                            />
                        </View>
                        { this.props.currencyRates.map((currency, index) => (
                            <CurrencyConversionRow
                                key={ index }
                                currencyAmount={ this.props.currencyAmount }
                                currencyCode={ this.props.currencyCode }
                                currency={ currency }
                            />
                        )) }
                    </View>
                    <View style={{ flex: 1 }}>
                        <Spinner visible={ this.props.loading } textContent={ "Pobieranie danych o kursach walut..." } textStyle={{ color: '#fff' }} overlayColor="rgb(18, 52, 86)" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    network: state.network,
    currencyAmount: state.currency.amount,
    currencyCode: state.currency.code,
    currencyRates: state.currency.rates
});

const mapDispatchToProps = (dispatch) => ({
    setNetworkStatus: (networkStatus) => {
        dispatch(setNetworkStatus(networkStatus));
    },
    setCurrencyAmount: (currencyAmount) => {
        dispatch(setCurrencyAmount(currencyAmount));
    },
    fetchApi: (currencyCode) => {
        dispatch(fetchApi(currencyCode));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCalculatorScreen);