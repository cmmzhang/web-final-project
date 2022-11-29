import {createSlice} from "@reduxjs/toolkit";

import {
    userReviewsBookThunk,
    findAllReviewsThunk,
    findBooksReviewedByUserThunk,
    findUsersWhoReviewedBookThunk
} from "./reviews-thunks";

const initialState = {
    reviews: [],
    loading: true
}

export const ReviewsReducer = createSlice ({
    name: 'reviews',
    initialState:initialState,
    extraReducers: {
        [userReviewsBookThunk.fulfilled]: (state,action) => {
            console.log("state", state)
            console.log("action.payload: ", action.payload)
            state.reviews = action.payload
        },

        [findAllReviewsThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        
        [findBooksReviewedByUserThunk.fulfilled]: (state, action) => {
            const uid = state.reviews.findIndex(review => review.user === action.payload._id)
            state.reviews[uid] = action.payload
        },
        [findUsersWhoReviewedBookThunk.fulfilled]: (state, action) => {
            const bid = state.reviews.findIndex(review => review.book === action.payload._id)
            state.reviews[bid] = action.payload
        }
    }
})

export default ReviewsReducer.reducer;