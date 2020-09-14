import {createSelector} from 'reselect';

export const selectUser = state => state.user;

export const selectUserData = createSelector(
    [selectUser],
    user => user.userData
);

export const selectAuthToken = createSelector(
    [selectUser],
    user => user.authToken
);

export const selectIsProcessing = createSelector(
    [selectUser],
    user => user.isProcessing
);

export const selectErrors = createSelector(
    [selectUser],
    user => user.errors
);

export const selectSignInError = createSelector(
    [selectErrors],
    errors => errors.signIn
);

export const selectSignUpError = createSelector(
    [selectErrors],
    errors => errors.signUp
);

export const selectUpdateUserError = createSelector(
    [selectErrors],
    errors => errors.updateUser
);

export const selectDeleteUserError = createSelector(
    [selectErrors],
    errors => errors.deleteUser
);