import {createSlice} from "@reduxjs/toolkit";

import {
    userReviewsBookThunk,
    findAllReviewsThunk,
    findBooksReviewedByUserThunk,
    findUsersWhoReviewedBookThunk
} from "./reviews-thunks";

const initialState = {
    reviews: [
        {_id: 'review123', user: '111', book: '123'},
        {_id: 'review234', user: '111', book: '234'},
        {_id: 'review345', user: '222', book: '123'},
        {_id: 'review456', user: '333', book: '234'},
    ],
    loading: false
}

export const ReviewsReducer = createSlice ({
    name: 'reviews',
    initialState,
    extraReducers: {
        [userReviewsBookThunk.fulfilled]: (state,action) => {
            state.reviews.push(action.payload)
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