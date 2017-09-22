import { SET_CURRENCY_AMOUNT, SET_CURRENCY_CODE, SET_CURRENCY_RATES } from './actionTypes';

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
		dispatch(setCurrencyCode(currencyCode));

        fetch('http://api.fixer.io/latest?base=' + getState().currency.code + '&symbols=PLN,EUR,USD,GBP,RUB,CHF,NOK,SEK')
            .then(response => response.json())
            .then(response => {
                dispatch(setCurrencyRates(response.rates));
            })
        ;
	};
};