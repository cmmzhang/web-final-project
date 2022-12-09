import {createSlice} from "@reduxjs/toolkit";
import {
    createReviewThunk,
    findReviewsByBookThunk,
    findReviewsByAuthorThunk,
    findAllReviewsThunk,

} from "./reviews-thunks";


export const ReviewsReducer = createSlice ({
    name: 'reviews',
    initialState: {
        reviews: []
      },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
        },
        [findReviewsByBookThunk.fulfilled]: (state, action) => {
            // console.log("findReviewsByBookThunk action.payload", action.payload)
            state.reviews = action.payload
            // console.log("findReviewsByBookThunk reviews in reducer", state.reviews)
        },
        [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findAllReviewsThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        }
    }}
)

export default ReviewsReducer.reducer