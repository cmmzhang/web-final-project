import {findFollowers, findFollowing, followUser} from "./follows-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const followUsersThunk = createAsyncThunk(
    'followUser',
    async(follow) => await followUser(follow)
)

export const findFollowersThunk = createAsyncThunk(
    'findFollowers',
    async(followed) => await findFollowers(followed)
)

export const findFollowingThunk = createAsyncThunk(
    'findFollowing',
    async(follower) => await findFollowing(follower)
)