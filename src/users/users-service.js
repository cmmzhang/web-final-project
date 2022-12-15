import axios from "axios";
const api = axios.create({withCredentials: true});
const BASE_URL = 'http://localhost:4000'
const USER_API_URL = 'http://localhost:4000/users'

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_API_URL}/${uid}`)
    const user = response.data
    return user
}

export const createUser = async () => {

}

export const findAllUsers = async () => {
    const response = await api.get('http://localhost:4000/users')
    const users = response.data
    return users
}

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/register`, user);
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/login`, user);
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_URL}/profile`);
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_URL}/logout`);
    console.log(response)
    return response.data
}
export const deleteUser = async (uid) => { }

export const updateUser = async (data) => {
    console.log("hihi service")
    const uid = data.uid
    const userUpdates = data.newUser
    console.log(userUpdates)
    console.log(uid)
    const response = await api.put(`${USER_API_URL}/${uid}`, userUpdates);
    console.log(response)
    return response.data
}