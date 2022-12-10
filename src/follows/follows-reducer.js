import {createSlice, current} from "@reduxjs/toolkit";
import {
  findFollowersThunk,
  findFollowingThunk,
  followUsersThunk
} from "./follows-thunk";

const followsReducer = createSlice({
  name: 'follows',
  initialState: {
    following: [],
    followers: [],
    count: 1
  },
  extraReducers: {
    [followUsersThunk.fulfilled]: (state, action) => {
      // console.log(state)
      // console.log(1)
      // console.log(current(state.followers))
      // console.log(state.count)
      // console.log(action.payload)
      // console.log(Array.isArray(state.followers))
      // console.log(Array.isArray(state.following))
      // state.followers.push(action.payload.follower)
      state.followers = [...state.followers, action.payload.follower]
    },
    [findFollowersThunk.fulfilled]: (state, action) => {
      console.log("yeah")
      console.log(action.payload)
      state.followers = action.payload
    },
    [findFollowingThunk.fulfilled]: (state, action) => {
      state.following = action.payload
    },
  }
})

export default followsReducer.reducer