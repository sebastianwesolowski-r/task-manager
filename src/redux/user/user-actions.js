import UserActionTypes from './user-types';

export const signInStart = userCredentials => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: userCredentials
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const signOutStart = authToken => ({
    type: UserActionTypes.SIGN_OUT_START,
    payload: authToken
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = () => ({
    type: UserActionTypes.SIGN_UP_SUCCESS
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});