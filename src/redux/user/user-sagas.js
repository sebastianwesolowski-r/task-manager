import {takeLatest, put, all, call} from 'redux-saga/effects';

import UserActionTypes from './user-types';

import {signInSuccess, signInFailure, signOutStart, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure, updateUserSuccess, updateUserFailure, deleteAccountSuccess, deleteAccountFailure} from './user-actions';
import {getTasksStart} from '../tasks/tasks-actions';

import {callCreateUser, callLoginUser, callLogoutUser, callUpdateUser, callDeleteAccount} from '../../api/api';

export function* signIn({payload: {email, password}}) {
    try {
        const userResponse = yield callLoginUser({email, password});
        yield put(getTasksStart(userResponse.data.token));
        yield put(signInSuccess(userResponse.data));
    } catch (e) {
        yield put(signInFailure(e));
    }
};

export function* signOut({payload}) {
    try {
        yield callLogoutUser(payload);
        yield put(signOutSuccess());
    } catch (e) {
        yield put(signOutFailure(e));
    }
};

export function* signUp({payload: {email, password}}) {
    try {
        yield callCreateUser({email, password});
        yield put(signUpSuccess());
    } catch (e) {
        yield put(signUpFailure(e));
    }
};

export function* updateUser({payload: {authToken, updateData}}) {
    try {
        yield callUpdateUser(authToken, updateData);
        yield put(updateUserSuccess());
        yield put(signOutStart(authToken));
    } catch (e) {
        yield put(updateUserFailure(e));
    }
};

export function* deleteAccount({payload}) {
    try {
        yield callDeleteAccount(payload);
        yield put(deleteAccountSuccess());
    } catch (e) {
        yield put(deleteAccountFailure(e));
    }
};

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
};

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
};

export function* onUpdateUserStart() {
    yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUser);
};

export function* onDeleteAccount() {
    yield takeLatest(UserActionTypes.DELETE_ACCOUNT_START, deleteAccount);
}

export function* userSagas() {
    yield all([call(onSignUpStart), call(onSignInStart), call(onSignOutStart), call(onUpdateUserStart), call(onDeleteAccount)]);
};