import axios from "axios";

// const USERS_URL = 'http://localhost:4000/users'
// const BOOKS_URL = 'http://localhost:4000/books'
// const ALL_REVIEWS_URL = 'http://localhost:4000/reviews'

// export const userReviewsBook = async (newReview) => {
//     console.log("newReview: ", newReview);
//     const response = await axios.post(`${USERS_URL}/${newReview.uid}/reviews/${newReview.bid}`, newReview)
//     console.log("response: ", response);
//     console.log("response.data: ", response.data);
//     return response.data
// }

// export const findAllReviews = async () => {
//     const response = await axios.get(ALL_REVIEWS_URL)
//     return response.data
// }

// export const findBooksReviewedByUser = async (uid) => {
//     const response = await axios.get(`${USERS_URL}/${uid}/reviews`)
//     return response.data
// }

// export const findUsersWhoReviewedBook = async (bid) => {
//     const response = await axios.get(`${BOOKS_URL}/${bid}/reviews`)
//     return response.data
// }


const REVIEW_API = 'http://localhost:4000/api/reviews'
const BOOK_REVIEWS_API = 'http://localhost:4000/api/books'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/api/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.data
}

export const findReviewsByBook = async (booksapiID) => {
    const response = await api.get(`${BOOK_REVIEWS_API}/${booksapiID}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}