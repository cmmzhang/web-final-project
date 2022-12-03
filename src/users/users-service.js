import axios from "axios";

const BASE_URL = 'http://localhost:4000'
const USER_API_URL = 'http://localhost:4000/users'

export const findUserById = async (uid) => {
    const response = await axios.get(`${USER_API_URL}/${uid}`)
    const user = response.data
    return user
}

export const createUser = async () => {

}

export const findAllUsers = async () => {
    const response = await axios.get('http://localhost:4000/users')
    const users = response.data
    return users
}


export const register = async (user) => {
    const response = await axios.post(`${BASE_URL}/register`, user);
    return response.data
}

export const login = async (user) => {
    const response = await axios.post(`${BASE_URL}/login`, user);
    return response.data
}

export const profile = async () => {
    const response = await axios.post(`${BASE_URL}/profile`);
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data
}
export const deleteUser = async (uid) => { }
export const updateUser = async (uid, userUpdates) => {

}