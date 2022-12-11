import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAuthor, findReviewsByBook, findAllReviews,deleteReview} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) =>{return await createReview(review)} 
)
export const findReviewsByBookThunk = createAsyncThunk(
    'findReviewsByBookThunk',
    async (booksapiID) => {return await findReviewsByBook(booksapiID)}

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => {return await findReviewsByAuthor(author)} 
)
export const findAllReviewsThunk = createAsyncThunk(
    'findAllReviewsThunk',
    async () => {return await findAllReviews()} 
)
export const deleteReviewThunk = createAsyncThunk(
    'deleteReview',
    async ({review}) => {
        // console.log("delete review thunk invoke")
        // console.log({review})
        // console.log("review._id",review._id)
        return await deleteReview(review._id,review.author._id)
    }
)