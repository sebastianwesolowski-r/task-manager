import UserActionTypes from './user-types';

const INITIAL_STATE = {
    userData: null,
    authToken: null,
    isProcessing: false,
    errors: {
        signIn: null,
        signUp: null,
        updateUser: null,
        deleteUser: null
    }
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
                isProcessing: false,
                errors: INITIAL_STATE.errors
            };
        case UserActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                errors: INITIAL_STATE.errors
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                userData: action.payload.user,
                authToken: action.payload.token,
                isProcessing: false,
                errors: INITIAL_STATE.errors
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                userData: null,
                authToken: null
            };
        case UserActionTypes.DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                userData: null,
                authToken: null,
                errors: INITIAL_STATE.errors
            };
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                isProcessing: false,
                errors: {...state.errors, signIn: action.payload}
            };
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isProcessing: false,
                errors: {...state.errors, signUp: action.payload}
            };
        case UserActionTypes.UPDATE_USER_FAILURE:
            return {
                ...state,
                errors: {...state.errors, updateUser: action.payload}
            };
        case UserActionTypes.DELETE_ACCOUNT_FAILURE:
            return {
                ...state,
                errors: {...state.errors, deleteUser: action.payload}
            };
        default: return state;
    }
};

export default userReducer;