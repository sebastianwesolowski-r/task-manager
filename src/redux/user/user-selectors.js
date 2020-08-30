import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectUserData = createSelector(
    [selectUser],
    user => user.userData
);

export const selectAuthToken = createSelector(
    [selectUser],
    user => user.authToken
);