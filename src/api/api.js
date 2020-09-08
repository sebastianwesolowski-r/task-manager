import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const callCreateUser = userCredentials => api.post('/user', userCredentials);

export const callLoginUser = userCredentials => api.post('user/login', userCredentials);

export const callUpdateUser = (token, updateData) => api.patch('/user/me', updateData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const callLogoutUser = token => api.post('user/logout', {}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const callDeleteAccount = token => api.delete('/user/me', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const callGetUserTasks = token => api.get('/tasks', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const callAddTask = (token, taskData) => api.post('/tasks', taskData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const callUpdateTask = (token, taskId, updateData) => api.patch(`/tasks/${taskId}`, updateData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const callDeleteTask = (token, taskId) => api.delete(`/tasks/${taskId}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});