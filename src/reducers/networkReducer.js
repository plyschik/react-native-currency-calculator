import { SET_NETWORK_STATUS } from './../actions/actionTypes';

const networkReducer = (state = true, action) => {
    if (action.type === SET_NETWORK_STATUS) {
        state = action.payload;
    }

    return state;
};

export default networkReducer;