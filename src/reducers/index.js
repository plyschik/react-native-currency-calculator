import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import loadingReducer from './loadingReducer';
import networkReducer from './networkReducer';

export default combineReducers({
	currency: currencyReducer,
	loading: loadingReducer,
	network: networkReducer
});