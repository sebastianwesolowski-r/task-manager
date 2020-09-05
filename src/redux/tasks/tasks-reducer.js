import TasksActionTypes from './tasks-types';

import {findTaskAndUpdate, findTaskAndDelete} from './tasks.utils';

const INITIAL_STATE = {
    userTasks: [],
    isProcessing: false,
    error: null
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TasksActionTypes.GET_TASKS_START:
            return {
                ...state
            };
        case TasksActionTypes.GET_TASKS_SUCCESS:
            return {
                ...state,
                userTasks: action.payload,
                error: null
            };
        case TasksActionTypes.GET_TASKS_FAILURE:
            return {
                ...state,
                userTasks: [],
                error: action.payload
            };
        case TasksActionTypes.UPDATE_TASK_SUCCESS:
            return {
                ...state,
                userTasks: findTaskAndUpdate(state.userTasks, action.payload)
            };
        case TasksActionTypes.DELETE_TASK_SUCCESS:
            return {
                ...state,
                userTasks: findTaskAndDelete(state.userTasks, action.payload)
            };
        case TasksActionTypes.ADD_TASK_FAILURE:
        case TasksActionTypes.UPDATE_TASK_FAILURE:
        case TasksActionTypes.DELETE_TASK_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default: return state;
    }
};

export default tasksReducer;