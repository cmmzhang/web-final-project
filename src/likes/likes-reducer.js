import {createSlice} from "@reduxjs/toolkit";

import {
  userLikesBookThunk,
  userUnlikesBookThunk,
  findAllLikesThunk,
  findBooksLikedByUserThunk,
  findUsersWhoLikedBookThunk
} from "./likes-thunks";

const initialState = {
  likes: [],
  loading: false
}

const likesReducer = createSlice ({
  name: 'likes',
  initialState,
  extraReducers: {
    [userLikesBookThunk.fulfilled]: (state,action) => {
      state.likes.push(action.payload)
    },
    [userUnlikesBookThunk.fulfilled]: (state, action) => {
      state.likes = state.likes.filter((like) =>
         like.user === action.payload.uid && like.book !== action.payload.bid
      )
    },
    [findAllLikesThunk.fulfilled]: (state, action) => {
      state.likes = action.payload
    },
    [findBooksLikedByUserThunk.fulfilled]: (state, action) => {
      const uid = state.likes.findIndex(like => like.user === action.payload.uid)
      state.likes[uid] = action.payload
    },
    [findUsersWhoLikedBookThunk.fulfilled]: (state, action) => {
/*      const bid = state.likes.findIndex(like => like.book === action.payload.bid)
      state.likes[bid] = action.payload*/
      state.likes = action.payload
    }
  }
})

export default likesReducer.reducer