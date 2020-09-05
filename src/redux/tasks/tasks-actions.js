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

export const addTaskStart = (authToken, taskData) => ({
    type: TasksActionTypes.ADD_TASK_START,
    payload: {authToken, taskData}
});

export const addTaskSuccess = () => ({
    type: TasksActionTypes.ADD_TASK_SUCCESS
});

export const addTaskFailure = error => ({
    type: TasksActionTypes.ADD_TASK_FAILURE,
    payload: error
});

export const updateTaskStart = (authToken, taskId, updateData) => ({
    type: TasksActionTypes.UPDATE_TASK_START,
    payload: {authToken, taskId, updateData}
});

export const updateTaskSuccess = task => ({
    type: TasksActionTypes.UPDATE_TASK_SUCCESS,
    payload: task
});

export const updateTaskFailure = error => ({
    type: TasksActionTypes.UPDATE_TASK_FAILURE,
    payload: error
});

export const deleteTaskStart = (authToken, taskId) => ({
    type: TasksActionTypes.DELETE_TASK_START,
    payload: {authToken, taskId}
});

export const deleteTaskSuccess = task => ({
    type: TasksActionTypes.DELETE_TASK_SUCCESS,
    payload: task
});

export const deleteTaskFailure = error => ({
    type: TasksActionTypes.DELETE_TASK_FAILURE,
    payload: error
});