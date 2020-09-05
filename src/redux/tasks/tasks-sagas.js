import {takeLatest, put, all, call} from 'redux-saga/effects';

import TasksActionTypes from './tasks-types';

import {getTasksStart, getTasksSuccess, getTasksFailure, addTaskSuccess, addTaskFailure, updateTaskSuccess, updateTaskFailure, deleteTaskSuccess, deleteTaskFailure} from './tasks-actions';

import {callGetUserTasks, callAddTask, callUpdateTask, callDeleteTask} from '../../api/api';

export function* getTasks({payload}) {
    try {
        const userTasks = yield callGetUserTasks(payload);
        yield put(getTasksSuccess(userTasks.data));
    } catch (e) {
        yield put(getTasksFailure(e));
    }
};

export function* addTask({payload: {authToken, taskData}}) {
    try {
        yield callAddTask(authToken, taskData);
        yield put(addTaskSuccess());
        yield put(getTasksStart(authToken));
    } catch (e) {
        yield put(addTaskFailure(e));
    }
};

export function* updateTask({payload: {authToken, taskId, updateData}}) {
    try {
        const updatedTask = yield callUpdateTask(authToken, taskId, updateData);
        yield put(updateTaskSuccess(updatedTask.data));
    } catch (e) {
        yield put(updateTaskFailure(e));
    }
};

export function* deleteTask({payload: {authToken, taskId}}) {
    try {
        const deletedTask = yield callDeleteTask(authToken, taskId);
        yield put(deleteTaskSuccess(deletedTask.data));
    } catch (e) {
        yield put(deleteTaskFailure(e));
    }
};

export function* onGetTasksStart() {
    yield takeLatest(TasksActionTypes.GET_TASKS_START, getTasks);
};

export function* onAddTaskStart() {
    yield takeLatest(TasksActionTypes.ADD_TASK_START, addTask);
};

export function* onTaskUpdateStart() {
    yield takeLatest(TasksActionTypes.UPDATE_TASK_START, updateTask);
};

export function* onTaskDeleteStart() {
    yield takeLatest(TasksActionTypes.DELETE_TASK_START, deleteTask);
};

export function* tasksSagas() {
    yield all([call(onGetTasksStart), call(onAddTaskStart), call(onTaskUpdateStart), call(onTaskDeleteStart)]);
};