import {createSlice} from "@reduxjs/toolkit";
import {
    createReviewThunk,
    findReviewsByBookThunk,
    findReviewsByAuthorThunk,

} from "./reviews-thunks";

const initialState = {
    reviews: [],
    loading: false
  }
  


export const ReviewsReducer = createSlice ({
    name: 'reviews',
    initialState: initialState,
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
            console.log("action.payload", action.payload)
            console.log("state", state)
            console.log("reviews in reducer", state.reviews)
        },
        [findReviewsByBookThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload}
    }}
)

export default ReviewsReducer.reducer