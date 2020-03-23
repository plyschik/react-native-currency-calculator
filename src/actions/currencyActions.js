import { SET_CURRENCY_AMOUNT, SET_CURRENCY_CODE, SET_CURRENCY_RATES } from './actionTypes';
import { toggleLoading } from './loadingActions';
import currencies from '../currencies';

export const setCurrencyAmount = (amount) => ({
	type: SET_CURRENCY_AMOUNT,
	payload: amount
});

export const setCurrencyCode = (code) => ({
	type: SET_CURRENCY_CODE,
	payload: code
});

export const setCurrencyRates = (rates) => ({
	type: SET_CURRENCY_RATES,
	payload: rates
});

export const fetchApi = (currencyCode) => {
	return (dispatch, getState) => {
		dispatch(toggleLoading());
		dispatch(setCurrencyCode(currencyCode));

		let symbols = currencies
			.map(currency => currency.code)
			.filter(code => code !== getState().currency.code);

		fetch('https://api.exchangeratesapi.io/latest?base=' + getState().currency.code + '&symbols=' + symbols.join(','))
			.then(response => response.json())
			.then(response => {
				dispatch(setCurrencyRates(response.rates));
				dispatch(toggleLoading());
			})
		;
	};
};