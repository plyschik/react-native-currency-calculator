import { TOGGLE_LOADING } from './../actions/actionTypes';

const loadingReducer = (state = false, action) => {
    if (action.type === TOGGLE_LOADING) {
        state = !state;
    }

    return state;
};

export default loadingReducer;