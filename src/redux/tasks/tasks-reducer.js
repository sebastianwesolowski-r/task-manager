import TasksActionTypes from './tasks-types';

const INITIAL_STATE = {
    tasks: [],
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
                tasks: action.payload,
                error: null
            }
        case TasksActionTypes.GET_TASKS_FAILURE:
            return {
                tasks: [],
                error: action.payload
            }
        default: return state;
    }
};

export default tasksReducer;