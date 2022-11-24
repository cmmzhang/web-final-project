import {createSlice} from "@reduxjs/toolkit";
import {userLikesBookThunk} from "./likes-thunks";

const initialState = {
  likes: [],
  loading: false
}

<<<<<<< HEAD
export const likesReducer = createSlice({
  name: 'likes',
  initialState,
  extraReducers: {
    [userLikesBookThunk().fulfilled]: (state, action) => {
      state.likes.push(action.payload)
    }
  }
})
=======
export const likesReducer = createSlice ({
  name: 'likes',
  initialState,
  extraReducers: {
    [userLikesBookThunk.fulfilled]: (state, action) => {
      state.likes.push(action.payload)
    }
  }
})
>>>>>>> origin/master
