import { SET_CURRENCY_AMOUNT, SET_CURRENCY_CODE, SET_CURRENCY_RATES } from './../actions/actionTypes';

const currencyReducer = (state = {
    amount: '1',
    code: '',
    rates: []
}, action) => {
    switch (action.type) {
        case SET_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.payload
            };
        case SET_CURRENCY_CODE:
            return {
                ...state,
                code: action.payload
            };
        case SET_CURRENCY_RATES:
            var ratesArray = [];
            var keys = Object.keys(action.payload);
            var values = Object.values(action.payload);
            var i = 0;

            for (item in action.payload) {
                ratesArray[i] = {
                    'code': keys[i],
                    'rate': values[i++]
                };
            }

            return {
                ...state,
                rates: ratesArray
            };
        default:
            return state;
    }
};

export default currencyReducer;