import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAuthor, findReviewsByBook} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) =>{return await createReview(review)} 
)
export const findReviewsByBookThunk = createAsyncThunk(
    'findReviewsByMovieThunk',
    async (booksapiID) => findReviewsByBook(booksapiID)

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => findReviewsByAuthor(author)
)