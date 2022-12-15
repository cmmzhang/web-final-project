import { findUserById, findAllUsers, register, login, logout, profile, updateUser } from "./users-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await findUserById(uid)
)

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const editProfileThunk = createAsyncThunk(
    'editprofile',
    async (data) => {
        console.log(data)
        console.log(data.newUser)
        const res = await updateUser(data)
    }
)


export const findMyInfoThunk = createAsyncThunk(
    'findmyinfo',
    async (uid) =>
        await findUserById(uid)

)