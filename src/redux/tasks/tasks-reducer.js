import TasksActionTypes from './tasks-types';

import {findTaskAndUpdate, findTaskAndDelete} from './tasks.utils';

const INITIAL_STATE = {
    userTasks: [],
    isProcessing: {
        fetching: false,
        adding: false,
        updating: false,
        deleting: false
    },
    error: null
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TasksActionTypes.GET_TASKS_START:
            return {
                ...state,
                isProcessing: {...state.isProcessing, fetching: true}
            };
        case TasksActionTypes.GET_TASKS_SUCCESS:
            return {
                ...state,
                userTasks: action.payload,
                isProcessing: INITIAL_STATE.isProcessing,
                error: null
            };
        case TasksActionTypes.UPDATE_TASK_START:
            return {
                ...state,
                isProcessing: {...state.isProcessing, updating: true}
            }
        case TasksActionTypes.UPDATE_TASK_SUCCESS:
            return {
                ...state,
                userTasks: findTaskAndUpdate(state.userTasks, action.payload),
                isProcessing: INITIAL_STATE.isProcessing
            };
        case TasksActionTypes.ADD_TASK_START:
            return {
                ...state,
                isProcessing: {...state.isProcessing, adding: true}
            };
        case TasksActionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                isProcessing: INITIAL_STATE.isProcessing
            }
        case TasksActionTypes.DELETE_TASK_START:
            return {
                ...state,
                isProcessing: INITIAL_STATE.isProcessing
            }
        case TasksActionTypes.DELETE_TASK_SUCCESS:
            return {
                ...state,
                userTasks: findTaskAndDelete(state.userTasks, action.payload),
                isProcessing: INITIAL_STATE.isProcessing
            };
        case TasksActionTypes.ADD_TASK_FAILURE:
        case TasksActionTypes.GET_TASKS_FAILURE:
        case TasksActionTypes.UPDATE_TASK_FAILURE:
        case TasksActionTypes.DELETE_TASK_FAILURE:
            return {
                ...state,
                isProcessing: INITIAL_STATE.isProcessing,
                error: action.payload
            };
        default: return state;
    }
};

export default tasksReducer;