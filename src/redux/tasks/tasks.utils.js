import { deleteTaskFailure } from "./tasks-actions";

export const findTaskAndUpdate = (tasks, updatedTask) => {
    const taskToUpdate = tasks.findIndex(task => task._id === updatedTask._id);
    tasks[taskToUpdate] = updatedTask;
    return [...tasks];
};

export const findTaskAndDelete = (tasks, deletedTask) => {
    const taskToDelete = tasks.findIndex(task => task._id === deletedTask._id);
    tasks[taskToDelete] = taskToDelete;
    return [...tasks];
}