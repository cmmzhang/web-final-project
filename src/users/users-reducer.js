import { createSlice, current } from "@reduxjs/toolkit";
import {findUserByIdThunk, findAllUsersThunk, loginThunk, logoutThunk, profileThunk, registerThunk, findMyInfoThunk} from "./users-thunk";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        currentUser: null,
        error: null,
        publicProfile: null
    },
    reducers: {
    },
    extraReducers: {
        [findMyInfoThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        // [editProfileThunk.fulfilled]: (state, action) => {
        //     state.currentUser = action.payload
        // },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        }
    }
})

export default usersReducer.reducer