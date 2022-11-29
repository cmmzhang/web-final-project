import {createAsyncThunk} from "@reduxjs/toolkit";
import {userReviewsBook,findAllReviews,findBooksReviewedByUser,findUsersWhoReviewedBook} from "./reviews-service";

export const userReviewsBookThunk = createAsyncThunk(
    'userReviewsBook',
    async (newReview) => {
        console.log("newReview: ", newReview);
        return await userReviewsBook(newReview)
    }
)



export const findAllReviewsThunk = createAsyncThunk(
    'findAllReviews',
    async () => {
        return await findAllReviews()
    }
)

export const findBooksReviewedByUserThunk = createAsyncThunk(
    'findBooksReviewedByUser',
    async (uid) => {
        return await findBooksReviewedByUser(uid)
    }
)

export const findUsersWhoReviewedBookThunk = createAsyncThunk(
    'findUsersWhoReviewedBook',
    async (bid) => {
        return await findUsersWhoReviewedBook(bid)
    }
)