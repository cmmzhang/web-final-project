import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesBook,userUnlikesBook, findAllLikes,findBooksLikedByUser,findUsersWhoLikedBook} from "./likes-service";

export const userLikesBookThunk = createAsyncThunk(
    'userLikesBook',
    async (like) => {
      return await userLikesBook(like.uid, like.bid)
    }
)

export const userUnlikesBookThunk = createAsyncThunk(
    'userUnlikesBook',
    async (like) => {
      return await userUnlikesBook(like.uid, like.bid)
    }
)

export const findAllLikesThunk = createAsyncThunk(
    'findAllLikes',
    async () => {
      return await findAllLikes()
    }
)

export const findBooksLikedByUserThunk = createAsyncThunk(
    'findBooksLikedByUser',
    async (uid) => {
      return await findBooksLikedByUser(uid)
    }
)

export const findUsersWhoLikedBookThunk = createAsyncThunk(
    'findUsersWhoLikedBook',
    async (bid) => {
      return await findUsersWhoLikedBook(bid)
    }
)


