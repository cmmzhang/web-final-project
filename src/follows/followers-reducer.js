import {createSlice} from "@reduxjs/toolkit";
import {findFollowersThunk, followUsersThunk} from "./follows-thunks"

const followsReducer = createSlice({
    name: 'follows',
    initialState: {
        following: [],
        followers: []
    },
    extraReducers: {
        [followUsersThunk.fulfilled]: (state, action) => {
            state.followers.push(action.payload)
        },
        [findFollowersThunk.fulfilled]: (state, action) => {
            state.followers = action.payload
        },
        [findFollowingThunk.fulfilled]: (state, action) => {
            state.following = action.payload
        },
    }
})

export default followsReducer.reducer