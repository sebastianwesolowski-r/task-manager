import TasksActionTypes from './tasks-types';

export const getTasksStart = authToken => ({
    type: TasksActionTypes.GET_TASKS_START,
    payload: authToken
});

export const getTasksSuccess = tasks => ({
    type: TasksActionTypes.GET_TASKS_SUCCESS,
    payload: tasks
});

export const getTasksFailure = error => ({
    type: TasksActionTypes.GET_TASKS_FAILURE,
    payload: error
});