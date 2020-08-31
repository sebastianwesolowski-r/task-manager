import {all, call} from 'redux-saga/effects';

import {userSagas} from './user/user-sagas';
import {tasksSagas} from './tasks/tasks-sagas';

export default function* rootSaga() {
    yield all([call(userSagas), call(tasksSagas)]);
};