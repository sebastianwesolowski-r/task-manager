import UserActionTypes from './user-types';

const INITIAL_STATE = {
    userData: null,
    authToken: null,
    isProcessing: false,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                isProcessing: true
            };
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isProcessing: false
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                userData: action.payload.user,
                authToken: action.payload.token,
                isProcessing: false,
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                userData: null,
                authToken: null,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isProcessing: false,
                error: action.payload
            };
        default: return state;
    }
};

export default userReducer;