import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesBook} from "./likes-service";

export const userLikesBookThunk = createAsyncThunk(
    'userLikesBook',
    async (like) => {
      return await userLikesBook(like.uid, like.bid)
    }
)
