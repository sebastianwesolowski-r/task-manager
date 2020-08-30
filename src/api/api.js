import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const createUser = userCredentials => api.post('/user', userCredentials);
export const loginUser = userCredentials => api.post('user/login', userCredentials);
export const logoutUser = token => api.post('user/logout', {}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});