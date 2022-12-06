import {createAsyncThunk} from "@reduxjs/toolkit";
// import {userReviewsBook,findAllReviews,findBooksReviewedByUser,findUsersWhoReviewedBook} from "./reviews-service";
import {createReview, findReviewsByAuthor, findReviewsByBook} from "./reviews-service";
// export const userReviewsBookThunk = createAsyncThunk(
//     'userReviewsBook',
//     async (newReview) => {
//         console.log("newReview: ", newReview);
//         return await userReviewsBook(newReview)
//     }
// )



// export const findAllReviewsThunk = createAsyncThunk(
//     'findAllReviews',
//     async () => {
//         return await findAllReviews()
//     }
// )

// export const findBooksReviewedByUserThunk = createAsyncThunk(
//     'findBooksReviewedByUser',
//     async (uid) => {
//         return await findBooksReviewedByUser(uid)
//     }
// )

// export const findUsersWhoReviewedBookThunk = createAsyncThunk(
//     'findUsersWhoReviewedBook',
//     async (bid) => {
//         return await findUsersWhoReviewedBook(bid)
//     }
// )

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
export const findReviewsByBookThunk = createAsyncThunk(
    'findReviewsByMovieThunk',
    async (booksapiID) => findReviewsByBook(booksapiID)

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => findReviewsByAuthor(author)
)