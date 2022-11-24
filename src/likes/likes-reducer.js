import {createSlice} from "@reduxjs/toolkit";

import {
  userLikesBookThunk,
  userUnlikesBookThunk,
  findAllLikesThunk,
  findBooksLikedByUserThunk,
  findUsersWhoLikedBookThunk
} from "./likes-thunks";

const initialState = {
  likes: [
    {_id: 'like123', user: '111', book: '123'},
    {_id: 'like234', user: '111', book: '234'},
    {_id: 'like345', user: '222', book: '123'},
    {_id: 'like456', user: '333', book: '234'},
  ],
  loading: false
}

export const likesReducer = createSlice ({
  name: 'likes',
  initialState,
  extraReducers: {
    [userLikesBookThunk.fulfilled]: (state,action) => {
      state.likes.push(action.payload)
    },
    [userUnlikesBookThunk.fulfilled]: (state, action) => {
      state.likes = state.likes.filter((l) =>
         l.user !== action.payload.uid && l.book !== action.payload.bid
      )
    },
    [findAllLikesThunk.fulfilled]: (state, action) => {
      state.likes = action.payload
    },
    [findBooksLikedByUserThunk.fulfilled]: (state, action) => {
      const uid = state.likes.findIndex(like => like.user === action.payload._id)
      state.likes[uid] = action.payload
    },
    [findUsersWhoLikedBookThunk.fulfilled]: (state, action) => {
      const bid = state.likes.findIndex(like => like.book === action.payload._id)
      state.likes[bid] = action.payload
    }
  }
})

