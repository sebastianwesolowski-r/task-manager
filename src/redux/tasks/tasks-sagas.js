import {takeLatest, put, all, call} from 'redux-saga/effects';

import TasksActionTypes from './tasks-types';

import {getTasksSuccess, getTasksFailure} from './tasks-actions';

import {getUserTasks} from '../../api/api';

export function* getTasks({payload}) {
    try {
        const userTasks = yield getUserTasks(payload);
        yield put(getTasksSuccess(userTasks));
    } catch (e) {
        yield put(getTasksFailure(e));
    }
};

export function* onGetTasksStart() {
    yield takeLatest(TasksActionTypes.GET_TASKS_START, getTasks);
};

export function* tasksSagas() {
    yield all([call(onGetTasksStart)]);
};