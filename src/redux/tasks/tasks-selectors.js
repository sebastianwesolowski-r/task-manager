import {createSelector} from 'reselect';

export const selectTasks = state => state.tasks;

export const selectUserTasks = createSelector(
    [selectTasks],
    tasks => tasks.userTasks
);

export const selectTodayTasks = createSelector(
    [selectUserTasks],
    tasks => tasks.filter(task => new Date(task.deadline).getFullYear() === new Date().getFullYear() && new Date(task.deadline).getMonth() === new Date().getMonth() && new Date(task.deadline).getDate() === new Date().getDate())
);

export const selectError = createSelector(
    [selectTasks],
    tasks => tasks.error
);

export const selectIsProcessing = createSelector(
    [selectTasks],
    tasks => tasks.isProcessing
);

export const selectFetchingProcess = createSelector(
    [selectIsProcessing],
    isProcessing => isProcessing.fetching
);

export const selectAddingProcess = createSelector(
    [selectIsProcessing],
    isProcessing => isProcessing.adding
);

export const selectUpdatingProcess = createSelector(
    [selectIsProcessing],
    isProcessing => isProcessing.updating
);

export const selectDeletingProcess = createSelector(
    [selectIsProcessing],
    isProcessing => isProcessing.deleting
);