import axios from "axios";
const api = axios.create({withCredentials: true});
const USER_API_URL = 'http://localhost:4000/users';
const BASE_API_URL = 'http://localhost:4000';


export const createUser = async () => {

}

export const findAllUsers = async () => {
    const response = await api.get('http://localhost:4000/users')
    const users = response.data
    return users
}


export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user);
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API_URL}/login`, user);
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_API_URL}/profile`);
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`);
    return response.data
}
export const deleteUser = async (uid) => { }
export const updateUser = async (uid, userUpdates) => {

}