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
      state.followers = [...state.followers, action.payload.follower]
      console.log("after follow")
      console.log(action.payload)
    },
    [findFollowersThunk.fulfilled]: (state, action) => {
      console.log("find Followers")
      console.log(action.payload)
      state.followers = action.payload
    },
    [findFollowingThunk.fulfilled]: (state, action) => {
      state.following = action.payload
    },
  }
})

export default followsReducer.reducer