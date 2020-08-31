import {combineReducers} from 'redux';

import userReducer from './user/user-reducer';
import tasksReducer from './tasks/tasks-reducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reduxPersistConfig = {
    key: 'root',
    storage,
    whiteList: ['user']
};

const rootReducer = combineReducers({
    user: userReducer,
    tasks: tasksReducer
});

export default persistReducer(reduxPersistConfig, rootReducer);