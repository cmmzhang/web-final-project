import {createSlice} from "@reduxjs/toolkit";
import {
    createReviewThunk,
    findReviewsByBookThunk,
    findReviewsByAuthorThunk,
    findAllReviewsThunk,
    deleteReviewThunk
} from "./reviews-thunks";


export const ReviewsReducer = createSlice ({
    name: 'reviews',
    initialState: {
        reviews: []
      },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
            // state.reviews.push(action.payload)
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
        },
        [deleteReviewThunk.fulfilled]:(state,action) => {
            console.log("review status BEFORE", state.reviews)
            console.log("action.payload._id", action.payload._id)
            console.log("action.payload", action.payload)
            
            state.reviews = state.reviews.filter((review) => review._id !== action.payload._id)
            console.log("review status AFTER", state.reviews)
            
        }
    }}
)

export default ReviewsReducer.reducer