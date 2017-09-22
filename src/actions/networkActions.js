import { SET_NETWORK_STATUS } from './actionTypes';

export const setNetworkStatus = (status) => ({
    type: SET_NETWORK_STATUS,
    payload: status
});