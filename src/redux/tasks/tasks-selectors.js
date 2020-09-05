import {createSelector} from 'reselect';

export const selectTasks = state => state.tasks;

export const selectUserTasks = createSelector(
    [selectTasks],
    tasks => tasks.userTasks
);

export const selectTodayTasks = createSelector(
    [selectUserTasks],
    tasks => tasks.filter(task => new Date(task.deadline).getDate() === new Date().getDate())
);